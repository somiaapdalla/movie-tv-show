function TrendingMovies() {
  const trending = [
    { id: 1, title: "Kingdom of the Planet of the Apes", poster: "https://image.tmdb.org/t/p/w500/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg" },
    { id: 2, title: "Civil War", poster: "https://image.tmdb.org/t/p/w500/azD31DjpV3PJfjF3h72LVw2WCSD.jpg" },
    { id: 3, title: "Godzilla x Kong: The New Empire", poster: "https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg" },
    { id: 4, title: "Furiosa: A Mad Max Saga", poster: "https://image.tmdb.org/t/p/w500/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg" },
  ];

  return <div>
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default TrendingMovies;
