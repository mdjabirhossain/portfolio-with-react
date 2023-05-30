import React from "react";
import "./home.styles.scss";
import homeimg from "../images/CB.jpeg";
import bgimage from "../images/maksimilen.jpeg";
// import cloud from "../images/cloud-white.png";
import cloud from "../images/cloud0.png";
import aboutimg0 from "../images/maksimilen.jpeg";

const Home = () => {
  return (
    <div className="homepage-container">
      {/* <div className="image-container">
        <img src={homeimg} className="image" />
      </div> */}

      <img className="image-top" src={cloud} />
      <div className="content-container">
        <div className="quote">
          "A big idea comes along at just the moment when the technology exists
          to implement it."
        </div>
        <div className="by">Walter Isaacson</div>
      </div>
      <img className="image-bottom" src={cloud} />
    </div>
  );
};

// const Home = () => {
//   return (
//     <div
//       className="homepage-container"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url(${aboutimg0})`,
//       }}
//     >
//       <div className="content-container">
//         <div className="content">"Could she be more out of my league"</div>
//         {/* <img src={cloud} style={{ color: "white" }} /> */}
//       </div>
//     </div>
//   );
// };

export default Home;
