import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsLeft: 280,
      maxChars: this.props.maxChars
    };
  }

  updateRemainingChar= event =>{
    const valueLength = event.target.value.length
    const maxChar = this.state.maxChars
    const charLength = maxChar - valueLength
    this.setState({
      charsLeft: charLength
    })
  }

  updateValueState = (event) =>{
    this.setState({
      value: event.target.value
    })
  }

  handleChange=(event)=>{
    this.updateRemainingChar(event)
    this.updateValueState(event)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
