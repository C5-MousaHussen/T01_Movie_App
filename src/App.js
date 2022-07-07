import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import the page
import Home from "./component/Home";
import Favorite from "./component/Favorite";
import Movie from "./component/Movie";
import Navbar from "./component/Navbar";
import Discription from "./component/Description";

function App() {
  const { movieid } = useParams();
  return (
    <div className="containerMovie">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/0" element={<Movie />} />
        <Route path="/movie/:movieid" element={<Discription />} />
      </Routes>
    </div>
  );
}

export default App;
