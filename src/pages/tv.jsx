import React from "react";
import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [ratedTV, setRatedTV] = useState([]);

  const API_KEY = "7715730a089071242accbd0568c18916";
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE1NzMwYTA4OTA3MTI0MmFjY2JkMDU2OGMxODkxNiIsIm5iZiI6MTc1MzQ2NDQ1NS43NjksInN1YiI6IjY4ODNiZTg3OGJlZWEwMmU2ZThhNjIwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eg14ZYPWVHuuo19yqUwJ7TzSr0BwJ1VGyV795BVFoFY";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Error fetching popular movies:", err));

    fetch(
      "https://api.themoviedb.org/3/account/22174176/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((res) => res.json())
      .then((data) => setFavorites(data.results))
      .catch((err) => console.error("Error fetching favorites:", err));

    fetch(
      "https://api.themoviedb.org/3/account/22174176/rated/tv?language=en-US&page=1&sort_by=created_at.asc",
      options
    )
      .then((res) => res.json())
      .then((data) => setRatedTV(data.results))
      .catch((err) => console.error("Error fetching rated TV:", err));
  }, []);
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-2 transform hover:scale-105 transition duration-300 hover:shadow-xl  object-cover"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded h-72"
          />
          <h2 className="text-center mt-2 font-semibold text-gray-800 dark:text-white">
            {movie.title}
          </h2>

          <p className="text-center text-gray-500">
            rating{" "}
            <i className="fa-regular fa-star text-yellow-500"></i> {movie.id}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
