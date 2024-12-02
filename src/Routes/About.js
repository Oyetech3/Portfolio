import React from 'react'
import "./pages.css"

function About() {
  return (
    <div className='about'>
        <div className='allabout'>
            <div className='image'>
                <img src='/profile.jpg' alt='profile'  />
            </div>
            <div className='aboutme'>
                <h2>About Me</h2>
                <h3>OYEKOLA <span>ABDULQOBID</span></h3>
                <p className='skill'>Frontend && Backend Developer</p>
                <div className='border'></div>
                <p className='self'>Passionate Frontend Developer with experience working with HTML, CSS, JavaScript, and React. I am continuously expanding my expertise through engaging and creative projects. While I also have experience with PHP, Laravel and MySQL, giving me full-stack development skills, I primarily identify as a web developer focused on creating dynamic and user-friendly websites.</p>
                <p>Email: <span>oyetech30@gmail.com</span></p>
                <p>Phone: <span>+2348022761274</span></p>
            </div>
        </div>
    </div>
  )
}

export default About