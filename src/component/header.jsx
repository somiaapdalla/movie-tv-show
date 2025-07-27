import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE1NzMwYTA4OTA3MTI0MmFjY2JkMDU2OGMxODkxNiIsIm5iZiI6MTc1MzQ2NDQ1NS43NjksInN1YiI6IjY4ODNiZTg3OGJlZWEwMmU2ZThhNjIwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eg14ZYPWVHuuo19yqUwJ7TzSr0BwJ1VGyV795BVFoFY"; // ← ضعي التوكن هنا

function Header() {
  const [isdark, setisdark] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

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

  useEffect(() => {
    const fetchSearch = async () => {
      if (search.trim() === "") {
        setResults([]);
        return;
      }

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search}`,
          {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    fetchSearch();
  }, [search]);

  return (
    <div className={`${isdark ? "dark" : ""}`}>
      <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')] bg-cover bg-center min-h-screen w-full transition-colors duration-500 dark:bg-gray-900">
        <div className="text-white flex justify-between items-center px-10 py-5">
          <h1 className="text-red-700 font-bold text-5xl">NETFLIX</h1>
          <div className="flex items-center gap-10">
            <ul className="flex gap-6 font-semibold text-xl">
              <NavLink to="/"><li>Home</li></NavLink>
              <Link to="/movies"><li>Tv</li></Link>
              <Link to="/films"><li>Movie</li></Link>
              <li>Favourite</li>
              <Link to="/watchlist"><li>Watchlist</li></Link>
            </ul>

            <input
              type="text"
              placeholder="Search for a movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-64 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
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

        {results.length > 0 ? (
          <div className="bg-black bg-opacity-70 py-10 px-10 min-h-screen">
            <h2 className="text-3xl font-bold mb-4 text-white">Search Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {results.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-2">
                    <h3 className="text-center font-semibold text-black dark:text-white">
                      {movie.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="ml-10 mt-20">
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

export default Header;
