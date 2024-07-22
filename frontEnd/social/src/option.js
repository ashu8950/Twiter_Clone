import React from 'react'
import Logo from '../src/assets/svg/logoBlack.avif';
import CreatePost from './CreatePost';
import Footer from '../src/footer.js'
import './CSS/option.css';
import ViewPosts from './ViewPosts';
const option = () => {
  return (
    <div className='OuterContainer'>
      <div className='about_head' >
            <div className='about_left'>
                <div className='about_logo'>
                    <img src={Logo} className='about_logo' alt='logo'></img>
                </div>
                <div className='about_txt'>Hey!</div>
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
      <div className='option_mid'>
        <div className='option_left'><CreatePost/></div>
        <div className='option_right'><ViewPosts/></div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default option
