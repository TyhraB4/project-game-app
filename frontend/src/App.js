import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import About from './components/About';
import Store from './components/store';
import Games from './components/Games';
import Login from './components/Login';
import Profile from './components/Profile';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Hangman from './components/Hangman/Hangman';
import Tetris from './components/Tetris/src/app.js';
import Register from './components/Register';
import Navigation from './Navigation'; 
import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/games" element={<Games/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/tictactoe" element={<TicTacToe/>}></Route>
          <Route path="/hangman" element={<Hangman/>}></Route>
          <Route path="/tetris" element={<Tetris/>}></Route>
        </Routes>
      </BrowserRouter>
  </CurrentUserProvider>  
  );
}

export default App;