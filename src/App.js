import Branch from "./components/Branch";
import Movie from "./components/Movie";
import Nav from "./components/Nav";

function App() {
  const branches = [
    { branch: "Ikeja City Mall" },
    { branch: "Maryland Mall" },
    { branch: "Banex Mall" },
    { branch: "Jara Mall" },
    { branch: "Novare Mall" },
    { branch: "Palms Mall" },
  ];
  return (
    <div className="App relative bg-gradient-to-tl from-primary via-black to-black min-h-screen flex flex-col items-center">
      <div className="relative w-full  flex flex-col items-center">
        <Nav />
        <section className="bg-fuchsia-400 h-[500px] overflow-hidden absolute top-0 w-full">
          <div className="bg-[url('../src/assets/images/topbanner.png')] bg-center absolute top-0 w-full bg-cover h-full"></div>
          <div className="h-[500px] bg-black/40 w-full p-3 absolute top-0"></div>
        </section>
        <div className="mt-[500px] w-10/12 flex flex-col gap-8">
          <section className="locations h-[80vh]">
            <p className="font-semibold text-2xl mb-7">Locations</p>
            <div className="grid place-items-center">
              <div className="grid grid-cols-3 gap-8 w-full">
                {branches.map((branch) => {
                  return <Branch key={branch} branch={branch.branch} />;
                })}
              </div>
            </div>
          </section>
          <section className="now-showing min-h-screen">
            <p className="font-semibold text-2xl mb-7">Now Showing</p>
            <div className="grid grid-cols-5 gap-6">
              <Movie
                poster="./assets/images/movie2.png"
                title="Dune"
                release_date="Today"
                genre="Drama"
                duration="2hrs"
                language="English"
              />
              <div className="relative movie overflow-hidden cursor-pointer bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie2.png')] bgi h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent overlay absolute bottom-0 h-2/3 w-full"></div>
                <div className="z-20 overlay-img absolute bottom-0 h-full w-full hidden ">
                  <button className="text-sm border-white px-4 py-2 border  hover:bg-white hover:text-primary font-medium">
                    Get Tickets
                  </button>
                </div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie3.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/banner.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie3.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/banner.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
              <div className="relative bg-black min-h-[350px]">
                <div className="bg-[url('./assets/images/movie2.png')] h-full w-full absolute top-0 bg-cover bg-center"></div>
                <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
                  <p className="text-2xl font-medium">Venom</p>
                  <span className="text-[10px] font-semibold text-white/40">
                    March 7, 2024
                  </span>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Genre: </span>
                    Horror, Drama
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Duration: </span>
                    1hr 42mins
                  </p>
                  <p className="text-[10px] font-semibold">
                    <span className="text-white/40">Language: </span>
                    English
                  </p>
                </div>
                <div className="bg-gradient-to-t z-10 from-black to-transparent absolute top-0 h-full w-full"></div>
              </div>
            </div>
            <div className="mt-10 grid place-items-center">
              <button className="border border-white py-2 px-5 text-sm hover:bg-white hover:text-primary font-medium">
                Show All
              </button>
            </div>
          </section>
          <section className="coming-soon min-h-screen bg-red-600">
            <p className="font-semibold text-2xl mb-7">Coming Soon</p>
          </section>
          <footer className="footer min-h-[50vh] pt-8">
            <div className="flex h-full">
              <div className="w-[20%]">
                <img
                  src={require("../src/assets/images/logo.png")}
                  alt="logo"
                  width={90}
                />
              </div>
              <div className="h-full flex-1 grid grid-cols-3 gap-8 p-2">
                <div className="flex flex-col gap-4 justify-between">
                  <div>
                    <p className="text-xl font-medium mb-2">Our Service</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Silverbird TV
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Rhythm FM
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        MBGN
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Silverbird
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        SilverbirdFD
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        General Terms & Conditions
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Terms & Conditions for Ticket Sales
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Privacy Policy / Data Protection
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">Connect With Us</p>
                    <div className="flex gap-2">
                      <a
                        href="/"
                        className="text-xs font-semibold hover:text-white text-white/40"
                      >
                        <img
                          src={require("../src/assets/images/icons/fb.png")}
                          alt=""
                          width={30}
                        />
                      </a>
                      <a
                        href="/"
                        className="text-xs font-semibold hover:text-white text-white/40"
                      >
                        <img
                          src={require("../src/assets/images/icons/x.png")}
                          alt=""
                          width={30}
                        />
                      </a>
                      <a
                        href="/"
                        className="text-xs font-semibold hover:text-white text-white/40"
                      >
                        <img
                          src={require("../src/assets/images/icons/ig.png")}
                          alt=""
                          width={30}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 w-[250px]">
                  <div>
                    <p className="text-xl font-medium mb-2">Vouchers</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Silverbird Loyalty Program
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Gift cards and Vouchers
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        School Excursions
                      </a>
                      <a
                        href="/"
                        className="text-xs w-max font-semibold hover:text-white text-white/40"
                      >
                        Silverbird Group
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-2">Contact Us</p>
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-medium flex items-start gap-1 hover:text-white text-white/40">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>
                          Silverbird Galleria, 133, Ahmadu Bello way, VI, Lagos
                        </p>
                      </div>
                      <div className="text-xs font-medium flex items-center gap-1 hover:text-white text-white/40">
                        <i class="fa-regular fa-envelope"></i>
                        <p>feedback@silverbirdcinemas.com</p>
                      </div>
                      <div className="text-xs font-medium flex items-center gap-1 hover:text-white text-white/40">
                        <i class="fa-solid fa-phone"></i>
                        <p>+2347012655677</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-semibold ">
                    Sign up for our Newsletter
                  </p>
                  <span className="text-xs">
                    Get exciting offers and discounts first
                  </span>
                  <div className="border border-white flex gap-2 px-3 py-2 mt-4">
                    <input
                      type="email"
                      required
                      className="text-white placeholder:text-sm outline-none flex-1 outline-0 border-0 bg-transparent border-primary"
                      placeholder="Email Address"
                    />
                    <button className="text-xs font-medium bg-primary hover:bg-white hover:text-primary px-4 py-2">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
