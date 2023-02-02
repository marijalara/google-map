import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";

const coordinates=[
    {
        id: 0, 
        name: 'Kragujevac', 
        lat: 44.010208, 
        lng: 20.91826, 
        temperature: '8 °C'
    },
    {
        id: 1, 
        name: 'Beograd', 
        lat: 44.815071, 
        lng: 20.460480, 
        temperature: '7 °C'
    },
    {
        id: 2, 
        name: 'Novi Sad', 
        lat: 45.254550, 
        lng: 19.842580, 
        temperature: '8 °C'
    },
    {
        id: 3, 
        name: 'Nis', 
        lat: 43.316872, 
        lng: 21.894501, 
        temperature: '7 °C'
    },
]

const Map=() => {
    const [selectedElement, setSelectedElement]=useState(null)

    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 44.010208, lng: 20.918261}}
        >
            {coordinates.map((cord) => (
                <Marker 
                    key={cord.id} 
                    position={{
                        lat: cord.lat,
                        lng: cord.lng
                    }} 
                    onClick={() => setSelectedElement(cord)}
                />
            ))}
            {selectedElement ? (
                <InfoWindow 
                    position={{
                        lat: selectedElement.lat,
                        lng: selectedElement.lng
                    }} 
                    onCloseClick={() => setSelectedElement(null)}
                >
                    <div>
                        <h4>Temperature:{selectedElement.temperature}</h4>
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
