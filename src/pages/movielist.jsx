import React from "react";
import movies from "../component/moviedata";         
import MovieCard from "./films";
import { useDispatch } from "react-redux";

function Movielist() {
   
  const trendingMovies = movies.filter(
    (movie) => movie.type === "movie" && movie.trending
  );
  const popularMovies = movies.filter(
    (movie) => movie.type === "movie" && movie.popular
  );

  return (
    <div className="p-10 space-y-10  bg-gray-900 min-h-screen md:p-12">
      <div>
        <h2 className="text-3xl text-white font-bold mb-8">Trending Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

     <div>
  <h2 className="text-3xl text-white font-bold mb-8">Popular Movies</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* بطاقات الأفلام هنا */}
  


          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Movielist
