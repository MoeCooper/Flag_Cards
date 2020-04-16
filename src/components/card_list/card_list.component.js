import React from 'react'
import { Card } from '../card/card.components'
import './card_list.styles.css'

export const CardList = props => (
    <div className='card-list'>
         {props.countries.map(country => (
          <Card key={country} country={country} />
        ))}
    </div>
)