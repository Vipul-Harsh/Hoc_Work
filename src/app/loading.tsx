import logo from "/public/images/main-banner/4.2.png"
import Image from "next/image";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="preloader-area position-fixed text-center" style={{background:"white"}}>
        <div className="loader">
          {/* <div className="waviy">
            <span>T</span>
            <span>R</span>
            <span>A</span>
            <span>Z</span>
          </div> */}
          <div className="logos">
            <Image src={logo} alt="logo-hoc" width={113} height={54}/>
          </div>
        </div>
      </div>
    </>
  );
}
