import {React, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import Login from '../Login'
import Register from '../Register';

const Main = ({ userInfo, setUserInfo}) => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        email: '',
        dogname: '',
        number: '',
        date: '',
        message: ''
      })
    return ( 
        <div>
            <Login userInfo={userInfo} setUserInfo={setUserInfo} info={info} setInfo={setInfo} />
            <Register userInfo={userInfo} setUserInfo={setUserInfo} />
        </div>
    )
};

export default Main;

