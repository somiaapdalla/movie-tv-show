import { useState } from "react";

// Sample data (can be replaced with TMDb or API)
const movies = [
  { id: 1, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
  { id: 2, title: "Stranger Things", poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
  { id: 3, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 4, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 5, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
];

function MovieGallery() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Movie Library</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full max-w-md px-4 py-2 border rounded-md mb-8 bg-gray-100 dark:bg-gray-800 dark:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-md shadow-md"
              />
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                <p className="text-white text-center text-lg font-semibold px-2">{movie.title}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default MovieGallery;
