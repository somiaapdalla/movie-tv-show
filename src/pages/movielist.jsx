import React from "react";
function MovieCard({ movie }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
      <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <p className="text-center text-lg font-semibold text-gray-800 dark:text-white">
          {movie.title}
        </p>
        <p className="text-sm text-center text-gray-500">{movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
