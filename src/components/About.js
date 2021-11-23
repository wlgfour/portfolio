import React from 'react'
import Fade from 'react-reveal/Fade'
import data from '../data'


const About = () => {
    return (
        <div className='section' id='about'>
            <div className='about-section'>
                <div className='content'>
                    <Fade bottom cascade>
                        <h1>About Me</h1>
                    </Fade>
                    <p>
                        {data.about.aboutp1}
                        <br></br>
                        <br></br>
                        {data.about.aboutp2}
                        <br></br>
                        <br></br>
                        {data.about.aboutp3}
                    </p>
                </div>
                <div className='image-wrapper'>
                    <img src={data.about.image} alt='about'></img>
                </div>
            </div>
        </div>
    )
}

export default About