import React from 'react';
import './card.styles.css';
import CardList from '../card-list/card-list.components';

const Card = ({monster}) =>(
  <div className="card-container">
    <img src={`https://robohash.org/${monster.id}?set=set2`} alt="monster"/>
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
)

export default Card;