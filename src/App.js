import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list.component';
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
  

  toggleImage(){
    this.state.open === false ?
      this.setState({images: this.state.countries.images }) : this.setState({images: true })
 }

  render(){
    return (
      <div className="App">
        <input type='search' placeholder='Search for a country' onChange={e => console.log(e)}>

        </input>
        <CardList countries={this.state.countries} />
        <button onClick={this.toggleImage}>
          {this.state.open ? 'Switch me back!' : 'view countries'}
        </button>
      </div>
    )
  }
}

export default App;
