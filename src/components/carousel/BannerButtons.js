import React, { Component } from "react";

class BannerButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    const { data } = this.props;
    let { click, numberOfPages } = this.props;

    let buttons = data.map((data, idx) => {
      return (
        <a
          title={data.title}
          className="banner-buttons"
          key={data.id}
          id={"button" + data.id}
          data={data.id}
          onClick={click}
        />
      );
    });
    // console.log("data from bannerbuttons : " + data);

    return <div className="banner-buttons-wrapper">{buttons}</div>;
  }
}
export default BannerButtons;
