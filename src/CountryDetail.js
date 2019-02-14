import React, { Component } from "react";

export default class CountryDetail extends Component {
  GetBorders = () => {
    return this.props.borders.map(item => {
      return (
        <div className="borders_gallery">
          <img src={item[0].flag} alt={item[0].name} width="600" height="400" />
          <div className="desc">{item[0].name}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="gallery">
          <img
            src={this.props.selectedCountry[0].flag}
            alt={this.props.selectedCountry[0].name}
            width="600"
            height="400"
          />
          <div className="desc">{this.props.selectedCountry[0].name}</div>
        </div>
        <table id="table">
          <tr>
            <th>Capital</th>
            <th>Population</th>
            <th>Area</th>
            <th>Currency</th>
            <th>Language</th>
          </tr>
          <tr>
            <td>{this.props.selectedCountry[0].capital}</td>
            <td>{this.props.selectedCountry[0].population}</td>
            <td>{this.props.selectedCountry[0].area} km2</td>
            <td>{this.props.selectedCountry[0].currencies[0].name}</td>
            <td>{this.props.selectedCountry[0].languages[0].name}</td>
          </tr>
        </table>
        <div className="borders_title">
          <h3>BORDERS</h3>
        </div>
        {this.GetBorders()}
        <div className="radius_button back" onClick={e => this.props.back()}>
          BACK
        </div>
      </div>
    );
  }
}
