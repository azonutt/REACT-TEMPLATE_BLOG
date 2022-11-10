import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Login/index.css'



const Login = ({ userInfo, setUserInfo }) => {
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
        axios.post('http://localhost:8800/login', userInfo).then((response) => {
            if (response.data.success) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate(response.data.redirectUrl, userInfo)
            } else {
                alert("Incorrect Password!");
            }
            console.log(response)
        })
    }
    return (
        <div className='Login'>
            <form id='LoginForm'>
                <h1>Login Here</h1>

                <input type="text" id='log-name' placeholder='Username' name='username' onChange={handleChange} required></input>
                <br />
                <input className="input2" id='log-pass' type="password" placeholder='   Password' name='password' onChange={handleChange} required></input>
                <br />
                <button id="submit" name="submit" type='submit' onClick={submitHandler} >Login</button>

            </form>


        </div>
    )

}

export default Login


