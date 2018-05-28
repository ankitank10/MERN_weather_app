import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

const google = window.google;
class GoogleMap extends Component {
  componentDidMount()   {
    const latLng = {
          lat: this.props.lat,
          lng: this.props.lon
        };
    const mapObj = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: latLng
    });
    new google.maps.Marker({
      position: latLng,
      map: mapObj,
      draggable: true,
    });
}
 

  render() {
    return <div ref="map" />;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(GoogleMap);

