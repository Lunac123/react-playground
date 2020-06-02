import React, { Component } from "react";

import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

// What is PureComponent?
export class Testing extends React.PureComponent {
  // Why no this.state? IT BREAKS if i type that.
  state = {
    play: false
  };
  render() {
    const divStyle = {
      display: "block",
      width: 100,
      height: 100,
      background: "#27253f",
      borderRadius: "10px"
    };
    const buttonStyle = {
      display: "block",
      height: 30,
      width: 100,
      fontSize: 15,
      marginTop: 20
    };

    return (
      <React.Fragment>
        <AnimateKeyframes
          play={this.state.play}
          iterationCount="infinite"
          duration={2}
          keyframes={[
            "transform: translateX(0px)",
            "transform: translateX(200px)",
            "transform: translate(200px, 100px)",
            "transform: translate(0, 200px)",
            "transform: translate(0)"
          ]}
          // keyframes is an array of styles, and each style
          // will be distributed over 100% of the duration
        >
          <div style={divStyle} />
        </AnimateKeyframes>

        <AnimateKeyframes
          play={this.state.play}
          iterationCount="infinite"
          duration={5}
          keyframes={[
            "transform: rotateX(0) rotateY(0) rotateZ(0)",
            "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)"
          ]}
        >
          <div style={divStyle} />
        </AnimateKeyframes>
        <button
          style={buttonStyle}
          onClick={() => this.setState(({ play }) => ({ play: !play }))}
        >
          Play
        </button>
      </React.Fragment>
    );
  }
}

export default Testing;
