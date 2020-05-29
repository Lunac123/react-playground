import React, { Component } from "react";

class NextButton extends Component {
  render() {
    let { next } = this.props;
    return <a title="Next slide" className="nextButton" onClick={next}></a>;
  }
}
export default NextButton;
