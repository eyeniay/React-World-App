import React, { Component } from "react";

export default class Country extends Component {
  state = {
    AllCountries: []
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ AllCountries: json });
      });
  }

  LoadCountries = () => {
    const countries = this.state.AllCountries.map(item => {
      if (item.region === this.props.region) {
        return (
          <div className="gallery" onClick={() => this.getCountry(item)}>
            <img src={item.flag} alt={item.name} width="600" height="400" />
            <div className="desc">{item.name}</div>
          </div>
        );
      }
    });

    return countries;
  };

  getCountry = region => {
    const filteredCountry = this.state.AllCountries.filter(item => {
      return item.numericCode === region.numericCode;
    });

    const borders = filteredCountry[0].borders.map(item => {
      return this.state.AllCountries.filter(country => {
        return country.alpha3Code === item;
      });
    });

    this.props.country(filteredCountry, borders);
  };

  render() {
    return <div className="country">{this.LoadCountries()}</div>;
  }
}
