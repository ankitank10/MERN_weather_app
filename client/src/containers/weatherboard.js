import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../containers/googlemap';
import { removeCityMap } from '../actions/index';
import { bindActionCreators } from "redux";
import AttributeSelector from './attributeselector';
const units = {
    "temp":"K",
    "pressure":"hPa",
    "humidity":"%",
    "sea_level":"hPa"
}
class WeatherBoard extends Component {
    constructor(props) {
        super(props);
        this.attDropDownChange = this.attDropDownChange.bind(this);
        this.state = {
            attribute1: 'temp',
            attribute2: 'pressure',
            attribute3: 'humidity',
            chartData1: [],
            chartData2: [],
            chartData3: [],
            unit1: 'K',
            unit2: 'hPa',
            unit3: '%'
        }
    }
    removeCityMap(cityName) {
        this.props.removeCityMap(cityName);
    }

    renderMapList(cityData) {
        if(this.props.isError){
            alert(this.props.errorMsg);
        }
        const cityName = cityData.city.name;
        const countryName = cityData.city.country;
        const chartData1 = cityData.list.map(weather => weather.main[this.state.attribute1]);
        const chartData2 = cityData.list.map(weather => weather.main[this.state.attribute2]);
        const chartData3 = cityData.list.map(weather => weather.main[this.state.attribute3]);

        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={cityName}>
                <td>
                    <GoogleMap lon={lon} lat={lat} city={cityName} country={countryName} />
                    <span>{cityName}</span>
                </td>
                <td><Chart data={chartData1} color="red" units={this.state.unit1} /></td>
                <td><Chart data={chartData2} color="blue" units={this.state.unit2} /></td>
                <td><Chart data={chartData3} color="green" units={this.state.unit3} /></td>
                <td><button className="btn btn-danger" onClick={() => this.removeCityMap(cityName)}>Remove</button></td>
            </tr>
        )
    }
    attDropDownChange(e) {
        switch (e.target.name) {
            case "FirstDropdown":
                // this.props.weather.map(() => {
                //     this.weatherAttrMapper('FirstDropdown', e.target.value)
                // })
                this.setState({
                    attribute1: e.target.value,
                    unit1: units[e.target.value]
                });
                break;
            case "SecondDropdown":
                this.setState({
                    attribute2: e.target.value,
                    unit2: units[e.target.value]
                });
                break;
            case "ThirdDropdown":
                this.setState({
                    attribute3: e.target.value,
                    unit3: units[e.target.value]
                });
                break;
        }

    }
    render() {
        console.log('render');
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th><AttributeSelector attrValue={this.state.attribute1} name="FirstDropdown" onDropDownChange={this.attDropDownChange} /></th>
                        <th><AttributeSelector attrValue={this.state.attribute2} name="SecondDropdown" onDropDownChange={this.attDropDownChange} /></th>
                        <th><AttributeSelector attrValue={this.state.attribute3} name="ThirdDropdown" onDropDownChange={this.attDropDownChange} /></th>
                    </tr>
                </thead>
                <tbody>
                    {/* this.props.weather contains the list of cities data which are added on by one. */}
                    {this.props.weather.map(this.renderMapList.bind(this))}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weatherReducer }) {
    return { weather: weatherReducer.weather,
        isError: weatherReducer.isError,
        errorMsg: weatherReducer.errorMsg };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeCityMap }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoard);