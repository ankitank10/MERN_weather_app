# MERN_weather_app


### Getting Started

Prerequisites:
Node  - version > 5
Npm – version > 4


#### Steps to run the repo
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/ankitank10/MERN_weather_app.git
> cd MERN_weather_app
> npm install
> cd client
> npm install
> cd MERN_weather_app
> npm run dev
```

This will open the project in http://localhost:3000 and the server will be served from http://localhost:9999

####Description/Overview:

The app is a MERN application using weather api api.openweathermap.org to fetch 5 day weather of different cities. The app basically takes 'city name' and the 'country name' as inputs and displayes the line charts of5 days weather data in terms of temperature, sea_level, pressure and humidity along with google map. The drop downs in the header provides the ways to change the weather attribute and there is a remove functionality as well.

App is basically build with a thought to display the weather information in most compact and explanatory way using charts. There is a complete segregation of client and server side code with configs being added to env.development files.



#####Structure

The app demonstrates complete extendible skeleton of MERN app having express routes and node server running on port 9999. 
On top of that client side is made using create-react-app with code in client folder

MERN_weather_app is the root folder which includes server package.json and express routes. ‘concurrently’, ‘express’, ‘nodemon ‘ are the packages used on server side.
sampleRoutes is the api routes dummy file which is responsible for all ajax calls made from my client .



Server is serveed on port 9999. 
"dev": "concurrently \"npm run server \" \"npm run client \" "
is used to run both client and server simulataneously.

App is deployed on heroku - https://pure-plateau-52502.herokuapp.com/ and using the react build deployment

Note- Maps are not displayed on heroku because of google map apikey unavailability.

Client structure:
Public/index.html is the starting point of the application.
Packages used:
    "axios": "^0.17.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.0",
    "react-stripe-checkout": "^2.6.3",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0"

 #####Scaling and extension
 There are dragabble marker on map of which I have applied reverse maps googling means on draging the markers at dragend I am capturing the lat lon and then finding the most appropriate city info given from google API and then showing the weather of this changed city using weather API by redux store. Code for this feature is already there in redducer file but its commented because of google apikey issues.

