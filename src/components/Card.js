
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';
import MathJax from 'react-mathjax2'

function Latex(props) {
  return (
    <MathJax.Context input='ascii'>
      <MathJax.Node>{props.children}</MathJax.Node>
    </MathJax.Context>

  )
}

class Card extends React.Component {

  state = {
    flipped: false
  }

  handleClick() {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const card = this.props.card

    return (
      <div>
        <ReactCardFlip isFlipped={typeof this.props.flipped !== 'undefined' ? this.props.flipped : this.state.isFlipped}>
            <div
              onClick={this.handleClick.bind(this)} 
              className="card" 
              style={{height: 200, textAlign: 'center', fontSize: 20, display: 'flex', flexDirection: 'column'}}>
              <div style={{flex: 1}}></div>
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
    );
  }
}


export default Card


