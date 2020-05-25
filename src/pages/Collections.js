import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import Page from '../components/Page';
import DocsList from '../components/DocsList';
import { add } from 'ionicons/icons';
import DB from '../db';

class Collections extends React.Component {

  renderAddButton() {
    return (
      <IonFab vertical="bottom" horizontal="end" slot="fixed" onClick={() => {
        const name = prompt('Enter collection name');
        if(!name) return;
        DB.db.collection('collections').add({name})
      }}>
        <IonFabButton>
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
        <DocsList collection="collections" h2={doc => doc.name} />
      </Page>

    )
  }
}

export default Collections;
