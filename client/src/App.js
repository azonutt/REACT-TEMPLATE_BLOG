import Home from './components/Home/index'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Main from './components/Main'
import Splash from './components/Splash'
import Calendar from './components/Calendar'
import Contact from './components/Contact'


function App() {


  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    confirm: '',
    message: '',
    login: false
  });
  const [info, setInfo] = useState({
    email: '',
    dogname: '',
    number: '',
    date: '',
    message: ''
  })
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/main" element={<Main userInfo={userInfo} setUserInfo={setUserInfo} info={info} setInfo={setInfo} />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


