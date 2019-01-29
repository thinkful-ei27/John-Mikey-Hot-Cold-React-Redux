import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { connect } from 'react-redux';
import {restartGame, makeGuess} from '../actions';

export class Game extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     guesses: [],
  //     feedback: 'Make your guess!',
  //     auralStatus: '',
  //     correctAnswer: Math.floor(Math.random() * 100) + 1
  //   };
  // }

  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
    this.props.dispatch(makeGuess(guess));

    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = this.props.feedback ? `${this.props.feedback} | Hot or Cold` : 'Hot or Cold';
  }

  // generateAuralUpdate() {
  //   const { guesses, feedback } = this.state;

  //   // If there's not exactly 1 guess, we want to
  //   // pluralize the nouns in this aural update.
  //   const pluralize = guesses.length !== 1;

  //   let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  //   if (guesses.length > 0) {
  //     auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  //   }


  //   this.setState({ auralStatus });
  // }

  render() {
    // const { feedback, guesses, auralStatus } = this.state;
    const guessCount = this.props.guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          // onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={this.props.feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={this.props.guesses} 
            // auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer
  }
}

export default connect(mapStateToProps)(Game);