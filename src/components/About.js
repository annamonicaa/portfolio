import '../App.css';

const About = () => {

    return (
        <>
            <h1>About Me</h1>
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <img src={"./image/foto.png"} width="80%" height="auto" /><br />
                </div>
                <div className="flex-item-right">
                    <h2 className='h2'>Anna Monica</h2>
                            <div className='kecil'>Quality Assurance & Front-end Developer enthusiast</div><br />
                            Introduce, my name is Anna Monica. I'm a graduated from Information Systems program study at Universitas Advent Indonesia
                    </div>
            </div>
        </>
    )
}

export default About;