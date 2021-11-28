import React from 'react'
import Fade from 'react-reveal/Fade'
import data from '../data'

const Header = () => {
    return (
        <div className='section' id='home'>
            <div className='container'>
                <div className='header-wrapper'>
                    <Fade bottom cascade>
                        <div className='heading-wrapper'>
                            {
                                data.header.taglines.map((tagline, i) => (
                                    <h1 key={i}>{tagline}.</h1>
                                ))
                            }
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Header