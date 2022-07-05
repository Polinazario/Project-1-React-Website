import React from "react"
import ballet from './images/ballet7.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about" id='about'>
            <div className="container">
                <img src={ballet} alt='ballet' />
                <div className="col-2">
                    <h2>About</h2>
                    <span className="line"></span>
                    <p>Through our classes, we transmit our love for dance and provide a light, relaxed and professional space for everyone. We have classes from beginner to advanced levels. So it doesn't matter if you have experience or not, we have a special class for you! </p>
                    <p>Not only techniques, but we also want to teach you how to express yourself through movements. We truly believe that dance has the power to touch where words can't.</p>
                    <button className="button">More</button>
                </div>
                    
            </div>

        </div>
    )
}

export default About