import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            city:'',
            country:''
        }
        this.fetchWeather = this.fetchWeather.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        if(event.target.name === "city"){
            this.setState({
                city:event.target.value
            })
        } else {
            this.setState({
                country:event.target.value
            })
        }
        
    }
    fetchWeather(event){
        event.preventDefault();
        this.props.fetchWeather(this.state);
        this.setState({
            city:"",
            country:""
        });
    }
    render(){
        return(
            <form 
                className="input-group"
                onSubmit = {this.fetchWeather}>
                <input
                    type ="text"
                    name = "city"
                    placeholder ="Enter city.."
                    onChange = {this.onInputChange}
                    className ="form-control"
                    value = {this.state.city}
                ></input>
                <input
                    type ="text"
                    name = "country"
                    placeholder ="Enter Country.."
                    onChange = {this.onInputChange}
                    className ="form-control"
                    value = {this.state.country}
                ></input>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit"> Fetch Weather </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchPanel);