import axios from "axios";
import types from './types'

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;



function fetchWeather(params){
    const request = axios.get(`${WEATHER_URL}&q=${params.city},${params.country}`);
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type:types.fetchWeather,
                payload:data
            })
        }, (reason) => {
            dispatch({
                type:types.fetchedError,
                payload:"Invalid request"
            })
            console.log('reason');
        });
    }
}
function removeCityMap(cityName){
    return (dispatch) => {
        dispatch({
            type:types.removeCity,
            payload:cityName
        })
    }
}

/*Code for reverse googling, to change the city from map marker and retrive the data from the lat long of current
//marker location from weather api*/

// function getCityFromLatLang(marker, oldCity, oldCountry){
//     const latLng = marker.latLng;
//     const request = axios.get(`${MAP_URL}&latlng=${latLng.lat()},${latLng.lng()}`);

//     return (dispatch) => {
//         request.then(({data}) => {
//             const length = data.results[0].address_components.length;
//             let params = {
//                 city: data.results[0].address_components[length-4].long_name,
//                 country: data.results[0].address_components[length-2].long_name
//             }
//             axios.get(`${WEATHER_URL}&q=${params.city},${params.country}`)
//             .then(({data}) => {
//                 dispatch({
//                     type:CHANGE_CITY,
//                     payload:data,
//                     oldCity
//                 })

//             },
//                 (reason) => {
//                     params = {
//                         city: oldCity,
//                         country: oldCountry
//                     }
//                     fetchWeather(params);
//                 }
//             )
//         })
//     }
// }
export {
    fetchWeather, removeCityMap};
