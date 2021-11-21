import React from 'react'
import Fade from 'react-reveal/Fade'

const promotion = {
    promoHeading: 'Promotion Heading',
    promoPara: 'this is a paragraph that ppromotes me :)'
}

const Promotion = () => {
    return (
        <div className='section'>
            <div className='container'>
                <Fade bottom cascade>
                    <h1>{promotion.promoHeading}</h1>
                </Fade>
                <p>{promotion.promoPara}</p>
            </div>
        </div>
    )
}

export default Promotion