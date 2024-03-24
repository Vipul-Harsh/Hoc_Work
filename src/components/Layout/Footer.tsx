"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import whiteLogo from "../../../public/images/white-logo.svg";
import logo from "/public/images/main-banner/HOC New Year 2024.png";
import NewsletterForm from "./NewsletterForm";

// Social Links
const socialLinksData = [
  {
    id: "1",
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: "3",
    name: "Linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    id: "4",
    name: "Twitter",
    link: "https://www.twitter.com/",
  },
];

// Page Links
const pageLinksData = [
  {
    id: "1",
    name: "Projects",
    link: "/portfolio",
  },
  {
    id: "2",
    name: "News And Articles",
    link: "/blog",
  },
  {
    id: "3",
    name: "Request a Quote",
    link: "/request-quote",
  },
  {
    id: "4",
    name: "Services",
    link: "/services",
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="image"
                      width={113}
                      height={54}
                    />
                  </Link>
                </div>
                <p>
                  We would love to be a part of your dream space or home
                  project.
                </p>
              </div>
            </div>

            <div
              className="col-lg-2 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>FOLLOW US</h3>

                {socialLinksData && (
                  <ul className="social-link">
                    {socialLinksData &&
                      socialLinksData.map((value, i) => (
                        <li key={i}>
                          <a href={value.link} target="_blank">
                            <i className="ri-arrow-right-line"></i> {value.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>SITE MAP</h3>

                {pageLinksData && (
                  <ul className="quick-link">
                    {pageLinksData &&
                      pageLinksData.map((value, i) => (
                        <li key={i}>
                          <a href={value.link}>{value.name}</a>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-once="true"
            >
              {/* NewsletterForm */}
              <NewsletterForm />
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div
            className="copyright-area-content"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="left-content">
              <ul
                className="copyright-list"
                style={{
                  listStyle: "none",
                  display: "flex",
                 
                  paddingLeft: "0",
                  gap:"20px"
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{ color: "#ba8d6d", textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#ba8d6d", textDecoration: "none" }}
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#ba8d6d", textDecoration: "none" }}
                  >
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: "#ba8d6d", textDecoration: "none" }}
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-content">
              <div className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  style={{
                    color: "#ba8d6d",
                    textDecoration: "none",
                    marginRight: "15px",
                  }}
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  style={{
                    color: "#ba8d6d",
                    textDecoration: "none",
                    marginRight: "15px",
                  }}
                >
                  <i className="ri-twitter-fill"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  style={{ color: "#ba8d6d", textDecoration: "none" }}
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="copyright-area-content"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="left-content">
              <p>
                © <span>2024</span> HOC. All Rights Reserved.
              </p>
            </div>
            <div className="right-content">
              <p>
                Designed & Maintained By{" "}
                <a href="https://envytheme.com/" target="_blank">
                  Rightlabs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
