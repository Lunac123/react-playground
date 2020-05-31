import React, { Component } from "react";

class BackButton extends Component {
  render() {
    let { showPrevButton } = this.props;
    return (
      <a
        style={{ display: showPrevButton ? "block" : "none" }}
        className="backButton dark-orange"
        href="#"
        onClick={this.props.prev}
      />
    );
  }
}
export default BackButton;
