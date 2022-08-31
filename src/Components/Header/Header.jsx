import React, { useEffect } from 'react'
import '../../css/Header.css'
import Logo from '../../images/logo-bookmark.svg'
import Hamburger from '../../images/icon-hamburger.svg'
import Fb_logo from '../../images/icon-facebook.svg'
import Twitter_logo from '../../images/icon-twitter.svg'
import Close_btn from '../../images/icon-close.svg'


function Header() {

useEffect (()=> {
  document.querySelector('.hamburger').addEventListener('click', ()=> {
    document.querySelector('.hamburger_active').style.animation='fadeIn 200ms'
    document.querySelector('.hamburger_active').style.display='block'

  })
  document.querySelector('.close_btn').addEventListener('click', ()=> {
    document.querySelector('.hamburger_active').classList.remove('fadeIn')
   let disable = document.querySelector('.hamburger_active')
   disable.style.animation='fadeOut 200ms'
   disable.style.display='none'
 
  })
})  
  return (
    <div className='header_section'>
        <div className="header_container">
            <div className="logo_container">
                <img src={Logo} alt="" />
            </div>
            <div className="menu_container">
                <a href='#'>FEATURES</a>
                <a href='#'>PRICING</a>
                <a href='#'>CONTACT</a>
                <button>LOGIN</button>
            </div>
            <div className="hamburger">
              <img src={Hamburger} alt="" />
            </div>
        </div>

        <div className='hamburger_active'>
          <div className="hamburger_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="hamburger_menu">
          <a href='#'>FEATURES</a>
                <a href='#'>PRICING</a>
                <a href='#'>CONTACT</a>
                <button>LOGIN</button>
          </div>
          <div className="hamburger_social_networks">
            <img src={Fb_logo} alt="" />
            <img src={Twitter_logo} alt="" />
          </div>
          <div className="close_btn">
            <img src={Close_btn} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Header