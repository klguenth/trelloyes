import React from 'react';
import './app.css';
import List from './List.js';
import STORE from './store.js';


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.is]: newCard
        }
      }
    })
  };
    
  render() {
    const {store} = this.state;
    return (
      <main className='App'>
        <header className='App-header'>
        Trelloyes!
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List 
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onClickAdd={this.handleAddCard}
            />
          ))
          }
        </div>
      </main>
    );
  }
}

export default App;