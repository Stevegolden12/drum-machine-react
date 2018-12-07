{ /* Think logic is good need to:
 * add the other drumsounds,
 * add the drumsounds to the switch statement
 * replace the drumsound1 with drumtype in the Sound component 
 */}


import React from 'react';
import './App.css';
import Sound from "react-sound";
import drumsound1 from './sounds/snare-drum1.mp3';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
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
          */}
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
        drumtype = drumsound1;
        break;
      case 'E':
        drumtype = drumsound1;
        break;
      case 'A':
        drumtype = drumsound1;
        break;
      case 'S':
        drumtype = drumsound1;
        break;
      case 'D':
        drumtype = drumsound1;
        break;
      case 'Z':
        drumtype = drumsound1;
        break;
      case 'X':
        drumtype = drumsound1;
        break;
      case 'C':
        drumtype = drumsound1;
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
