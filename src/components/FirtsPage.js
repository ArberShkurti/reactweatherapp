import axios from "axios";
import React, {useState} from "react";
import "./FirtsPage.css";

const FirtsPage =() => {
    const [data, setData] = useState ({})
    const [location, setLocation] = useState ('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2170af0c865eb676341892641b02e42a&units=metric`

    const searchLocation = (event) => {
        if (event.key === 'Enter' ) {
            axios.get(url).then((response) =>{
            setData(response.data)
            console.log(response.data)})
            setLocation('')            
            }
        }

    // function bg () {
    //         if (data.weather.main == "Clear") {
    //             console.log("shiiii");
    //         } else {
    //             console.log("jo shi");
    //         }
    //     }

    return (
            
            <div className="container"
/*             style={{
                                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: "cover",
                width: '100vh',
                height: '100vh'

             }}*/
             >

                <div className="search">
                    <input 
                    value={location}
                    onKeyPress={searchLocation}
                    onChange={event => setLocation(event.target.value)}
                    placeholder="Enter Location"
                    type="text" />
                </div>
                 <div className="top">

                    <div className="location">
                        <p>{data.name}</p> 
                        {/* {data.weather[0].main == "Clear" ? <h2>hapur</h2> : null }*/}
                    </div>

                    <div className="temp">                    
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null} 
                    <p></p>
                     </div>

                     {/* <div className="ikona">
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
                     </div> */}

                     <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}               
                    </div>

                 </div>

                 <div className="bottom">
                    <div className="feels">
                    {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}  
                        <p className="bold">Feels like</p>
                    </div> 
                    <div className="humidity">
                    {data.main ? <p className="bold">{data.main.humidity} %</p> : null}  
                        <p className="bold">Humidity</p>
                    </div>
                    <div className="wind">
                    {data.wind ? <p className="bold">{data.wind.speed.toFixed()} km/h</p> : null}
                        <p className="bold">Wind speed</p>
                    </div>                   
                  </div>
                  <div></div>
            </div>
    )

}


export default FirtsPage;












      {/* {data.weather ? <p>{data.weather[0].icon}</p> : null} */}
      