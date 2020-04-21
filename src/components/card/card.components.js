import React from 'react'

import './card.component.styles.css'

export const Card = props => (
    <div style={{
        backgroundImage: `url(${props.country.flag})`,
        backgroundSize: 'cover'
    }} className='card-container'>
        <h1> {props.country.name} </h1>  
        <h2> Population: {props.country.population} </h2>
        <h3> Region: {props.country.region} </h3>
    </div>
)