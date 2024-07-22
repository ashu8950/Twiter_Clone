import React from 'react'
import './CSS/footer.css'
const footer = () => {
  return (
    <div className='footer_container'>
      <div className='first'>
        <h3 className='head'>X platform</h3>
        <ul className='list'>
            <li><a href='#'>X.com</a></li>
            <li><a href='#'>Status</a></li>
            <li><a href='#'>Accessibility</a></li>
            <li><a href='#'>Embed a post</a></li>
            <li><a href='#'>Privacy Center</a></li>
            <li><a href='#'>Transparency Center</a></li>
            <li><a href='#'>Download the X app</a></li>
        </ul>
        <div className='copyright'>&copy; 2024 X Corp.</div>
      </div>
      <div className='second'>
      <h3 className='head'>X Corp.</h3>
      <ul className='list'>
            <li><a href='/about'>About the company</a></li>
            <li><a href='#'>Company news</a></li>
            <li><a href='#'>Brand toolkit</a></li>
            <li><a href='#'>Jobs and internships</a></li>
            <li><a href='#'>Investors</a></li>
        </ul>
        <div className='cookies'><a href='#'>Cookies</a></div>

      </div>
      <div className='third'>
      <h3 className='head'>Help</h3>
      <ul className='list'>
            <li><a href='/help'>Help Center</a></li>
            <li><a href='#'>Using X</a></li>
            <li><a href='#'>X for creators</a></li>
            <li><a href='#'>Ads Help Center</a></li>
            <li><a href='#'>Managing your</a></li>
            <li><a href='#'>account</a></li>
            <li><a href='#'>Email Preference</a></li>
            <li><a href='#'>Center</a></li>
            <li><a href='#'>Rules and policies</a></li>
            <li><a href='/help'>Contact us</a></li>
        </ul>
        <div className='terms_condition'><a href='#'>Privacy</a></div>

      </div>
      <div className='fourth'>
      <h3 className='head'>Developer resources</h3>
      <ul className='list'>
            <li><a href='#'>Developer home</a></li>
            <li><a href='#'>Documentation</a></li>
            <li><a href='#'>Forums</a></li>
            <li><a href='#'>Communities</a></li>
            <li><a href='#'>Developer blog</a></li>
            <li><a href='#'>Engineering blog</a></li>
            <li><a href='#'>Developer terms</a></li>
        </ul>
        <div className='terms_condition'><a href='#'>Terms and Conditions</a></div>

      </div>
      <div className='fifth'>
      <h3 className='head'>Bussiness resources</h3>
      <ul className='list'>
            <li><a href='#'>Advertise</a></li>
            <li><a href='#'>X for business</a></li>
            <li><a href='#'>Resources and guides</a></li>
            <li><a href='#'>X for marketers</a></li>
            <li><a href='#'>Marketing insights</a></li>
            <li><a href='#'>Brand inspiration</a></li>
            <li><a href='#'>X Ads Academy</a></li>
        </ul>
        <div className='language_dropdown'>
                    <select>
                        <option value='Hindi'>Hindi</option>
                        <option value='English'>English</option>
                        <option value='Sanskrit'>Sanskrit</option>
                    </select>
        </div>
      </div>
    </div>
  )
}

export default footer
