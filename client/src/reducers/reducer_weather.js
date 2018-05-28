
import types from "../actions/types";
export default function (state = {
  weather: [],
  isError: false,
  errorMsg: ''
}, action) {
  
  switch (action.type) {
    case types.fetchWeather:
    var isExist = state.weather.filter((data) => {
                    return data.city.name === action.payload.city.name && data.city.country === action.payload.city.country
                  })
    if(isExist.length){
      return{
        ...state
      }

    }
      return { ...state,
        weather: [action.payload, ...state.weather],
        isError: false,
        errorMsg: ''
      }
      //equivalent to return state.concat([action.payload.data])
    case types.removeCity:
      //removing from state imutable
      return { ...state,
        weather: state.weather.filter((data) => data.city.name !== action.payload),
        isError: false,
        errorMsg: ''
      }
    case types.fetchedError:
    return{
      ...state,
      isError: true,
      errorMsg: action.payload
    }
    default:
    return state;
  }
  return state;
}