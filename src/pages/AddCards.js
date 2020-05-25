
import React from 'react'
import Page from '../components/Page';
import { IonButton } from '@ionic/react';

const AddCards = (props) => (
  <Page title="Add Cards" large padding>
    <h2>Import from a web collection</h2>
    <p>You can make your own collection conveniently at your PC.  </p>
    <IonButton>Create new collection</IonButton> <br />
    <IonButton>Import existing collection</IonButton>

    <h2>Create a card here</h2>
    <IonButton routerLink="/addcards/single">Create card</IonButton>
  </Page>
)

export default AddCards;