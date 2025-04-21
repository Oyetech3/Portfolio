import React, { useRef } from 'react'
import "./pages.css"



function Projects() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className='projects'>
      <div className='allproject'>
        <h2>My <span>Projects</span></h2>
        <div className='pro'>
          <div className='icon' onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </div>
          <div className='mypro'>
            <div className='inner' ref={scrollRef}>
            <a className='photo' href='https://language-translator-oyetech.vercel.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/langtrans.png' alt='' />
                <h2>LANGUAGE TRANSLATOR</h2>
              </a>
              <a className='photo' href='https://fb-clone-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/fbclone.png' alt='' />
                <h2>FACEBOOK CLONE</h2>
              </a>
              <a className='photo' href='https://chatapp-oyetech.free.nf/' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/chatapppng.png' alt='' />
                <h2>CHAT APP</h2>
              </a>
              <a className='photo' href='https://weather-app-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/weather.png' alt='' />
                <h2>WEATHER APP</h2>
              </a>
              <a className='photo' href='https://quiz-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/quiz.png' alt='' />
                <h2>QUIZ APP</h2>
              </a>
              <a className='photo' href='https://slider-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/slider.png' alt='' />
                <h2>SLIDER APP</h2>
              </a>
              <a className='photo' href='https://texttovoice-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/text.png' alt='' />
                <h2>TEXT TO VOICE</h2>
              </a>
              <a className='photo' href='https://voicetotext-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/voice.png' alt='' />
                <h2>VOICE TO TEXT</h2>
              </a>
              <a className='photo' href='https://w3school-clone-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/w3sc.png' alt='' />
                <h2>W3SCHOOL CLONE</h2>
              </a>
              <a className='photo' href='https://calculator-oyetech.netlify.app' target="_blank" rel="noopener noreferrer">
                <img src='/proimg/calculatorpng.png' alt='' />
                <h2>CALCULATOR APP</h2>
              </a>
            </div>
          </div>
          <div className='icon' onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects