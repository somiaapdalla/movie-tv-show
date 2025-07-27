import React from "react";
import {  Routes, Route } from "react-router-dom";
import TvShows from "./pages/tv";
import Header from "./component/header";
import Movielist from "./pages/movielist";
import ListFilms from "./pages/listfilms";
import Watchlist from "./pages/watchlist";
import { Contact } from "lucide-react";





function App() {
  return <div>

      <Header/>
      <Routes>
        <Route path="/" element={<Movielist/>} />
        <Route path="/movies" element={<TvShows />} />
        <Route path="listfilm" element={<ListFilms />}/>
        <Route path="watchlist" element={<Watchlist />}/>
        <Route path="contact" element={<Contact />}/>
  
      </Routes>

</div>
}

export default App
