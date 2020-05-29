import React, { Component } from "react";
import dataSource from "./data";
import { BackButton, NextButton } from "./";
import data from "./data";
class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 4, // How many items to show in each row
      fullWidthCols: 12, //Simplegrid 12-col max layout
      dataLenght: dataSource.length,
      data: dataSource,
      arraySliceStart: 0,
      totalPageCount: null
    };
  }

  // Count the total number of pages based on items per page and the number of items in the array
  pageCount = () => {
    let { dataLenght, itemsPerPage } = this.state;
    let totalPageCount = parseInt(dataLenght / itemsPerPage);
    console.log("pagecount is: " + totalPageCount);
  };

  componentDidMount = () => {
    this.pageCount();
  };
  next = () => {
    let { arraySliceStart, itemsPerPage, dataLenght } = this.state;

    // Checks so the arraycounterstart never exceeds the array - itemsperpage
    // If it doesnt it sets a new value of its old value + itemsperpage
    if (arraySliceStart < dataLenght - itemsPerPage) {
      this.setState({ arraySliceStart: arraySliceStart + itemsPerPage });
    }
    // else {
    //   this.setState({ arrayCounterStart: dataLenght - itemsPerPage });
    // }
  };
  prev = () => {
    let { arraySliceStart, itemsPerPage } = this.state;

    // arraySliceStart is smaller or equal to the number of items on the page - 1 then set it to 0 so it cant go below 0
    if (arraySliceStart < itemsPerPage - 1) {
      this.setState({ arraySliceStart: 0 });
    } else {
      this.setState({ arraySliceStart: arraySliceStart - itemsPerPage });
    }
  };

  /* THIS IS FOR AN INFINITE SCROLLER
    WORKS ON col-2, col-3 AND col-4 BUT NOT 100% WORKING ON col-6 SO CHECK THIS LATER */
  // next = () => {
  //   let { arraySliceStart, itemsPerPage, dataLenght } = this.state;

  //   // Checks so the arraycounterstart never exceeds the array - itemsperpage
  //   // If it doesnt it sets a new value of its old value + itemsperpage
  //   if (arraySliceStart < dataLenght - itemsPerPage) {
  //     this.setState({ arraySliceStart: arraySliceStart + itemsPerPage });
  //   } else if (arraySliceStart > dataLenght - itemsPerPage - 1) {
  //     // this.setState({ arrayCounterStart: dataLenght - itemsPerPage });
  //     this.setState({ arraySliceStart: 0 });
  //   }
  // };
  // prev = () => {
  //   let { arraySliceStart, itemsPerPage, dataLenght } = this.state;

  //   // arraycountestart is smaller or equal to the number of items on the page - 1 then set it to 0 so it cant go below 0
  //   if (arraySliceStart < itemsPerPage) {
  //     this.setState({ arraySliceStart: dataLenght - itemsPerPage });
  //   } else {
  //     this.setState({ arraySliceStart: arraySliceStart - itemsPerPage });
  //   }
  // };

  // Calculate how many columns there should be based on the settings in the constructor

  howManyCols = () => {
    let { itemsPerPage, fullWidthCols } = this.state;

    return "col-" + fullWidthCols / itemsPerPage;
  };

  render() {
    let { itemsPerPage, data, arraySliceStart } = this.state;

    // Variable for the end of the counter for the array slice.
    // if its bigger than the array it sets the value to max (of the array)
    let arraySliceEnd = arraySliceStart + itemsPerPage;
    if (arraySliceEnd >= data.length) {
      arraySliceEnd = data.length;
    }

    // If i didnt have this code i got funky results in the end of the slider :)
    if (arraySliceStart > data.length - itemsPerPage) {
      arraySliceStart = data.length - itemsPerPage;
    }

    console.log("arraySliceStart: " + arraySliceStart);
    console.log("arraySliceEnd: " + arraySliceEnd);

    // Slice out a portion of the array
    let newArray = data.slice(arraySliceStart, arraySliceEnd);

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
        <BackButton prev={this.prev} showButton={true} />
        <div className="container">
          <div className="row">{sliderContent}</div>
        </div>
        <NextButton next={this.next} showButton={true} />
      </div>
    );
  }
}

export default Carousel1;
