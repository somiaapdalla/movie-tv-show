// src/pages/TvShows.jsx
import React from "react";
import movies from "../component/moviedata";
import MovieCard from "./films";

function TvShows() {
  const tvShows = movies.filter((movie) => movie.type === "tv");

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6  bg-gray-900 min-h-screen md:p-12">
      {tvShows.map((show) => (
        <MovieCard key={show.id} movie={show} />
      ))}
    </div>
  );

}

export default TvShows;
