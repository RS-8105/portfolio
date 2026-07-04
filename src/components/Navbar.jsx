import React from 'react'
import './Navbar.css'
import resume from '/RushikeshResume.pdf';

const Navbar = () => {
    const downloadFile = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    <div className='container'>
    <div className="container left">
        <span><a href="#home" className="links">Home</a></span>
        <span><a href="#about" className="links">About</a></span>
        <span><a href="#tech" className="links">Techstack</a></span>
        <span><a href="#contact" className="links">Contact</a></span>
        <span><a href="#projects" className="links">Projects</a></span>
    </div>
    <div className="container right">
        <button className='cv' onClick={downloadFile}>Download CV</button>
    </div>
    </div>
    <hr />
    </div>
  )
}

export default Navbar