import React from 'react'
import './CSS/About.css'
import Footer from '../src/footer.js'
import Logo from '../src/assets/svg/logoBlack.avif'
import aboutImg from '../src/assets/images/contact.jpg'
import aboutImg1 from '../src/assets/images/img_left1.avif'
import video from '../src/assets/video/video3478727181.mp4'
const About = () => {
  return (
    <div className='Outer_container'>
    <div className='about_container'>
        <div className='about_head' >
            <div className='about_left'>
                <div className='about_logo'>
                    <img src={Logo} className='about_logo' alt='logo'></img>
                </div>
                <div className='about_txt'>About</div>
            </div>
            <div className='about_right'>
                <div className='dropDown1'>
                    <select>
                
                        <option >Who are we</option>
                        <option >Careers</option>
                        <option >Brand toolkit</option>
                    </select>
                    
                </div>
                <div className='dropDown2'>
                <select>
                        <option >Our priorities</option>
                        <option >Security and privacy</option>
                        <option >Civic Integrity</option>
                    </select>
                </div>
                <div className='dropDown3'>
                <select>
                        <option >Help Center</option>
                        <option >Privacy Center</option>
                        <option >Advertisers</option>
                        <option >Developers</option>
                        <option >Company updates</option>
                        <option >Lobbying disclosures</option>
                    </select>
                </div>
                <button>Go to X.com</button>
            </div>
        </div>
        <div className='about_mid'>
            <img className="left"src={aboutImg}></img>
            <img className='right'src={aboutImg1}></img>
        </div>
    </div>
    <div className='video_Container'>
    <video width="640" height="360" autoPlay controls>
    <source src={video} type="video/mp4" />
</video>
    </div>
    <Footer/>
    </div>
    
  )
}

export default About
