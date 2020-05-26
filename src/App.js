import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline, folderOutline } from 'ionicons/icons';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import AddCards from './pages/Add';
import AddCard from './pages/AddCard';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

import Collections from './pages/Collections';
import Collection from './pages/Collection';
import UncategorizedCards from './pages/UncategorizedCards';
import DB from './db';

class App extends React.Component {

  state = { user: null }
  componentDidMount() {
    DB.listenToUser(user => {
      this.setState({user})
    })
  }

  render() {

    if(!this.state.user) return <Login />
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/cards" component={Cards} exact={true} />
              <Route path="/add/card/:id" component={AddCard} exact={true} />
              <Route path="/add/card" component={AddCard} exact={true} />
              <Route path="/add" component={AddCards} exact={true} />
              <Route path="/collections/uncategorized" component={UncategorizedCards} exact={true} />
              <Route path="/collections/:id" component={Collection} exact={true} />
              <Route path="/collections" component={Collections} exact={true} />
              <Route path="/profile" component={Profile} />
              <Route path="/" render={() => <Redirect to="/collections" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              {/* <IonTabButton tab="tab1" href="/cards">
                <IonIcon icon={rocketOutline} />
              </IonTabButton> */}
              <IonTabButton tab="tab2" href="/collections">
                <IonIcon icon={folderOutline} />
              </IonTabButton>
              <IonTabButton tab="tab3" href="/profile">
                <IonIcon icon={personOutline} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }

}

export default App;
