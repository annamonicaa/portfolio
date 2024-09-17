import '../App.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const toggle = () => {
        var x = document.getElementById('navbar');
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar"
        }
        
    }

    return (
        <>
            <div className='navbar' id='navbar'>
                <Link to="/portfolio/">Home</Link>
                <Link to="/portfolio//about">About</Link>
                <Link to="/portfolio/projek">Project</Link>
                <Link to="/portfolio/tools">Tools</Link>
                <a href='javascript:void(0)' onClick={toggle} className='icon'><i className='fa fa-bars'></i></a>
            </div>
            
        </>
    )
}

export default NavigationBar;