import React from "react";

function Footer() {
  return (
    <footer className="footer min-h-[50vh] pt-8">
      <div className="flex md:flex-row flex-col h-full">
        <div className="w-[20%]">
          <img
            src={require("../assets/images/logo.png")}
            alt="logo"
            width={90}
          />
        </div>
        <div className="h-full flex-1 flex flex-col-reverse md:grid md:grid-cols-3 gap-8 md:p-2">
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
                    src={require("../assets/images/icons/fb.png")}
                    alt=""
                    width={30}
                  />
                </a>
                <a
                  href="/"
                  className="text-xs font-semibold hover:text-white text-white/40"
                >
                  <img
                    src={require("../assets/images/icons/x.png")}
                    alt=""
                    width={30}
                  />
                </a>
                <a
                  href="/"
                  className="text-xs font-semibold hover:text-white text-white/40"
                >
                  <img
                    src={require("../assets/images/icons/ig.png")}
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
                  <p>Silverbird Galleria, 133, Ahmadu Bello way, VI, Lagos</p>
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
            <p className="text-xl font-semibold ">Sign up for our Newsletter</p>
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
              <button className="text-xs w-max font-medium bg-primary hover:bg-white hover:text-primary px-4 py-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
