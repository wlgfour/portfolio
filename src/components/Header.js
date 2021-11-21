import React from 'react'
import Fade from 'react-reveal/Fade'
import data from '../data'

const Header = () => {
    return (
        <div className='section' id='home'>
            <div className='container'>
                <div className='header-wrapper'>
                    <Fade bottom>
                        <h2>
                            Hi, I'm Will
                            <span role="img" aria-label="Emoji">
                                👋
                            </span>
                        </h2>
                    </Fade>
                    <Fade bottom cascade>
                        <div className='heading-wrapper'>
                            <h1>Tagline[0]</h1>
                            <h1>Tagline[1]</h1>
                            <h1>Tagline[2]</h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p>header paragraph. hi I'm will etc etc...</p>
                    </Fade>
                    <Fade bottom>
                        <a href={`mailto:${data.contactEmail}`} className='primary-btn'>
                            CONNECT WITH ME
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Header