import React, { useEffect } from 'react'
import '../../css/Contact_Us.css'
import Error from '../../images/icon-error.svg'
function Contact_Us() {

useEffect(()=> {
  let input = document.querySelector('.input input')
  input.addEventListener('keyup', () => {
    if(input.value == '') {
    document.querySelector('.input img').style.display='block'
        input.style.border='0px'
         document.querySelector('.input img').style.display='none'
    }
    else {
    setTimeout(()=>{  
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(input.value.match(mailformat))
      {
        document.querySelector('.input img').style.display='none'
        input.style.border='2px solid green'
     
      return true;
      }
      else
      {
        document.querySelector('.input img').style.display='block'
        input.style.border='2px solid red'
      return false; }}, 1000) }
  
  })
})


  return (
    <div className='Contact_Us'>
        <p>35.000 + already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <div className="contact_us_area">
            <div className="input">
                <input type="email" placeholder='Enter your email address' />
                <img src={Error} alt="" />
            </div>
            <button className='contacy_us_btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Contact_Us