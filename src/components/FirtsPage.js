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
             style={{
                backgroundImage : 'url("data:image/jpeg;base64,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")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: "cover",
                width: '100vh',
                height: '100vh'

             }}
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
                        {/* {data.weather[0].main == "Clear" ? <h2>hapur</h2> : null }                    */}
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
      