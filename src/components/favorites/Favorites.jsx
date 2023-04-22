import React from 'react'
import axios from 'axios'
import {AppContext} from '../../App'
import Item from './Item'

const Favorites = (props) => {

  const context = React.createContext(AppContext)

  const onAddOverlay = (obj) =>{
    axios.post('https://64438b8a90738aa7c072e7a2.mockapi.io/cart', obj)
    context.setOverlayItems([...props.overlayItems, obj]);
  }

  const onDeleteFav =(id)=>{
    
    axios.delete(`https://64439d2090738aa7c0742e2b.mockapi.io/favorites/${id}`)
    props.setFavorites((fav) => fav.filter(item => item.id !==id));
}


  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-2'>Избранные товары</h1>
      </div>
      <div>
        {props.favorites.map(obj =>{
            return(
              <Item
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                
                onDeleteFav={
                  (id)=>{
                    onDeleteFav(id)
                  }
                }
                onPlus={(cartobj)=>{
                    onAddOverlay(cartobj)
                  }
                }
              />
            )
          })
        }
      </div>
    </div>

  )
}

export default Favorites