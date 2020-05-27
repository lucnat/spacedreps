
import React from 'react'
import Page from '../components/Page';
import { IonButton, isPlatform } from '@ionic/react';
import DB from '../db';
import firebase from 'firebase'


const Add = (props) => (
  <Page title="Add" large padding>
    <h2>Collection</h2>
    <p>Create a collection to organize different types of cards. </p>
    <IonButton onClick={() => {
        const name = prompt('Enter collection name');
        if(!name) return;
        DB.db.collection('collections').add({
          name: name,
          uid: firebase.auth().currentUser.uid
        })
        props.history.replace('/collections')
      }}>Create new collection</IonButton> <br />

    <h2>Card</h2>
    <IonButton routerLink="/add/card">Create card</IonButton>
    {
      isPlatform('capacitor') &&     
      <p>
        To add cards conveniently at your PC, visit <a href="https://mathycards.now.sh">mathycards.now.sh</a>
      </p>
    }
  </Page>
)

export default Add;