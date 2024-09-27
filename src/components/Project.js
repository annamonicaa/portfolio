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
        {
            title: "Aplikasi Absensi Sekolah Sabat",
            image: "./image/prj-img-3.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://github.com/annamonicaa/absensisekolahsabat"
        },
        {
            title: "Aplikasi Cuaca",
            image: "./image/prj-img-4.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://annamonicaa.github.io/weather-app/"
        },
    ];

    const projectTest = [
        {
            id: 1,
            title: "Project Internal Application Bank BTN",
            desc: "Projek yang dikerjakan saat magang di PT Swadharma Duta Data sebagai Quality Assurance. Saya diberikan tanggung jawab untuk membantu membuat scenario testing dan ikut serta dalam pengujian beberapa modul",
            subDesc: "Di bawah ini adalah scenario testing yang saya buat.",
            link: "https://docs.google.com/spreadsheets/d/18BD3mDYjpNlu_D_mIOkpdcgOK6TmKbd0WdoC-jqtEcQ/edit?usp=sharing",
            imgTitle: "Beberapa dokumentasi projek:",
            img: ["./image/prj-qa-1.png", "./image/prj-qa-2.jpeg", "./image/prj-qa-3.png"],
            imgDesc: ["Tampilan dari Aplikasi Web", "Tampilan dari Apllikasi Mobile", "Sebagian dari bug yang kami temukan (Yang masih boleh ditunjukkan)"]
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
            const [isModalOpen, setIsModalOpen] = useState(false);
            const [modalImgSrc, setModalImgSrc] = useState('');
            const [modalImgDesc, setModalImgDesc] = useState('');

            const openModal = (imgSrc, imgAlt) => {
                console.log("Gambar diklik:", imgSrc, imgAlt);
                setModalImgSrc(imgSrc);
                setModalImgDesc(imgAlt);
                setIsModalOpen(true);
            }

            const closeModal = () => {
                setIsModalOpen(false);
            }

            return (
                <>
                    <p>{desc}</p>
                    <p>{subDesc}</p>
                    <a className='qaLink' href={link} target="_blank" rel="noopener noreferrer">Visit Link</a>
                    {imgTitle && <h3>{imgTitle}</h3>}
                    <div className='flex-container'>
                        {Array.isArray(img) && img.length > 0 && imgDesc.length > 0 && (
                            img.map((imgSrc, index) => (
                                <div className='flex-item' key={index}>
                                    <img id='image' onClick={() => openModal(imgSrc, imgDesc[index])} className='prjQaImg' src={imgSrc} alt={imgDesc[index]} />
                                    <p>{imgDesc[index]}</p>
                                </div>
                            ))
                        )}
                    </div>
                    {isModalOpen && (
                        <div className='modal'>
                            <span className='close' onClick={closeModal}>&times;</span>
                            <img className='modal-content' id='img01' src={modalImgSrc} alt={modalImgDesc} />
                            {/* <div id='imgDesc'>{modalImgDesc}</div> */}
                        </div>
                    )}
                </>
            );
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
