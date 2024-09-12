import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Bhavik Compound,Opp J D Estate,Ranoli IPCL Road,Dashrath,Vadodara-391740,Gujarat,India.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
            </div>
            <div className="footer-content-right">
                        <h2>Get in touch</h2>
                        <ul>
                            <li>+568-852-456-123</li>
                            <li>tomato@gmail.com</li>
                        </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer