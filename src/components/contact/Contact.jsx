import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>s.charlesderrick9@gmail.com</h5>
                    <a href="malito:s.charlesderrick9@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>schadetutorials</h5>
                    <a href="https://m.me/schadegalaxie" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+256702659754</h5>
                    <a href="https://api.whatsapp.com/send?phone=+256702659754" target="_blank">Send a message</a>
                </article>
            </div>
            {/* END OF CONTACT OPTIONS */}

            <form action="">
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
