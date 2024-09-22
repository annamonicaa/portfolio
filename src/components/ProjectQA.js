import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const ProjectQA = () => {
    const { id } = useParams(); 
    console.log(id);
    const projectTest = [
        {
            id: 1,
            title: "Project Internal Application Bank BTN",
            desc: "Description of project 1",
            subDesc: "Subtitle of project 1",
            link: "https://example.com",
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
            imgTitle: "Image Title 2",
            img: "image2.jpg",
            imgDesc: "Description for image 2"
        },
    ];

    const project = projectTest.find(p => p.id === parseInt(id)); // Find the project by ID

    if (!project) {
        return <div>Project not found</div>; // Handle the case where the project is not found
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <p>{project.subDesc}</p>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Link</a>
            )}
            <h3>{project.imgTitle}</h3>
            <img src={project.img} alt={project.imgDesc} />
            <p>{project.imgDesc}</p>
        </div>
    );
};

export default ProjectQA;
