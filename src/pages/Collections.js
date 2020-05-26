import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonList, IonItem } from '@ionic/react';
import Page from '../components/Page';
import DocsList from '../components/DocsList';
import { add } from 'ionicons/icons';
import DB from '../db';

class Collections extends React.Component {

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
        <DocsList collection="collections" h2={doc => doc.name} />
        <IonList>
          <IonItem routerLink="/collections/uncategorized">
            <b>Uncategorized</b>
          </IonItem>
        </IonList>
      </Page>

    )
  }
}

export default Collections;
