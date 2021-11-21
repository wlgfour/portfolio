import React from 'react'
import data from '../data'

const Skills = () => {
    return (
        <div className='section'>
            <div className='container'>
                <div className='skills-container'>
                    <h1>Skills</h1>
                    <div className='skills-grid'>
                        {data.skills.map((skill, i) => (
                            <div className='skill' key={i}>
                                <img src={skill.img} alt='skill icon'></img>
                                <p>{skill.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills