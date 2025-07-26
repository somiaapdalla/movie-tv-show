
import React, { useEffect, useState } from "react";

function Listfilms() {
  const [isdark, setisdark] = useState(false);

  const toggleDarkMode = () => {
    setisdark(!isdark);
  };

  useEffect(() => {
    if (isdark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isdark]);

  const ComedyMovies = [
  { id: 4, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  {
    id: 2,
    title: "Superbad",
    poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
  },
   { id: 50, title: "Avengers: Infinity War", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  {
    id: 4,
    title: "Deadpool",
    poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
  },
  { id: 30, title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
];
 const HorrorMovies = [
  {
    id: 1,
    title: "The Conjuring",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  },
  { id: 4, title: "Furiosa: A Mad Max Saga", poster: "https://image.tmdb.org/t/p/w500/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg" },
  {
    id: 3,
    title: "A Quiet Place",
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  },
  {
    id: 4,
    title: "Insidious",
    poster: "https://image.tmdb.org/t/p/w500/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg",
  },
  { id: 2, title: "Civil War", poster: "https://image.tmdb.org/t/p/w500/azD31DjpV3PJfjF3h72LVw2WCSD.jpg" },
];


  const ActionMovies = [
   { id: 1, title: "Kingdom of the Planet of the Apes", poster: "https://image.tmdb.org/t/p/w500/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg" },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  },
  {
    id: 3,
    title: "Extraction",
    poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
  },
  {
    id: 4,
    title: "Fast & Furious 9",
    poster: "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
  },
  {
    id: 5,
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];
[
{
    id: 1,
    title: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/1R93SyPxeNkWfqLklgZCj7cEYkT.jpg",
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  },
  {
    id: 3,
    title: "Extraction",
    poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
  },
  {
    id: 4,
    title: "Fast & Furious 9",
    poster: "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
  },
  {
    id: 5,
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

const DramaMovies = [
{ id: 40, title: "Parasite", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  {
    id: 2,
    title: "Forrest Gump",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 4,
    title: "A Beautiful Mind",
    poster: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
  },
  { id: 20, title: "Joker", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
];
  const sectionStyle = "py-14";
  const movieBox = "w-48 flex-shrink-0 hover:scale-105 transition";
  const imageClass = "w-full h-72 object-cover rounded-lg";
  const textClass = "mt-2 text-center font-medium text-black dark:text-white";

  return (
    <div className="min-h-screen px-10 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className={sectionStyle}>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400 ">Comedy</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {ComedyMovies.map((movie) => (
            <div key={movie.id} className={movieBox}>
              <img src={movie.poster} alt={movie.title} className={imageClass} />
              <p className={textClass}>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

  
      <div className={sectionStyle}>
        <h2 className="text-3xl font-bold mb-4 text-red-600 ">Horror</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {HorrorMovies.map((movie) => (
            <div key={movie.id} className={movieBox}>
              <img src={movie.poster} alt={movie.title} className={imageClass} />
              <p className={textClass}>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className={sectionStyle}>
        <h2 className="text-3xl font-bold mb-4 text-blue-500 ">Action</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {ActionMovies.map((movie) => (
            <div key={movie.id} className={movieBox}>
              <img src={movie.poster} alt={movie.title} className={imageClass} />
              <p className={textClass}>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={sectionStyle}>
        <h2 className="text-3xl font-bold mb-4 text-purple-400 ">Drama</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {DramaMovies.map((movie) => (
            <div key={movie.id} className={movieBox}>
              <img src={movie.poster} alt={movie.title} className={imageClass} />
              <p className={textClass}>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listfilms;
