import React, { useEffect, useState } from "react";
import "./CallBack.css";
import axios from "axios";
import prominent  from 'color.js';
import analyze from 'rgbaster';
import color from 'rgbaster';
import * as Vibrant from 'node-vibrant'

// import getPixelRGBA from "react-native-get-pixel";
// must install jquery using npm install jquery

// import TopArtists from "./TopArtists";

// root aka place where you can access data from


// define react components with this casing
// function returns react components with the nav
const LMNamesA1 = ["DOESN'T DO ANYTHING ELSE BESIDES STREAM", "ONLY LISTENS TO", "#1 FAN OF", "OBSESSED WITH", "IN LOVE WITH", "BEST FRIENDS WITH", "THINKS THEY'RE BEST FRIENDS WITH", "ADDICTED TO"];
const LMNames = ["STAN", "ENTHUSIAST", "STREAMER", "FAN", "ADDICT", "OBSESSED", "LOVER", "CONNOISSEUR", "IS MY ONLY PERSONALITY TRAIT", "IS MY SOULMATE"];

const LMNamesS1 = ["DOESN'T DO ANYTHING ELSE BESIDES STREAM", "ONLY LISTENS TO", "#1 FAN OF", "OBSESSED WITH", "IN LOVE WITH", "ADDICTED TO STREAMING", "ADDICTED TO", "DEVOTEED TO STREAMING"];const LMNamesS = ["STAN", "ENTHUSIAST", "STREAMER", "FAN", "ADDICT", "OBSESSED", "LOVER", "CONNOISSEUR", "IS MY ONLY PERSONALITY TRAIT"];

function CallBack() {
    
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
            console.log("callback token " + token);
            console.log("at token " + localStorage.getItem("accessToken"));
        }
    }, []);


    // const hash = window.location.hash
    // const token = window.localStorage.getItem("token")
    // if (!token && hash) {
    //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    //     window.location.hash = ""
    //     window.localStorage.setItem("token", token)
    // }
    // setToken(token);
    const token1 = localStorage.getItem("accessToken");
    console.log(token1);

    const handleGetArtists = () => {
        const time = document.querySelector('input[name="radio00"]:checked').value;
        const pronoun = document.querySelector('input[name="radio"]:checked').value;
        localStorage.setItem("userPronoun", pronoun);
        const type = document.querySelector('input[name="type"]:checked').value;
        localStorage.setItem("userType", type);
        // https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=3
        const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/" + `${type}` + "?time_range=" + `${time}` + "&limit=3";

        // initiate get request from this particular endpoint
        axios.get(ARTISTS_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + token1,
            },
        }).then(response => {
            setData(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
        // var mainBox = document.getElementById('class1');
        // mainBox.css('background','red');

        // mainBox.append(`<div>${header}</div>`);
    };



    function getColor(url1) {
        var img = document.createElement('img');
        img.setAttribute('src',url1)
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches();
        for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
            console.log(swatch, swatches[swatch].getHex())

        return "non";
    }




    // function getColor(url1) {
    //     var img = url1;

    //     RGBaster.colors(img, {
    //         success: function (payload) {
    //             console.log('Dominant color:', payload.dominant);
    //             console.log('Secondary color:', payload.secondary);
    //             console.log('Palette:', payload.palette);
    //         }
    //     });
    // }

      
    
        // const color = prominent(url1, { amount: 1 })
        // console.log(color);

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */


        // var img = new Image();
        // img.crossOrigin = "Anonymous";
        // img.src = url1;
        // var canvas = document.createElement('canvas');
        // var context = canvas.getContext('2d');
        // context.drawImage(img, 0, 0);
        // // ctx.drawImage(imageElement, 0, 0, width, height);
        // // console.log(context);
        // return context.getImageData(10, 10, 1, 1);
    

    
//     function getColor(url1) {
//     getPixelRGBA(url1, 10, 10)
//    .then(color => console.log(color)) // [243, 123, 0]
//    .catch(err => {});
//     }


    return (
        <div class="center">
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
            {/* <div class="pronouns">
                <ul>
    <li>
    
        <input type='radio' value='1' name='radio' id='radio1'/>
        <label for='radio1'>Value 1</label>
    </li>
    <li>
        <input type='radio' value='2' name='radio'  id='radio2'/>
        <label for='radio2'>Value 2</label>
    </li>
    <li>
        <input type='radio' value='3' name='radio'  id='radio3'/>
        <label for='radio3'>Value 3</label>
    </li>
</ul>
            </div> */}


            <fieldset class="type">
                <li>
                    <input type="radio" value="artists" name="type" id='radio001' />
                    <label for='radio001'>by top artists</label>
                </li><li>
                    <input type="radio" value="tracks" name="type" id='radio002' />
                    <label for='radio002'>by top songs</label>
                </li>
            </fieldset>

            <fieldset class="pronoun">
                <li>
                    <input type="radio" value="MISS" name="radio" id='radio01' />
                    <label for='radio01'>she/her/hers</label>
                </li><li>
                    <input type="radio" value="MR." name="radio" id='radio02' />
                    <label for='radio02'>he/him/his</label>
                </li>
                <li>
                    <input type="radio" value="MX." name="radio" id='radio03' />
                    <label for='radio03'>they/them/theirs</label>
                </li>
            </fieldset>
            <fieldset class="when">
                <li>
                    <input type='radio' value='short_term' name='radio00' id='radio1' />
                    <label for='radio1'>past month</label>
                </li>
                <li>
                    <input type='radio' value='medium_term' name='radio00' id='radio2' />
                    <label for='radio2'>past 6 months</label>
                </li>
                <li>
                    <input type='radio' value='long_term' name='radio00' id='radio3' />
                    <label for='radio3'>past year</label>
                </li>
            </fieldset>
            <br></br>
            <div class="center">
                {/* <button class="submit">submit</button> */}
                <button class="submit" onClick={handleGetArtists}>submit</button>
            </div>
            
            <div class="center2">
            
            {
            data?.items ? data.items.map((item) => 
            <p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {item.images[1].url}
            
</p>) : null}   
    
            
            
            {/* {(localStorage.getItem("userType") === "artists" ? 
            (Math.floor(Math.random() * 2) == 1 ?
            
            (data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {LMNamesA1[Math.floor(Math.random() * LMNamesA1.length)]} {item.name.toUpperCase()}</p>
            <img id="image0" src={item.images[1].url}></img></div>) : <div><p></p><img id="image0" src=""></img></div>)
            :
            data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {LMNames[Math.floor(Math.random() * LMNames.length)]}</p>
            <img id="image0" src={item.images[1].url}></img></div>) : <div><p></p><img id="image0" src=""></img></div>)

            
            : 

            (Math.floor(Math.random() * 2) == 1 ?
            
            (data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {LMNames[Math.floor(Math.random() * (LMNames.length-1))]}</p>
            <img id="image0" src={item.album.images[1].url}></img></div>) : <div><p></p><img id="image0" src=""></img></div>)
            :
            data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {LMNamesS1[Math.floor(Math.random() * LMNamesS1.length)]} {item.name.toUpperCase()}</p>
            <img id="image0" src={item.album.images[1].url}></img></div>) : <div><p></p><img id="image0" src=""></img></div>))
            } */}
            </div>

            
            
{/* //             (Math.floor(Math.random() * 2) == 1 ?

//             (data?.items ? data.items.map((item) => 
//             <div><p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {LMNames[Math.floor(Math.random() * (LMNames.length-1))]}</p>
//             <img src={item.album.images[1].url}></img></div>): <div><p></p><img src=""></img></div>
// `           :
//             data?.items ? data.items.map((item) => 
//             <div><p>LITTLE {localStorage.getItem("userPronoun")} {LMNamesS1[Math.floor(Math.random() * LMNamesS1.length)]} {item.name.toUpperCase()}</p>
//             <img src={item.album.images[1].url}></img></div>): <div><p></p><img src=""></img></div>))} */}

            
            
            {/*  <p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()}</p> */}
            {/* {data?.items ? data.items.map((item) => <p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()}</p>) : null} */}
            {/* {isArtists() ? (data?.items ? data.items.map((item) => console.log(item.images[2].url)) : null) : (data?.items ? data.items.map((item) => console.log(item.album.images[2].url)) : null) } 
             */}
            {/* {localStorage.getItem("userType") === "artists" ? data?.items ? data.items.map((item) => <img src={item.images[2].url}></img>) : <img src=""></img>: (data?.items ? data.items.map((item) => console.log(item.album.images[2].url)) : null) } */}
            {/* item.image[url] */}
            
            {/* {data?.items ? data.items.map((item) => ) : null} */}
            <div class="center1" id="class1">
            </div>
            {/* <button>past month</button> */}
            {/* <button>past year</button>
                <button>all time</button> */}
        </div>
    );
}

export default CallBack;