import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../pages/movielist";
 // adjust the path

function Movies() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchMovies = () => {
    // مؤقتًا نستخدم بيانات ثابتة بدل API
    const localData = [
      { id: 1, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", genre: "Sci-Fi" },
      { id: 2, title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg", genre: "Romance" },
      { id: 3, title: "Avengers", poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", genre: "Action" },
      { id: 4, title: "The Conjuring", poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", genre: "Horror" },
      { id: 5, title: "Shrek", poster: "https://image.tmdb.org/t/p/w500/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg", genre: "Comedy" },
    ];
    setData(localData);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = data.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="p-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-center mb-10 gap-10 flex-wrap">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-60 h-10 text-xl text-black rounded-md pl-3 outline-none bg-gray-200"
          type="search"
          placeholder="Search movies..."
        />
        <div className="space-x-4 text-lg">
          <label><input type="radio" name="genre" value="" onChange={() => setSelectedGenre("")} /> All</label>
          <label><input type="radio" name="genre" value="Action" onChange={() => setSelectedGenre("Action")} /> Action</label>
          <label><input type="radio" name="genre" value="Romance" onChange={() => setSelectedGenre("Romance")} /> Romance</label>
          <label><input type="radio" name="genre" value="Horror" onChange={() => setSelectedGenre("Horror")} /> Horror</label>
          <label><input type="radio" name="genre" value="Comedy" onChange={() => setSelectedGenre("Comedy")} /> Comedy</label>
          <label><input type="radio" name="genre" value="Sci-Fi" onChange={() => setSelectedGenre("Sci-Fi")} /> Sci-Fi</label>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMovies.map((movies) => (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
