import React, { Component } from 'react';
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
      ]
    }
  }

  render(){
    return (
      <div className="App">
        { this.state.flags.map(flag => 
          <h1 key={flag.id}> {flag.name} </h1>
        )}
      </div>
    )
  }
}

export default App;
