import React, { Component } from "react";

const AttributesList = {
  Temperature: "temp",
  Pressure: "pressure",
  Humidity: "humidity",
  SeaLevel: "sea_level"
};

class AttributeSelector extends Component {
  constructor(props) {
    super(props);
    this.changeAttribute = this.changeAttribute.bind(this);
  }
  changeAttribute(e){
    this.props.onDropDownChange(e);
  }
  render() {
    return (
      <div>
        <select value={this.props.attrValue} onChange = {this.changeAttribute} name={this.props.name}>
          <option value={AttributesList.Temperature}>Temperature</option>
          <option value={AttributesList.Pressure}>Pressure</option>
          <option value={AttributesList.Humidity}>Humidity</option>
          <option value={AttributesList.SeaLevel}>SeaLevel</option>
        </select>
      </div>
    );
  }
}

export default AttributeSelector;
