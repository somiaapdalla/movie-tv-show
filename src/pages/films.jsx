
  import React from "react";
import { useDispatch } from "react-redux";
import { addToWatch } from "../redux/reducer/watch";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToWatch(movie));
    console.log(movie);
  };

  return (
    <div className="rounded-2xl shadow-xl bg-white dark:bg-gray-800 transform transition hover:scale-105 hover:shadow-2xl duration-300">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-bold text-xl text-gray-900 dark:text-white truncate">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 italic">
          {movie.genre}
        </p>

        <div className="flex items-center justify-between mt-2 gap-2">
          <span className="text-yellow-500 font-semibold">
            ⭐⭐⭐ {movie.rating}
          </span>

          {/* زر الإضافة للمفضلة */}
          <button
            onClick={handleAdd}
            className="px-3 py-1 text-sm bg-yellow-600 text-white rounded-xl hover:bg-yellow-500"
          >
             Watchlist
          </button>

          {/* زر المشاهدة */}
          <Link to="/watch" state={{movie}}>
            <button className="px-3 py-1 text-sm bg-yellow-600 text-white rounded-xl hover:bg-yellow-500">
              Watch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;




