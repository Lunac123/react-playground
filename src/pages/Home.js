import React, { Component } from "react";
import { Parallax } from "react-parallax";

// layouts
import Sections from "../components/pageLayouts/Sections";
// reusable h1
import HeaderTag from "../components/elements/headerTag";

// import { Carousel } from "../components/carousel/";
import { Carousel as PageCarousel } from "../components/carousel-v3/";
import { Carousel } from "../components/carousel/";
import image1 from "../img/lich-king.jpg";

// const insideStyles = {
//   background: "white",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
// };

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "Welcome Fellow Gamers!!",
        color: "title-text"
      },
      fourCol: [
        {
          title: "Title 1",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 1,
          button: true,
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
        },
        {
          title: "Title 2",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 2,
          button: true,
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
        },
        {
          title: "Title 3",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 3,
          button: false,
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
        },
        {
          title: "Title 4",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 4,
          button: true,
          buttonClass: "button orange-btn",
          link: "#",
          buttonTitle: "read more",
          colClass: "col-3"
        }
      ]
    };
  }

  render() {
    let { title, fourCol } = this.state;
    // styles
    let { generalStyles } = this.props;
    // console.log(JSON.stringify(generalStyles));
    return (
      <React.Fragment>
        <Carousel />
        <HeaderTag title={title} />

        <PageCarousel />
        <Parallax
          bgImage={image1}
          bgImageAlt="Lich King"
          blur={0}
          strength={400}
        >
          <div style={{ height: "300px" }} />
        </Parallax>
        <Sections
          vals={fourCol}
          padding={generalStyles.paddingTopBottom}
          // backgroundColor={generalStyles.backgroundColorOptions.darkGrey}
        />
        <Sections
          vals={fourCol}
          padding={generalStyles.paddingTopBottom}
          // backgroundColor={generalStyles.backgroundColorOptions.darkGrey}
        />
        <Sections
          vals={fourCol}
          padding={generalStyles.paddingTopBottom}
          // backgroundColor={generalStyles.backgroundColorOptions.darkGrey}
        />
      </React.Fragment>
    );
  }
}
export default homePage;
