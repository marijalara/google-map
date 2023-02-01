# Google-maps in React

## Goal

The goal is to create google maps with interactive pins on four biggest cities in Serbia thet show the temperature when we clicked on them.

### `npm start`

I create react app with name google-maps and started my project with npm start.

I use https://tomchentw.github.io.react-google-maps/ where I found all instructions for including google maps in my project. So I import GoogleMap, withScriptjs, withGoogleMap from that packege. I used HOCs withScriptjs as a following steps to implementation google maps.

For implementation I need to use API key that I have to create in web site https://console.cloud.google.com, where I have to create a new project with google map name, and I need to enable Maps JavaScript API and go to the credentals and create a API key.

I use that key in a separate file that I created in .env file, to access to this file I need to use ${process.env and here goes the name of that key}.
I also used https://www.latlong.net for determination latitude and longitude for my four cities.

In console I had error that error was InvalidKeyMapError, so I thougth the problem was that I didn't pay for using key, but problem was that I add & in googleMapURL where I should access to the key.

I import Marker from the same package to create interactive pins. I need to create array with object which contain information that I will use in Marker tag, for that I need position with latitude and lonitude. For implementation that array I used map statement, and inside that I put Marker tag.

For message with temerature information I used Info Window so I need to import that from same package. I need to create state for the pins I will selected, so I need to create condition where is selected pin ture to return Info Window which it will contain position element- to know whcih cities is selected and it will contain temerature element. 
When I clicked some pin he must show temperature elemet for that I need to create onClick on Marker tag.
In Info Window I need to create the possibility to close that window so I need to create onCloseClick.


