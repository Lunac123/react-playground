import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { showButton } = this.props;
    return (
      <a
        style={{ display: showButton ? "block" : "none" }}
        className="backButton dark-orange"
        href="#"
        onClick={this.props.prev}
      />
    );
  }
}
export default BackButton;
