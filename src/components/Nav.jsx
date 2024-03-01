import React from "react";

function Nav() {
  return (
    <div className="pt-6 py-4 relative w-full grid place-items-center  z-30">
      <div className="bg-transparent w-11/12">
        <img
          src={require("../assets/images/logo.png")}
          alt="logo"
          width={80}
          className="bg-transparent"
        />
      </div>
    </div>
  );
}

export default Nav;
