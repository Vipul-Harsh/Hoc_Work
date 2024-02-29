import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import HeroBanner2 from "@/components/MainHome/HeroBanner2";
import AboutUsContent from "@/components/MainHome/AboutUsContent";
import Partner from "@/components/Common/Partner";
import Banner from "@/components/MainHome/Banner";
import Projects from "@/components/MainHome/Projects";
import Products from "@/components/MainHome/Products";
import Reviews from "@/components/MainHome/Reviews";
import TextSlide from "@/components/Common/TextSlide";
import TeamMember from "@/components/Common/TeamMember";
import BlogPost from "@/components/MainHome/Features";
import Features from "@/components/MainHome/Features";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/MainHome/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <HeroBanner2 />
      <div className=" position-relative ">
        <Projects />
      </div>

      <AboutUsContent />

      {/* <div className="pt-80">
        <Partner />
      </div> */}

      <div className="section-area-with-line">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Products />
        <Features />
        <Partner/>
        <div className="ptb-100">
          <Reviews />
        </div>
      </div>

      <Footer />
    </>
  );
}
