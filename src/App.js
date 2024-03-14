import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import BranchView from "./views/BranchView";
import MovieView from "./views/MovieView";

function App() {
  return (
    <BrowserRouter>
      <div className="App relative bg-gradient-to-tl from-primary via-black to-black min-h-screen flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/branch/:title" element={<BranchView />} />
            <Route path="/movie/:id" element={<MovieView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
