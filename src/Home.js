import React, { Component } from "react";
import Country from "./Country";
import CountryDetail from "./CountryDetail";

export default class Home extends Component {
  state = {
    Regions: [
      { text: "Africa", code: "Africa" },
      { text: "Americas", code: "Americas" },
      { text: "Asia", code: "Asia" },
      { text: "Europe", code: "Europe" },
      { text: "Oceania", code: "Oceania" }
    ],
    SelectedRegion: "Africa",
    SelectedCountry: {},
    Borders: {},
    CountrySelected: false
  };

  LoadRegion = () => {
    return this.state.Regions.map(item => {
      return <option value={item.code}>{item.text}</option>;
    });
  };

  RegionChange = e => {
    this.setState({
      SelectedRegion: e.target.value
    });
  };

  selectCountry = (country, borders) => {
    this.setState({
      CountrySelected: true,
      SelectedCountry: country,
      Borders: borders
    });
  };

  back = () => {
    this.setState({
      CountrySelected: false
    });
  };

  render() {
    return (
      <div className="main">
        {this.state.CountrySelected ? (
          <CountryDetail
            selectedCountry={this.state.SelectedCountry}
            borders={this.state.Borders}
            back={this.back}
          />
        ) : (
          <div>
            <div className="dropdown">
              <div className="mainselection">
                <select
                  onChange={event => this.RegionChange(event)}
                  defaultValue={this.state.SelectedRegion}
                >
                  {this.LoadRegion()}
                </select>
              </div>
            </div>
            <Country
              region={this.state.SelectedRegion}
              country={this.selectCountry}
            />
          </div>
        )}
      </div>
    );
  }
}
