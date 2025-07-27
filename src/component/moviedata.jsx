// src/data/movies.js
const movies = [
  // --- TV SHOWS ---
  { id: 1, title: "Breaking Bad", type: "tv", poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
  { id: 2, title: "Game of Thrones", type: "tv", poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" },
  { id: 3, title: "Stranger Things", type: "tv", poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
  { id: 4, title: "The Witcher", type: "tv", poster: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg" },
  { id: 5, title: "The Boys", type: "tv", poster: "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg" },
  { id: 6, title: "Peaky Blinders", type: "tv", poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" },
  { id: 7, title: "Loki", type: "tv", poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg" },
  { id: 8, title: "WandaVision", type: "tv", poster: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg" },
  { id: 10, title: "The Mandalorian", type: "tv", poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },

  // --- MOVIES ---
  { id: 11, title: "Inception", type: "movie", trending: true, popular: true, poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  { id: 12, title: "The Dark Knight", type: "movie", trending: true, popular: false, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 13, title: "Interstellar", type: "movie", trending: false, popular: true, poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 14, title: "Avengers: Endgame", type: "movie", trending: true, popular: true, poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
  { id: 15, title: "The Matrix", type: "movie", trending: false, popular: true, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 16, title: "John Wick", type: "movie", trending: true, popular: false, poster: "https://image.tmdb.org/t/p/w500/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg" },
  { id: 17, title: "Gladiator", type: "movie", trending: false, popular: true, poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 18, title: "Avatar", type: "movie", trending: true, popular: true, poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
   { id: 1, title: "Free Guy", poster: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg", type: "movie", genre: "comedy" },
{ id: 6, title: "Peaky Blinders", type: "movie", genre: "comedy", poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" },
{ id: 7, title: "Loki", type: "movie", genre: "comedy", poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg" },
  { id: 5, title: "Ride Along", poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg", type: "movie", genre: "comedy" },
  { id: 3, title: "Superbad", poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", type: "movie", genre: "comedy" },

  { id: 6, title: "The Conjuring", poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", type: "movie", genre: "horror" },
  { id: 3, title: "Stranger Things", type: "movie", genre: "horror", poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
{ id: 4, title: "The Witcher", type: "movie", genre: "horror", poster: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg" },
  { id: 8, title: "Hereditary", poster: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg", type: "movie", genre: "horror" },
  { id: 10, title: "Smile", poster: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg", type: "movie", genre: "horror" },

  { id: 11, title: "John Wick", poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", type: "movie", genre: "action" },
  { id: 12, title: "Mad Max: Fury Road", poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", type: "movie", genre: "action" },
  { id: 13, title: "Extraction", poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg", type: "movie", genre: "action" },
  { id: 14, title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", type: "movie", genre: "action" },
  { id: 15, title: "Fast & Furious 9", poster: "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg", type: "movie", genre: "action" },

  { id: 16, title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", type: "movie", genre: "drama" },
  { id: 1, title: "Breaking Bad", type: "movie", genre: "drama", poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
  { id: 18, title: "The Green Mile", poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", type: "movie", genre: "drama" },
{ id: 10, title: "The Mandalorian", type: "movie", genre: "drama", poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
  { id: 20, title: "Good Will Hunting", poster: "https://image.tmdb.org/t/p/w500/9NBBkdxH0TjQEBSN2AzeE1sgsF9.jpg", type: "movie", genre: "drama" }

];
export default movies
