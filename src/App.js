import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list.component';
import { SearchBox } from './components/search_box/search_box.components';
import './App.css';


class App extends Component{
  constructor(){
    super()

    this.state = {
      open: false,
      searchField: '',
      countries: []
    }
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(name => this.setState({ countries: name }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  

  toggleImage(){
    this.state.open === false ?
      this.setState({flags: this.state.countries.flags }) : this.setState({flags: true })
 }

  render(){

    const { countries, searchField } = this.state;
    const searchCountries = countries.filter(country => 
      country.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    )
    const searchCountriesByRegion = countries.filter(country => 
      country.region.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())  
    )

    return (
      <div className= "App">
        <SearchBox 
          placeholder= 'Search by country'
          handleChange= {this.handleChange}
        />
        <SearchBox 
          placeholder= 'Search by region'
          handleChange= {this.handleChange}
        />
        <CardList countries= {searchCountries} regionSearch={searchCountriesByRegion} />
        <button onClick= {this.toggleImage}>
          {this.state.open ? 'Switch me back!' : 'View flags'}
        </button>
      </div>
    )
  }
}

export default App;
