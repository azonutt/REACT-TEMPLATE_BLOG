import React from 'react'
import '../Home/index.css'
import image1 from '../assets/images/scrappy.jpg'
import image2 from '../assets/images/greeneyes.jpg'
import image3 from '../assets/images/rose.jpg'
import image4 from '../assets/images/bigdog.jpg'
import image5 from '../assets/images/cutie.jpg'
import image6 from '../assets/images/pexels-pixabay-235805.jpg'
import image7 from '../assets/images/shan.jpg'
import image8 from '../assets/images/twins.jpg'


const Home = () => {
    return (
        <div>


            <div className='row' id="div-bg1" >
                <h2 id='header-text'>Puppy Love Adoption mission is  to finding loving homes for all dogs!<br />
                    Please Login or Create an Account to set up a date time to look at a specific canine or all of our adoptees.

                </h2>
                <div className='col'>

                </div>
                <br></br>
            </div>
            <div className='row' id='div-bg' >
                <div className='col-sm-3' >
                    <div className="card" id='card'>
                        <img src={image1} alt="Scrappy" id='pic2' />
                        <h1>Scrappy</h1>

                    </div>

                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image2} alt="Denim Jeans" id='pic2' />
                        <h1>Bruno</h1>


                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image3} alt="Denim Jeans" id='pic2' />
                        <h1>Rosey</h1>


                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image4} alt="Denim Jeans" id='pic2' />
                        <h1>Precious</h1>


                    </div>
                </div>
            </div>
            <div className='row' id='sec-row'>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image5} alt="Denim Jeans" id='pic2' />
                        <h1>Mr. Cuddles</h1>


                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image6} alt="Denim Jeans" id='pic2' />
                        <h1>Kitty</h1>


                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image7} alt="Denim Jeans" id='pic2' />
                        <h1>Soloman</h1>

                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className="card" id='card'>
                        <img src={image8} alt="Denim Jeans" id='pic2' />
                        <h1>Pauly & Paulene</h1>

                    </div>

                </div>



            </div>


        </div>



    )
}
export default Home