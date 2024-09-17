import '../App.css';

const Projek = () => {
    const listProject = [
        {
            title: "tic-tac-toe",
            image: "./image/prj-img-1.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: "https://annamonicaa.github.io/tic-tac-toe/"
        },
        {
            title: "Nature Republic",
            image: "./image/prj-img-2.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://annamonicaa.github.io/"
        },
        {
            title: "tic-tac-toe",
            image: "./image/prj-img-2.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://annamonicaa.github.io/tic-tac-toe/"
        },
        {
            title: "Nature Republic",
            image: "./image/prj-img-2.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://annamonicaa.github.io/"
        },

    ]

    const listTestProject = [
        {
            title: "",
            path: "",
            image: ["", ""],
            desc: ["", ""],
            // optional
            link: ""
        }
    ]



    return (
        <>
        <div className='projek'>
            <h1>Applicaition Project</h1>
            <div className='flex-container'>
                {listProject.map((item) => (
                 <div className='flex-item'>
                    <a target="_blank" href={item.link}>
                        <div className='item'>
                            <img src={item.image} />
                            <div className='desc'>
                            <div className='title'>{item.title}</div>
                            <div className=''>{item.desc}</div>
                            </div>
                        </div>
                    </a>
                 </div>
                ))}
            </div>
        </div>
        <div>
        <h1>Testing (Example of my work)</h1>
        <div className='flex-container'>
            <img src='https://docs.google.com/spreadsheets/d/18BD3mDYjpNlu_D_mIOkpdcgOK6TmKbd0WdoC-jqtEcQ/edit?usp=sharing' />
        </div>
        </div>
        </>
    )
}

export default Projek;