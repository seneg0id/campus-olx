import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div className='Header-container'>
      <div className="Header-leftContainer">
        <img src={logo} alt="Olx-Clone-Logo" className='Header-leftContainerLogo'/>
      </div>
      <div className="Header-centerContainer">
        <input type="text" placeholder='Search' className='Header-centerInputField'/>
        <SearchIcon className='Header-centerIcon'/>
      </div>
      <div className="Header-rightContainer">
        <h4 className='Header-rightLinkText'>Login</h4>
        <button className='Header-rightButton'>SELL</button>
      </div>
    </div>
  )
}

export default Header