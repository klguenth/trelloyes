import React from 'react';
import Card from './Card';
import './list.css';

function List(props) {

    return (
        <main className='List'>
            <header className='List-header'>
                List
            </header>
            <div className='List-cards'>
                {props.cards.map(card => (
                    <Card
                        key={card.id}
                        header={card.title}
                        content={card.content}
                  />
                ))}
            </div>
        </main>
    );
}

export default List;