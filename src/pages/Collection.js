
import React from 'react'
import Page from '../components/Page';
import DB from '../db';

class Collection extends React.Component {

  state = {collection: null}

  componentDidMount() {
    DB.listenToOne('collections',this.props.match.params.id, collection => {
      console.log(collection)
      this.setState({collection})
    })
  }

  render() {
    if(!this.state.collection) return <Page title="Collection" large />
    return (
      <Page title={this.state.collection.name} large>
        <h1>stuff</h1>
      </Page>
    );
  }
}

export default Collection