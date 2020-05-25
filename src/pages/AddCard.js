
import React from 'react'
import Page from "../components/Page"
import { IonTextarea, IonItemDivider, IonItem, IonList, IonButton } from '@ionic/react'
import Card from '../components/Card'
import db from '../db';

class AddCard extends React.Component {

  state = {
    frontText: '',
    frontLatex: '',
    backText: '',
    backLatex: '',
    flipped: false
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
        <div style={{padding: 16}}>
          <IonButton expand="block" onClick={() => {
            const card = this.state;
            delete card.flipped;
            card.id = "" + new Date().getTime();
            db.get('cards').push(card).write();
            this.props.history.replace('/cards');
          }}>Save</IonButton>
        </div>
      </Page>
    )
  }

}

export default AddCard