import axios from "axios";
import types from './types'

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



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
export {fetchWeather, removeCityMap};
