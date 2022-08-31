import React, { useEffect } from 'react'
import '../../css/Features_Section.css'
import Picture1 from '../../images/illustration-features-tab-1.svg'
import Picture2 from '../../images/illustration-features-tab-2.svg'
import Picture3 from '../../images/illustration-features-tab-3.svg'
function Features_Section() {



useEffect(()=> {
    
    let spans_parent = document.querySelector('.features_details')
    spans_parent.querySelectorAll('span').forEach(span => {
        span.addEventListener('click',(e)=> {
            spans_parent.querySelectorAll('span').forEach(span => {
            span.classList.remove('active')
           })
            e.preventDefault()
            e.target.classList.add('active')
            let span_value =e.target.innerHTML
            if (span_value == 'Simple Bookmarking') {
                document.querySelector('.part_1_text p').innerText='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
                document.querySelector('.part_1_text h1').innerText='Bookmark in one click'
                document.querySelector('.part_1_image img').src=Picture1
            }
            else if(span_value == 'Speedy Searching') {
                document.querySelector('.part_1_text p').innerText='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
                document.querySelector('.part_1_text h1').innerText='Intelligents search'
                document.querySelector('.part_1_image img').src=Picture2
            }
            else {
                document.querySelector('.part_1_text p').innerText='Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
                document.querySelector('.part_1_text h1').innerText='Share your bookmarks'
                document.querySelector('.part_1_image img').src=Picture3
            }
           
        })
    })
})


  return (
    <div className='features_section'>
        <h2 className='title'>Features</h2>
        <p className='features_text'>Our aim is to make it quick and easy for you to access your favourite website. Your Bookmarks sync between your devices so you can access them on the go.</p>
        <div className="features_details">
            <span className='active'>Simple Bookmarking</span>
            <span>Speedy Searching</span>
            <span>Easy Searching</span>
        </div>
       
        
        <div className="part_1">
        <div className="left_background"></div>
        <div className="part_1_details">
            <div className="part_1_text">
                <h1>Bookmark in one click</h1>
                <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                <div className="buttons">
                    <button className='more_info'>More info</button>
                   
                </div>
            </div>
            <div className="part_1_image">
                <img src={Picture1} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features_Section