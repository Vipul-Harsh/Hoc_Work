"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import close from "/public/images/client/close.svg"
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
  const [activeTab, setActiveTab] = useState("Dimensions");
  const renderContent = () => {
    switch (activeTab) {
      case "Dimensions":
        return (
          <div className="dim">
           <div className="box-dimension" style={{display:"flex",justifyContent:"space-around"}}>
           <div className="dim-head" style={{textAlign:"center"}} ><h4>Height</h4></div>
            <div className="dim-quantity" style={{textAlign:"center"}}>
            <p
              className="text-to-hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Dimension 1
            </p>
            </div>
            </div>
            <div className="box-dimension" style={{display:"flex",justifyContent:"space-around"}}>
            <div className="dim-head" style={{textAlign:"center"}}><h4>Breadth</h4></div>
            <div className="dim-quantity" style={{textAlign:"center"}}>
            <p
              className="text-to-hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Dimension 2
            </p>
            </div>
            </div>
            <div className="box-dimension" style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}>
              <div className="dim-head" style={{textAlign:"center"}}><h4>Length</h4></div>
            <div className="dim-quantity" style={{textAlign:"center"}}>
            <p
              className="text-to-hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Dimension 3
            </p>
            </div>
           
            </div>
            {/* <h3>Height</h3>
            
            <p className="text-to-hover">Dimension 2</p>
            <h3>Height</h3>
            <p className="text-to-hover">Dimension 3</p> */}
          </div>
        );
      case "Materials":
        return <div className="materials">{/* Content for Materials */}
        <div className="dim">
            <p
              className="text-to-hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
             Material 1
            </p>
            <p className="text-to-hover">Material 2</p>
            <p className="text-to-hover">Material 3</p>
          </div>
        </div>;
      case "Application":
        return (
          <div className="application">{/* Content for Application */}</div>
        );
      default:
        return null;
    }
  };
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
                          style={{border:"none"}}
                        >
                          SEE MORE
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
                          style={{border:"none"}}
                        >
                          SEE MORE
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
          <div
            className="modal-content"
            style={{ maxWidth: "59%", height: "95%" }}
          >
            <div className="headingtext">
              <button className="close-btn" onClick={closeModal}>
              <Image alt="close"  src={close} width={30} height={30}/>
              </button>
              <h2>{selectedProject?.title}</h2>
            </div>
            {/* <div
              className="cont-row"
              style={{ display: "flex", height: "100%",flexWrap:"wrap" }}
            >
              <div className="cont-item" >
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
              <div
                className="cont-item"
                style={{ display: "flex", flexDirection: "column",justifyContent:"space-between" }}
              >
                <div
                  className="dimension"
                  style={{
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3);",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                 
                  <div className="buttons-container" style={{display:"flex",justifyContent:"space-between"}}>
                    <button
                      className={activeTab === "Dimensions" ? "active" : ""}
                      onClick={() => setActiveTab("Dimensions")}
                      style={{background:"#BA8D6D",border:"none",color:"white",width:"31.33%"}}
                    >
                      Dimensions
                    </button>
                    <button
                      className={activeTab === "Materials" ? "active" : ""}
                      onClick={() => setActiveTab("Materials")}
                      style={{background:"#BA8D6D",border:"none",color:"white",width:"31.33%"}}
                    >
                      Materials
                    </button>
                    <button
                      className={activeTab === "Application" ? "active" : ""}
                      onClick={() => setActiveTab("Application")}
                      style={{background:"#BA8D6D",border:"none",color:"white",width:"31.33%"}}
                    >
                      Application
                    </button>
                  </div>
                  {renderContent()}
                </div>
                <div className="full-width-cont" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  saepe eius maxime. Amet assumenda est, veritatis ducimus non
                  impedit beatae facere doloremque error ex minima velit.
                  Possimus dolores aspernatur tempore.
                </div>
              </div>
            </div> */}
             <div
              className="cont-row"
              style={{ display: "flex", height: "100%", flexWrap: "wrap" }}
            >
              <div className="cont-item" >
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
              <div
                className="cont-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                 
                }}
              >
                <div
                  className="dimension"
                  style={{
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="buttons-container"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      className={activeTab === "Dimensions" ? "active" : ""}
                      onClick={() => setActiveTab("Dimensions")}
                      style={{
                        background: "#BA8D6D",
                        border: "none",
                        color: "white",
                        width: "31.33%",
                      }}
                    >
                      Dimensions
                    </button>
                    <button
                      className={activeTab === "Materials" ? "active" : ""}
                      onClick={() => setActiveTab("Materials")}
                      style={{
                        background: "#BA8D6D",
                        border: "none",
                        color: "white",
                        width: "31.33%",
                      }}
                    >
                      Materials
                    </button>
                    <button
                      className={activeTab === "Application" ? "active" : ""}
                      onClick={() => setActiveTab("Application")}
                      style={{
                        background: "#BA8D6D",
                        border: "none",
                        color: "white",
                        width: "31.33%",
                      }}
                    >
                      Application
                    </button>
                  </div>
                  {renderContent()}
                </div>
                <div className="full-width-cont">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  saepe eius maxime. Amet assumenda est, veritatis ducimus non
                  impedit beatae facere doloremque error ex minima velit.
                  Possimus dolores aspernatur tempore.
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
        @media (max-width: 768px) {
          .cont-row {
            flex-direction: column;
          }

          .cont-item {
            width: 100%;
          }
        }


        .cont-row {
          display: flex;
          justify-content: space-between;
          
          margin-bottom: 20px;
        }

        .cont-item {
          flex: 1;
          padding: 10px;
          
          text-align: center;
        }

        .cont-item:last-child {
          border-right: none;
        }

        .full-width-cont {
          width: 100%;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          
          padding: 20px;
          text-align: justify;
          height: auto;
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
