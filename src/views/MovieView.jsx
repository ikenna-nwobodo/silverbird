import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movies from "../data/movies";
import Dropd from "react-dropd";
import branches from "../data/branches";

function MovieView() {
  const [trailer, setTrailer] = useState(false);
  const [timeSlot, setActiveSlot] = useState({
    activeObject: null,
    objects: [
      { id: 1, time: "11:00am" },
      { id: 2, time: "1:00pm" },
      { id: 3, time: "5:00pm" },
      { id: 4, time: "9:30pm" },
    ],
  });
  const [branch, setBranch] = useState(null);
  const [isBranch, setIsBranch] = useState(false);

  useEffect(() => {
    if (branch !== null) {
      setIsBranch(true);
    }
  }, [branch]);

  console.log(isBranch);
  console.log(branch);

  const toggleActive = (index) => {
    setActiveSlot({ ...timeSlot, activeObject: timeSlot.objects[index] });
  };
  const togglestyle = (index) => {
    if (timeSlot.objects[index] === timeSlot.activeObject) {
      return "active";
    } else {
      return "";
    }
  };
  const movie = useParams();

  const currentMovie = movies.filter((obj) => {
    return obj.id === movie.id;
  });

  const handleModal = () => {
    setTrailer(!trailer);
  };

  return (
    <div className="md:w-10/12 min-h-[70vh] w-11/12 md:mt-10 mt-6">
      {trailer && (
        <div className="bg-black/70 backdrop-blur-lg w-full h-screen z-30 flex flex-col justify-center items-center overflow-hidden fixed top-0 left-0">
          <div
            className="w-full h-screen fixed top-0 left-0"
            onClick={handleModal}
          ></div>
          <div className="z-30 flex flex-col gap-8">
            <i
              class="fa-solid fa-xmark text-3xl w-full text-right cursor-pointer"
              onClick={handleModal}
            ></i>
            <iframe
              title="trailer"
              src="https://giphy.com/embed/w6yq5ba1Wx3ij9SvjP"
              width="580"
              height="500"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {currentMovie.map((mov) => {
        return (
          <div className="">
            <Link
              to={"/"}
              className="mb-4 btn-i px-4 text-xs py-2 border border-white flex gap-2 items-center w-max"
            >
              <i class="fa-solid fa-arrow-left"></i>
              Back
            </Link>
            <div className="flex md:flex-row flex-col gap-4 md:gap-10">
              <div className="relative md:w-[350px] overflow-hidden bg-black min-h-[200px] bg-top md:min-h-[500px] md:h-[500px]">
                <div
                  style={{ "--image-url": `url('${mov.poster}')` }}
                  className={`bg-[image:var(--image-url)] bgi h-full w-full absolute top-0 bg-cover bg-center`}
                ></div>
                <div className="bg-black/30 z-10 overlay absolute bottom-0 h-full w-full"></div>
              </div>
              <div className="md:p-4 relative flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-4">
                  <p className="text-4xl md:text-6xl font-medium">
                    {mov.title}
                  </p>
                  <div>
                    <div className="text-[12px] flex items-center gap-1 font-medium">
                      <span className="text-white/40">Genre: </span>
                      <div className="flex items-center gap-1">
                        {mov.genre.map((genre) => {
                          return <span>{genre}</span>;
                        })}
                      </div>
                    </div>
                    <p className="text-[12px] font-medium">
                      <span className="text-white/40">Duration: </span>
                      {mov.duration}
                    </p>
                    <div className="text-[12px] flex items-center gap-1 font-medium">
                      <span className="text-white/40">Language: </span>
                      <div className="flex items-center gap-1">
                        {mov.language.map((language) => {
                          return <span>{language}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleModal}
                      className="bg-white hover:bg-white/90 text-primary text-sm font-medium px-6 py-3 flex items-center gap-2"
                    >
                      Watch Trailer{" "}
                      <i class="fa-solid fa-film text-primary"></i>
                    </button>
                  </div>
                  <div className="flex relative flex-col gap-4">
                    <p className="text-base font-medium">Branch</p>
                    <Dropd
                      placeholder="Select Branch"
                      list={branches.map((branch) => {
                        return branch.name;
                      })}
                      onItemChange={(branch) => {
                        setBranch(branch);
                      }}
                    />
                  </div>
                  <div
                    className={`${isBranch ? "flex" : "hidden"} flex-col gap-4`}
                  >
                    <p className="text-base font-medium">Available Times</p>
                    <ul className="flex items-center gap-3">
                      {timeSlot.objects.map((time, index) => {
                        return (
                          <li
                            key={time.id}
                            onClick={() => {
                              toggleActive(index);
                            }}
                            className={`time-slot p-2 grid place-items-center cursor-pointer border-2 border-white hover:bg-white/70 font-medium text-xs w-16 h-16 ${togglestyle(
                              index
                            )}`}
                          >
                            {time.time}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="mt-10 mb-10">
                  <button
                    className={`${
                      isBranch ? "flex" : "hidden"
                    } bg-primary hover:bg-white hover:text-primary btn text-sm  items-center justify-center gap-2 font-bold px-6 flex-grow min-w-[200px] py-2`}
                  >
                    Next <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieView;
