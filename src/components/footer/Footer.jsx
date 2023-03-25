import React from 'react';
import './footer.css';
import contactLogo from '../../assets/logo.png'
import { GrLocation } from "react-icons/gr";
import { BiPhone } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
import { BsBroadcastPin } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='container footer-wrapper'>
        <hr />
        <div className="contact-section">
            <div className="contact-icon">
                <img src={contactLogo} alt="contact-logo"/>
                <span>amazon</span>
            </div>
            <div className="contact-us footer-detail">
                <span>Contact Us</span>
                <span>
                    <GrLocation/>
                    11,First Car Street,Chennai-600 001
                </span>
                <span>
                    <BiPhone/>
                    +91-9876543210
                </span>
                <span>
                    <MdOutlineMarkEmailUnread/>
                    test@gmail.com
                </span>
            </div>
            <div className="account footer-detail">
                <span>
                    Account
                </span>
                <span>
                    <HiOutlineLogin/>
                    Sign-in
                </span>
            </div>
            <div className="company footer-detail">
                <span>Company</span>
                <span>
                    <MdPeople/>
                    About Us
                </span>
            </div>
            <div className="resources footer-detail">
                <span>Resources</span>
                <span>
                    <BsBroadcastPin/>
                    safety privacy & terms
                </span>
            </div>
        </div>
        <div className="footer-copyright d-flex align-items-center justify-content-center mt-4 .ls-widest">
            <span>copyright©{currentYear} Pravin Amalan</span>
        </div>

    </div>
  )
}

export default Footer