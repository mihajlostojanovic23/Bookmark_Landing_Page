import React, { useEffect, useState } from 'react'
import '../../css/Question_Section.css'
import arrow from '../../images/icon-arrow.svg'

function Question_Section() {
useEffect(()=> {
    let questions = document.querySelectorAll('.question')
    questions.forEach(question => {
        question.addEventListener('click', (e) => {
            
            let span_parent = e.target.closest('.question')
            let span_img = span_parent.querySelector('.question span img')
            let span_text = span_parent.querySelector('.question_text')
            let all_questions = document.querySelectorAll('.question')

            if(span_text.querySelector('.text_on')) {
                
                span_text.querySelector('.text_on').remove()
               span_img.style.transform='rotate(360deg)'
               span_img.style.filter='unset' 
            }
            else {
            all_questions.forEach(questions => {
                let text = questions.querySelector('.question_text .text_on')
                if(text){
                    text.remove()
                } 
                let img = questions.querySelector('span img')
                img.style.transform='unset' 
                img.style.filter='unset' 
            })
           let text = document.createElement('div')
           text.classList.add('text_on')
           text.innerHTML='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptas fugiat, temporibus iusto quasi perferendis sed deserunt quis nesciunt earum.'
           
         
            span_img.style.transform='rotate(180deg)'
            span_img.style.filter='hue-rotate(110deg)' 
            span_text.appendChild(text)
            
            
           
            
            
        }}) 
    }) 
})

  return (
    <div className='Question_Section'>
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you'd like answered please fell free to email us.</p>
        <div className="questions">

            <div className="question">
                <div className="question_text">
                <span>What is Bookmark?</span>
                </div>
                <span><img src={arrow} alt="" /></span>
            </div>


            <div className="question">
                <div className="question_text">
                <span>How can I request a new browser?</span>
                </div>
                <span><img src={arrow} alt="" /></span>
            </div>


            <div className="question">
                <div className="question_text">
                <span>Is there a mobile app?</span>
                </div>
                <span><img src={arrow} alt="" /></span>
            </div>


            <div className="question">
                <div className="question_text">
                <span>What about other Chromium browser?</span>
                </div>
                <span><img src={arrow} alt="" /></span>
            </div>
            
        </div>
        <button className='info_more'>More info</button>
    </div>
  )
}

export default Question_Section