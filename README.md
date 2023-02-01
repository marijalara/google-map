# Google-maps in React

## Goal

The goal is to create google maps with interactive pins on four biggest cities in Serbia that show the temperature when we click on them.

### `npm start`

I created react app with name google-maps and started my project with npm start.

I used https://tomchentw.github.io.react-google-maps/ where I found all instructions for including google maps in my project. So I imported GoogleMap, withScriptjs, withGoogleMap from that package. I used HOCs withScriptjs as the following steps to implement google maps.

For implementation I needed to use API key that I have to create in web site https://console.cloud.google.com, where I had to create a new project with google map name, and I needed to enable Maps JavaScript API and go to the credentials and create API key.

I used that key in a separate file that I created in .env file, to access this file I needed to use ${process.env and here goes the name of that key}.
I also used https://www.latlong.net to determine latitude and longitude for my four cities.

In console I had error, that error was InvalidKeyMapError, so I thought the problem was that I didn't pay for using key, but problem was that I add & in googleMapURL where I should access the key.

I imported Marker from the same package to create interactive pins. I needed to create array with object which contained information that I will use in Marker tag, for that I needed position with latitude and longitude. For implementation that array I used map statement, and inside that I put Marker tag.

For message with temerature information I used Info Window so I needed to import that from same package. I needed to create state for the pins I selected, so I needed to create condition where the selected pin is true to return Info Window which will contain position element- to know which city is selected and it will contain temerature element. 
When I click on some pin it must show temperature element, for that I need to create onClick on Marker tag.
In Info Window I need to create the possibility to close that window so I need to create onCloseClick.
