import React from 'react'
import LightBox from './LightBox'

const Card = ({heading, paragraph, imgUrl, projectLink, lightBoxContent}) => {
    return (
        <div
            className='card'
            style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.75)),url(" +
                  imgUrl +
                  ")",
            }}
        >
            <div className='content'>
                <h1 className='header'>{heading}</h1>
                <p className='text'>{paragraph}</p>
            </div>
            <LightBox title={heading} img={imgUrl}>
                {lightBoxContent}
            </LightBox>
        </div>
    )
}

export default Card