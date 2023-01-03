import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largText1}</h1>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />
      </div>

      <div>
        {/* <Link href={`/product/${heroBanner.slug}`}> */}
        {/* <button type="button">{heroBanner.buttonText}</button> */}
        {/* </Link> */}

        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
