import React from 'react'
import '../Splash/index.css'
import image1 from '../assets/images/scrappy.jpg'
import image2 from '../assets/images/greeneyes.jpg'
import image3 from '../assets/images/rose.jpg'
import image4 from '../assets/images/bigdog.jpg'
import image5 from '../assets/images/cutie.jpg'
import image6 from '../assets/images/pexels-pixabay-235805.jpg'
import image7 from '../assets/images/shan.jpg'
import image8 from '../assets/images/twins.jpg'
import image9 from '../assets/images/pexels-poodles.jpg'
import image10 from '../assets/images/teresa-berg.jpg'
import image11 from '../assets/images/toby.jpg'
import image12 from '../assets/images/pearl.jpg'


const Splash = ({ userInfo, setUserInfo }) => {



    const username = JSON.parse(localStorage.getItem('user')).username;
    return (
        <div>
            <h1 id='u-name'>Welcome {username}</h1>
            <div className='row' id="div-bg1" >
                <h2 id='header-text'>These loving canines deserve a good home with great humans!<br />
                    If you are interested in providing a safe, comfortable loving home.<br />
                    We would love to meet you!
                </h2>
                <div className='col'>

                </div>
                <br></br>
            </div>
            <div className='row' id='div-bg' >
                <div className='col-sm-3' >
                    <div className="card" id='card'>
                        <img src={image1} alt="Denim Jeans" id='pic2' />
                        <h1>Scrappy</h1>
                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image2} alt="Denim Jeans" id='pic2' />
                        <h1>Bruno</h1>

                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image3} alt="Denim Jeans" id='pic2' />
                        <h1>Rosey</h1>
                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image4} alt="Denim Jeans" id='pic2' />
                        <h1>Precious</h1>
                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
            </div>
            <div className='row' id='sec-row'>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image5} alt="Denim Jeans" id='pic2' />
                        <h1>Mr. Cuddles</h1>
                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image6} alt="Denim Jeans" id='pic2' />
                        <h1>Kitty</h1>

                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image7} alt="Denim Jeans" id='pic2' />
                        <h1>Soloman</h1>
                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image8} alt="Denim Jeans" id='pic2' />
                        <h1>Pauly & Paulene</h1>
                        <a href='/calendar'><button>Set Appointment</button></a>
                    </div>




                </div>

                <div className='row' id='trd-row'>
                    <div className='col-sm-3'>
                        <div className="card" id='card'>
                            <img src={image9} alt="Denim Jeans" id='pic2' />
                            <h1>Roxy</h1>
                            <a href='/calendar'><button>Set Appointment</button></a>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className="card" id='card'>
                            <img src={image10} alt="Denim Jeans" id='pic2' />
                            <h1>Rico</h1>
                            <a href='/calendar'><button>Set Appointment</button></a>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className="card" id='card'>
                            <img src={image11} alt="Denim Jeans" id='pic2' />
                            <h1>Toby</h1>
                            <a href='/calendar'><button>Set Appointment</button></a>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className="card" id='card'>
                            <img src={image12} alt="Denim Jeans" id='pic2' />
                            <h1>Pearl</h1>
                            <a href='/calendar'><button>Set Appointment</button></a>
                        </div>




                    </div>
                </div>

            </div>

        </div>





    )
}

export default Splash