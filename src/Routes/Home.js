import "./pages.css"
import React from 'react'

function Home() {
  return (
    <div className="home">
        <div className="in">
            <div className="allhome">
                <div className="line"></div>
                <div className="bull"></div>
                <div className="line"></div>
                <div className="bull"></div>
                <div className="line"></div>
            </div>
            <div className="me">
                <div className="txt">
                    <p>Hello <span>!</span></p>
                    <h2>I'm <span>Oyekola Abdulqobid</span></h2>
                    <p className="last">Fullstack Web Developer</p>
                    <div className="res">
                        <a href="/resume.PNG" download >Download Resume</a>
                    </div>
                </div>
                <div className="img">
                    <img src="dev1.png" alt="dev1"/>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default Home