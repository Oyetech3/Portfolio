import React from 'react'

function Skills() {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className='allskills'>
        <div className='image' id='im'>
          <img src='dev2.jpg' alt='dev' />
        </div>
        <div className='myskills'>
          <div className='imgskill'>
            <div className='allimg'>
              <img src='/imgskill/html.png' alt=''/>
              <p>HTML</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/css.png' alt=''/>
              <p> CSS</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/tailwind.png' alt=''/>
              <p>TAILWIND</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/bootstrap.png' alt=''/>
              <p>BOOTSTRAP</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/js.png' alt=''/>
              <p>JAVASCRIPT</p>
            </div>
            {/* 
            <div className='allimg'>
              <img src='/imgskill/jquery.png' alt=''/>
              <p>JQUERY</p>
            </div> 
            */}
            <div className='allimg'>
              <img src='/imgskill/react.png' alt=''/>
              <p>REACT</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/node.png' alt=''/>
              <p>NODE JS</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/express.png' alt=''/>
              <p>EXPRESS JS</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/mongo.png' alt=''/>
              <p>MONGODB</p>
            </div>
            <div className='allimg' id='next' >
              <img style={{borderRadius:"50px"}} src='/imgskill/nextjs.jpg' alt=''/>
              <p>NEXT JS</p>
            </div>
            <div className='allimg' id='next' >
              <img  src='/imgskill/type.png' alt=''/>
              <p>TYPESCRIPT</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/git.png' alt=''/>
              <p>GIT</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/php.png' alt=''/>
              <p>PHP</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/mysql.png' alt=''/>
              <p>MYSQL</p>
            </div>
            <div className='allimg'>
              <img src='/imgskill/laravel.png' alt=''/>
              <p>LARAVEL</p>
            </div>
            <div className='allimg' id='allimg'>
              <img src='/imgskill/rest.png' id='img' alt=''/>
              <p>REST API</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills