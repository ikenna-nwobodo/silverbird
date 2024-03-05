import React from "react";

function Movie({ poster, title, release_date, genres, duration, languages }) {
  return (
    <div className="relative movie overflow-hidden cursor-pointer bg-black min-h-[350px]">
      <div
        style={{ "--image-url": `url('${poster}')` }}
        className={`bg-[image:var(--image-url)] bgi h-full w-full absolute top-0 bg-cover bg-center`}
      ></div>
      <div className="absolute bottom-0 z-30 flex flex-col px-2 pb-2">
        <p className="text-2xl font-medium">{title}</p>
        <span className="text-[10px] font-semibold text-white/40">
          {release_date}
        </span>
        <div className="text-[10px] flex items-center gap-1 font-semibold">
          <span className="text-white/40">Genre: </span>
          <div className="flex items-center gap-1">
            {genres.map((genre) => {
              return <span>{genre}</span>;
            })}
          </div>
        </div>
        <p className="text-[10px] font-semibold">
          <span className="text-white/40">Duration: </span>
          {duration}
        </p>
        <div className="text-[10px] flex items-center gap-1 font-semibold">
          <span className="text-white/40">Language: </span>
          <div className="flex items-center gap-1">
            {languages.map((language) => {
              return <span>{language}</span>;
            })}
          </div>
        </div>
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
