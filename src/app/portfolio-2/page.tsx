import Navbar from "@/components/Layout/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import ProjectCardStyle2 from "@/components/Portfolio/ProjectCardStyle2";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function Page() {
  return (
    <>
      <div className="full-bg-black-color" style={{background:"white"}}>
        <Navbar />
       
        <PageTitle
         
          title="Our Products"
          homeText="Home"
          homeUrl="/"
        />

        <ProjectCardStyle2 />

        <ContactForm />
        
        <Footer />
      </div>
    </>
  )
}
