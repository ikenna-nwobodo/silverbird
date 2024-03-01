import React from "react";

function Movie({ poster, title, release_date, genre, duration, language }) {
  return (
    <div className="relative movie overflow-hidden cursor-pointer bg-black min-h-[350px]">
      <div
        className={`bg-[url('${poster}')] bgi h-full w-full absolute top-0 bg-cover bg-center`}
      ></div>
      <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
        <p className="text-2xl font-medium">{title}</p>
        <span className="text-[10px] font-semibold text-white/40">
          {release_date}
        </span>
        <p className="text-[10px] font-semibold">
          <span className="text-white/40">Genre: </span>
          {genre}
        </p>
        <p className="text-[10px] font-semibold">
          <span className="text-white/40">Duration: </span>
          {duration}
        </p>
        <p className="text-[10px] font-semibold">
          <span className="text-white/40">Language: </span>
          {language}
        </p>
      </div>
      <div className="bg-gradient-to-t z-10 from-black to-transparent overlay absolute bottom-0 h-2/3 w-full"></div>
      <div className="z-20 overlay-img absolute bottom-0 h-full w-full hidden ">
        <button className="text-sm border-white px-4 py-2 border  hover:bg-white hover:text-primary font-medium">
          Get Tickets
        </button>
      </div>
    </div>
  );
}

export default Movie;
