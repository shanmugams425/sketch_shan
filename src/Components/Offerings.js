import React from "react";
import sysimage from "../assests/Digital_build_01.png";
import sysimage1 from "../assests/Digital_refresh_02.png";
import OfferImages from "./OfferImages.js";

function Offerings() {
  return (
    <div className="container ">
      {/* OUR OFFERINGS */}

      <div>
        <h2 className=" text-center mb-5">
          <b>
            Ou
            <span class="border-bottom border-danger border-3">r offerin</span>
            gs
          </b>
        </h2>
        <div class="card col-xl-7 col-lg-8 col-md-12 col-sm-12 ">
          <div class="card-body">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 p-4">
                <img
                  src={sysimage}
                  alt="image1"
                  className="image-fluid mx-auto d-block"
                  width="80%"
                />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-center ">
                <h2 className="p-2">
                  Digital Build:
                  <b> Innovation</b>
                </h2>

                <p>
                  Through the Digital Build process, we build your digital
                  assets from scratch and develop your embryonic ideas into a
                  robust brand.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-sm-1 col-md-1 mt-2 col-xl-5 col-lg-5"></div>
          <div className="col-sm-11 col-md-12 col-xl-7 col-lg-7">
            <div class="card">
              <div class="card-body ms-4">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-7 col-md-7 col-sm-12 text-center p-2">
                    <h2 className="p-2">
                      Digital Refresh:
                      <b> Optimization</b>
                    </h2>
                    <p>
                      We equip you to always be at the top of your game by
                      building your digital presence across newer platforms like
                      IoT, wearables, voice and gesture based interactions.
                    </p>
                  </div>

                  <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 p-4">
                    <img
                      src={sysimage1}
                      alt="image1"
                      className="image-fluid mx-auto d-block"
                      width="80%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OfferImages />
      </div>
    </div>
  );
}

export default Offerings;
