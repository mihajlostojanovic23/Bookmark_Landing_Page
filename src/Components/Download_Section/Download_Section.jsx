import React from 'react'
import '../../css/Download_Section.css'
import Chrome_Logo from '../../images/logo-chrome.svg'
import Firefox_Logo from '../../images/logo-firefox.svg'
import Opera_Logo from '../../images/logo-opera.svg'
import H_Line from '../../images/bg-dots.svg'


function Download_Section() {
  return (
    <div className='download_section'>
        <h2 className='download_title'>Download the extension</h2>
        <p className='download_section_text'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        <div className="download_items">
            <div className="item1_container">
                <div className="item1">
                    <div className="logo">
                        <img src={Chrome_Logo} alt="Logo" />
                    </div>
                    <div className="logo_title">
                        <p>Add to Chrome</p>
                        <p>Minimum version 62</p></div>
                    <img src={H_Line} className='h_line' alt="" /> <br></br>
                    <button className='btn_add'>Add & Install Extension</button>
                </div> 
            </div>



            <div className="item2_container">
                <div className="item2">
                <div className="logo">
                        <img src={Firefox_Logo} alt="Logo" />
                    </div>
                    <div className="logo_title">
                        <p>Add to Firefox</p>
                        <p>Minimum version 55</p></div>
                    <img src={H_Line} className='h_line' alt="" /> <br></br>
                    <button className='btn_add'>Add & Install Extension</button>
                </div>
            </div>




            <div className="item3_container">
                <div className="item3">
                <div className="logo">
                        <img src={Opera_Logo} alt="Logo" />
                    </div>
                    <div className="logo_title">
                        <p>Add to Opera</p>
                        <p>Minimum version 46</p></div>
                    <img src={H_Line} className='h_line' alt="" /> <br></br>
                    <button className='btn_add'>Add & Install Extension</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download_Section