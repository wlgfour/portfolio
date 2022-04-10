import React from 'react'
import csfposter from '../../images/csfposter.png'

const CSF = () => {
    return (
        <div className="lightbox-content-wrapper">
            <img src={csfposter} alt='poster' />

            <p>
                In my final year of university I participated in a capstone project. Industry partners came to the University of Toronto with a problem and were paired with student groups to solve that problem. I worked on an interdisceplenary team of students to develop a solution for livestock tracking and wellbeing assessment. During the porject, we heavily leveraged artificial inteligence and machine learning to create an inteligent solution that could individually recognize sheep across the country as well as a system that could determine a sheep's wellbeing based on video evidence.
            </p>
            <p>
                During this experience, we faced many challenges and design choices that we worked as a team to solve. One of the biggest challenges is that we didn't know what would work because this type of thing hasn't been done before. After extensive research, we were able to break the project into smaller modules. The idea behind this was that we were able to assess different solutions for each module, and wire them all together. This also allowed the team to more effectively break down individual tasks so that we could have a faster development lifecycle.
            </p>
        </div>
    )
}

export default CSF