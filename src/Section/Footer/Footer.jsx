import React from 'react'
import './Footer.css'
import iconfb from '../../images/icon_facebook.png'
import iconig from '../../images/icon_instagram.png'
import icontww from '../../images/icon_twitter.png'
import iconml from '../../images/icon_mail.png'
import icontwh from '../../images/icon_twitch.png'
import Imagelogo from '../../images/logo.png'
const Footer = () => {
    return (
    <div className='container'>
        <div className='row row-footer d-flex'>
            <div className='col-lg 3'>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>

            <div className='col-lg 3'>
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>

            <div className='col-lg 3'>
                <p>Connect with us</p>
                    <div className='d-flex'>
                        <img className='footer-icon'src={iconfb} alt="facebook" />
                        <img className='footer-icon'src={iconig} alt="instagram" />
                        <img className='footer-icon'src={icontww} alt="twitter" />
                        <img className='footer-icon'src={iconml} alt="mail" />
                        <img className='footer-icon'src={icontwh} alt="twitch" />

                    </div>
                
            </div>

            <div className='col-lg 3'>
                <p>Copyright Binar 2022</p>
                <img className='footer-logo'src={Imagelogo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer
