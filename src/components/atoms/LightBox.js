/**
 * Takes props
 *   - title
 *   - displays children as content
 */

import React from 'react'

const LightBox = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const lbOpen = isOpen ? 'lightbox-open' : 'lightbox-closed';

    return (
        <div className='lightbox-wrapper'>
            <button className='primary-btn' onClick={toggle}>
                More
            </button>
            <div
                className={isOpen ? 'lightbox-backdrop' : 'backdrop-closed'}
                onClick={toggle}
            ></div>
            <div className={`lightbox ${lbOpen}`}>
                <div className='lightbox-header'>
                    <h2>{ props.title }</h2>
                    <button onClick={toggle}>X</button>
                </div>
                <div className='lightbox-content'>
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default LightBox