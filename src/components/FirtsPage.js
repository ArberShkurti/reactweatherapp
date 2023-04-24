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

    return (
            
            <div className="container">
                <div className="search">
                    <input 
                    value={location}
                    onSubmit={searchLocation}
                    onChange={event => setLocation(event.target.value)}
                    placeholder="Enter Location"
                    type="text" />

                </div>
                 <div className="top">
                    <div className="location">
                        <p>{data.name}</p>                    
                    </div>
                    <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}            
                     </div>
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
            </div>
    )

}


export default FirtsPage;