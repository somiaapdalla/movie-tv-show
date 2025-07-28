// src/pages/Watch.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Watch() {
  const location = useLocation();
  const navigate = useNavigate();

  // استقبل بيانات الفيلم من الرابط أو من النافيجيتر
  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            No movie data found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-1/2 h-96 object-cover"
        />
        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {movie.title}
          </h2>
          <p className="italic text-gray-600 dark:text-gray-300">{movie.genre}</p>
          <span className="text-yellow-500 font-semibold text-lg">
            ⭐⭐⭐ {movie.rating }
          </span>
          <p className="text-gray-700 dark:text-gray-200">
            Enjoy watching this awesome movie! (You can add a real video player later.)
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-auto px-4 py-2 bg-yellow-600 text-white rounded-xl hover:bg-yellow-500 transition"
          >
             Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Watch;
