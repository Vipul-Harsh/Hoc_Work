"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const projectsData = [
  // ... (same data)
  {
    id: "1",
    image: "/images/projects/projects7.jpg",
    image2: "/images/projects/projects8.jpg",
    title: "Refined Elegance",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "2",
    image: "/images/projects/projects8.jpg",
    image2: "/images/projects/projects8.jpg",
    title: "Tower House",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "3",
    image: "/images/projects/projects9.jpg",
    image2: "/images/projects/projects8.jpg",
    title: "House Renovation",
    category: "Interior",
    link: "/portfolio/portfolio-details",
  },
  {
    id: "4",
    image: "/images/projects/projects10.jpg",
    image2: "/images/projects/projects8.jpg",
    title: "Penthouse",
    category: "Architecture",
    link: "/portfolio/portfolio-details",
  },
];

type ProjectType = {
  id: string;
  image: string;
  image2: string;
  title: string;
  category: string;
  link: string;
};

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isHovered, setIsHovered] = useState(false);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="projects-area bg-wrap-with-black ptb-100"
        style={{ background: "white" }}
      >
        <div className="container">
          {projectsData && (
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="projects-inner-border">
                  {projectsData.slice(0, 2).map((value, i) => (
                    <div className="projects-item" key={i}>
                      <div className="projects-image">
                        <Image
                          src={value.image}
                          alt="projects"
                          width={750}
                          height={950}
                        />

                        <button
                          className="projects-btn"
                          onClick={() => openModal(value)}
                        >
                          SEE CASE STUDIES
                        </button>
                      </div>
                      <div className="projects-content">
                        <h3>
                          <Link href={value.link}>{value.title}</Link>{" "}
                          <span>{value.category}</span>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="section-title-wrap">
                  <span>PROJECTS</span>
                  <h2 style={{ color: "black" }}>
                    Selected Projects That We Really Want To Show You
                  </h2>
                </div>

                <div className="projects-inner-border">
                  {projectsData.slice(2, 4).map((value, i) => (
                    <div className="projects-item" key={i}>
                      <div className="projects-image">
                        <Image
                          src={value.image}
                          alt="projects"
                          width={750}
                          height={950}
                        />

                        <button
                          className="projects-btn"
                          onClick={() => openModal(value)}
                        >
                          SEE CASE STUDIES
                        </button>
                      </div>
                      <div className="projects-content">
                        <h3>
                          <Link href={value.link}>{value.title}</Link>{" "}
                          <span>{value.category}</span>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="projects-btn">
            <Link href="/portfolio-2" style={{ fontSize: "24px" }}>
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "50%" }}>
            <div className="headingtext">
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
              <h2>{selectedProject?.title}</h2>
            </div>
            <div className="cont-row" style={{ display: "flex" }}>
              <div className="cont-item">
                <Image
                  src={
                    isHovered
                      ? selectedProject?.image2 ?? "/default-image.jpg"
                      : selectedProject?.image ?? "/default-image.jpg"
                  }
                  alt="image"
                  width={100}
                  height={100}
                  className="image-fit"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="cont-item">
                <div
                  className="dimension"
                  style={{
                    border: "1px solid black",
                    height: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="heading-modal">
                    <h1>Dimensions</h1>
                  </div>
                  <div className="dim">
                    <p
                      className="text-to-hover"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Dimension 1
                    </p>
                    <p className="text-to-hover">Dimension 2</p>
                    <p className="text-to-hover">Dimension 3</p>
                    <div className="full-width-cont">Full Width Div</div>
                  </div>
                </div>

               
              </div>
            </div>
            {/* Add more details about the project here */}
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .container {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
        }
        
        .cont-row {
          display: flex;
          justify-content: space-between;
          border: 1px solid #000;
          margin-bottom: 20px;
        }
        
        .cont-item {
          flex: 1;
          padding: 10px;
          border-right: 1px solid #000;
          text-align: center;
        }
      
        .cont-item:last-child {
          border-right: none;
        }
      
        .full-width-cont {
          width: 100%;
          border: 1px solid #000;
          padding: 20px;
          text-align: center;
        }

        .modal-content {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          width: 70%;
          max-width: 500px;
          z-index: 1001;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #333;
        }
        .image-fit {
          width: 100%;
          height: 100%;
        }

        .cont-item:first-child .image-fit {
          display: block;
        }

        .cont-item:first-child .image-hover {
          display: none;
        }

        .cont-item:last-child .image-fit {
          display: none;
        }

        .cont-item:last-child .image-hover {
          display: block;
        }
      `}</style>
    </>
  );
};

export default Projects;
