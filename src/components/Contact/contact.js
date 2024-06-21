import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

  const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_isfg2n1', 'template_xxbszxa', form.current, {
          publicKey: 'g1xv1Ye83aVH4f6C6',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
            alert('Email Sent');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <section id = "contactPage">
        <div id = "contact">
            <h1 className="contactPageTitle">Contact</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className ="contactForm" ref={form} onSubmit={sendEmail}> 
                <input type="text" className="name" placeholder="Your Name" name='from_name'/>
                <input type="email" className="email" placeholder="Your Email" name = 'from_email'/>
                <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>

        </div>
    </section>
  )
}
export default Contact;