import React from "react";
import {useState,useEffect} from "react";
import { Typography, Container } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/config.json";
import { FirstName } from "../../utils/getName";

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

    const [ip, setIP] = useState('.');
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
  let apiKey = 'f8e0b361e8f4405c94613ab534959fdf';   const getData = async () => {
    const res = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey='+ apiKey)
    console.log(res.data);
    setIP(res.data.city)
    };
   
const [weather, setWeather] = useState('.');
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ip}&units=metric&appid=${api}`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
   setWeather({
     descp: data.weather[0].description,
     icon: data.weather[0].icon,
            temp: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            press: data.main.pressure,
            wind: data.wind.speed,

   })
    
     console.log(data.main)
     console.log(data.name)
     console.log(weather)
     console.log(weather.temp)
     console.log(weather.humidity)
     console.log(weather.press)
     console.log(weather.icon)
                  })
  .catch((error) => console.log(error));

    

    //Converting K to C
 //.then((object) => {
       // setWeather(object);
      //  console.log(weather);
     // })

useEffect( () => {
  
                       
    
    getData()

  }, []) // when weather changes, sets 2) ---> prolly fires this effect block again
// ifninite loop


let icon = weather.icon;
let decimal = Math.trunc(weather.wind);
     console.log(decimal)


    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
          <div class="search">
      <input type="text" class="search-bar" placeholder="Search"
         onChange={e => setIP(e.target.value)}/>
        
    </div>
         
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`Weather in ${weather.city}`} />
            </Typography>
          
            <Typography variant="h3" component="h2" gutterBottom>
                <TextDecrypt text={` ${weather.temp}°C`} />
              </Typography>
           
            <Typography variant="h5" component="h5" gutterBottom>
                <TextDecrypt text={`Humidity: ${weather.humidity}%`} />
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
                <TextDecrypt text={`Wind: ${decimal}km/h`} />
            </Typography>
          
        </Container>
    );
};
