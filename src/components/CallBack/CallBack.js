import React, { useEffect, useState } from "react";
import "./CallBack.css";
import axios from "axios";

// import getPixelRGBA from "react-native-get-pixel";
// must install jquery using npm install jquery

// import TopArtists from "./TopArtists";

// root aka place where you can access data from


// define react components with this casing
// function returns react components with the nav
const LMNamesA1 = ["DOESN'T DO ANYTHING ELSE BESIDES STREAM", "ONLY LISTENS TO", "#1 FAN OF", "OBSESSED WITH", "IN LOVE WITH", "BEST FRIENDS WITH", "THINKS THEY'RE BEST FRIENDS WITH", "ADDICTED TO"];
const LMNames = ["STAN", "ENTHUSIAST", "STREAMER", "FAN", "ADDICT", "OBSESSED", "LOVER", "CONNOISSEUR", "IS MY ONLY PERSONALITY TRAIT", "IS MY SOULMATE"];

const LMNamesS1 = ["DOESN'T DO ANYTHING ELSE BESIDES STREAM", "ONLY LISTENS TO", "#1 FAN OF", "OBSESSED WITH", "IN LOVE WITH", "ADDICTED TO STREAMING", "ADDICTED TO", "DEVOTEED TO STREAMING"];const LMNamesS = ["STAN", "ENTHUSIAST", "STREAMER", "FAN", "ADDICT", "OBSESSED", "LOVER", "CONNOISSEUR", "IS MY ONLY PERSONALITY TRAIT"];
const svg_list = ['https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-adventure.svg?v=54130274278551737131659605007', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-marvelous.svg?v=18595962368780084881659605020',
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-snooty.svg?v=53520041401711070011659605029',
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-lazy.svg?v=98790014739926799421659605019','https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-cool.svg?v=144971454686945456651659605013',
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-funny.svg?v=24293613097417794411659605015','https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-dizzy.svg?v=131968281794044505901659605014', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-rush.svg?v=9227952497053646671659605025', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-impossible.svg?v=101808098401377426251659605018', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-nonsense.svg?v=83536068908878949791659605023', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-nosey.svg?v=22910138616784054821659605023', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-wrong.svg?v=83375497807795000411659605033', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-mean.svg?v=41155071983078114781659605020', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-worry.svg?v=130716721952364014991659605032', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-perfect.svg?v=117617203006817363821659605024', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-brave.svg?v=36996079042885595461659605009', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-tall.svg?v=85241504747156721691659605030', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-messy.svg?v=161336296327173425491659605021', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-silly.svg?v=148798574815713564251659605026', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-jelly.svg?v=134221596013407924151659605018', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-small.svg?v=25849821238677734511659605028', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-quiet.svg?v=139372039417460897791659605024', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-muddle.svg?v=150105106016099102421659605022', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-topsy-turvy.svg?v=152575206448236512771659605032', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-skinny.svg?v=161478441302811444271659605027', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-good.svg?v=18173718488025249501659605016', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-christmas.svg?v=118492232755514245181659605011', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-grumpy.svg?v=114146306143244771531659605017', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-clever.svg?v=9633781845633093751659605012', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-daydream.svg?v=143191699983214835881659605013', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-slow.svg?v=82026713640853094521659605027', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-mischief.svg?v=5698692216761811981659605021', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-sneeze.svg?v=9954179417480753611659605028', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-forgetful.svg?v=72125237448557973191659605014', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-nobody.svg?v=5084170522266080041659605022', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-greedy.svg?v=177941623799031827211659605016', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-fussy.svg?v=100552948653142195731659605015', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-birthday.svg?v=88564720215647655671659605008', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-bounce.svg?v=146891505442158536901659605008', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-noisy.svg?v=68555957167987551421659605022', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-cheerful.svg?v=44915831838837759431659605011', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-happy.svg?v=32825736591941550291659605017', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-strong.svg?v=183218680146837682601659605030', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-bump.svg?v=127307366462390316611659605009', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-tickle.svg?v=5815476939599341761659605031', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-clumsy.svg?v=148765629294434274691659605012', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-rude.svg?v=111110890388053464431659605025', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-snow.svg?v=124034023415983075551659605029', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-chatterbox.svg?v=171291291709380404851659605011', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-grumble.svg?v=52296549264665624001659605017', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-busy.svg?v=144519214624395576511659605010', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-calm.svg?v=119471515658012699451659605010', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-inventor.svg?v=110204554553685738351659604996', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-lucky.svg?v=92053933504923400011659604997', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-fabulous.svg?v=113982748522673567301659604991', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-sparkle.svg?v=151946554679424235311659605001', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-curious.svg?v=112395074951675941101659604990', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-shy.svg?v=56676867751454025751659605001', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-dotty.svg?v=147048523543793283111659604991', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-sunshine.svg?v=174862859148275311501659605004', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-bossy.svg?v=103299652571239554031659604987', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-princess.svg?v=124987852904764601931659604999', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-fun.svg?v=104955197634231544961659604992', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-magic.svg?v=141373554922276249991659604997', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-stubborn.svg?v=153971767528416422601659605003', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-somersault.svg?v=81769820630349820381659605001', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-trouble.svg?v=35313274127369502251659605005', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-neat.svg?v=175396733868340278891659604998', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-christmas.svg?v=86671421295001050631659604989', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-splendid.svg?v=46984435854892171671659605002', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-tidy.svg?v=156816873600973132761659605004', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-twins.svg?v=10752197813275993201659605006', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-giggles.svg?v=159349621960121432731659604994', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-helpful.svg?v=160560470179914001491659604995', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-bad.svg?v=136366994464218361011659604986', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-quick.svg?v=114684591319852195011659604999', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-brainy.svg?v=141534344078302279101659604987', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-naughty.svg?v=149784733562733422631659604998', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-whoops.svg?v=167667892445047220781659605006', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-chatterbox.svg?v=166536836674807297911659604988', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-late.svg?v=38308223236680015871659604996', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-fickle.svg?v=93619604358604109081659604992', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-scatterbrain.svg?v=127606533339934133311659605000', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-birthday.svg?v=178391934337825494221659604986', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-star.svg?v=24732188503334429621659605002', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-wise.svg?v=101851008560547544811659605007', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-greedy.svg?v=78843671453890437211659604994', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-busy.svg?v=184293955909364090201659604988', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-scary.svg?v=84936460156266745831659605000', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-contrary.svg?v=125974452468379082531659604990', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-tiny.svg?v=38603039122228539601659605005', 
'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-hug.svg?v=76399333009851535591659604995', 'https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--little-miss-brave.svg?v=37156392584524782741659604988' ];

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
            {/* {data?.items ? data.items.map((item) => <p>LITTLE</p>) : null} */}
            
            {/* {
            data?.items ? data.items.map((item) => 
            <p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {item.images[1].url}
            
</p>) : null}    */}
    
            
            
            {(localStorage.getItem("userType") === "artists" ?  
            (Math.floor(Math.random() * 2) == 1 ?

            
            (data?.items ? data.items.map((item) => 
            <div class="center1"><p class="title">LITTLE {localStorage.getItem("userPronoun")} {LMNamesA1[Math.floor(Math.random() * LMNamesA1.length)]} {item.name.toUpperCase()}</p>
            <img class="lm" src={svg_list[Math.floor(Math.random() * svg_list.length)]}></img></div>) 
            : <div><p></p><img id="image0" src=""></img></div>)
            :
            data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {LMNames[Math.floor(Math.random() * LMNames.length)]}</p>
            <div class="horizontal"><img id="image0" src={item.images[1].url}></img><img class="lm" src={svg_list[Math.floor(Math.random() * svg_list.length)]}></img></div></div>) : <div><p></p><img id="image0" src=""></img></div>)

            
            : 

            (Math.floor(Math.random() * 2) == 1 ?
            
            (data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {item.name.toUpperCase()} {LMNames[Math.floor(Math.random() * (LMNames.length-1))]}</p>
            <img id="image0" src={item.album.images[1].url}></img></div>) : <div><p></p><img id="image0" src=""></img></div>)
            :
            data?.items ? data.items.map((item) => 
            <div class="center1"><p>LITTLE {localStorage.getItem("userPronoun")} {LMNamesS1[Math.floor(Math.random() * LMNamesS1.length)]} {item.name.toUpperCase()}</p>
            <img id="image0" src={item.album.images[1].url}></img></div>) : <div><p></p><img id="image0" src=""></img></div>))
            }
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