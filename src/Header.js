import React from 'react'
import './App.css'
const Header = (props) => {
  return (
   <header className='header'>
    <h1>{props.title}</h1>
   </header>
  )
}
Header.defaultProps = {
    title : 'Default Title'
}
export default Header
