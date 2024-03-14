import React from "react";
import movies from "../data/movies";
import Movie from "../components/Movie";

function NowShowing() {
  return (
    <section className="now-showing min-h-screen relative z-20">
      <p className="font-semibold text-2xl mb-7">Now Showing</p>
      <div className="grid md:grid-cols-5 gap-6">
        {movies.map((movie) => {
          return (
            <Movie
              id={movie.id}
              poster={movie.poster}
              title={movie.title}
              release_date={movie.release_date}
              genres={movie.genre}
              duration={movie.duration}
              languages={movie.language}
            />
          );
        })}
      </div>
    </section>
  );
}

export default NowShowing;
