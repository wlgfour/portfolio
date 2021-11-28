import React from 'react'
import Fade from 'react-reveal/Fade'
import data from '../data'

const Promotion = () => {
    return (
        <div className='section'>
            <div className='container'>
                <div className='promotion-container'>
                    <Fade bottom cascade>
                        <h1>{data.promotion.promoHeading}</h1>
                    </Fade>
                    <p>{data.promotion.promoPara}</p>
                </div>
            </div>
        </div>
    )
}

export default Promotion