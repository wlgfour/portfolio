import React from 'react'
import Fade from 'react-reveal'
import data from '../data'

const Skills = () => {
    return (
        <div className='section'>
            <div className='container'>
                <div className='skills-container'>
                    <h1>Skills</h1>
                    <Fade bottom cascade>
                        <div className='skills-grid'>
                            {data.skills.map((skill, i) => (
                                <div className='skill' key={i}>
                                    <img src={skill.img} alt='skill icon' draggable='false'></img>
                                    <p>{skill.para}</p>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Skills