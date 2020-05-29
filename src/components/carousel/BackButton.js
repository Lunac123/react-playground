import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { prev } = this.props;
    return <a title="Previous slide" className="backButton" onClick={prev}></a>;
  }
}
export default BackButton;
