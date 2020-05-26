import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonList, IonItem } from '@ionic/react';
import Page from '../components/Page';
import DocsList from '../components/DocsList';
import { add } from 'ionicons/icons';
import DB from '../db';
import firebase from 'firebase';

class Collections extends React.Component {

  state = {collections: []}
  componentDidMount() {
    DB.listenToUser(user => {
      DB.listenToAllWhere('collections','uid','==',user.uid,collections => {
        this.setState({collections});
        if(collections.length == 0) {
          DB.db.collection('collections').add({
            name: 'Random',
            uid: user.uid
          })
        }
      })
    })
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

  render() {
    return (
      <Page title="Collections" large 
        renderDirectChildren={this.renderAddButton.bind(this)}
      >
        <IonList>
          {this.state.collections.map(c => 
            <IonItem key={c.id} routerLink={'/collections/'+c.id}>
              <b>{c.name}</b>
            </IonItem>
          )}
        </IonList>
        <IonList>
          {this.state.collections.map(c => 
            <IonItem key={c.id} routerLink={'/collections/'+c.id}>
              <b>{c.name}</b>
            </IonItem>
          )}
        </IonList>
        <IonList>
          {this.state.collections.map(c => 
            <IonItem key={c.id} routerLink={'/collections/'+c.id}>
              <b>{c.name}</b>
            </IonItem>
          )}
        </IonList>
        <IonList>
          {this.state.collections.map(c => 
            <IonItem key={c.id} routerLink={'/collections/'+c.id}>
              <b>{c.name}</b>
            </IonItem>
          )}
        </IonList>
        <IonList>
          {this.state.collections.map(c => 
            <IonItem key={c.id} routerLink={'/collections/'+c.id}>
              <b>{c.name}</b>
            </IonItem>
          )}
        </IonList>
      </Page>

    )
  }
}

export default Collections;
