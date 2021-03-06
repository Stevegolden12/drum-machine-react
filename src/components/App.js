{ /* Think logic is good need to:
 * Add drumsound to state
 * use setstate when button is clicked
 */}
/* eslint-disable import/first */

import React from 'react';
import '../App.css';
import Sound from "react-sound";
import drumsoundQ from '../sounds/snare-drum1.mp3';
import drumsoundW from '../sounds/snare-drum2.wav';
import drumsoundE from '../sounds/cymbol-drum1.wav';
import drumsoundA from '../sounds/hat-drum1.wav';
import drumsoundS from '../sounds/kick-drum1.wav';
import drumsoundD from '../sounds/shaker-drum1.wav';
import drumsoundZ from '../sounds/tamb-drum1.wav';
import drumsoundX from '../sounds/snare-drum2.wav';
import drumsoundC from '../sounds/kick-drum1.wav';

import Knob from './Knob';
import DrumBox from './DrumBox'

import PropTypes from 'prop-types';

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

   
  render() {

    return (
      <div id="drum-machine">
        <section class="index__mainTitle">Drum Machine</section>
        <section class="index__knobDisplay">
          <Knob />
          <Knob />
          <Knob />
          <Knob />
        </section>
        <div id="display">
          <DrumBox drumletter={this.state.letters[0]} drumsound={drumsoundQ}/>
          <DrumBox drumletter={this.state.letters[1]} drumsound={drumsoundW}/>
          <DrumBox drumletter={this.state.letters[2]} drumsound={drumsoundE}/>
          <DrumBox drumletter={this.state.letters[3]} drumsound={drumsoundA}/>
          <DrumBox drumletter={this.state.letters[4]} drumsound={drumsoundS}/>
          <DrumBox drumletter={this.state.letters[5]} drumsound={drumsoundD}/>
          <DrumBox drumletter={this.state.letters[6]} drumsound={drumsoundZ}/>
          <DrumBox drumletter={this.state.letters[7]} drumsound={drumsoundX} />
          <div className="index__centerDiv">
            <DrumBox drumletter={this.state.letters[8]} drumsound={drumsoundC} /> 
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  letters: PropTypes.array
}



export default App;
