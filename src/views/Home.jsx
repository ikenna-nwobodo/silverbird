import React, { useEffect, useState } from "react";
import branches from "../data/branches";
import Branch from "../components/Branch";
import Footer from "../components/Footer";
import NowShowing from "../components/NowShowing";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      // if scroll down hide the navbar
      setShow(true);
    } else if (window.scrollY <= 100) {
      // if scroll up show the navbar
      setShow(false);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
      <section
        className={`h-[300px] md:h-[80vh] overflow-hidden fixed top-0 w-full ${
          show && "opacity-0"
        }`}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          <div className="bg-[url('../src/assets/images/banners/smd.jpg')] bg-center w-full bg-cover h-[300px] md:h-[80vh]"></div>
          <div className="bg-[url('../src/assets/images/banners/gd.jpg')] bg-center w-full bg-cover h-[300px] md:h-[80vh]"></div>
          <div className="bg-[url('../src/assets/images/banners/ds.jpg')] bg-center w-full bg-cover h-[300px] md:h-[80vh]"></div>
          <div className="bg-[url('../src/assets/images/banners/th.jpg')] bg-top w-full bg-cover h-[300px] md:h-[80vh]"></div>
        </Carousel>
        {/* <div className="bg-[url('../src/assets/images/topbanner.png')] bg-right md:bg-center absolute top-0 w-full bg-cover h-full"></div> */}
        <div className="h-[300px] md:h-[80vh] bg-gradient-to-t from-black to-transparent w-full p-3 absolute top-0"></div>
      </section>
      <div className="mt-[300px] md:mt-[500px] relative w-11/12 md:w-10/12 flex flex-col gap-8 ">
        <section className="locations min-h-[80vh]">
          <p className="font-semibold text-2xl mb-7">Locations</p>
          <div className="grid place-items-center">
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {branches.map((branch) => {
                return <Branch key={branch} branch={branch} />;
              })}
            </div>
          </div>
        </section>
        <NowShowing />
        {/* <section className="coming-soon flex flex-col min-h-screen">
          <p className="font-semibold text-2xl mb-7">Coming Soon</p>
          <div className="border flex-1 grid place-items-center p-10">
            <div className="overflow-hidden relative h-full w-full p-1 flex justify-center items-center">
              <div className="bg-sky-700 absolute slide z-10 h-full w-[65vw] p-2 rounded-2xl shadow-2xl grid place-items-center">
                Play
              </div>
              <div className="bg-yellow-700 h-full slide left-[72vw]  w-[65vw] absolute p-2 rounded-2xl grid place-items-center">
                Play
              </div>
            </div>
          </div>
        </section> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
