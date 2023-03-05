import React from 'react'
import './App.css'
const Footer = ({ length }) => {
  return (
    <footer className='footer'>
        <p>{length} List {length === 1 || length === 0 ?  'Item' : 'Items'}</p>
    </footer>
  )
}

export default Footer
