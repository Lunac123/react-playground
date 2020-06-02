import React, { Component } from "react";

class SliderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    const { data } = this.props;
    let { click, numberOfPages } = this.props;
    console.log("number of pages inside sliderbutton: " + numberOfPages);
    let buttons = data.map((data, idx) => {
      return (
        <a
          // title={data.title}
          className="slider-buttons"
          key={data.id}
          id={"button" + data.id}
          data={data.id}
          onClick={click}
        />
      );
    });

    return <div className="slider-buttons-wrapper">{buttons}</div>;
  }
}
export default SliderButton;
