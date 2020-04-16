import React from 'react'

import './card.component.styles.css'

export const Card = props => (
    <div className='card-container'>
        <h1> {props.country.name} </h1>  
        <h2> Population: {props.country.population} </h2>

             {/* <img className='flag-style' src={props.country.flag} alt='#' /> */}
    </div>
)