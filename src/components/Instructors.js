import React from "react"
import instructor1 from './images/instructor1.jpg'
import instructor2 from './images/instructor2.jpg'
import instructor3 from './images/instructor3.jpg'
import './Instructors.css'

const Instructors = () => {
    return (
        <div className="instructors" id='instructors'>
            <div className="container">
                <h2>Instructors</h2>
                <span className="line"></span>
                <div className="content">
                    <div className="card">
                        <img src={instructor2} alt='instructor2'/>
                        <p>A graduate of the New York Dance Academy, she teaches Classic Ballet. </p>
                        <p><span>Sophie Bauer</span></p>
                        <p>Classic Ballet Instructor</p>
                    </div>
                    
                    <div className="card">
                        <img src={instructor1} alt='instructor1'/>
                        <p>Bachelor of Arts from Tokyo Dance Academy, she teaches Ballet Fit. </p>
                        <p><span>Azumi Harami</span></p>
                        <p>Ballet Fit Instructor</p>
                    </div>
                    
                    <div className="card">
                        <img src={instructor3} alt='instructor3'/>
                        <p>Bachelor of Arts at the University of Toronto. She teaches Contemporary. </p>
                        <p><span>Carol Musk</span></p>
                        <p>Contemporary Instructor</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Instructors
