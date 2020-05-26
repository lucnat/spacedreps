
import React from 'react'
import * as Ion from '@ionic/react'
import DB from '../db'
import { Link } from 'react-router-dom'

// renders a collection as a list

/*
  
  Usage:
  
  <DocsList collection="tasks" h2={doc => doc.name} p={doc => doc.description} />
  
*/

export default class extends React.Component {

  state = {
    docs: []
  }

  loadData() {
    DB.listenToAll(this.props.collection, docs => {
      this.setState({docs});
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {

    return (
      <Ion.IonList mode="ios">
        {this.state.docs.map(doc => (
          <Link to={'/'+this.props.collection+'/'+doc.id} key={doc.id}>
            <Ion.IonItem button >
            <Ion.IonLabel>
              <Ion.IonText>
                <h2><b>{this.props.h2 && this.props.h2(doc)}</b></h2>
              </Ion.IonText>
              <p>{this.props.p && this.props.p(doc)}</p>
            </Ion.IonLabel>
          </Ion.IonItem>
          </Link>

        ))}
      </Ion.IonList>
    );
  }

}