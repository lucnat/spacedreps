
import * as Ion from '@ionic/react';
import React from 'react';

import {IonButtons, IonActionSheet, IonBackdrop, IonToolbar } from '@ionic/react';

/*
	Usage:

	<Page largeTitle padding menu>
		<p>content here</p>
  </Page>
  
  Props: 
    - menu
    - renderButtonsRight
    - renderDirectChildren
*/

const Page = (props) => {

  return (

    <Ion.IonPage>

      <Ion.IonHeader translucent="true">

        <Ion.IonToolbar>
          <Ion.IonButtons slot="start">
            {props.menu && <Ion.IonMenuButton />}
            <Ion.IonBackButton />
          </Ion.IonButtons>
          <Ion.IonTitle>{props.title}</Ion.IonTitle>
          <IonButtons slot="end">
            {props.renderButtonsRight && props.renderButtonsRight()}
          </IonButtons>

        </Ion.IonToolbar>

      </Ion.IonHeader>
      <Ion.IonContent fullscreen="true" forceOverscroll={false}>
        {props.large && (
          <Ion.IonHeader collapse="condense" >              
            <Ion.IonToolbar>
              <Ion.IonTitle size="large">{props.title}</Ion.IonTitle>
            </Ion.IonToolbar>
          </Ion.IonHeader>
        )}
        <div style={{padding: props.padding && 16}}>
          {props.children}
        </div>

        {props.renderDirectChildren && props.renderDirectChildren()}

      </Ion.IonContent>

    </Ion.IonPage>

  )
}

export default Page