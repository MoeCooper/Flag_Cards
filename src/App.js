import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list.component'
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      flags: [
        {
          name: 'Japan',
          id: '1'
        },
        {
          name: 'Kenya',
          id: '2'
        },
        {
          name: 'Korea',
          id: '3'
        },
        {
          name: 'Ghana',
          id: '4'
        },
        {
          name: 'Qatar',
          id: '5'
        },
        {
          name: 'Cameroon',
          id: '6'
        },
        {
          name: 'Nigeria',
          id: '7'
        },
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <CardList flags={this.state.flags} />
      </div>
    )
  }
}

export default App;
