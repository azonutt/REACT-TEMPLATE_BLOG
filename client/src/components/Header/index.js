import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Header/index.css'
import image1 from '../assets/images/puppyToy.PNG'





const Header = () => {
    return (
        <div className="header">
            {/* <a href="#default" id = 'name'class="logo">Puppy Love Adoption</a> */}
            <h2 id='name' className='logo'>Puppy Love Adoption</h2>
            <img id= 'puppy' src= {image1} alt="Puppy"  />
            <div className="header-right">
                <a href="/" id='home'>Home</a>
                <a href="/main" id='login'>Create Account/Login</a>
                <a href="/contact" id='contact'>Contact Us</a>
                {/* <a href="/about" id='about'>About</a> */}
            </div>
        </div>
    )
}
export default Header

