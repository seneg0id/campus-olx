import React from 'react'
import homeBanner from '../../images/banner.png'
import './banner.css'

const Banner = () => {
  return (
    <div className='Banner-container'>
        <div className="Categories-available">
            <div className="Category-title">
                <h4>All Categories</h4>
            </div>
            <div className="Actual-categories">
                <h4 className='Categories-inStock'>Bicycles</h4>
                <h4 className='Categories-inStock'>Accessories</h4>
            </div>
        </div>
        <div className="Banner">
            <img src={homeBanner} alt="Banner" className='HomeBanner'/>
        </div>
    </div>
  )
}

export default Banner