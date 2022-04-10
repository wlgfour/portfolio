import React from 'react'

const HMS = () => {
    return (
        <div className='lightbox-content-wrapper'>
            <p>
                During my time at HMS, I worked in the Lab of Systems Pharmacology, and learned a lot about molecular biology. Specifically, I elarned a lot about proteins and their structure. While I was there, I worked on a handful of different projects: building a 10TB dataset, integrating a transformer architecture into an existing pipeline, reasearching the behavior of molecular structures under different geometrical representations, and assessing various 3D-equivariant NN models.
            </p>

            <p>
                While I mainly used python and bash scripting for my day-to-day work, the environment and tools I used changed significantly from project to project. I leveraged a SLURM cluster to distribute jobs across multiple thousands of computers; built models presented by research papers in TensorFlow and Pytorch; generated visualizations to make complex concepts from group theory and differential geometry intuitive; and developed a python package that is used by graduate students at the AQLab. Beyond the technology, I regularly read academic papers, attended scientific presentations, and gave presentations about my work.
            </p>
        </div>
    )
}

export default HMS