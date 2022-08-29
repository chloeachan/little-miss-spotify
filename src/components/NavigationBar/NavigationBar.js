import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

// import TopArtists from "./TopArtists";

// root aka place where you can access data from
const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
const CLIENT_ID = "596a6b95d0604f118c0c0bcb29ea7556"
const REDIRECT_URI = "http://localhost:3000/callback" // change later
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const SCOPE = "user-top-read"       

// define react components with this casing
// function returns react components with the nav
const NavigationBar = () => {
  const [data, setData] = useState({});
  const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
            console.log(token)
        }
        setToken(token)
        localStorage.setItem("accessToken", token);

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        localStorage.clear();
    }

    
  //   const handleGetArtists = () => {
  //     // initiate get request from this particular endpoint
  //     axios.get(ARTISTS_ENDPOINT, {
  //         headers: {
  //             Authorization: "Bearer " + token,
  //         }, 
  //     }).then(response => {
  //         console.log(response.data);
  //         setData(response.data);
          
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
  // };
  
    return (
      <header class="NavigationBar">
      <nav class="Nav">
        <ul class="NavLeft">
            <Link to="/"><li class="link">little miss spotify</li></Link>
        </ul>
        <ul class="navbar">
        <Link to="/about"><li class="link">about</li></Link>
        {!token ? <button class="button"><a class="link" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login to spotify</a></button>
                : <button onClick={logout} class="button">logout</button>}
    
        </ul>
      </nav>
    </header>
    );
  };

  export default NavigationBar;