import React, {useState} from 'react';
import {GoogleMap, MarkerF, InfoWindowF, LoadScript} from '@react-google-maps/api';
import DisplayWeather from './DisplayWeather';

export interface CoordinatesProps {
    id: number;
    name: string;
    location: {
        lat: number;
        lng: number;
    }
}

export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
    }
    weather: {
        description: string;
    }[]
    wind: {
        speed: number
    }
}

interface MapProps {
    children?: React.ReactNode;
}

const coordinates: CoordinatesProps[]=[
    {
        id: 0, 
        name: 'Kragujevac', 
        location: {
            lat: 44.0167, 
            lng: 20.9167, 
        }
    },
    {
        id: 1, 
        name: 'Beograd', 
        location: {
            lat: 44.804, 
            lng: 20.4651,
        }
    },
    {
        id: 2, 
        name: 'Novi Sad', 
        location: {
            lat: 45.2517, 
            lng: 19.8369, 
        }
    },
    {
        id: 3, 
        name: 'Nis', 
        location: {
            lat: 43.3247, 
            lng: 21.9033, 
        }
    },
]

const containerStyle = {
    width: '100%',
    height: '680px'
}

const center={
    lat: 44.0167, 
    lng: 20.9167
}

const Map: React.FC<MapProps>=() => {
    const [selectedElement, setSelectedElement]=useState<CoordinatesProps | null>(null)
    const [weather, setWeather]=useState<WeatherData | undefined>(undefined)

    const handleClick=async(id: number) => {
        const result=await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[id].location.lat}&lon=${coordinates[id].location.lng}&units=metric&APPID=d4809b1ed9daf11fd60b84a48fe71bcf`)
        .then((res) =>res.json())
        .then((result) => result as WeatherData)
            setWeather(result)
    }
    
return(
    <LoadScript
        googleMapsApiKey="AIzaSyAOB_S1QAkhcNQMD5B9llXH3mrHCubtWro"     
  >
    <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={center}
    >
        {coordinates.map((cord: CoordinatesProps) => (
            <MarkerF 
                key={cord.id}
                position={cord.location}
                onClick={() => {
                    setSelectedElement(cord)
                    handleClick(cord.id)
                }}
            />
        ))}
        {selectedElement ? (
            <InfoWindowF
                position={selectedElement.location}
                onCloseClick={() => setSelectedElement(null)}
            >
                <div>
                    <DisplayWeather selectedElement={selectedElement} weather={weather}/>
                </div>
            </InfoWindowF>
        ): null}
    </GoogleMap>
    </LoadScript>
    )
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <div className='container'>
            <h1>Temperature in Serbia</h1>
            <div className='maps'>
                <Map />
            </div>
        </div>
    )
}

export default App