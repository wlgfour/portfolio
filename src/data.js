// images
import meImage from './images/me.jpg'
import sheepImage from './images/sheep.jpg'
import protImage from './images/6msp.png'
import scotiaImage from './images/RequestToPay.jpg'
import sentimentImage from './images/net_sentiment.png'
import computerImage from './images/computer.jpg'
import notebookImage from './images/notebook.jpg'


// skills icons
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import pythonIcon from './images/python.svg'
import sqlIcon from './images/sql.svg'
import latexIcon from './images/latex.svg'
import pytorchIcon from './images/pytorch.svg'
import gitIcon from './images/git.svg'
import linuxIcon from './images/linux.svg'
import cloudIcon from './images/cloud.svg'

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"


const data = {
    // =========== Global ===========
    contactEmail: 'wlgfour@gmail.com',


    // =========== Global ===========
    header: {
      taglines: [
        'Researching',
        'Developing',
        'Improving'
      ]
    },


    // =========== Projects ===========
    projects: [
        {
            title: "Capstone project",
            para:
              "Worked on an interdisceplenary team of students with an international non-profit to develop an AI system for agriculture at scale.",
            imageSrc: sheepImage,
        }, {
            title: "HiTS",
            para:
              "Worked at the Harvard Program in Theraputic Science (HiTS) to process data, develop code, and research novel deep learning approaches to protein understanding.",
            imageSrc: protImage,
        }, {
            title: "Teaching assistant",
            para:
              "Assisted as a TA in two classes, one of which was an industry-enriched software design course. Helped students develop full stack applications with an Agile workflow.",
            imageSrc: notebookImage,
        }, {
            title: "TLI industry project",
            para:
              "Participated in a selective and enriched course where student teams partnered with Scotia bank to develop real-world solutions.",
            imageSrc: scotiaImage,
        }, {
            title: "Personal portfolio",
            para:
              "Developed a responsive and mobile-friendly website that showcases my skills, projects, and passions.",
            imageSrc: computerImage,
        }, {
          title: "Reddit sentiment analysis",
          para:
            "Created a Python program that processed thousands of comments from Reddit and used contemporary natural language processing techniques to visualize the net sentiment of different communitues.",
          imageSrc: sentimentImage,
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
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: jsIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: sqlIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: latexIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: reactIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: pytorchIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: gitIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: linuxIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          img: cloudIcon,
          para:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],


      // =========== Footer ===========
      social: [  // git, linkedIn, facebook
        {
          img: githubIcon,
          url: "https://github.com/chetanverma16"
        },
        {
          img: dribbbleIcon,
          url: "https://dribbble.com/chetanverma",
        },
        {
          img: instagramIcon,
          url: "https://www.instagram.com/",
        },
      ],

      contactSubheading: 'contact subheading'
}

export default data