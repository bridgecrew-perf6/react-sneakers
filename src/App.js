import React from 'react';
import 'macro-css';

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

// const arr = [
//   {
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
//     "imageUrl": "/img/sneakers/sneakers1.jpg", 
//     "price": 12999
//   },
//   {
//     "title":"Мужские Кроссовки Nike Air Max 270",
//     "imageUrl": "/img/sneakers/sneakers2.jpg",
//     "price": 12999
//   },
//   {
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede", 
//     "imageUrl": "/img/sneakers/sneakers3.jpg", 
//     "price": 8499
//   },
//   {
//     "title":"Кроссовки Puma X Aka Boku Future Rider", 
//     "imageUrl": "/img/sneakers/sneakers4.jpg", 
//     "price": 8999
//   },
//   {
//     "title":"Мужские Кроссовки Under Armour Curry 8", 
//     "imageUrl": "/img/sneakers/sneakers5.jpg", 
//     "price": 15199
//   },
//   {
//     "title":"Мужские Кроссовки Nike Kyrie 7", 
//     "imageUrl": "/img/sneakers/sneakers6.jpg", 
//     "price": 11299
//   },
//   {
//     "title":"Мужские Кроссовки Jordan Air Jordan 11", 
//     "imageUrl": "/img/sneakers/sneakers7.jpg", 
//     "price": 10799
//   },
//   {
//     "title":"Мужские Кроссовки Nike LeBron XVIII", 
//     "imageUrl": "/img/sneakers/sneakers8.jpg", 
//     "price": 16499
//   }
// ]

function App() {
  const [items, setItems] = React.useState([])
  
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]) 

  const onAddtoCarts = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  React.useEffect(() => {
    fetch('https://61e182c263f8fc0017618cb3.mockapi.io/items')
    .then((res) => {
      return res.json()
    .then((obj) => {
        setItems(obj)
      })
    })
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="contentHeading">Все кроссовки</h1>
          <div className='search-block d-flex align-center'>
            <img className='ml-10' src="/img/search.svg" alt="search" width={14} height={14}/>
            <input  placeholder='Поиск...'/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map(item => (
            <Card 
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            onPlus = {(obj) => onAddtoCarts(obj)}
            onFavorite = {() => console.log('Favorite')}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
