import React from 'react';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// service id service_jolmwao
// public keys O2vl77kFOjVT5j9qM
// Previte keys mRVAT3DSy2Ts47kWsEY-M
// Tamplate id template_bk157wz
function Contact() {
const [email, setEmail]= useState('');
const [name, setName]= useState('');
const [message, setMessage]= useState('');
const [loading, setLoading] = useState(false);
const [messageSent, setMessageSent] = useState(null);
useEffect(() => {
  emailjs.init("O2vl77kFOjVT5j9qM");

}, []);

const handleClick = async (e) => {
  e.preventDefault();
  const serviceId = "service_wetx16f";
  const templateId = "template_bk157wz";
  
  const emailPerams = {
  from_name: name,
  to_email: email,
  message: message,
  };
  try {
  setLoading(true);
  
  const response = await emailjs.send(serviceId, templateId, emailPerams);
  if (response.status === 200) {
  console.log("email successfully sent check your email inbox");
  setName("");
  setEmail("");
  setMessage("");
  } else {
  console.log("Email failed please try again");
  }
  } catch (error) {
  console.log(error);
  } finally {
  setLoading(false);
  }
  };

    
  return (
    <>
      <div className="section contact" id="contact">
        <div id="map" className="map"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h4 className="contact-title">Send a message</h4>
                <form onSubmit={handleClick} >
                  <div className="form-group">
                    <input 
                    className="form-control" type="text" placeholder="Name *" required
                    onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input 
                      className="form-control" 
                      type="email" 
                      placeholder="Email *" 
                      required 
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <textarea 
                    className="form-control" 
                    id="message" 
                    placeholder="Message *"
                    rows="7" 
                    required
                     onChange={(e) => setMessage(e.target.value)} />

                   
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary" >Send Message</button>
                  </div>
                  {loading ? 'Sending...' : 'Send Message'}
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h4 className="contact-title">Get in touch</h4>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-mobile icon-md"></i>
                  </div>
                  <div className="col-10 ">
                    <h6 className="d-inline">Phone : <br /> <span className="text-muted">+ (92) 3408513952</span></h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-map-alt icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">Address :<br /> <span className="text-muted">Skardu Gilgit Baltistan.</span></h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-envelope icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">Email :<br /> <span className="text-muted">shahzaibsheen@gmail.com</span></h6>
                  </div>
                </div>
                <ul className="social-icons pt-4">
                  <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                  <li className="social-item"><a className="social-link text-dark" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
