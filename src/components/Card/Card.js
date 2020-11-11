import React from "react";
import '../../css/Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-details">
        <div className="card-name">
          <p>Name: {props.name}</p>
          <p>Description: {props.description}</p>
          <p>Link: {props.link}</p>
          <p>Created: {props.created}</p>
          <div className='card-category'> Category: {props.category} </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
