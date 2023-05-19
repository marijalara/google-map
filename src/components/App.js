import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import DisplayWeather from "./DisplayWeather";

const coordinates=[
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

const Map=() => {
    const [selectedElement, setSelectedElement]=useState(null)
    const [weather, setWeather]=useState({})
    
    const handleClick=async(id) => {
        const result= await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[id].location.lat}&lon=${coordinates[id].location.lng}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`)
        .then((res) => res.json())
        .then((result) => result) 
            setWeather({result})
        } 
    
    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 44.0167, lng: 20.9167}}
        >
            {coordinates.map((cord,id) => (
                <Marker 
                    key={id} 
                    position={cord.location} 
                    onClick={() =>{
                        setSelectedElement(cord)
                        handleClick(id) 
                    }}
                />        
            ))}
            {selectedElement ? (
                <InfoWindow 
                    position={selectedElement.location} 
                    onCloseClick={() => setSelectedElement(null)}
                >
                    <div>
                        <DisplayWeather selectedElement={selectedElement} weather={weather.result}/>
                    </div>  
                </InfoWindow>
            ): null}
        </GoogleMap>
    )
}

const WrappedMap=withScriptjs(withGoogleMap(Map))

const App=() => {
    return(
        <div className="container">
                <h1>Temperature in Serbia</h1>
            <div className="maps" >
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&callback=Function.prototype&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '680px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
        </div>
    )
}

export default App