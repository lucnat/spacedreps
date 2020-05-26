
import React from 'react'
import Page from '../components/Page';
import DB from '../db';
import Card from '../components/Card';

class UncategorizedCards extends React.Component {

  state = {
    cards: []
  }

  componentDidMount() {

    // get cards
    const collectionId = 'none';
    DB.db.collection('cards').where('collectionId','==',collectionId).onSnapshot( querySnapshot => {
      let docs = [];
      querySnapshot.forEach(function(doc) {
        docs.push({id: doc.id, ...doc.data()});
      });
      this.setState({cards: docs});
    });
  
  }

  render() {
    return (
      <Page title="Uncategorized" large>
        {this.state.cards.map(c => <Card key={c.id} card={c}/>)}
      </Page>
    );
  }
}

export default UncategorizedCards