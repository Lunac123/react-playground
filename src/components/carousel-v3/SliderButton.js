import React, { Component } from "react";

export class SliderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    const { data } = this.props;
    let { click } = this.props;
    let buttons = data.map((data, idx) => {
      return (
        <a
          title={data.title}
          className="slider-buttons"
          key={data.id}
          id={"button" + data.id}
          data={data.id}
          onClick={click}
        />
      );
    });
    console.log("data from bannerbuttons : " + data);

    return (
      <div className="row">
        <div className="slider-buttons-wrapper">{buttons}</div>;
      </div>
    );
  }
}
export default SliderButton;
