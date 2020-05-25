
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonCardContent, IonIcon, IonButton } from '@ionic/react';
import Page from '../components/Page';
import Card from '../components/Card';
import { add } from 'ionicons/icons';

const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`

let cards = [
  {
    id: 1,
    userId: 'blablala',
    category: 'physics',
    frontText: 'Euler Lagrange Equations',
    backLatex: '(\partial L) / (\partial \phi) - \partial _\mu (\partial L) / (\partial (\partial _\mu \phi)) = 0'
  },
  {
    id: 2,
    userId: 'blablala',
    category: 'physics',
    frontText: 'Mass Energy Equivalence',
    backLatex: 'E = m c^2 '
  },
]

const Cards = () => {
  return (
    <Page title="Cards" large renderButtonsRight={() => 
      <IonButton routerLink="/addcards">
        <IonIcon icon={add} />
      </IonButton>
    }>
      {cards.map (card => <Card card={card} key={card.id} />)}
    </Page>
  );
};

export default Cards;
