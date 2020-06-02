import React, { Component } from "react";

// Imports an entire directory where you can call whatever you want from that directory
import ImageSlide from "./ImageSlide";
import { NextButton, BackButton, BannerButtons } from "../carousel/";
import imageUrls from "../imageUrlsData";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      intervalId: "",
      maxIndex: imageUrls.length - 1,
      intervalTime: 5000,
      buttonData: imageUrls
    };
  }

  componentDidMount = () => {
    // this.setBannerAnimation();
  };

  setBannerAnimation = () => {
    const id = new Date().getSeconds().toString() + "INTERVAL_ID";
    this.setState({ intervalId: id });
    // console.log("inside setBannerAnimation: " + id);
    this.animateBanner();
  };

  animateBanner = () => {
    let { intervalTime } = this.state;

    this.intervalId = setInterval(() => {
      let { pageNum, maxIndex } = this.state;
      if (pageNum == maxIndex) {
        this.setState({ pageNum: 0 });
      } else {
        this.setState({ pageNum: this.state.pageNum + 1 });
      }
    }, intervalTime);
  };

  next = () => {
    let { pageNum, maxIndex } = this.state;

    if (pageNum == maxIndex) {
      this.setState({ pageNum: 0 });
      this.addNextAnimation(pageNum);
    } else {
      this.setState({ pageNum: this.state.pageNum + 1 });
      this.addNextAnimation(pageNum);
    }
  };

  addNextAnimation = (pageNum) => {
    console.log("pagenum inside addnextanimation " + pageNum);
    let currentSlide = document.getElementById("slide" + pageNum);
    let currentBody = document.getElementById("body" + pageNum);
    currentSlide.classList.remove("animateElementForward");
    currentSlide.classList.remove("animateElementBack");
    currentBody.classList.remove("animateTitleForward");
    currentBody.classList.remove("animateTitleBack");
    setTimeout(() => {
      currentSlide.classList.add("animateElementForward");
      currentBody.classList.add("animateTitleForward");
    }, 5);
  };

  prev = () => {
    let { pageNum, maxIndex } = this.state;

    if (pageNum == 0) {
      this.setState({ pageNum: maxIndex });
      this.addBackAnimation(pageNum);
    } else {
      this.setState({ pageNum: this.state.pageNum - 1 });
      this.addBackAnimation(pageNum);
    }
  };

  bannerButtonEvent = (e) => {
    let id = e.target.id;
    let currentButton = document.getElementById(id);
  };
  addBackAnimation = (pageNum) => {
    console.log("pagenum inside backanimation " + pageNum);
    let currentSlide = document.getElementById("slide" + pageNum);
    let currentBody = document.getElementById("body" + pageNum);
    currentSlide.classList.remove("animateElementBack");
    currentSlide.classList.remove("animateElementForward");
    currentBody.classList.remove("animateTitleForward");
    currentBody.classList.remove("animateTitleBack");
    setTimeout(() => {
      currentSlide.classList.add("animateElementBack");
      currentBody.classList.add("animateTitleBack");
    }, 5);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    let { pageNum, buttonData } = this.state;

    // console.log("Pagenumber: " + pageNum);
    return (
      <div className="carousel">
        <BackButton prev={this.prev} />
        <ImageSlide data={imageUrls[pageNum]} />
        <BannerButtons data={buttonData} click={this.bannerButtonEvent} />
        <NextButton next={this.next} />
      </div>
    );
  }
}
export default Carousel;
