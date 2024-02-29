"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "../../../public/images/arrow-right.svg";

const servicesData = [
  {
    id: "1",
    icon: "/images/projects/frame-mock-up-chair.jpg",
    title: "Cushion Chair",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "2",
    icon: "/images/projects/chair-living-room.jpg",
    title: "Study Table ",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "3",
    icon: "/images/projects/still-life-shoe-rack-indoors.jpg",
    title: "Shoe Rack Teak",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "4",
    icon: "/images/projects/view-photo-frame-with-interior-home-decor.jpg",
    title: "Sofa",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "5",
    icon: "/images/projects/still-life-with-plants-deco.jpg",
    title: "Decor",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
  {
    id: "6",
    icon: "/images/projects/top-view-boards-mdf-material.jpg",
    title: "Wooden Plates",
    text: "We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.",
    link: "/services/service-details",
  },
];

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-wrap-area without-bg-color pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <span className=" text-black">PRODUCTS</span>
            <h2 >
              See Our Latest Products

            </h2>
            <br/>
            <h4>By HOC </h4>
          </div>

          {servicesData && (
            <div className="row justify-content-center">
              {servicesData &&
                servicesData.map((value, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="services-item">
                      <div className="icon">
                        <Image
                          src={value.icon}
                          width={600}
                          height={500}
                          alt="image"
                          style={{
                           
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </div>
                      <h3>
                        <Link href={value.link}>{value.title}</Link>
                      </h3>

                      <Link href={value.link} className="services-btn">
                        <Image
                          src={arrowIcon}
                          alt="arrow-right"
                          width={18}
                          height={18}
                        />Shop Now
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

export default ServicesCard;
