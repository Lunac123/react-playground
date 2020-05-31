import React, { Component } from "react";
class NextButton extends Component {
  render() {
    let { showNextButton } = this.props;
    return (
      <a
        style={{ display: showNextButton ? "block" : "none" }}
        className="nextButton dark-orange"
        href="#"
        onClick={this.props.next}
      />
    );
  }
}
export default NextButton;
