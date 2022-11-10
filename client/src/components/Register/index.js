import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Register/index.css'

const Register = ({ userInfo, setUserInfo }) => {
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        console.log('click me');
        e.preventDefault();
        if (userInfo.password !== userInfo.confirm) {
            console.log("user/info", userInfo);
            alert('Passwords Do Not Match')
        } else {
            axios.post('http://localhost:8800/register', userInfo).then((response) => {
                if (response.data.success) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    navigate(response.data.redirectUrl, userInfo)
                } else {
                    console.log(response.data);
                }
            })
        }
    }
    return (



        <div className='RegisterDiv'>
            <form id='registerForm'>
                <h1>Register Here</h1>

                <input type="text" placeholder='Username' name='username' id='reg-name' onChange={handleChange} required></input>
                <br />
                <input className="input" id='reg-pass' type="password" placeholder='Password' name='password' onChange={handleChange} required></input>
                <br />
                <input className="input" id='con-pad' type="password" placeholder='Confirm' name='confirm' onChange={handleChange} required></input>
                <br />
                <button id="submit2" name="submit" type='submit' onClick={submitHandler} >Register</button>
            </form>


        </div>
    )
}
export default Register;