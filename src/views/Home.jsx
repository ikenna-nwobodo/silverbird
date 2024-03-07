import React from "react";
import branches from "../data/branches";
import Branch from "../components/Branch";
import Footer from "../components/Footer";
import NowShowing from "../components/NowShowing";

function Home() {
  //   const branches = [
  //     { id: 1, name: "Ikeja City Mall", title: "icm" },
  //     { id: 2, name: "Maryland Mall", title: "marylandmall" },
  //     { id: 3, name: "Banex Mall", title: "banex" },
  //     { id: 4, name: "Jara Mall", title: "jara" },
  //     { id: 5, name: "Novare Mall", title: "novare" },
  //     { id: 6, name: "Palms Mall", title: "palms" },
  //   ];

  return (
    <>
      <section className="h-[300px] md:h-[500px] overflow-hidden absolute top-0 w-full">
        <div className="bg-[url('../src/assets/images/topbanner.png')] bg-right md:bg-center absolute top-0 w-full bg-cover h-full"></div>
        <div className="h-[300px] md:h-[500px] bg-black/40 w-full p-3 absolute top-0"></div>
      </section>
      <div className="mt-[300px] md:mt-[500px] w-11/12 md:w-10/12 flex flex-col gap-8">
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
        <section className="coming-soon flex flex-col min-h-screen">
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
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
