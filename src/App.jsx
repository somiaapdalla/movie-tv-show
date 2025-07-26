import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./component/header"
import Movielist from "./pages/movielist"
import Movies from "./pages/tv"
import Films from "./pages/films"
import Listfilms from "./pages/films"



function App() {
  return <div>
     <Header />
    <Routes>
    <Route path="/" element={<Movielist/>}/>
    <Route path="/movies" element={<Movies />}/>
    <Route path="/films" element={<Listfilms />}/>

   
       </Routes>
    
    </div>
  
}

export default App
