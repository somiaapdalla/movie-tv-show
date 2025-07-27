// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import movies from "./moviedata";
import MovieCard from "../pages/films";


function Header() {
  const [isdark, setisdark] =useState(false);
  const [search, setSearch] = useState("");

  const toggleDarkMode = () => {
    setisdark(!isdark);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isdark);
  }, [isdark]);

  const filteredMovies = search.trim()
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];
   return (
    <div className={`${isdark ? "dark" : ""}`}>
      <div className="relative h-screen w-full bg-cover bg-center" 
           style={{ 
             backgroundImage: `linear-gradient(
               rgba(0,0,0,0.7), 
               rgba(0,0,0,0.5), 
               rgba(0,0,0,0.7)
             ), url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`
           }}>
        <div className="relative z-10 px-10 py-5 flex justify-between items-center text-white">
          <h1 className="text-red-600 font-bold text-5xl">NETFLIX</h1>

          <div className="flex items-center gap-10">
            <ul className="flex gap-6 font-semibold text-xl">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/movies">
                <li>Tv</li>
              </NavLink>
              <NavLink to="listfilm">
                <li>Movie</li>
              </NavLink>
              <NavLink to="/watchlist">
                <li>Watchlist</li>
              </NavLink>
            </ul>

            <input
              type="text"
              placeholder="Search for a movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-64 rounded-md border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />

            <div className="text-2xl cursor-pointer" onClick={toggleDarkMode}>
              {!isdark ? (
                <i className="fa-regular fa-moon text-white"></i>
              ) : (
                <i className="fa-solid fa-sun text-yellow-400"></i>
              )}
            </div>
          </div>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="relative z-10 bg-black bg-opacity-70 py-10 px-10 min-h-screen">
            <h2 className="text-3xl font-bold mb-4 text-white">Search Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative z-10 ml-10 mt-20">
            <h1 className="text-white text-6xl font-semibold leading-tight">
              Free Movies to Watch <br /> Anytime Anywhere
            </h1>
            <p className="text-white text-2xl mt-6 mb-6 font-semibold">
              The search is over! Let Plex help you find the perfect <br />
              movie to watch tonight for free.
            </p>
            <button className="py-2 px-6 bg-yellow-600 rounded-xl font-bold hover:bg-yellow-500 transition">
              Watch Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
 
}

export default Header

