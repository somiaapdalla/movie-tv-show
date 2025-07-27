import React from "react";
import {  Routes, Route } from "react-router-dom";
import TvShows from "./pages/tv";
import Header from "./component/header";
import Movielist from "./pages/movielist";
import ListFilms from "./pages/listfilms";





function App() {
  return <div>

      <Header/>
      <Routes>
        <Route path="/" element={<Movielist/>} />
        <Route path="/movies" element={<TvShows />} />
        <Route path="listfilm" element={<ListFilms />}/>
  
      </Routes>

</div>
}

export default App
