// src/components/MovieCard.jsx
import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img src={movie.poster} alt={movie.title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl dark:text-white">{movie.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard
