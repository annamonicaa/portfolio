import '../App.css';
// import ProjectQA from './ProjectQA';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Projek = () => {
    const listProject = [
        {
            title: "tic-tac-toe",
            image: "./image/prj-img-1.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://annamonicaa.github.io/tic-tac-toe/"
        },
        {
            title: "Nature Republic",
            image: "./image/prj-img-2.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://annamonicaa.github.io/"
        },
    ];

    const projectTest = [
        {
            id: 1,
            title: "Project Internal Application Bank BTN",
            desc: "Projek yang dikerjakan saat magang di PT Swadharma Duta Data sebagai Quality Assurance. Saya diberikan tanggung jawab untuk membantu membuat scenario testing dan ikut serta dalam pengujian beberapa modul",
            subDesc: "Di bawah ini adalah scenario testing yang saya buat.",
            link: "https://docs.google.com/spreadsheets/d/18BD3mDYjpNlu_D_mIOkpdcgOK6TmKbd0WdoC-jqtEcQ/edit?usp=sharing",
            imgTitle: "Image Title 1",
            img: "image1.jpg",
            imgDesc: "Description for image 1"
        },
        {
            id: 2,
            title: "Another Project",
            desc: "Description of project 2",
            subDesc: "Subtitle of project 2",
            link: "https://example.com",
            imgTitle: "",
            img: "",
            imgDesc: "Description for image 2"
        },
    ];

    const Collapsible = () => {
        const [activeIndex, setActiveIndex] = useState(null);
        const toggleCollapsible = (index) => {
            if (activeIndex === index) {
                setActiveIndex(null);
            } else {
                setActiveIndex(index);
            }
        }

    const ProjectQA = ({ desc, subDesc, link, imgTitle, img, imgDesc }) => {
        return (
            <>
            <div>
                <p>{desc}</p>
                <p>{subDesc}</p>
                <a href={link} target="_blank">Visit Link</a>
                <h3>{imgTitle}</h3>
                <img src={img} alt={imgDesc} />
                <p>{imgDesc}</p>
            </div>
            </>
        )
    }



        return (
            <>
             <div>
                
             {projectTest.map((project, i) => (
                <React.Fragment key={i}>
                <button
                    className={`collapsible ${activeIndex === i + 1 ? 'active' : ''}`}
                    onClick={() => toggleCollapsible(i + 1)}
                >
                    {project.title}
                </button>
                <div
                    className="content"
                    style={{
                    maxHeight: activeIndex === i + 1 ? '100%' : '0',
                    overflow: 'hidden',
                    }}
                >
                    <ProjectQA {...project}/>
                </div>
                </React.Fragment>
            ))}
             </div>
            </>
        );
    }

    return (
        <>
            <div className='projek'>
                <h1>Application Project</h1>
                <div className='flex-container'>
                    {listProject.map((item, index) => (
                        <div className='flex-item' key={index}>
                            <a target="_blank" href={item.link}>
                                <div className='item'>
                                    <img src={item.image} alt={item.title} />
                                    <div className='desc'>
                                        <div className='title'>{item.title}</div>
                                        <div>{item.desc}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Testing (Example of my work)</h1>
                <div className='margin'>
                    <Collapsible />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
};

export default Projek;
