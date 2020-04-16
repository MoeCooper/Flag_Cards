import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list.component';
import './App.css';

import ImgJapan from './components/images/japan-flag.png'
import ImgKenya from './components/images/kenya-flag.png'
import ImgKorea from './components/images/korea-flag.png'
import ImgGhana from './components/images/ghana-flag.jpg'
import ImgQatar from './components/images/qatar-flag.png'
import ImgCameroon from './components/images/cameroon-flag.png'
import ImgNigeria from './components/images/nigeria-flag.png'


class App extends Component{
  constructor(){
    super()

    this.state = {
      open: false,
      flags: [
        {
          name: 'Japan',
          id: '1',
          images: <img src={ImgJapan} alt='#' />
        },
        {
          name: 'Kenya',
          id: '2',
          images: ImgKenya
        },
        {
          name: 'Korea',
          id: '3',
          images: ImgKorea
        },
        {
          name: 'Ghana',
          id: '4',
          images: ImgGhana
        },
        {
          name: 'Qatar',
          id: '5',
          images: ImgQatar
        },
        {
          name: 'Cameroon',
          id: '6',
          images: ImgCameroon
        },
        {
          name: 'Nigeria',
          id: '7',
          images: ImgNigeria
        }
      ]
    }

  }
  

  toggleImage(){
    if(this.state.open === false)
        this.setState({images: this.state.flags.images })
    else
        this.setState({images: true })
 }

  render(){
    return (
      <div className="App">
        <CardList flags={this.state.flags} />
        <button onClick={this.toggleImage}>
          {this.state.open ? 'Switch me back!' : 'view flags'}
        </button>
      </div>
    )
  }
}

export default App;
