
import React from 'react'
import Page from '../components/Page';
import DB from '../db';
import Card from '../components/Card';

class Collection extends React.Component {

  state = {
    collection: null,
    cards: []
  }

  componentDidMount() {
    // get collection
    DB.listenToOne('collections',this.props.match.params.id, collection => {
      this.setState({collection})
    })
    // get cards
    const collectionId = this.props.match.params.id;
    DB.db.collection('cards').where('collectionId','==',collectionId).onSnapshot( querySnapshot => {
      let docs = [];
      querySnapshot.forEach(function(doc) {
        docs.push({id: doc.id, ...doc.data()});
      });
      this.setState({cards: docs});
    });
  
  }

  render() {
    if(!this.state.collection) return <Page title="Collection" large />
    return (
      <Page title={this.state.collection.name} large>
        {this.state.cards.map(c => <Card key={c.id} card={c}/>)}
      </Page>
    );
  }
}

export default Collection