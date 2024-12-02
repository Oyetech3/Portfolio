import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {

  const [name , setName] = useState('')
  const [email, setEmail] = useState('')
  const [message , setMessage] = useState('')

  const form = useRef()

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changemessage = (e) => {
    setMessage(e.target.value)
  }
  const sendMessage =  (e) => {
    e.preventDefault()
   
    emailjs
    .sendForm('service_bu3xxaf', 'template_l8uzabv', form.current, {
      publicKey: 'cKBdnVExhlKba6Anv',
    })
    .then(
      () => {
        alert("Your message has been sent successfully");
        setName("")
        setEmail("")
        setMessage("")
      },
      (error) => {
        alert("Error sending your message", error.text);
      },
    );
    
  }

  return (
    <div className='contact'>
    <form onSubmit={sendMessage} ref={form}  method='POST'>
     <div className='allcontact'>
        <input type='text' name="from_name"  value={name} onChange={changeName} placeholder='Name' autoComplete='off'/><br/>
        <input type='email' name="email"  value={email} onChange={changeEmail} placeholder='Email' autoComplete='off' /><br/>
        <textarea name='message' value={message}  onChange={changemessage} placeholder='Write a message' autoComplete='off' ></textarea> <br/>
      </div>
      <button className='send' type='submit'>
        <p>Send Message</p>
      </button>
    </form>

    </div>
  )
}

export default Contact