import axios from 'axios'
import React ,{useState} from 'react'
import {useNavigate ,Link} from 'react-router-dom'
import '../src/CSS/register.css';
import Logo from '../src/assets/svg/logoBlack.avif';
// import { Link } from 'react-router-dom';

const Register = () => {
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleUsername=(event)=>{
        
        setUsername(event.target.value);
  }
  const handlePassword=(event)=>{
    
    setPassword(event.target.value);
  }
  const handleForm=async(event)=>{
    try {
        event.preventDefault();
        const response=await axios.post("http://localhost:3000/register",{
        username:Username,
        password:Password
  })
    if(response.status==201){
     navigate('/login')
    }
    } catch (error) {
        
    }
  console.log(Response);
  }
  return (
  
    <div className='main'>
    <div className='Sign_up'>
      <form onSubmit={handleForm}>
        <div className="homepage_topRight1">
        
          <img className="logo1" src={Logo} alt="logo" />
          <h2 className="homepage_topRight__subtitle">Join X today.</h2>
          <div className="homepage_topRight__Buttons">
            <button className="primary__button">Sign  upwith Google</button>
            <button className="primary__button">Sign ups with Apple</button>

            <h4>or</h4>
        {/* <label>Username: </label> */}
         <input type='text'name='txt' placeholder='Username' required="" value={Username} onChange={handleUsername}></input>
       
         {/* <label>Password: </label> */}
         <input type='password' name='txt' placeholder='Password' required="" value={Password} onChange={handlePassword}></input>
         
        <button>Sign up</button>
        <p className="homepage_topRight__policies">
              By signing up, you agree to the <a href="/">Terms of Service </a>and{' '}
              <a href="/">Privacy Policy</a>, including <a href="/">Cookie Use. </a>
            </p>

            <div className="homepage_topRight__Buttons1">
              <h3>Already have an account?</h3>
              <button className="primary__button"><a href='/login' className='link'>Sign in</a></button>
            </div>
        </div>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Register
