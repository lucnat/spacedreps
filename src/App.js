import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, rocket, rocketOutline, person, personOutline, ellipseOutline } from 'ionicons/icons';
import Cards from './pages/Cards';
import Tab2 from './pages/Tab2';
import Profile from './pages/Profile';

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

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/cards" component={Cards} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/profile" component={Profile} />
          <Route path="/" render={() => <Redirect to="/cards" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/cards">
            <IonIcon icon={rocketOutline} />
          </IonTabButton>
          {/* <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipseOutline} />
          </IonTabButton> */}
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon icon={personOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
