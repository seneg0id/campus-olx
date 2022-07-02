import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../../images/logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  const nav = [
    {ID:1,label:"Mobile Phones"},
    {ID:2,label:"bicycles"},
    {ID:3,label:"Laptops"},
    {ID:4,label:"Computer & Accessories"},
    {ID:5,label:"Cameras"}
  ]
  return (
    <div className='hnav'>
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
    <div className="Categories-available">
        <button className="Category-title">
          <h4>All Categories</h4>
          <ExpandMoreIcon className='Header-centerIcon'/>
        </button>
        <div className='Actual-categories'>
          {
            nav.map(item=>{
              return(
                <h4 className='Categories-inStock'>{item.label}</h4>
              )
            })
          }
        </div>
    </div>
    </div>
  )
}

export default Header