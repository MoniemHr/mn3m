import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import SimpleMap from './MapCom';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail


      const serviceId = 'service_14191';
      const templateId = 'template_p0jrnpr';
      const userId = 'Fh1K1vvEvy7mFPmCZ';
      const templateParams = {
        name,
        email,
        message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
  }
  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  return (
    <>
    <div className="ContactHeader">
    <img className='ContactHeaderImg' src='../../MoniemHr/mn3m.git/assesst/ContactHeader.png' />
    </div>
      <div className="contactPage">
        <div className="row">
          <div className="ContactInfo col-xs-12 col-sm-12 col-md-8">
            <div className="maphandle">
           
                <SimpleMap />
                <div className="MapRight">
                  <h1>Hi , We Are More Then Happy To Contact You </h1>
                  <p> Our team is ready at any time to serve you and answer all your questions.And to make your tour on our site from choosing the products to the prices and then the methods of sending and shipping your products easier and flexible </p>
                  <div className='row text-center'>
                    <div className='col-sm-6'>
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                        <img className='LogoFacebok' src='../../MoniemHr/mn3m.git/assesst/facebook.png' />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                        <h4 className='socialP'>facebook/Thearomabest</h4>
                        </div>
                      </div>
                     
                      
                    </div>
                    <div className='col-sm-6'>
                      <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12">
                        <img className='LogoFacebok' src='../../MoniemHr/mn3m.git/assesst/instagram.png' />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                        <h4 className='socialP'>Inastgram/Thearomabest </h4>
                        </div>
                      </div>
                     
                      
                    </div>
                  </div>
                </div>
           
            </div>


          </div>
          <div className="ContactForm col-xs-12 col-sm-12 col-md-4">
            <h1>Contact Form</h1>
            <div id="contact-form" className='contactForm'>
              <h5>Name* :</h5>
              <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
              <br />
              <h5>Email* :</h5>
              <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
              <br />
              <h5>Massege* :</h5>
              <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
              <br />
              <button onClick={submit} type="button" class="btn btn-success">Send Message</button>
              <br />
              <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact