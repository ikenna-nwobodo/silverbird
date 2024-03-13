import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movies from "../data/movies";
import Dropd from "react-dropd";
import branches from "../data/branches";
import Snack from "../components/Snack";

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
  const [email, setEmail] = useState("");
  const [currentView, setCurrentView] = useState(0);
  const [initialForm, setInitialForm] = useState({
    movie: "",
    tickets: 0,
    branch: "",
    email: "",
    time: "",
  });
  const [movieTime, setMovieTime] = useState(null);
  const [tickets, setTickets] = useState(0);
  const [snack, setsnack] = useState([]);
  const [refreshments, setRefreshments] = useState([]);

  const toggleActive = (index) => {
    setActiveSlot({ ...timeSlot, activeObject: timeSlot.objects[index] });
    setMovieTime(timeSlot.objects[index].time);
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
  const handleBack = (id) => {
    setCurrentView(id);
  };
  const handleNext = (id) => {
    setCurrentView(id);
  };
  const handleValue = (id) => {
    if (id === 1) {
      setTickets(tickets + 1);
    }
    if (id === 2) {
      setTickets(tickets - 1);
    }
  };
  const checkForm = (id) => {
    if (
      initialForm.branch === "" ||
      initialForm.email === "" ||
      initialForm.movie === "" ||
      initialForm.tickets === 0 ||
      initialForm.time === ""
    ) {
      window.alert("fill the form nigga");
    } else {
      handleNext(id);
    }
    setInitialForm({
      movie: currentMovie[0].title,
      tickets: tickets,
      branch: branch,
      email: email,
      time: movieTime,
    });
  };
  const snackData = (data) => {
    setsnack([...snack, data]);
    // setRefreshments([...refreshments, data]);
    // console.log(data);
  };
  console.log(snack);
  // console.log(refreshments);

  const latestData = () => {
    const re = snack.reduce((acc, item) => {
      if (acc[item.title]) {
        // If it exists, compare quantities and keep the latest
        acc[item.title] =
          item.quantity > acc[item.title].quantity ? item : acc[item.title];
      } else {
        // If it's a new title, add it to the accumulator
        acc[item.title] = item;
      }
      return acc;
    }, {});
    console.log(re);
  };

  useEffect(() => {
    if (branch !== null) {
      setIsBranch(true);
    }
    setInitialForm({
      movie: currentMovie[0].title,
      tickets: tickets,
      branch: branch,
      email: email,
      time: movieTime,
    });
    // latestData();
    snack.reduce((acc, item) => {
      if (acc[item.title]) {
        // If it exists, compare quantities and keep the latest
        acc[item.title] =
          item.quantity > acc[item.title].quantity ? item : acc[item.title];
      } else {
        // If it's a new title, add it to the accumulator
        acc[item.title] = item;
      }
      return acc;
    }, {});
    // console.log(re);
    // setRefreshments([...refreshments, snack]);
  }, [branch]);

  return (
    <div className="md:w-10/12 min-h-[70vh] w-11/12 mt-6">
      {trailer && (
        <div className="bg-black/70 backdrop-blur-lg w-full h-screen z-30 flex flex-col justify-center items-center overflow-hidden fixed top-0 left-0">
          <div
            className="w-full h-screen fixed top-0 left-0"
            onClick={handleModal}
          ></div>
          <div className="z-30 flex flex-col md:gap-8">
            <div className="flex justify-end">
              <i
                class="fa-solid fa-xmark text-xl w-max text-right cursor-pointer"
                onClick={handleModal}
              ></i>
            </div>
            <iframe
              title="trailer"
              src="https://giphy.com/embed/w6yq5ba1Wx3ij9SvjP"
              width="580"
              frameBorder="0"
              className="w-full h-[300px] md:w-[580px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {currentMovie.map((mov, id) => {
        return (
          <div className="" key={id}>
            {currentView === 0 && (
              <Link
                to={"/"}
                className="mb-4 btn-i px-4 text-xs py-2 border border-white flex gap-2 items-center w-max"
              >
                <i class="fa-solid fa-arrow-left"></i>
                Back
              </Link>
            )}
            {currentView === 1 && (
              <button
                onClick={() => handleBack(0)}
                className="mb-4 btn-i px-4 text-xs py-2 border border-white flex gap-2 items-center w-max"
              >
                <i class="fa-solid fa-arrow-left"></i>
                Back
              </button>
            )}
            <div
              style={{ "--image-url": `url('${mov.poster}')` }}
              className={`bg-[image:var(--image-url)] bgi h-[300px] md:h-[400px] w-full md:hidden block fixed md:absolute top-0 left-0 bg-cover bg-top`}
            ></div>
            <div className="bg-gradient-to-t from-black via-black/40 to-transparent md:hidden block fixed md:absolute top-0 left-0 h-[300px] md:h-[400px] w-full"></div>
            <div className="flex md:flex-row flex-col gap-4 md:gap-10 ">
              <div className="relative hidden md:block md:w-[350px] overflow-hidden bg-black min-h-[200px] bg-top md:min-h-[500px] md:h-[500px]">
                <div
                  style={{ "--image-url": `url('${mov.poster}')` }}
                  className={`bg-[image:var(--image-url)] bgi h-full w-full absolute top-0 bg-cover bg-center`}
                ></div>
                <div className="bg-black/30 z-10 overlay absolute bottom-0 h-full w-full"></div>
              </div>
              <div className="flex-1 grid place-items-center">
                {currentView === 0 && (
                  <div className="relative flex-1 w-full flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-4">
                      <p className="text-4xl md:text-6xl font-medium">
                        {mov.title}
                      </p>
                      <div>
                        <div className="text-[12px] flex items-center gap-1 font-medium">
                          <span className="text-white/40">Genre: </span>
                          <div className="flex items-center gap-1">
                            {mov.genre.map((genre, id) => {
                              return <span key={id}>{genre}</span>;
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
                            {mov.language.map((language, id) => {
                              return <span key={id}>{language}</span>;
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
                        className={`${
                          isBranch ? "flex" : "hidden"
                        } flex-col gap-4`}
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
                      <div className="w-max flex flex-col gap-2">
                        <p className="text-sm">Email Address</p>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="text-black w-[250px] p-2 text-sm outline-0 rounded-sm"
                        />
                      </div>
                      <div className="w-max flex flex-col gap-2">
                        <p className="text-sm">Tickets</p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleValue(2)}
                            className={`${
                              tickets <= 0
                                ? "pointer-events-none bg-white/60 text-primary/40"
                                : "pointer-events-auto bg-white"
                            }  text-primary selection:bg-transparent w-8 py-1`}
                          >
                            -
                          </button>
                          <span>{tickets}</span>
                          <button
                            onClick={() => handleValue(1)}
                            className="bg-white text-primary w-8 py-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 md:mt-6 md:mb-0 mb-10">
                      <button
                        type="submit"
                        onClick={() => checkForm(1)}
                        className={`${
                          isBranch ? "flex" : "hidden"
                        } bg-primary capitalize hover:bg-white hover:text-primary btn text-sm  items-center justify-center gap-2 font-medium px-6 flex-grow min-w-[200px] py-2`}
                      >
                        Next <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                )}
                {currentView === 1 && (
                  <div className="relative w-full flex-1 flex flex-col justify-between gap-4">
                    <p className="text-4xl font-medium">{mov.title}</p>
                    <p className="text-lg font-medium ">Select snack</p>
                    <div className="flex-1 flex flex-col gap-4 overflow-scroll md:max-h-[45vh]">
                      <Snack
                        title={"fries"}
                        data={snackData}
                        image={require("../assets/images/fries.png")}
                      />
                      <Snack
                        title={"hotdogs"}
                        data={snackData}
                        image={require("../assets/images/hotdogs.png")}
                      />
                      <Snack
                        title={"soda"}
                        data={snackData}
                        image={require("../assets/images/soda.png")}
                      />
                      <Snack
                        title={"water"}
                        data={snackData}
                        image={require("../assets/images/water.png")}
                      />
                      <Snack
                        title={"popcorn"}
                        data={snackData}
                        image={require("../assets/images/popcorn.png")}
                      />
                    </div>
                    <div className="mt-10 md:mt-6 md:mb-0 mb-10">
                      <button
                        onClick={() => handleNext(2)}
                        className="capitalize flex hover:bg-primary bg-white hover:text-white text-primary btna text-sm items-center justify-center gap-2 font-medium px-6 flex-grow min-w-[200px] py-2"
                      >
                        Proceed To Checkout
                        <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                )}
                {currentView === 2 && (
                  <div className="relative w-full flex-1 flex flex-col gap-4">
                    <p className="text-4xl font-medium">{mov.title}</p>
                    <p className="text-lg font-medium ">Receipt</p>
                    <div className="flex flex-col gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <p>Movie Ticket x {initialForm.tickets}</p>
                        <span className="flex-1 h-[1px] bg-white"></span>
                        <p>{1000 * initialForm.tickets}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>Soda</p>
                        <span className="flex-1 h-[1px] bg-white"></span>
                        <p>900 x 2</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>Water</p>
                        <span className="flex-1 h-[1px] bg-white"></span>
                        <p>700 x 2</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>Popcorn - L</p>
                        <span className="flex-1 h-[1px] bg-white"></span>
                        <p>2300 x 2</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 border-t pt-8">
                      <p className="text-xl font-medium">Total</p>
                      <span className="flex-1 h-[1px] bg-white"></span>
                      <p className="text-xl font-medium">8500</p>
                    </div>
                    <div className="mt-10 flex flex-row gap-4 md:w-max items-center md:mt-6 md:mb-0 mb-10">
                      <button
                        onClick={() => handleBack(1)}
                        className="capitalize flex border btnb text-xs items-center justify-center gap-2 font-medium md:text-sm px-3 md:px-6 flex-grow w-max md:w-[200px] md:min-w-[200px] py-2"
                      >
                        <i class="fa-solid fa-arrow-left"></i>Go Back
                      </button>
                      <button
                        onClick={() => handleNext(3)}
                        className="capitalize flex hover:bg-primary bg-white hover:text-white text-primary btna text-xs md:text-sm items-center justify-center gap-2 font-medium px-3 md:px-6 flex-grow md:min-w-[200px] py-2"
                      >
                        Make Payment
                        <i class="fa-solid fa-arrow-right text-primary"></i>
                      </button>
                    </div>
                  </div>
                )}
                {currentView === 3 && (
                  <div className="relative w-full flex-1 flex flex-col justify-center items-center gap-4">
                    <p className="text-3xl font-semibold">Order Confirmed</p>
                    <p className="text-xs">
                      All details have been sent to your mail
                    </p>
                    <div className="mt-10 flex flex-row gap-4 md:w-max items-center md:mt-6 md:mb-0 mb-10">
                      <Link
                        to={"/"}
                        className="flex capitalize hover:bg-primary bg-white hover:text-white text-primary btna text-xs md:text-sm items-center justify-center gap-2 font-medium px-3 md:px-6 flex-grow md:min-w-[200px] py-2"
                      >
                        Print Ticket
                        {/* <i class="fa-solid fa-arrow-right text-primary"></i> */}
                      </Link>
                      <Link
                        to={"/"}
                        className="flex capitalize border btnb text-xs items-center justify-center gap-2 font-medium md:text-sm px-3 md:px-6 flex-grow w-max md:w-[200px] md:min-w-[200px] py-2"
                      >
                        Return to home
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieView;
