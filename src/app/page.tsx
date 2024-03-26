import React from "react";
import Navbar from "@/components/MainHome/NavBar"
import HeroBanner from "@/components/MainHome/HeroBanner"
import About from "@/components/MainHome/AboutUs"
import Services from "@/components/MainHome/services/ServiceTab"
import HeroBanner2 from "@/components/MainHome/HeroSection2"
import Projects from "@/components/MainHome/Projects"
import Process from "@/components/MainHome/Process"
import Testimonials from "@/components/MainHome/Testimonials"
import Blogs from "@/components/MainHome/Blogs&News"
import Footer from "@/components/Layout/Footer"
export default function Page() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <br/>
      <br/>
      <br/>
      <br/>
      <About/>
      
      
      <Services/>
      <HeroBanner2/>
      <Projects/>
      <Process/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
    </>
  );
}
