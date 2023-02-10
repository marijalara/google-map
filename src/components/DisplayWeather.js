import React from "react";

const DisplayWeather=({weather, selectedElement}) => {
    return (
        <div>
            {selectedElement && weather!==undefined ? (
                <h4>Temperature: 
                    {Math.round(weather.main.temp )}&deg;C 
                    <br/>
                    {weather.weather[0].description}
                    <br/>
                    Humidity:
                    {weather.main.humidity} %
                    <br />
                    Wind:
                    {weather.wind.speed} m/s
                </h4>
            ): null} 
        </div>
    )
}

export default DisplayWeather