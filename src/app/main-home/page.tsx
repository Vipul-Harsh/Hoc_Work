import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import HeroBanner from "@/components/ArchitectureStudio/HeroBanner";
import AboutUsContent from "@/components/MainHome/AboutUsContent";
import Partner from "@/components/Common/Partner";
import Banner from "@/components/MainHome/Banner"
import Projects from "@/components/MainHome/Projects";
import Reviews from "@/components/MainHome/Reviews"
import TextSlide from "@/components/Common/TextSlide";
import TeamMember from "@/components/Common/TeamMember";
import BlogPost from "@/components/ArchitectureStudio/BlogPost";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";
 
export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <HeroBanner />

      <AboutUsContent />
      <TextSlide/>
      <Projects />

      <div className="pt-100">
        <Partner />
      </div>

      

      

      <div className="section-area-with-line">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <Banner/>
        <div className="ptb-100">
          <Reviews/>
        </div>

        

        
      </div>

      <div className="pt-100">
        <BlogPost />
      </div>

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
 
      <Footer />
    </>
  )
}
