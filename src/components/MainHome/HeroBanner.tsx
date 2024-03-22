"use client";

import React from "react";
import Link from "next/link";
import ReactCompareImage from "react-compare-image";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="as-banner-area" >
        <div className="container-fluid" style={{maxWidth:"1340px"}}>
          <div className="as-banner-image">
            <ReactCompareImage 
              leftImage="/images/main-banner/as-banner-after.jpg"
              rightImage="/images/main-banner/as-banner-before.jpg"
            />
          </div>

          <div 
            className="as-banner-content"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h1>
            Elevate Your Space with  <b>HOC Furniture</b> Design Magic
            </h1>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
