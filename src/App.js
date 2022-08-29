// library imports
import React from "react";

import {
  BrowserRouter as Router, 
  Switch,
  Route, Routes
} from "react-router-dom";

// local imports
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar"
import Home from "./components/Home";
import About from "./components/About";
import CallBack from "./components/CallBack";
// import { SpotifyAuth, Scopes } from 'react-spotify-auth'
// import 'react-spotify-auth/dist/index.css'

// https://accounts.spotify.com/authorize?
const App = () => {
  return (
    
    <Router>
      <NavigationBar />
      {/* see/render what ever it has as its children */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/callback" element={<CallBack />} />
      </Routes>
    </Router>
  );
};

// App.get("/*", function (req, res) { res.sendFile(path.resolve(__dirname, '../client/build', 'index.html')); })


export default App;
