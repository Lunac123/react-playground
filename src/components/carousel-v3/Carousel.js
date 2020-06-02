import React, { Component } from "react";

import dataSource from "./data";
import { BackButton, NextButton, SliderContent, SliderButton } from "./";
// import { SliderContent } from "./SliderContent";
// import { SliderButton } from "./SliderButton";

// import data from "./data";
class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 3, // How many items to show in each row
      fullWidthCols: 12, //Simplegrid 12-col max layout
      dataLenght: dataSource.length,
      data: dataSource,
      arraySliceStart: 0,
      totalPageCount: null,
      pageCount: null,
      pageNumber: null,
      showNextButton: true,
      showPrevButton: true
    };
  }

  // Count the total number of pages based on items per page and the number of items in the array
  pageCount = (arrayLength) => {
    let { dataLenght, itemsPerPage } = this.state;
    // let totalPageCount = parseInt(dataLenght / itemsPerPage);
    let totalPageCount = parseInt(arrayLength / itemsPerPage);
    // console.log("pagecount is: " + totalPageCount);
    return totalPageCount;
  };

  componentDidMount = () => {};
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
    let {
      itemsPerPage,
      data,
      arraySliceStart,
      showNextButton,
      showPrevButton
    } = this.state;

    // Variable for the end of the counter for the array slice.
    // if its bigger than the array it sets the value to max (of the array)
    let numberOfPages = this.pageCount(data.length);
    let arraySliceEnd = arraySliceStart + itemsPerPage;

    // Hides previous and next buttons if the array is at the start or end of the array (last or first page)
    if (arraySliceEnd >= data.length) {
      arraySliceEnd = data.length;
      showNextButton = false;
    }
    if (arraySliceStart <= 0) {
      showPrevButton = false;
    }

    //  to go to 3rd page (8-12)
    // 0-4  page 1
    // 4-8  page 2
    // 8-12 page 3
    // 12-16  page 4
    // arraySliceEnd = page * itemsperpage
    // arraySliceStart = arraysliceend - itemsperpage

    // If i didnt have this code i got funky results in the end of the slider :)
    // if (arraySliceStart > data.length - itemsPerPage) {
    //   arraySliceStart = data.length - itemsPerPage;
    // }

    console.log("arraySliceStart: " + arraySliceStart);
    console.log("arraySliceEnd: " + arraySliceEnd);

    return (
      <div className="carousel-slider">
        <BackButton
          prev={this.prev}
          showPrevButton={showPrevButton ? true : false}
        />

        <SliderContent
          data={data}
          arraySliceStart={arraySliceStart}
          arraySliceEnd={arraySliceEnd}
          howManyCols={this.howManyCols()}
        />

        <NextButton
          next={this.next}
          showNextButton={showNextButton ? true : false}
        />
        <div className="row">
          <SliderButton data={data} numberOfPages={numberOfPages} />
        </div>
      </div>
    );
  }
}

export default Carousel1;
