import React from "react";
import design from "../assests/Design.png";
import development from "../assests/Developments.png";
import marketing from "../assests/marketing-1.png";
import consulting from "../assests/Consulting.png";

function OfferImages() {
  const details = [
    {
      id: 1,
      image: design,
      name: "Design",
    },
    {
      id: 2,
      image: development,
      name: "Development",
    },
    {
      id: 3,
      image: marketing,
      name: "Marketing",
    },
    {
      id: 4,
      image: consulting,
      name: "Consulting",
    },
  ];

  return (
    <>
      <div class="container text-center mt-5 mb-5 ">
        <div class="row  justify-content-center col-xl-12 col-lg-12">
          {details.map((detail) => {
            return (
              <div class="col-6 col-xl-2 col-lg-2 col-md-2 ">
                <img
                  src={detail.image}
                  class="img-fluid mx-auto d-block  "
                  alt={detail.name}
                />
                <p>{detail.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OfferImages;
