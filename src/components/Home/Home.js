import React from "react";
import "./Home.css";
// import { useEffect, useState } from 'react';

// const CLIENT_ID = "596a6b95d0604f118c0c0bcb29ea7556"
// const REDIRECT_URI = "http://localhost:3000/callback" // change later
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
// const RESPONSE_TYPE = "token"

// define react components with this casing
// function returns react components with the nav
const Home = () => {

    // const [token, setToken] = useState("")

    // useEffect(() => {
    //     const hash = window.location.hash
    //     let token = window.localStorage.getItem("token")

    //     if (!token && hash) {
    //         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

    //         window.location.hash = ""
    //         window.localStorage.setItem("token", token)
    //     }

    //     setToken(token)

    // }, [])
    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // }


    return (
        <div class="center">
            {/* <button class="button"><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login to spotify</a></button> */}
            {/* {!token ? <a class="button" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                : <button onClick={logout} class="button">Logout</button>} */}
        </div>
    );
};

export default Home;

