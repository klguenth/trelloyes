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
                {props.cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        header={card.title}
                        content={card.content}
                        onClickDelete={props.onClickDelete}
                  />
                ))}
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => props.onClickAdd(props.id)}
                >Add Random Card
                </button>
            </div>
        </main>
    );
}
List.defaultProps = {
    onClickAdd: () => {},
}
export default List;