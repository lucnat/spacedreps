
import React from 'react'
import Page from '../components/Page';
import firebase from "firebase"

var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
};

class Login extends React.Component {

  componentDidMount() {
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <Page title="Sign In" padding large >
        <div id="firebaseui-auth-container"></div>  
      </Page>
    );
  }
}

export default Login;