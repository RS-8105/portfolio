import React from 'react';
import './Techstack.css';
import Reactimg from '../assets/react-logo.png';
import Javaimg from '../assets/js.png'
import Cssimg from '../assets/css.png'
import Htmlimg from '../assets/html.png'
import cppimg from '../assets/c++.png'
import tailwindImg from '../assets/tailwind.png'
import springBoot from '../assets/spring-boot.png'
import java from '../assets/java.png'
import mySQL from '../assets/mySql.png'
import mongo from '../assets/mongoDB.png'


const Techstack = () => {
  return (
    <div className="main-container">
      <p>My Tech Stack</p>

      <div className="tech-container">
        <div className="item">
            <img src={cppimg} alt="" width = "40" />C++</div>
        <div className="item">
            <img src={java} alt="" width = "40" />Java</div>
        <div className="item">
            <img src={Cssimg} alt="" width = "40"/>CSS</div>
        <div className="item">
            <img src={Javaimg} alt="" width="40" />JavaScript</div>
        <div className="item">
            <img src={Reactimg} alt="React" width="40" />ReactJs</div>
        <div className="item">
            <img src={tailwindImg} alt="" width = "40"/>Tailwind</div>
        <div className="item">
            <img src={springBoot} alt="" width = "40"/>Spring Boot</div>
        <div className="item">
            <img src={mySQL} alt="" width = "40"/>MySQL</div>
        <div className="item">
            <img src={mongo} alt="" width = "40"/>MongoDB</div>
      </div>
    </div>
  );
};

export default Techstack;
