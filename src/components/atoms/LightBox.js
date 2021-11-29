/**
 * Takes props
 *   - title: title text
 *   - img: header image
 *   - children: displays children as content
 */

import React from 'react'

const LightBox = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    // class to add if lightbox open
    const lbOpen = isOpen ? 'lightbox-open' : 'lightbox-closed';

    return (
        <div className='lightbox-wrapper'>
            {/* this button is rendered when the lightbox isn't shown and is used to expand the child component */}
            <button className='primary-btn' onClick={toggle}>
                More
            </button>

            {/* this is the backdrop that appears behind the image to grey out the rest of the page */}
            <div
                className={isOpen ? 'lightbox-backdrop' : 'backdrop-closed'}
                onClick={toggle}
            ></div>

            {/* this is the actual light box that appears when the 'more' button is clicked */}
            <div className={`lightbox ${lbOpen}`}>
                {/* header of the lightbox */}
                <div className='lightbox-header' style={{
                    backgroundImage:
                        `url(${props.img})`,
                }}>
                    <div className='header-text'>
                        <div>
                            <h2>{ props.title }</h2>
                        </div>
                        <div>
                            <button onClick={toggle}>X</button>
                        </div>
                    </div>
                </div>
                
                {/* content. render the child component that was passed as-is */}
                <div className='lightbox-content'>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default LightBox