import React from "react";

function Branch({ branch }) {
  return (
    <div className="bg-branch bg-cover relative p-2 flex flex-col gap-5 justify-center items-center  min-h-[200px]">
      <p className="relative z-10 text-xl font-medium">{branch}</p>
      <button className="text-xs bg-primary hover:bg-white hover:text-primary relative z-10 p-2">
        Make a Reservation
      </button>
      <div className="bg-gradient-to-t from-black to-transparent absolute h-full w-full"></div>
    </div>
  );
}

export default Branch;
