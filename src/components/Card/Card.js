import React from "react";
import '../../css/Card.css';

function Card(props) {
  return (
    <div className="person">
      <div className="person-details">
        <div className="person-name">
          <p>Name: {props.name}</p>
          <p>Description: {props.description}</p>
          <p>Link: {props.link}</p>
          <p>Created: {props.created}</p>
          <div className='person-category'> Category: {props.category} </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
