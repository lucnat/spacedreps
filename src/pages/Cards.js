
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonCardContent } from '@ionic/react';
import Page from '../components/Page';
import Card from '../components/Card';

const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`

let cards = [
  {
    id: 1,
    userId: 'blablala',
    category: 'physics',
    front: 'Euler Lagrange Equations',
    back: '(\partial L) / (\partial \phi) - \partial _\mu (\partial L) / (\partial (\partial _\mu \phi)) = 0'
  },
  {
    id: 2,
    userId: 'blablala',
    category: 'physics',
    front: 'Mass Energy Equivalence',
    back: 'E = m c^2 '
  },
]

const Cards = () => {
  return (
    <Page title="Cards" large >
      {cards.map (card => <Card card={card} key={card.id} />)}
    </Page>
  );
};

export default Cards;
