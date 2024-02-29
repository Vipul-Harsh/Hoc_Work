"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowShape from "../../../public/images/about/arrow-shape.png";
import aboutImg2 from "../../../public/images/about/mid-century-modern-wood-cabinet-by-leafty-wall.jpg";
import archiTextImg from "../../../public/images/about/archi-text.png";
import arrowIcon from "../../../public/images/about/arrow.svg";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="about-image-one"
                style={{ backgroundImage: `url(/images/about/artist-props-photography.jpg)` }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="arrow-shape">
                  <Image
                    src={arrowShape}
                    alt="Shape"
                    width={182}
                    height={128}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div
                className="about-one-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="title">
                  <h2 style={{ color: "grey" }}>
                    Welcome to{" "}
                    <span style={{ color: "black" }}>HOC Furniture</span> <br />
                    Where Every Piece Tells a Story
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="inner-image">
                      <Image
                        src={aboutImg2}
                        alt="about"
                        width={690}
                        height={590}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div
                      className="about-two-content"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-once="true"
                    >
                      <span style={{ color: "black" }}>ABOUT US</span>
                      <h2></h2>
                      <p>
                        At HOC Premium Furniture, we specialize in crafting
                        visionary designs that transcend expectations. With our
                        team of highly skilled artisans and designers, we
                        redefine luxury living through exquisite craftsmanship
                      </p>

                      <ul className="list">
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                          />
                          Innovative Design Approach with a Focus on Elegance
                        </li>
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                            color="black"
                          />
                          Exceptional Craftsmanship by Highly Skilled Artisans
                        </li>
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                          />
                          Customer-Centric Philosophy Ensuring Unrivaled Service
                        </li>
                        <li>
                          <Image
                            src={arrowIcon}
                            alt="arrow"
                            width={28}
                            height={10}
                          />
                          Sustainable Practices Rooted in Environmental
                          Responsibility
                        </li>
                      </ul>

                      <div className="about-btn">
                        <Link href="/about-us"  style={{background:"black",color:"white",padding:"15px"}}>
                          Know More About Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-wrap">
          <Image src={archiTextImg} alt="image" width={766} height={157} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
