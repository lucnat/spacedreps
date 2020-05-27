import React from 'react';
import { IonButton } from '@ionic/react';
import Page from '../components/Page';
import DB from '../db';
import firebase from "firebase"

class Profile extends React.Component {

  state = {user: null}
  componentDidMount() {
    DB.listenToUser(user => this.setState({user}));
  }

  render() {
    if(!this.state.user) return <Page />
    return (
      <Page title="Profile" large padding>
        <p>Logged in as <b>{this.state.user.email}</b></p>
        <IonButton onClick={() => {
          if(!window.confirm('Sign out?')) return;
          firebase.auth().signOut();
        }}>Sign Out</IonButton>

        <h1>About this app</h1>
        <p>
          This app was created in a hurry by a student who was clearly procrastinating
          for an exam session. Nevertheless, the product turns out to be immensely useful
          with regard to cementing formulas and concepts in math and science. 
        </p>
        <p>
          If you have suggestions for improvements feel free to write to contact the developer.
          Note that development has just started, 
          and new features will be added soon. However, the app is intended to be kept very simple.
        </p>
        <IonButton onClick={() => {
          window.location = "mailto:luca@naterop.net";
        }}>Contact Developer</IonButton>

      </Page>
    )
  }
}

export default Profile;
