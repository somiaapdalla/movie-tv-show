import React from "react";
import MovieCard from "./films";
import movies from "../component/moviedata";



function ListFilms() {
  const genres = ["drama", "horror", "comedy", "action"];

  return (
    <div className="p-8 md:p-12 bg-gray-900 min-h-screen space-y-20">
      {genres.map((genre) => {
        // Filter filimada genre-kaas oo kaliya, trending/popular ma tixgelin
        const filteredMovies = movies
          .filter((movie) => movie.type === "movie" && movie.genre === genre)
          .slice(0, 5); // 5 film kaliya soo bandhig

        return (
          <section key={genre} className="space-y-8">
            <h2 className="text-4xl font-extrabold capitalize text-yellow-400 border-b-4 border-yellow-500 pb-2 inline-block">
              {genre} Movies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ListFilms;
