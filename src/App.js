{ /* Think logic is good need to:
 * Add durmsound to state
 * use setstate when button is clicked
 */}
/* eslint-disable import/first */

import React from 'react';
import './App.css';
import Sound from "react-sound";
import drumsound1 from './sounds/snare-drum1.mp3';
import drumsound2 from './sounds/snare-drum2.wav';
import drumsound3 from './sounds/cymbol-drum1.wav';
import drumsound4 from './sounds/hat-drum1.wav';
import drumsound5 from './sounds/kick-drum1.wav';
import drumsound6 from './sounds/shaker-drum1.wav';
import drumsound7 from './sounds/tamb-drum1.wav';
import drumsound8 from './sounds/snare-drum2.wav';
import drumsound9 from './sounds/kick-drum1.wav';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
     
    }

  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
   
    }
  }
   
  render() {

    return (
      <div id="drum-machine">
        <div id="display">
          <DrumBox drumletter={this.state.letters[0]} />
          <DrumBox drumletter={this.state.letters[1]} />
          <DrumBox drumletter={this.state.letters[2]} />
          <DrumBox drumletter={this.state.letters[3]} />
          <DrumBox drumletter={this.state.letters[4]} />
          <DrumBox drumletter={this.state.letters[5]} />
          <DrumBox drumletter={this.state.letters[6]} />
          <DrumBox drumletter={this.state.letters[7]} />
          <DrumBox drumletter={this.state.letters[8]} />          
        </div>
      </div>
    )
  }
}

class DrumBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
    this.isClicked = this.isClicked.bind(this);
  }

  isClicked() {
     this.setState({
      clicked: true
    })

  }



  render() {
    let drumtype = 'a';

    switch (this.props.drumletter) {
      case 'Q':
        drumtype = drumsound1;
        break;
      case 'W':
        drumtype = drumsound2;
        break;
      case 'E':
        drumtype = drumsound3;
        break;
      case 'A':
        drumtype = drumsound4;
        break;
      case 'S':
        drumtype = drumsound5;
        break;
      case 'D':
        drumtype = drumsound6;
        break;
      case 'Z':
        drumtype = drumsound7;
        break;
      case 'X':
        drumtype = drumsound8;
        break;
      case 'C':
        drumtype = drumsound9;
        break;
      default:
        return drumtype = drumsound1;
        break;
    }

    console.log("drumtype issssss: " + drumtype)

    return (
      <div>
        <input type="button"
          value={this.props.drumletter}
          className="drum-padQ drum-pad"
          onClick={this.isClicked}
        />
        {this.state.clicked && <Sound url={drumsound1} playStatus={Sound.status.PLAYING} />}
      </div>
    )
  }
}


export default App;
