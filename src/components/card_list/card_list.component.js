import React from 'react'
import { Card } from '../card/card.components'
import './card_list.styles.css'

export const CardList = props => (
    <div className='card-list'>
         {props.flags.map(flag => (
          <Card key={flag.id} flag={flag} />
        ))}
    </div>
)