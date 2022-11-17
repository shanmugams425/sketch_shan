import React from "react";
import "./Content.css";
import banner from "../assests/scketch-banner-notrans.png";

// import background from "../assests/background.png";

function Content() {
  return (
    <>
      <div className="bg-image ">
        <img className="img-fluid mx-auto d-block " src={banner} />
        <p className="text-center fs-1 col-12 p-5">
          A creative studio that
          <br></br>
          <span className="text-color col-sm-6 col-dm-6">Thinks Design</span>
        </p>
        <p> </p>
      </div>
    </>
  );
}

export default Content;
