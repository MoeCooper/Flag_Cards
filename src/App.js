import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list.component'
import './App.css';


class App extends Component{
  constructor(){
    super()

    this.state = {
      open: true,
      flags: [
        {
          name: 'Japan',
          id: '1',
          images: '/japan-flag.png'
        },
        {
          name: 'Kenya',
          id: '2',
          images: 'kenya-flag.png'
        },
        {
          name: 'Korea',
          id: '3',
          images: 'korea-flag.png'
        },
        {
          name: 'Ghana',
          id: '4',
          images: 'ghana-flag.jpg'
        },
        {
          name: 'Qatar',
          id: '5',
          images: 'qatar-flag.png'
        },
        {
          name: 'Cameroon',
          id: '6',
          images: 'cameroon-flag.png'
        },
        {
          name: 'Nigeria',
          id: '7',
          images: 'nigeria-glag.png'
        }
      ]
    }

  }
  

  toggleImage = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }

  render(){
    return (
      <div className="App">
        <CardList flags={this.state.flags} />
        <button onClick={this.toggleImage}>
          {this.state.open ? 'Switch me back!' : 'View Flags!'}
        </button>
      </div>
    )
  }
}

export default App;
