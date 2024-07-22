import React, { useState } from 'react';
import '../src/CSS/contact.css';
import Logo from '../src/assets/svg/logoBlack.avif';
import SearchLogo from '../src/assets/svg/searchLogo.svg'; // Import your search engine logo
import contactImg from '../src/assets/images/contact1.jpg'
import Footer from '../src/footer'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className='outerContainer'>
      <div className='header'>
        <div className='left'>
          <div className='contact_logo'>
            <img className='contact_img' src={Logo} alt="logo" />
          </div>
          <div className='txt'><h2>Help Center</h2></div>
        </div>
        <div className='right'>
          {sidebarVisible ? null : (
            <button className="sidebar-toggle-button" onClick={toggleSidebar}>☰</button>
          )}
          <img src={SearchLogo} alt="Search Logo" className='search-logo'></img> {/* Use your search engine logo */}
          <div className={`sidebar ${sidebarVisible ? 'active' : ''}`} id='sidebar'>
            <div className='head'>
                <h3 className='right-side'>Help Center</h3>
                 <button className="close-button" onClick={closeSidebar}>✕</button>
            </div>
            <ul className="sidebar-list">
              <li className="sidebar-item">Using X</li>
              <li className="sidebar-item">Managing Your Account</li>
              <li className="sidebar-item">Safety and Security</li>
              <li className="sidebar-item">Rules and Policies</li>
              <li className="sidebar-item">Resources</li>
            </ul>
            <button><Link to="/login">Sign in</Link></button>
          </div>
          <button className="contact-button">Contact us</button>
        </div>
      </div>

      <div className='mid'>
        <div className='imgContainer'>
          <img className="img"src={contactImg} alt='img'></img>
          <h2 className="upper">Contact Us</h2>
          <h1 className="middle">We can help.</h1>
          <div className='search-container'>
            <input type='text' className='search-box'placeholder='search...'>
            </input>
            <img src={SearchLogo} alt="Search Logo" className='search-icon'></img>
          </div>
        </div>
      </div> 
      <Footer/>
    </div>
     
  );
};

export default Contact;
