import React from 'react'

import SlurmImg from '../../images/slurm.svg'
import BashImg from '../../images/bash.svg'
import TensorflowImg from '../../images/tensorflow.svg'
import PytorchImg from '../../images/pytorch.svg'
import PythonImg from '../../images/python.svg'

const HMS = () => {
    return (
        <div className="lightbox-content-wrapper">
            <p>
                I worked at the Harvard Program in Therapeutic Science (HiTS) full time in the summer of 2019 as well as the summer of 2020 and 2021. I also worked part time during fall and winter semesters of the 2020-2021 school year. While I greatly enjoyed my work, it was a challenge to balance a full course load as well as working half time. While working at HiTS, I gained a lot of technical skills related to processing large datasets ({'>'}10TB) as well as building neural networks with novel structures and exploring novel representations of 3D structures. I also collaborated with graduate and undergraduate students by sharing code and datasets in addition to near-daily meetings to discuss new ideas and results.
            </p>
            <p>
                While at HiTS, Mohammed AlQuraishi left to accept a position at Columbia University where he started the <a href="https://aqlab.io">AlQuraishi lab</a> as well as the <a href="https://github.com/aqlaboratory/openfold">OpenFold</a> team. I had the opportunity to work with the OpenFold team providing datasets as well as code and analysis related to different representations for proteins.
            </p>


            <div className="lightbox-skills-container">
                <h3>Technologies</h3>
                <div className="skills-grid">

                    <div className="skill">
                        <img src={SlurmImg} />
                        {/* <p>SLURM</p> */}
                    </div>
                    <div className="skill">
                        <img src={BashImg} />
                        {/* <p>Bash</p> */}
                    </div>
                    <div className="skill">
                        <img src={TensorflowImg} />
                        {/* <p>TensorFlow</p> */}
                    </div>
                    <div className="skill">
                        <img src={PytorchImg} />
                        {/* <p>PyTorch (reproducible experiments)</p> */}
                    </div>
                    <div className="skill">
                        <img src={PythonImg} />
                        {/* <p>Python (documented and tested)</p> */}
                    </div>
                    <div className="skill">
                        <p>Group Theory</p>
                    </div>
                    <div className="skill">
                        <p>Differential and Projective Geometry</p>
                    </div>
                    <div className="skill">
                        <p>Remote Collaboration</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HMS