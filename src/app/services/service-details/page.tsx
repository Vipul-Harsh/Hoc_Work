import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import Footer from "@/components/Layout/Footer";
import Process from "@/components/ServiceDetails/Process";
import Navbar from "@/components/Layout/Navbar"
export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle 
        title="Service Details"
        homeText="Home"
        homeUrl="/"
      />

      <ServiceDetailsContent />

      <Process />
   
      <div className="ptb-100">
        <ContactFormStyleTwo />
      </div>
      
      <Footer />
    </>
  )
}
