import React from 'react';
import './App.css';
import Sound from "react-sound";
import drumsound from './sounds/snare-drum1.mp3';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    }
    this.drumSound = this.drumSound.bind(this);
  }

  drumSound() {
    console.log('Testing');
    return <Sound url=drumsound />
  }

  render() {


    return (
      <div id="drum-machine">
        <div id="display">
          <audio controls>
            <source src={drumsound} type="audio/mpeg"/>
          </audio>
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
    <div>
    <input type="button"
      value={props.drumletter}
      className="drum-padQ drum-pad"
      onClick={props.drumSound} />
   </div>
  )
}


export default App;
