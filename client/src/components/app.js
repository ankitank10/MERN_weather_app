import React, { Component } from "react";
import Searchpanel from "../containers/searchbar";
import WeatherBoard from "../containers/weatherboard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchpanel />
        <WeatherBoard />
      </div>
    );
  }
}
