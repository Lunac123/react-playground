import React, { Component } from "react";
import PropTypes from "prop-types";

class SliderContent extends Component {
  render() {
    let { arraySliceEnd, arraySliceStart, data, howManyCols } = this.props;

    // Slice out a portion of the array
    let newArray = data.slice(arraySliceStart, arraySliceEnd);
    console.log("howmanycols : " + howManyCols);
    // Map through the new array that was just sliced out
    let sliderContent = newArray.map((data) => {
      return (
        <div key={data.id} className={"slider-boxes " + howManyCols}>
          <img src={data.image}></img>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      );
    });

    return (
      <div className="container scroller-wrapper">
        <div className="row">{sliderContent}</div>
      </div>
    );
  }
}

SliderContent.propTypes = {
  data: PropTypes.array,
  arraySliceStart: PropTypes.number,
  howManyCols: PropTypes.string
};

export default SliderContent;
