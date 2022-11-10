import React from 'react'
import '../Contact/index.css'


// This is where I plan to implement EmailJs


const Contact = () => {
    return (
        <div>

            <div className="container">
                <form action="action_page.php">

                    <label for="fname">First Name</label>
                    <input type="text" id="ffname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="llname" name="lastname" placeholder="Your last name.." />

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.." />

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                    <input type="submit" value="Submit" />

                </form>
            </div>



        </div>







    )
}
export default Contact