import React, { Component } from "react";
class NextButton extends Component {
  render() {
    let { showButton } = this.props;
    return (
      <a
        style={{ display: showButton ? "block" : "none" }}
        className="nextButton dark-orange"
        href="#"
        onClick={this.props.next}
      />
    );
  }
}
export default NextButton;
