import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removeFromWatch } from "../redux/reducer/watch";
function Watchlist(){

    const dispatch = useDispatch()
    const watchitem = useSelector((state) => state.watch.watchitem)

    const handleremove = (id) => {
    dispatch(removeFromWatch(id)); // ✅ هذا هو الصح
  };

  
      return (
    <div className="p-4 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">My Watchlist</h1>

      {watchitem.length === 0 ? (
        <p className="text-center text-gray-500">No items in your watchlist yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watchitem.map((item,index) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition hover:scale-105"
            >
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-3 flex flex-col gap-2">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Type: {item.type || "Movie"}
                </p>
                <p className="text-sm">Rating: ⭐ {item.rating || "N/A"}</p>
                <button
                  onClick={() => handleremove(index)}
                  className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded-xl hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <MovieCard key={movie.id} movie={movie} /> */}
    </div>
  );
}
export default Watchlist