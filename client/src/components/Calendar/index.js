import React from 'react'
import '../Calendar/index.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Calendar = ({ info, setInfo, getAppointment }) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setInfo({
            ...info,
            [name]: value
        });
    }
    const submitHandler = (e) => {
        console.log('hello')
        e.preventDefault()
        axios.post('http://localhost:8800/calendar', info).then((response) => {
            localStorage.setItem("info", JSON.stringify(response.data.user));
            navigate(response.data.redirectUrl);

            alert('Your Appointment has beeen Set, We Will See Ya Soon!')
        })
    }

    return (
        <div>

            <div className="w3-container w3-padding-64" id="contact">

                <form id='myform' action="/action_page.php">
                    <p><input id='form1' className="w3-input w3-padding-16" type="text" placeholder="Email" onChange={handleChange} name="email" required /></p>
                    <p><input id='form2' className="w3-input w3-padding-16" type="text" placeholder="Any specific dog?" required /></p>
                    <p><input id='form' className="w3-input w3-padding-16" type="number" placeholder="Current # of pets?" required /></p>
                    <p><input id='form' className="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required defaultValue="2020-11-16T20:00" /></p>
                    <p><input id='form3' className="w3-input w3-padding-16" type="text" placeholder="Why adopt a pet?" onChange={handleChange} required /></p>
                    <p><button id='form' className="w3-button w3-light-grey w3-section" type="submit" onClick={submitHandler} >SEND MESSAGE</button></p>
                </form>
            </div>
        </div >
    )
}



export default Calendar