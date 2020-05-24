
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';
import MathJax from 'react-mathjax2'

class Card extends React.Component {

  state = {
    flipped: false
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const card = this.props.card
    console.log(this.props.card)
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div
              onClick={this.handleClick.bind(this)} 
              className="card" 
              style={{height: 200, textAlign: 'center', fontSize: 20, display: 'flex', flexDirection: 'column'}}>
              <div style={{flex: 1}}></div>
              <div>
                {card.front} 
              </div>
              <div style={{flex: 1}}></div>
            </div>

            <div
              onClick={this.handleClick.bind(this)} 
              className="card" 
              style={{height: 200, textAlign: 'center', fontSize: 20, display: 'flex', flexDirection: 'column'}}>
              <div style={{flex: 1}}></div>
              <div>
              <MathJax.Context input='ascii'>
                <MathJax.Node>{card.back}</MathJax.Node>
              </MathJax.Context>
              </div>
              <div style={{flex: 1}}></div>
            </div>
          
        </ReactCardFlip>
      </div>
    );
  }
}


export default Card


