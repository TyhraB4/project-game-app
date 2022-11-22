import React from "react";
import "./App.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import TicTacToe from "./components/TicTacToe/TicTacToe"
import NavBar from "./NavBar";
import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/tictactoe" element={<TicTacToe/>} />
        </Routes>
      </div>
      </>
  )
}

export default App;