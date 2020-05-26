
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import MathJax from 'react-mathjax2'
import { ellipsisHorizontal, handRight } from 'ionicons/icons';

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

  renderDots() {
    if(this.props.renderDots) return (
      <div style={{position: 'absolute', width: '100%', textAlign: 'right'}}>
        <IonIcon style={{marginRight: 50, marginTop: 10, color: '#aaa'}} onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          console.log('stuff')
        }} icon={ellipsisHorizontal} />
    </div>
)
  }

  render() {
    const card = this.props.card

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{maxWidth: 500, margin: '0 auto'}}>
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
      </div>
    );
  }
}


export default Card


