import React from "react";
import Button from "../elements/aButton";

const ImageSlide = ({ data }) => {
  // console.log("Data from inside ImageSlide: " + JSON.stringify(data));
  return (
    <div
      id={"slide" + data.id}
      className="image-slide"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div id={"body" + data.id} className="slide-block">
        <h1 style={{ color: `${data.color}` }}>{data.title}</h1>
        <span style={{ color: `${data.color}` }}>{data.body}</span>

        <Button
          link={data.buttonLink}
          classes={data.class}
          target={data.target}
          buttonTitle={data.buttonTitle}
        />
      </div>
    </div>
  );
};

export default ImageSlide;

// let { data } = this.props;
//     return (
//       <div
//         id={"slide" + data.id}
//         className="image-slide"
//         style={{
//           backgroundImage: url(${data.image})
//         }}
//       >
//         <div
//           style={{
//             marginTop: "150px",
//             padding: "30px"
//           }}
//           id={"body" + data.id}
//         >
//           <h1>{data.title}</h1>
//           <span>{data.body}</span>
//           <Button
//             link={data.buttonLink}
//             target={data.target}
//             buttonTitle={data.buttonTitle}
//             classes={data.class}
//           />
//         </div>
//       </div>
//     );
//   }
