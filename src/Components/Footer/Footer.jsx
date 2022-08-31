import React from 'react'
import '../../css/Footer.css'
import Logo from '../../images/logo-bookmark.svg'
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'

function Footer() {
  return (
    <div className='Footer'>
        <div className="menu_items">
            <div className="footer_logo">
                <img src={Logo} alt="" />
            </div>
            <div className="footer_items">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className="menu_logo">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
        </div>
    </div>
  )
}

export default Footer