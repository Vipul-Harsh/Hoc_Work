import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import SingleBlogContent from "@/components/SingleBlog/SingleBlogContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar"
export default function Page() {
  return (
    <>
      <Navbar/>

      <PageTitle 
        title="Single Blog"
        homeText="Home"
        homeUrl="/"
      />

      <SingleBlogContent />
    
      <Footer />
    </>
  )
}
