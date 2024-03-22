export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="preloader-area position-fixed text-center" style={{background:"white"}}>
        <div className="loader">
          <div className="waviy">
            <span>T</span>
            <span>R</span>
            <span>A</span>
            <span>Z</span>
          </div>
          <div className="logos">
            <img src="/public/images/main-banner/HOC Logo-01 (1).png"/>
          </div>
        </div>
      </div>
    </>
  );
}
