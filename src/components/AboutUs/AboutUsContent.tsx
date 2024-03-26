"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about/about5.jpg";
import arrowIcon from "../../../public/images/about/arrow2.svg";
import videoThumb from "../../../public/images/about/about4.png";
import videoCircleImg from "../../../public/images/main-banner/BEST_FURNITURE_FIRM_IN_2024____2_-removebg-preview.png";
import textShape from "../../../public/images/main-banner/text-1711450335090.png";

import OurMissionAndVision from "./OurMissionAndVision";

const AboutUsContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/sVi2pdF1aIc?si=wuP0-H9KuJnEk0Js",
        ]}
      />

      <div className="about-area pt-100">
        <div className="container">
          <div className="about-three-title">
            <span>ABOUT US</span>
            <h2>
              We Are <b>HOC Furnitures.</b> We Create Unique And Sustainable
              Living Spaces, Designed For Sharing
            </h2>
          </div>

          <div className="about-image-three">
            <Image src={aboutImg} alt="image" width={1320} height={430} />
          </div>

          <div className="about-three-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-three-left-content">
                  <p className="mb-0">
                    We are a leading furniture firm committed to crafting
                    visionary designs that exceed expectations. At Hoc
                    Furnitures, our team of highly skilled architects and
                    designers specializes in creating transformative and
                    innovative furniture solutions.
                  </p>

                  <ul className="list">
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Innovative Design Approach
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Highly Skilled Expertise and Specialization
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />{" "}
                      A client-centric approach for an architectural company
                    </li>
                    <li>
                      <Image
                        src={arrowIcon}
                        alt="arrow"
                        width={28}
                        height={10}
                      />
                      Sustainable Design Practices
                    </li>
                  </ul>

                  <div className="about-image-wrap">
                    <Image
                      src={videoThumb}
                      alt="image"
                      width={1052}
                      height={1120}
                    />

                    <div className="wrap-video">
                      <Image
                        src={videoCircleImg}
                        alt="image"
                        width={184}
                        height={184}
                      />

                      <div
                        className="video-btn text-decoration-none"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="ri-play-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-three-right-content">
                  {/* OurMissionAndVision */}
                  <OurMissionAndVision />

                  <div className="about-wrap-content">
                    <h2>
                      Crafting Furniture with Passion and Precision at <span style={{color:"#BA8D6D"}}>Hoc
                      Furniture</span>
                    </h2>
                    <p>
                      Hoc Furniture stands as a premier design firm,
                      specializing in creating exceptional furniture pieces that
                      blend functionality with aesthetics. From unique designs
                      to meticulous craftsmanship, our portfolio boasts an array
                      of acclaimed and award-winning creations.
                    </p>
                    <p>
                      At Hoc Furniture, we believe furniture transcends mere
                      utility; it's an art that shapes the ambiance of spaces.
                      With an in-depth understanding of design principles and a
                      dedication to quality, we aim to transform interiors and
                      elevate the furniture experience. Our commitment resonates
                      in every piece we craft, reflecting our passion and
                      expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-wrap-shape">
          <Image src={textShape} alt="image" width={660} height={140} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
