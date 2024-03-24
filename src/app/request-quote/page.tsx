import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import RequestAQuoteForm from "@/components/RequestAQuote/RequestAQuoteForm";
import Footer from "@/components/Layout/Footer";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import NavBar from "@/components/Layout/Navbar"
export default function Page() {
  return (
    <>
      <NavBar />

      <PageTitle 
        title="Request a Quote"
        homeText="Home"
        homeUrl="/"
      />

      <RequestAQuoteForm />
      <GoogleMap />
      <Footer />
    </>
  )
}
