"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import rightArrowIcon from "../../../public/images/arrow-right2.svg";

const projectsData = [
  {
    id: "1",
    image: "/images/projects/furniture6.png",
    title: "Teak Stool",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "2",
    image: "/images/projects/furniture4.png",
    title: "Rocking Chair",
    category: "Sitting",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "3",
    image: "/images/projects/furniture2.png",
    title: "Side Table",
    category: "Decor",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "4",
    image: "/images/projects/furniture3.png",
    title: "Single Dining",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "5",
    image: "/images/projects/furniture.png",
    title: "Armchair",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "6",
    image: "/images/projects/furniture7.png",
    title: "Bedding",
    category: "Design",
    link: "/portfolio/portfolio-details",
  },
];

const RecentProjects: React.FC = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container">
          <div className="section-title d-flex justify-content-center">
            <h2>
              Our <span style={{color:"#7D7D7D"}}>Products</span>
            </h2>
          </div>

          {projectsData && (
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(0, 2).map((value, i) => (
                      <div className="projects-item" key={i}>
                        <div className="projects-image">
                          <Link href={value.link}>
                            <Image
                              src={value.image}
                              alt="image"
                              width={570}
                              height={720}
                            />
                          </Link>

                          <div className="icon">
                            <Link href={value.link}>
                              <Image
                                src={rightArrowIcon}
                                alt="arrow-right"
                                width={24}
                                height={24}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="projects-content">
                          <h3>
                            <Link href={value.link}>{value.title}</Link>
                            <span className="ms-2">{value.category}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(2, 4).map((value, i) => (
                      <div className="projects-item" key={i}>
                        <div className="projects-image">
                          <Link href={value.link}>
                            <Image
                              src={value.image}
                              alt="image"
                              width={570}
                              height={720}
                            />
                          </Link>

                          <div className="icon">
                            <Link href={value.link}>
                              <Image
                                src={rightArrowIcon}
                                alt="arrow-right"
                                width={24}
                                height={24}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="projects-content">
                          <h3>
                            <Link href={value.link}>{value.title}</Link>
                            <span className="ms-2">{value.category}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="projects-inner-border">
                  {projectsData &&
                    projectsData.slice(4, 6).map((value, i) => (
                      <div className="projects-item" key={i}>
                        <div className="projects-image">
                          <Link href={value.link}>
                            <Image
                              src={value.image}
                              alt="image"
                              width={570}
                              height={720}
                            />
                          </Link>

                          <div className="icon">
                            <Link href={value.link}>
                              <Image
                                src={rightArrowIcon}
                                alt="arrow-right"
                                width={24}
                                height={24}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="projects-content">
                          <h3>
                            <Link href={value.link}>{value.title}</Link>
                            <span className="ms-2">{value.category}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          <div className="projects-btn">
            <Link href="/portfolio">VIEW ALL PROJECTS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
