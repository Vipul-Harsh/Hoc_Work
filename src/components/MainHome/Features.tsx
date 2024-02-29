"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowRightIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    icon: "flaticon-measuring",
    title: "Precision",
    shortText:
      "We are a premier woodworking studio committed to crafting precision-cut designs that exceed expectations and redefine craftsmanship.",
    link: "/services/service-details",
  },
  {
    id: "2",
    icon: "flaticon-interior-design",
    title: "Creative Design",
    shortText:
      "We are a pioneering design studio devoted to crafting innovative designs that surpass conventional expectations, pushing the boundaries of creativity.",
    link: "/services/service-details",
  },
  {
    id: "3",
    icon: "flaticon-mansory",
    title: "High Quality Wood ",
    shortText:
      "We are a premier woodworking establishment committed to producing high-quality woodwork designs that surpass expectations and elevate standards. ",
    link: "/services/service-details",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="services-wrap-area pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-between align-items-end">
            <div className="title">
              <span className=" text-black">FEATURES</span>
              <h2>
                We Provide these <b>Features </b>Which Help us to achive 100% Satisfaction.
              </h2>
            </div>
            {/* <div className="link-btn">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </div> */}
          </div>

          {servicesData && (
            <div className="row justify-content-center">
              {servicesData &&
                servicesData.slice(0, 3).map((value, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="services-item">
                      <div className="icon">
                        <i className={value.icon}></i>
                      </div>
                      <h3>
                        <Link href={value.link}>{value.title}</Link>
                      </h3>
                      <p>{value.shortText}</p>

                      <Link href={value.link} className="services-btn">
                        <Image src={arrowRightIcon} alt="arrow-right" width={18} height={18} />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
