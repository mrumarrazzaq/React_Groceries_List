import React from 'react'
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete}) => {
    
    
    

  return (
    <main className='content'>
        {items.length ? (
       <ItemList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />
        ) : (
            <p style={{marginTop: '2rem', textAlign: 'center', fontSize: '22px'}}>Your list is empty</p>
        )}
    </main>
  )
}

export default Content
