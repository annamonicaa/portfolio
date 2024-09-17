import '../App.css';
import TypeIt from 'typeit-react';

const Home = () => {

    return (
        <>
            <div className='intro'>
            <TypeIt className="welcome"
                    
                    getBeforeInit={(instance) => {
                            instance.type('Welcome!').pause(800).delete(8).pause(300).type("I'm").pause(400).type(" Anna Monica");
                            return instance;   
                        
                    }} 
                    options={{
                        loop: true, 
                        deleteSpeed: 100
                    }} 
            /><br />
            <div className='btn'>
            <a target='_blank' href='https://drive.google.com/file/d/1ufU6PTL8tFiqI-V1e2Y34d-Tb_XFFFvW/view?usp=sharing'>Check out my CV!</a>
            </div>
            </div>
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <img src="/image/foto.png" width="80%" height="auto" /><br />
                </div>
                <div className="flex-item-right">
                    <h2 className='h2'>Anna Monica</h2>
                            <div className='kecil'>Quality Assurance & Front-end Developer enthusiast</div><br />
                            Introduce, my name is Anna Monica. I'm a graduated from Information Systems program study at Universitas Advent Indonesia
                            <span><a href="/about">...more about me</a></span>
                    </div>
            </div>
        </>
    )
}

export default Home;