"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "/public/images/main-banner/HOC New Year 2024.png";
import darklogo from "/public/images/main-banner/HOCresize.png"
import Logo2 from "/public/images/main-banner/4.2.png"

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  const [menu] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [navbarTextColor, setNavbarTextColor] = useState<string>("#ba8d6d");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setNavbarTextColor("#FEDB8B");
      } else {
        setIsScrolled(false);
        setNavbarTextColor("#ba8d6d");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoImage = isScrolled ? logo:Logo2  ;

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);

  const classOne: string = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo: string = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // SearchModal
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  // Mobile Menu
  const [isMobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const handleToggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar" style={{color:"#ba8d6d"}}>
        <div className="container-fluid position-relative">
          <Link className="navbar-brand" href="/">
            <Image src={logoImage} alt="Traz Logo" width={113} height={54} />
          </Link>

          {/* Toggle navigation */}
          <button 
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMobileMenu}
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          {/* Menu For Desktop Device */}
          <div className={classOne} id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto" >
              {/* <li className="nav-item">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{color:"#ba8d6d"}}
                >
                  Home
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        currentRoute === "/" ? "active" : ""
                      }`}
                      href="/"
                      style={{color:"#ba8d6d"}}
                    >
                      Architecture Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        currentRoute === "/interior-home/" ? "active" : ""
                      }`}
                      href="/interior-home/"
                      style={{color:"#ba8d6d"}}
                    >
                      Interior Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        currentRoute === "/architecture-studio/" ? "active" : ""
                      }`}
                      href="/architecture-studio/"
                      style={{color:"#ba8d6d"}}
                    >
                      Architecture Studio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        currentRoute === "/main-home/" ? "active" : ""
                      }`}
                      href="/main-home/"
                      style={{color:"#ba8d6d"}}
                    >
                      Main Home
                    </Link>
                  </li>
                </ul>
              </li> */}
<li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about-us/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                  About Us
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{color:"#ba8d6d"}}
                >
                  Our Products
                </Link>

                {/* <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      href="/portfolio/"
                      className={`nav-link ${
                        currentRoute === "/portfolio/" ? "active" : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                     Gallery
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/portfolio-2/"
                      className={`nav-link ${
                        currentRoute === "/portfolio-2/" ? "active" : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/portfolio/portfolio-details/"
                      className={`nav-link ${
                        currentRoute === "/portfolio/portfolio-details/"
                          ? "active"
                          : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                      Portfolio Details
                    </Link>
                  </li>
                </ul> 
              </li> */}
              <li className="nav-item">
                <Link
                  href="/portfolio-2/"
                  className={`nav-link ${
                    currentRoute === "/portfolio-2" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                  Our Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/gallery/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                  Gallery
                </Link>
              </li>


             
<li className="nav-item">
                <Link
                  href="/blog/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                  Blog
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/blog/"
                  onClick={(e) => e.preventDefault()}
                  style={{color:"#ba8d6d"}}
                >
                  Blog
                </Link>

                {/* <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentRoute === "/blog/" ? "active" : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                      Blog Grid
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog-right-sidebar/"
                      className={`nav-link ${
                        currentRoute === "/blog-right-sidebar/" ? "active" : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                      Right Sidebar
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog-left-sidebar/"
                      className={`nav-link ${
                        currentRoute === "/blog-left-sidebar/" ? "active" : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                      Left Sidebar
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/single-blog/"
                      className={`nav-link ${
                        currentRoute === "/single-blog/" ? "active" : ""
                      }`}
                      style={{color:"#ba8d6d"}}
                    >
                      Single Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{color:"#ba8d6d"}}
                    >
                      Others
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/author/"
                          className={`nav-link ${
                            currentRoute === "/author/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Author
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/categories/"
                          className={`nav-link ${
                            currentRoute === "/categories/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Categories
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/tags/"
                          className={`nav-link ${
                            currentRoute === "/tags/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Tags
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul> 
              </li> */}

              {/* <li className="nav-item">
                <Link
                  href="/contact-us/"
                  className={`nav-link ${
                    currentRoute === "/contact-us/" ? "active" : ""
                  }`}
                  style={{color:"#ba8d6d"}}
                >
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* others-options */}
          <div className="others-option d-flex align-items-center">
  <div className="option-item">
    <div className="search-btn" onClick={handleToggleSearchModal}>
      <i className="ri-search-line"></i>
    </div>
  </div>

  <div className="option-item">
    <Link 
      href="/request-quote" 
      className="default-btn" 
      style={isScrolled ? { backgroundColor: "#FEDB8B", color: "#000000" } : {}}
    >
      Request A Quote
    </Link>
  </div>
</div>

        </div>
      </nav>

      {/* Menu For Mobile Device */}
      <div
        className={`modal mobile-menu-modal ${
          isMobileMenuActive ? "show" : ""
        }`}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between">
              <div>
                <Image
                  src={darklogo}
                  alt="Traz Logo"
                  width={100}
                  height={41}
                />
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleToggleMobileMenu}
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            <div className="modal-body">
              <Accordion allowZeroExpanded>
                {/* <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>Home</AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <ul className="menu-list">
                      <li>
                        <Link
                          className={`nav-link ${
                            currentRoute === "/" ? "active" : ""
                          }`}
                          href="/"
                          style={{color:"#ba8d6d"}}
                        >
                          Architecture Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={`nav-link ${
                            currentRoute === "/interior-home/" ? "active" : ""
                          }`}
                          href="/interior-home/"
                          style={{color:"#ba8d6d"}}
                        >
                          Interior Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={`nav-link ${
                            currentRoute === "/architecture-studio/"
                              ? "active"
                              : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                          href="/architecture-studio/"
                        >
                          Architecture Studio
                        </Link>
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem> */}
<Link
                  href="/main-home/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{color:"#ba8d6d"}}
                >
                  Home
                </Link>
                <Link
                  href="/about-us/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{color:"#ba8d6d"}}
                >
                  About Us
                </Link>

                {/* <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>Portfolio</AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <ul className="menu-list">
                      <li>
                        <Link
                          href="/portfolio/"
                          className={`nav-link ${
                            currentRoute === "/portfolio/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Portfolio Style 01
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/portfolio-2/"
                          className={`nav-link ${
                            currentRoute === "/portfolio-2/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Portfolio Style 02
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/portfolio/portfolio-details/"
                          className={`nav-link ${
                            currentRoute === "/portfolio/portfolio-details/"
                              ? "active"
                              : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem> */}

                {/* <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>Pages</AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <ul className="menu-list">
                      <li>
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentRoute === "/services/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Services
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/service-details/"
                          className={`nav-link ${
                            currentRoute === "/services/service-details/"
                              ? "active"
                              : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Services Details
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/pricing/"
                          className={`nav-link ${
                            currentRoute === "/pricing/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Pricing
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentRoute === "/team/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Team
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/gallery/"
                          className={`nav-link ${
                            currentRoute === "/gallery/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Gallery
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentRoute === "/faq/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          FAQs
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/testimonials/"
                          className={`nav-link ${
                            currentRoute === "/testimonials/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/login/"
                          className={`nav-link ${
                            currentRoute === "/login/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Login
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/register/"
                          className={`nav-link ${
                            currentRoute === "/register/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Register
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/privacy-policy/"
                          className={`nav-link ${
                            currentRoute === "/privacy-policy/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/terms-conditions/"
                          className={`nav-link ${
                            currentRoute === "/terms-conditions/"
                              ? "active"
                              : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Terms & Conditions
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/request-quote/"
                          className={`nav-link ${
                            currentRoute === "/request-quote/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Request A Quote
                        </Link>
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem> */}

                {/* <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>Blog</AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <ul className="menu-list">
                      <li>
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentRoute === "/blog/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/blog-right-sidebar/"
                          className={`nav-link ${
                            currentRoute === "/blog-right-sidebar/"
                              ? "active"
                              : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Right Sidebar
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/blog-left-sidebar/"
                          className={`nav-link ${
                            currentRoute === "/blog-left-sidebar/"
                              ? "active"
                              : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Left Sidebar
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/single-blog/"
                          className={`nav-link ${
                            currentRoute === "/single-blog/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Single Blog
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/author/"
                          className={`nav-link ${
                            currentRoute === "/author/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Author
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/categories/"
                          className={`nav-link ${
                            currentRoute === "/categories/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Categories
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/tags/"
                          className={`nav-link ${
                            currentRoute === "/tags/" ? "active" : ""
                          }`}
                          style={{color:"#ba8d6d"}}
                        >
                          Tags
                        </Link>
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem> */}
<Link
                  href="/portfolio-2/"
                  className={`nav-link ${
                    currentRoute === "/portfolio-2/" ? "active" : ""
                  }`}
                  style={{color:"#ba8d6d"}}
                >
                 Our Product
                </Link>
                <Link
                  href="/gallery/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                  Gallery
                </Link>
                <Link
                  href="/blog/"
                  className={`nav-link ${
                    currentRoute === "/about-us/" ? "active" : ""
                  }`}
                  style={{ color: navbarTextColor }} 
                >
                  Blog
                </Link>
                {/* <Link
                  href="/contact-us/"
                  className={`nav-link ${
                    currentRoute === "/contact-us/" ? "active" : ""
                  }`}
                  style={{color:"#ba8d6d"}}
                >
                  Contact Us
                </Link> */}
              </Accordion>
            </div>
          </div>
        </div>

        <div className="close-overlay" onClick={handleToggleMobileMenu}></div>
      </div>

      {/* Search Form */}
      <div className={`modal search-modal-area ${isActive ? "show" : ""}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleToggleSearchModal}
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="modal-body">
              <div className="search-form">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                  />
                  <button type="submit">
                    <i className="ri-search-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="close-overlay" onClick={handleToggleSearchModal}></div>
      </div>
    </>
  );
};

export default Navbar;
