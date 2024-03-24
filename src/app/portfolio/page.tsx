import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import Projects from "@/components/Portfolio/Projects";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar"
export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle 
        title="Portfolio"
        homeText="Home"
        homeUrl="/"
      />

      <Projects />

      <div className="pb-100">
        <ContactFormStyleTwo />
      </div>
  
      <Footer />
    </>
  )
}
