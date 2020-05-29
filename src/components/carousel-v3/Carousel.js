import React, { Component } from "react";
import dataSource from "./data";
import { BackButton, NextButton } from "./";
class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 4, // How many items to show in each row
      fullWidthCols: 12, //Simplegrid 12-col max layout
      dataLenght: dataSource.length,
      data: dataSource,
      arrayCounterStart: 0
    };
  }

  next = () => {
    let { arrayCounterStart, itemsPerPage, dataLenght } = this.state;

    // Checks so the arraycounterstart never exceeds the array - itemsperpage
    // If it doesnt it sets a new value of its old value + itemsperpage
    if (arrayCounterStart < dataLenght - itemsPerPage) {
      this.setState({ arrayCounterStart: arrayCounterStart + itemsPerPage });
    }
    // else {
    //   this.setState({ arrayCounterStart: dataLenght - itemsPerPage });
    // }
  };
  prev = () => {
    let { arrayCounterStart, itemsPerPage } = this.state;

    // arraycountestart is smaller or equal to the number of items on the page - 1 then set it to 0 so it cant go below 0
    if (arrayCounterStart <= itemsPerPage - 1) {
      this.setState({ arrayCounterStart: 0 });
    } else {
      this.setState({ arrayCounterStart: arrayCounterStart - itemsPerPage });
    }
  };

  // Calculate how many columns there should be based on the settings in the constructor
  howManyCols = () => {
    let { itemsPerPage, fullWidthCols } = this.state;

    return "col-" + fullWidthCols / itemsPerPage;
  };

  render() {
    let { itemsPerPage, data, arrayCounterStart } = this.state;

    // Variable for the end of the counter for the array slice.
    // if its bigger than the array it sets the value to max (of the array)
    let arrayCounterEnd = arrayCounterStart + itemsPerPage;
    if (arrayCounterEnd >= data.length) {
      arrayCounterEnd = data.length;
    }

    // If i didnt have this code i got funky results in the end of the slider :)
    if (arrayCounterStart > data.length - itemsPerPage) {
      arrayCounterStart = data.length - itemsPerPage;
    }

    console.log("Arraycounterstart: " + arrayCounterStart);
    console.log("Arraycounterend: " + arrayCounterEnd);

    // Slice out a portion of the array
    let newArray = data.slice(arrayCounterStart, arrayCounterEnd);

    // Map through the new array that was just sliced out
    let sliderContent = newArray.map((data) => {
      return (
        <div key={data.id} className={this.howManyCols()}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <img src={data.image}></img>
        </div>
      );
    });

    return (
      <div className="carousel" style={{ height: "500px" }}>
        <BackButton prev={this.prev} />
        <div className="container">
          <div className="row">{sliderContent}</div>
        </div>
        <NextButton next={this.next} />
      </div>
    );
  }
}

export default Carousel1;
