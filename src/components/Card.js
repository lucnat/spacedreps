
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { IonCard, IonCardContent, IonButton, IonIcon, IonActionSheet } from '@ionic/react';
import MathJax from 'react-mathjax2'
import { ellipsisHorizontal, handRight } from 'ionicons/icons';
import DB from '../db';

function Latex(props) {
  return (
    <MathJax.Context input='ascii'>
      <MathJax.Node>{props.children}</MathJax.Node>
    </MathJax.Context>

  )
}

class Card extends React.Component {

  state = {
    flipped: false,
    actionSheetOpen: false
  }

  handleClick() {
    if(!window.Ionic.platforms.includes('capacitor')) {
      if(!window.location.href.includes('add')) {
        alert('You cannot flip cards here. Open the app to do that. To see the back content you can edit the card.');
        return;
      }
    }
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  renderActionSheet() {
    return (
      <IonActionSheet
        isOpen={this.state.actionSheetOpen}
        onDidDismiss={() => this.setState({actionSheetOpen: false})}
        buttons={[
          {
            text: '\xa0 Edit Card',
            handler: () => {
              this.props.history.push('/add/card/'+this.props.card.id)
            }
          }, 
          {
            text: '\xa0 Delete Card',
            role: 'destructive',
            handler: () => {
              DB.db.collection('cards').doc(this.props.card.id).delete()
            }
          }, 
            {
          text: '\xa0 Cancel',
          role: 'cancel'
        }]}
      >
      </IonActionSheet>
    )
  }  

  renderDots() {
    if(this.props.renderDots) return (
      <div style={{position: 'absolute', width: '100%', textAlign: 'right'}}>
        <IonIcon style={{marginRight: 50, marginTop: 10, color: '#aaa'}} onClick={e => {
          e.stopPropagation();
          this.setState({actionSheetOpen: true})
        }} icon={ellipsisHorizontal} />
      </div>
    ) 
  }

  render() {
    const card = this.props.card
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{maxWidth: 450, margin: '0 auto'}}>
        <ReactCardFlip isFlipped={typeof this.props.flipped !== 'undefined' ? this.props.flipped : this.state.isFlipped}>
            <div
              onClick={this.handleClick.bind(this)} 
              className="card" 
              style={{height: 200, textAlign: 'center', fontSize: 20, display: 'flex', flexDirection: 'column'}}>
              <div style={{flex: 1}}>
                {this.renderDots()}
              </div>
              <div>
                {card.frontText && <p>{card.frontText}</p>}
                {card.frontLatex && <Latex>{card.frontLatex}</Latex>}
              </div>
              <div style={{flex: 1}}></div>
            </div>

            <div
              onClick={this.handleClick.bind(this)} 
              className="card" 
              style={{height: 200, textAlign: 'center', fontSize: 20, display: 'flex', flexDirection: 'column'}}>
              <div style={{flex: 1}}></div>
              <div>
                {card.backText && <p>{card.backText}</p>}
                {card.backLatex && <Latex>{card.backLatex}</Latex>}

              </div>
              <div style={{flex: 1}}></div>
            </div>
        </ReactCardFlip>
        </div>
        {this.renderActionSheet()}
      </div>
    );
  }
}


export default Card


