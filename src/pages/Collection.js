
import React from 'react'
import Page from '../components/Page';
import DB from '../db';
import Card from '../components/Card';
import { IonButton, IonIcon, IonActionSheet, IonFab, IonFabButton } from '@ionic/react';
import { ellipsisHorizontal, add } from 'ionicons/icons';

class Collection extends React.Component {

  state = {
    collection: null,
    cards: [],
    modalOpen: false,
    actionOpen: false
  }

  componentDidMount() {
    // get collection
    DB.listenToOne('collections',this.props.match.params.id, collection => {
      this.setState({collection})
    })
    // get cards
    const collectionId = this.props.match.params.id;
    DB.db.collection('cards').where('collectionId','==',collectionId).onSnapshot( querySnapshot => {
      let docs = [];
      querySnapshot.forEach(function(doc) {
        docs.push({id: doc.id, ...doc.data()});
      });
      this.setState({cards: docs});
    });
  
  }

  renderAddButton() {
    return (
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/add">
          <IonIcon color="light" icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    )
  }

  renderActionSheet() {
    return (
      <IonActionSheet
        isOpen={this.state.actionOpen}
        onDidDismiss={() => this.setState({actionOpen: false})}
        buttons={[
          {
            text: '\xa0 Edit Collection',
            handler: () => {
              const name = window.prompt('Enter new name',this.state.collection.name);
              if(name && name.length == 0) alert('name too short');
              else if(name) DB.db.collection('collections').doc(this.props.match.params.id).update({name});
            }
          }, 
          {
            text: '\xa0 Delete Collection',
            role: 'destructive',
            handler: () => {
              if(!window.confirm('Delete entire collection? This will remove all cards in this collection, too.')) return;
              // db.get('tables').remove({id: this.props.match.params.id}).write();
              
              this.state.cards.forEach(card => {
                console.log('deleting card',card.id);
                DB.db.collection('cards').doc(card.id).delete();
              });
              DB.db.collection('collections').doc(this.props.match.params.id).delete().then(() => {
                this.props.history.goBack();
              });
              
            }
          }, 
            {
          text: '\xa0 Cancel',
          role: 'cancel'
        }]}
      >
      </IonActionSheet>
    )
  }

  render() {
    if(!this.state.collection) return <Page title="Collection" large />
    return (
      <Page title={this.state.collection.name} large renderButtonsRight={() => 
        <IonButton onClick={() => this.setState({actionOpen: true})}>
          <IonIcon icon={ellipsisHorizontal}/>
        </IonButton>
      }>
        {this.state.cards.map(c => <Card history={this.props.history} key={c.id} card={c} renderDots/>)}
        {this.renderActionSheet()}
        {this.renderAddButton()}
      </Page>
    );
  }
}

export default Collection



