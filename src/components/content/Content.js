import React from "react";
import {useState, useEffect} from "react";
import { Link, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt.js";
const useStyles = makeStyles((theme) => ({
    search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  
  button: {
    margin: "0.5em",
    borderRadius: "50%",
    border: "none",
    height: "44px",
    width: "44px",
    outline: "none",
    background: "#7c7c7c2b",
    color: "white",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
  },
  
  
  
  "&:hover": {
    background: "#7c7c7c6b",
      },
    main: {
         background: "#000000d0",
    color: "white",
    padding: "2em",
    marginTop: "auto",
      opacity: "0.6",
      width: "70%",
      borderRadius: "30px",
        marginBottom: "auto",
        "@media (max-width: 728px)": {
            marginLeft: theme.spacing(4),
            },
        /*marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
            },*/
        
    },
}));

export const Content = () => {
    const classes = useStyles();

    const [ip, setIP] = useState('delhi');
  const myapi = ["b190a0605344cc4f3af08d0dd473dd25", "bcc8472740ca9855a9620a0a3d6168b4", "cac3427ab24f44b470779f0a8efa25e3", "e84adc806b12a31f9bc35657d74a931e", "dd151471f1a82230bb263903e418bf7b", "7d44fca2d125a7eb98dcbcf42f38e757", "96fd9bf8f54700190b83b28c5019174b"]

    const api = myapi[Math.floor(Math.random()*myapi.length)];
    // let api = '7d44fca2d125a7eb98dcbcf42f38e757';
       //'b190a0605344cc4f3af08d0dd473dd25';
  // 'bcc8472740ca9855a9620a0a3d6168b4';
  //"cac3427ab24f44b470779f0a8efa25e3",
  //"e84adc806b12a31f9bc35657d74a931e",
  //"dd151471f1a82230bb263903e418bf7b",
  //"7d44fca2d125a7eb98dcbcf42f38e757",
  //"96fd9bf8f54700190b83b28c5019174b"
   
const [weather, setWeather] = useState('.');
  let url = ("https://api.openweathermap.org/data/2.5/weather?q=" +
          ip +
          "&units=metric&appid=" + api);
  async function getUser() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const res = await response.json();
    let {temp, feels_like} = res.main;
    console.log(res.id)
    const { humidity } = res.main;
				setWeather({
					temp,
					feels_like,
          humidity,
          id: res.id,
          speed: res.wind.speed,
          city: res.name,
					name: `${res.name}`,
				})
  } catch (error) {
    console.log(error);
  }
  }    

     console.log(weather)
     console.log(weather.temp)
     console.log(weather.humidity)
     console.log(weather.speed)
                  

    

    //Converting K to C
 //.then((object) => {
       // setWeather(object);
      //  console.log(weather);
     // })

useEffect( () => {
  
                       
    getUser()


  }, [weather]) // when weather changes, sets 2) ---> prolly fires this effect block again
// ifninite loop


let id = weather.id;
let decimal = Math.trunc(weather.speed);
     console.log(decimal);
  

let info = ("https://openweathermap.org/city/" + id)
    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
          <div class="search">
      <input type="text" class="search-bar" placeholder="Search"
         onChange={e => setIP(e.target.value)}/>
             <button onClick={getUser}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" >
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
        
        
    </div>
         
            <Typography variant="h2" component="h3" gutterBottom>
                <TextDecrypt text={`Weather in ${weather.city}`} />
            </Typography>
          
            <Typography variant="h3" component="h4" gutterBottom>
                <TextDecrypt text={` ${weather.temp}°C`} />
              </Typography>
           
            <Typography variant="h7" component="h7" gutterBottom>
                <TextDecrypt text={`Humidity: ${weather.humidity}%`} />
            </Typography>
            <Typography variant="h7" component="h7" gutterBottom>
                <TextDecrypt text={`Wind: ${decimal}km/h`} />
            </Typography>
          <Link 
            color='inherit'
      underline='none'
      href={info}
      target='_blank'
      rel='noopener noreferrer'
            >
            
<Typography variant="h9" component="h9" gutterBottom >
                <TextDecrypt text={`Get More Info`} />
            </Typography>
</Link>

          
        </Container>
    );
  
};
