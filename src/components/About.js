import React from 'react'
import Fade from 'react-reveal/Fade'

const about = {
    aboutp1: '',
    aboutp2: '',
    aboutp3: '',
    image: 'aboutImage: https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
}

const About = () => {
    return (
        <div className='section' id='about'>
            <div className='about-section'>
                <div className='content'>
                    <Fade bottom cascade>
                        <h1>About Me</h1>
                    </Fade>
                    <p>
                        {about.aboutp1}
                        <br></br>
                        <br></br>
                        {about.aboutp2}
                        <br></br>
                        <br></br>
                        {about.aboutp3}
                    </p>
                </div>
                <div className='image-wrapper'>
                    <img src={about.image} alt='about'></img>
                </div>
            </div>
        </div>
    )
}

export default About