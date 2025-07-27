import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./component/header"
import Movielist from "./pages/movielist"
// import Movies from "./pages/tv"
import Listfilms from "./pages/films"
import MovieCard from "./pages/tv";




function App() {
  return <div>
     <Header />
    <Routes>
    <Route path="/" element={<MovieCard/>}/>
    {/* <Route path="/movies" element={<Movies />}/> */}
   <Route path="/films" element={<Listfilms />} />
       </Routes>
       
  
    
    </div>
  
}

export default App
