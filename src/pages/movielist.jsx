import React from "react";

function Movielist (){
      const Moviedata=[
      { id: 2, title: "Stranger Things", poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
     { id: 3, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
    { id: 4, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { id: 5, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
      { id: 10, title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 20, title: "Joker", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 30, title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { id: 40, title: "Parasite", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { id: 50, title: "Avengers: Infinity War", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },

     ]
      const trending = [
    { id: 1, title: "Kingdom of the Planet of the Apes", poster: "https://image.tmdb.org/t/p/w500/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg" },
    { id: 2, title: "Civil War", poster: "https://image.tmdb.org/t/p/w500/azD31DjpV3PJfjF3h72LVw2WCSD.jpg" },
    { id: 3, title: "Godzilla x Kong: The New Empire", poster: "https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg" },
    { id: 4, title: "Furiosa: A Mad Max Saga", poster: "https://image.tmdb.org/t/p/w500/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg" },
  ];
    return <div>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8">
  <h1 className="text-3xl font-bold mb-10 text-center">🎬 Popular Movies</h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 space-x-10 lg:grid-cols-5 gap-6 ml-10">
    
  
  
   {
    Moviedata.map((movie)=>{
        return <div key={movie.id}  className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <p className="text-center text-lg font-semibold text-gray-800 dark:text-white">
          {movie.title}
        </p>
      </div>
    </div>

    })
   }

 </div>
 </div>
 <div className="bg-white dark:bg-gray-900 text-black dark:text-white py-10 px-10 ">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {trending.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition duration-300"
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
            <div className="p-4">
              <p className="text-center text-lg font-semibold">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


 </div>
}
export default Movielist

