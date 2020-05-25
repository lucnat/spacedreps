
import React from 'react'
import Page from '../components/Page';
import { IonButton } from '@ionic/react';

const Add = (props) => (
  <Page title="Add" large padding>
    <h2>Collection</h2>
    <p>Create a collection to organize different types of cards. </p>
    <IonButton>Create new collection</IonButton> <br />

    <h2>Card</h2>
    <IonButton routerLink="/addcards/single">Create card</IonButton>
  </Page>
)

export default Add;