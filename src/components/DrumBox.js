import React from 'react';
import Sound from "react-sound";

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
    return (
      <div>
        <input type="button"
          value={this.props.drumletter}
          className="drum-pad clip action-button shadow animate blue"
          id={`drumpad${this.props.drumletter}`}
          onClick={this.isClicked}
        />
        {this.state.clicked && <Sound url={this.props.drumsound} playStatus={Sound.status.PLAYING} />}
      </div>
    )
  }
}



export default DrumBox