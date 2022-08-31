import React from 'react'
import '../../css/First_Section.css'
import Main_photo from '../../images/illustration-hero.svg'


function First_Section() {
  return (
    <div className='first_section'>
        <div className="right_background"></div>
        <div className="about_details">
            <div className="main_text">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
                <div className="buttons">
                    <button className='btn_chrome'>Get in on Chrome</button>
                    <button className='btn_firefox'>Get in on Firefox</button>
                </div>
            </div>
            <div className="main_img">
                <img src={Main_photo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default First_Section