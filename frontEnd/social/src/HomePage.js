import React from 'react';
import{Link}from 'react-router-dom';
import '../src/CSS/HomePage.css';
import HomeImage from '../src/assets/images/img_left1.avif';
import Logo from '../src/assets/svg/logoBlack.avif';



const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage_top">
        <div className="homepage_topLeft">
          <img src={HomeImage} alt="twitter-home" />
        </div>

        <div className="homepage_topRight">
          <img className="logo" src={Logo} alt="logo" />

          <h1 className="homepage_topRight__title">Happening now</h1>
          <h2 className="homepage_topRight__subtitle">Join today.</h2>

          <div className="homepage_topRight__Buttons">
            <button className="primary__button">Sign up with Google</button>
            <button className="primary__button">Sign up with Apple</button>
            <button className="primary__button">Sign up with Phone or Email</button>

            <h4>or</h4>
           
            <button className="secondary__button"><Link to="/register">Create account</Link> </button>
            
            <p className="homepage_topRight__policies">
              By signing up, you agree to the <a href="/">Terms of Service </a>and{' '}
              <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use. </a>
            </p>

            <div className="homepage_topRight__Buttons">
              <h3>Already have an account?</h3>
              <button className="primary__button">Sign in</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <ul className="footer_list">
            <li className="footer_list_item">
            <Link to="/about">About</Link>
          </li>
        <li className="footer_list_item">
            <a href="/">Download the app </a>
          </li>
        <li className="footer_list_item">
            <Link to="/help">Help Center </Link>
          </li>
        <li className="footer_list_item">
            <a href="/">Terms of Service</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Privacy Policy</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Cookie Policy </a>
          </li>
        <li className="footer_list_item">
            <a href="/">Accessibility </a>
          </li>
        <li className="footer_list_item">
            <a href="/">Ads info</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Blog </a>
          </li>
        <li className="footer_list_item">
            <a href="/">Status</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Brand Resource</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Advertising</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Marketing</a>
          </li>
        <li className="footer_list_item">
            <a href="/">X for Business</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Developer</a>
          </li>
        <li className="footer_list_item">
            <a href="/">Directory</a>
          </li>
          
        </ul>
        <p className="footer_copyright">
          <a href="/">Setting</a>
          <span>&copy; TwitterClone2024</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

