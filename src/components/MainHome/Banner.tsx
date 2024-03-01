"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg from "../../../public/images/features/wrap.png";
import arrowIcon from "../../../public/images/features/arrow.svg";
import architecturalShape from "../../../public/images/features/architectural-shape.png";

const CoreFeatures: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div 
                className="features-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h2 style={{color:"#808080"}}>
                Craftsmanship Redefined: <span className=" text-black">Exquisite Spaces</span> with
                  Unparalleled Design
                </h2>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <div className="inner-box">
                      <div className="title">
                        <h3 className="counter">15</h3>
                        <span>
                          YEARS OF <b>EXPERIENCE</b>
                        </span>
                      </div>
                      <div className="wrap">
                        <Image src={featureImg} alt="image" width={161} height={231} />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-7">
                    <div className="inner-content " > 
                      <p style={{color:"black"}}>
                      At HOC Furnitures, we specialize in transforming interiors into captivating spaces that reflect your style and personality. With our seasoned designers, we curate designs that inspire and elevate your living experience.
                      </p>

                      

                      <ul className="list" >
                        <li style={{color:"#595959"}}>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Innovative Design Approach
                        </li>
                        <li style={{color:"#595959"}}>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Tailored Design Solutions
                        </li>
                        <li style={{color:"#595959"}}>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />A client-centric
                          approach
                        </li>
                      </ul>

                      <div className="features-btn">
                        <Link href="#" className=" bg-black text-white p-3 mt-4">
                        Explore Our Interior Designs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div
                className="features-image"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
                style={{
                  backgroundImage: `url(/images/features/features1.jpg)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="features-shape">
          <Image src={architecturalShape} alt="Architectural Shape" width={477} height={562} />
        </div>
      </div>
    </>
  );
};

export default CoreFeatures;
