import { Route, Routes } from "react-router-dom"
import Header from "./component/header"
import Movielist from "./pages/movielist"
import Movies from "./pages/tv"

function App() {
  return <div>
     <Header />
    <Routes>
    <Route path="/" element={<Movielist/>}/>
    <Route path="/movies" element={<Movies />}/>
    </Routes>
  
    
    </div>
  
}

export default App
