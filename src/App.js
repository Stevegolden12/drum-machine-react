import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';

/* In process of seeing about Web Audio API for sound:
https://css-tricks.com/introduction-web-audio-api/ 

for drum sounds:
https://www.freesoundeffects.com/free-sounds/drum-loops-10031/

Tonejs:

*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    }
    this.drumSound = this.drumSound.bind(this);
  }

  drumSound() {
    console.log("Hitting the key");
  }

  render() {

    var player = new Tone.Player({
      "url": "./audio/FWDL.[mp3|ogg]",
      "loop": true
    }).toMaster();

    return (
      <div id="drum-machine">
        <div id="display">
          <DrumBox drumletter={this.state.letters[0]} drumSound={this.drumSound} />
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

const DrumBox = (props) => {
  return (
    <input type="button"
      value={props.drumletter}
      class="drum-padQ drum-pad"
      onClick={props.drumSound} />
  )
}


export default App;
