import React from 'react';
import { CoordinatesProps } from './App';
import { WeatherData } from './App';

interface DisplayWeatherProps {
    weather: WeatherData | undefined
    selectedElement: CoordinatesProps | null;
}

const DisplayWeather: React.FC<DisplayWeatherProps> = ({weather, selectedElement}) => {
    return (
        <div>
            {selectedElement && weather !==undefined ? (
                <h4>Temperature:
                    {Math.round(weather.main.temp ?? 0)}&deg;C 
                    <br />
                    {weather.weather[0]?.description}
                    <br />
                    Humidity:
                    {weather.main.humidity ?? 0} %
                    <br />
                    Wind: 
                    {weather.wind.speed ?? 0} m/s
                </h4>
            ): null}
        </div>
    )
}

export default DisplayWeather