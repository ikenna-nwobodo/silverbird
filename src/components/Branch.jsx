import React from "react";
import { Link } from "react-router-dom";

function Branch({ branch }) {
  return (
    <div
      style={{ "--image-url": `url('${branch.image}')` }}
      className="bg-[image:var(--image-url)] bg-center bg-cover relative p-2 flex flex-col gap-5 justify-center items-center  min-h-[200px]"
    >
      <p className="relative z-10 text-xl font-medium">{branch.name}</p>
      <Link
        to={`/branch/${branch.title}`}
        className="text-xs bg-primary hover:bg-white hover:text-primary relative z-10 p-2"
      >
        Make a Reservation
      </Link>
      <div className="bg-gradient-to-t from-black to-transparent absolute h-full w-full"></div>
    </div>
  );
}

export default Branch;
