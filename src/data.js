import React from 'react'

// images
import meImage from './images/me.jpg'
import sheepImage from './images/sheep.jpg'
import protImage from './images/6msp.png'
import scotiaImage from './images/RequestToPay.jpg'
import sentimentImage from './images/net_sentiment.png'
import computerImage from './images/computer.jpg'
import notebookImage from './images/notebook.jpg'


// skills icons
import reactIcon from './images/react.svg'
import jsIcon from './images/javascript.svg'
import pythonIcon from './images/python.svg'
import sqlIcon from './images/sql.svg'
import latexIcon from './images/latex.svg'
import pytorchIcon from './images/pytorch.svg'
import gitIcon from './images/git.svg'
import linuxIcon from './images/linux.svg'
import cloudIcon from './images/cloud.svg'

// Social Icon
import githubIcon from './images/github.svg'
import facebookIcon from './images/facebook.svg'
import linkedinIcon from './images/linkedin.svg'

// work components
import CSF from './components/work_pages/CSF'
import HMS from './components/work_pages/HMS'
import Portfolio from './components/work_pages/portfolio'
import Sentiment from './components/work_pages/sentiment'
import TA from './components/work_pages/TA'
import TLI from './components/work_pages/TLI'


const data = {
    // =========== Global ===========
    contactEmail: 'wlgfour@gmail.com',


    // =========== Global ===========
    header: {
      taglines: [
        'Research',
        'Build',
        'Iterate'
      ]
    },


    // =========== Projects ===========
    projects: [
        {
            title: 'Capstone project',
            para: 'Worked on an interdisceplenary team of students with an international non-profit to develop an AI system for agriculture at scale.',
            imageSrc: sheepImage,
            lightBox: (<CSF></CSF>)
        }, {
            title: 'HiTS',
            para: 'Worked at the Harvard Program in Theraputic Science (HiTS) to process data, develop code, and research novel deep learning approaches to protein understanding.',
            imageSrc: protImage,
            lightBox: (<HMS></HMS>)
        }, {
            title: 'Teaching assistant',
            para: 'Assisted as a TA in two classes, one of which was an industry-enriched software design course. Helped students develop full stack applications with an Agile workflow.',
            imageSrc: notebookImage,
            lightBox: (<TA></TA>)
        }, {
            title: 'TLI industry project',
            para: 'Participated in a selective and enriched course where student teams partnered with Scotia bank to develop real-world solutions.',
            imageSrc: scotiaImage,
            lightBox: (<TLI></TLI>)
        }, {
            title: 'Personal portfolio',
            para: 'Developed a responsive and mobile-friendly website that showcases my skills, projects, and passions.',
            imageSrc: computerImage,
            lightBox: (<Portfolio></Portfolio>)
        }, {
          title: 'Reddit sentiment analysis',
          para:
            'Created a Python program that processed thousands of comments from Reddit and used contemporary natural language processing techniques to visualize the net sentiment of different communitues.',
          imageSrc: sentimentImage,
          lightBox: (<Sentiment></Sentiment>)
        },
    ],
    
    
    // =========== About ===========
    about: {
      paragraphs: [
        'My name is William Gerecke, but I go by Will. I am a 4th year computer science student at the University of Toronto and am specializing in artificial intelligence with a minor in statistics. Even though I attend school in Toronto, I grew up in central Massachusetts where I enjoyed spending time outdoors, playing sports with friends, and where I first developed a fondness for computer science.',
        'During my time in university, I have developed my passion for computer science and I have been drawn to artificial intelligence and machine learning. I like these topics specifically because of the unification between theory and the real world that they provide, and I am motivated by how things that are theoretical can be applied to solve real problems.',
        'I have also come to greatly enjoy working in groups and have had experience with group work on small and large projects. To me, group work idn\'t just about dividing work. It brings diverse opinions together and with good communication, provides a chance to build something impactful.',
      ],
      image: meImage
    },


    // =========== Skills ===========
    skills: [
        {
          img: pythonIcon,
          para: 'I have the most experience with Python out of any other language. I have used it for researching models, plotting results, processing data, scripting, web scraping, and more. I am familiar with Python project structure as well as how to make Python packages.'
        }, {
          img: jsIcon,
          para: 'I am familiar with web technologies such as JavaScript, HTML, CSS, and several variants of these components. I have written web servers using Node.js as well as front end applications like this page here.'
        }, {
          img: sqlIcon,
          para: 'My first deep dive into SQL was with PostgreSQL in a course I took in my second year of university. Since then I have been using relational databases consistently and have only become more familiar with using them.'
        }, {
          img: latexIcon,
          para: 'I am very familiar with LaTeX and use it several times a week. I have used LaTeX for writing reports, creating diagrams, and writing equations.'
        }, {
          img: reactIcon,
          para: 'In addition to taking a web development course that was taught with React, I have used the framework for several personal projects such as this website. I know the framework well and am comfortable making applications with it.'
        }, {
          img: pytorchIcon,
          para: 'I have used PyTorch extensively to research and develop deep learning models and data pipelines. Multiple courses at the University of Toronto taught with PyTorch and I used it to develop novel models in my time working at the Harvard Medical School.'
        }, {
          img: gitIcon,
          para: 'Git and version control are staples in my every-day life. Throughout university I have used Git to submit assignments, many of which were graded based on my ability to proficiently use version control. I also used Git at Harvard and I am familiar with GitHub Actions.'
        }, {
          img: linuxIcon,
          para: 'Linux is my primary operating system and I have used it extensively as a workstation as well in headless settings when connecting to remote machines.'
        }, {
          img: cloudIcon,
          para: 'I am familiar with cloud applications and techniques used to deploy solutions to the cloud. While not specifically a cloud solution, I am familiar with using Docker in a cloud setting.'
        },
      ],


      // =========== Promotion ===========
      promotion: {
          promoHeading: 'What else?',
          promoPara: 'In my free time I like to play ice hockey, build and fly FPV drones, and play videogames with friends.'
      },


      // =========== Footer ===========
      social: [  // git, linkedIn, facebook
        {
          img: githubIcon,
          url: 'https://github.com/wlgfour'
        },
        {
          img: linkedinIcon,
          url: 'https://www.linkedin.com/in/william-gerecke/',
        },
        {
          img: facebookIcon,
          url: 'https://www.facebook.com/WillGerecke/',
        },
      ],

      contactSubheading: 'Feel free to connect with me!'
}

export default data