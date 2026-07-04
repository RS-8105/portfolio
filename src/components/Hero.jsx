import React, { useState, useEffect } from "react";
import "./Hero.css";
import rushiimg from '../assets/Img2.jpeg'
const Hero = () => {
  const [text, setText] = useState("Frontend");
  const words = ["Frontend", "Fullstack", "Software"];
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index+1) % words.length;
      setText(words[index]);
    }, 1500);
    return() =>{
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <div className="intro">
        <p className="introText">Hello! I'm Rushikesh Somani</p>
        <div className="designation">
          <p className="fullstack">{text}</p>
          <p className="developer">Developer</p>
        </div>
        <p className="quote">"I'm a developer learning to build clean frontends and reliable full-stack applications."</p>
        <br />
        <br />
        <img src={rushiimg} alt="Rushi Image" className="rushi-img"/>
      </div>

    </div>
  );
};

export default Hero;
