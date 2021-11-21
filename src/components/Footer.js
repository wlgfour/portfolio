import React from 'react'
import Fade from 'react-reveal/Fade'
import data from '../data'

const Footer = () => {
    return (
        <div className='section' id='contact'>
            <div className='container'>
                <div className='footer-container'>
                    <Fade bottom cascade>
                        <h1>Contact</h1>
                        <h2>{data.contactSubheading}</h2>
                    </Fade>
                    <a className='email-link' href={`mailto:${data.contactEmail}`}>
                        {data.contactEmail}
                    </a>
                    <div className='social-icons'>
                        {data.social.map((socialLink, i) => (
                            <a
                                key={i}
                                href={socialLink.url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={socialLink.img} alt='icon'></img>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer