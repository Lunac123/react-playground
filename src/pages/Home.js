import React, { Component } from "react";

// layouts
import Sections from "../components/pageLayouts/Sections";
// reusable h1
import HeaderTag from "../components/elements/headerTag";

// import { Carousel } from "../components/carousel/";
import { Carousel } from "../components/carousel-v3/";
class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "welcome to my portfolio website",
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
        <Sections
          vals={fourCol}
          padding={generalStyles.paddingTopBottom}
          backgroundColor={generalStyles.backgroundColorOptions.darkGrey}
        />
      </React.Fragment>
    );
  }
}
export default homePage;
