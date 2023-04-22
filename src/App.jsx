// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/favorites/Favorites'
import Basket from './components/basket/Basket'
import Form from './components/Form'

export const AppContext = React.createContext({})

function App() {
const [shop, setShop] = useState([])
const [favorites, setFavorites] = useState([])
const [overlayItems, setOverlayItems] = useState([])
useEffect (()=>{
  async function axiosData(){
    const shopData = await axios.get('https://64438b8a90738aa7c072e7a2.mockapi.io/shop')
    const favoritesData = await axios.get('https://64439d2090738aa7c0742e2b.mockapi.io/favorites')
    const cartData = await axios.get('https://64438b8a90738aa7c072e7a2.mockapi.io/cart')

    setShop(shopData.data)
    setFavorites(favoritesData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])


const deleteItems=(id)=>{
  axios.delete(`https://64438b8a90738aa7c072e7a2.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}

return (
    
  <AppContext.Provider
  value={
    {
      shop,
      setShop,
      overlayItems,
      setOverlayItems,
      favorites,
      setFavorites,
      isAdded,
      isFav
    }
  }>
    <div> 
     <Router>
      <Header/> 
        <Routes>
            <Route path='/favorites'
              element={
                <Favorites
                  favorites={favorites}
                  setFavorites={setFavorites}
                  item={shop}
                  overlayItems={overlayItems}
                  setOverlayItems={setOverlayItems}
                />
              }
            /> 
            <Route path='/'
              element={
                <Home
                  item={shop}
                  overlayItems={overlayItems}
                  setOverlayItems={setOverlayItems}
                  favorites={favorites}
                  setFavorites={setFavorites}/>
              }
            />
            <Route path='/form'
              element={
                <Form/>
              }
            />
            <Route path='/cart'
              element={
                <Basket
                  totalPrice={overlayItems.reduce((element = overlayItems.length, obj)=> element+obj.price, 0 )}
                  overlayProp={overlayItems}
                  deleteItems={deleteItems}
                />
              }
            />
        </Routes>
      </Router> 
      <Footer/>
     </div>
    </AppContext.Provider>
  );
}

export default App;
