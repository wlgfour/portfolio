import React from 'react'
import Card from './atoms/Card'
import Fade from 'react-reveal/Fade'
import data from '../data'

const Work = () => {
    return (
        <div className='section' id='work'>
            <div className='container'>
                <div className='work-wrapper'>
                    <Fade bottom>
                        <h1>Work</h1>
                    </Fade>

                    <div className='work-grid'>
                        <Fade bottom cascade>
                            {data.projects.map((project, i) => (
                                <Card
                                    key={i}
                                    heading={project.title}
                                    paragraph={project.para}
                                    imgUrl={project.imageSrc}
                                    projectLink={project.url}
                                    lightBoxContent={project.lightBox}
                                ></Card>
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work