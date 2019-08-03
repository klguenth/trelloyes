import React from 'react';
import './card.css';

function Card(props) {
    return (
      <div className='Card'>
        <button
          type='button'
          onClick={() => props.onClickDelete(props.id)}
          >Delete
        </button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    );
}

Card.propTyles = {
  onClickDelete: () => {}
}

export default Card;