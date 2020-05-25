
import React from 'react'
import Page from "../components/Page"
import { IonTextarea, IonItemDivider, IonItem, IonList, IonButton } from '@ionic/react'
import Card from '../components/Card'
import DB from '../db';

class AddCard extends React.Component {

  state = {
    frontText: '',
    frontLatex: '',
    backText: '',
    backLatex: '',
    flipped: false,
    collection: 'none',
    collectionId: null, 
    modalOpen: false
  }

  constructor(props) {
    super(props);
    this.card = React.createRef()
  }

  render() {
    const card = this.state;
    return (
      <Page title={this.state.flipped ? 'Back side' : 'Front side'} large >

        <IonList>
          <IonItemDivider>Text</IonItemDivider>
          <IonItem lines="none">
          <IonTextarea 
            value={this.state.flipped ? this.state.backText : this.state.frontText} 
            onIonChange={e => {
              const obj = {};
              obj[this.state.flipped ? 'backText' : 'frontText'] = e.target.value;
              this.setState(obj);
            }} />
          </IonItem>
          <br />
          <IonItemDivider>Latex</IonItemDivider>
          <IonItem lines="none">
          <IonTextarea 
            value={this.state.flipped ? this.state.backLatex : this.state.frontLatex} 
            onIonChange={e => {
              const obj = {};
              obj[this.state.flipped ? 'backLatex' : 'frontLatex'] = e.target.value;
              this.setState(obj);
            }} />
          </IonItem>
          <h3 style={{paddingLeft: 16}} >Preview</h3>
          <div onClick={e => {
            e.stopPropagation();
            this.setState({flipped: !this.state.flipped})
          }}>
            <Card ref={this.card} card={card} preventFlip flipped={this.state.flipped} ></Card>
          </div>
        </IonList>
        <IonButton style={{paddingLeft: 16}} onClick={() => {
            this.setState({flipped: !this.state.flipped})
          }}>
          flip
        </IonButton>
        <p style={{padding: 16, paddingBottom: 0, paddingTop: 0}}>
          Collection: {this.state.collection} 
          <IonButton onClick={() => {
            this.setState({})
          }} size="small" style={{display: 'absolute', marginBottom: 12, marginLeft: 10 }}>Select</IonButton>
        </p>
        <div style={{padding: 16, paddingTop: 0}}>
          <IonButton expand="block" onClick={() => {
            let card = {
              frontText: this.state.frontText,
              frontLatex: this.state.frontLatex,
              backText: this.state.backText,
              backLatex: this.state.backLatex,
              collectionId: this.state.collectionId
            }
            card.id = "" + new Date().getTime();
            DB.db.collection('cards').add(card).then(() => {
              this.props.history.replace('/cards');
            });
          }}>Save</IonButton>
        </div>
      </Page>
    )
  }

}

export default AddCard