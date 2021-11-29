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
                        <div>
                            {
                                data.about.paragraphs.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))
                            }
                        </div>
                    </Fade>
                </div>
                <div className='image-wrapper'>
                    <img src={data.about.image} alt='about'></img>
                </div>
            </div>
        </div>
    )
}

export default About