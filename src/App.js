import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Element } from 'react-scroll';
import TextLoop from "react-text-loop";
import {Helmet} from "react-helmet";
import Obfuscate from "react-obfuscate";
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Lalezar|Muli&display=swap" rel="stylesheet" />

      </Helmet>
      <div className="header">
        <h1 className="header">Bryan Mira can&nbsp;
          <TextLoop interval={1000}>
            <span>React</span>
            <span>Javascript</span>
            <span>Java</span>
            <span>MongoDB</span>
          </TextLoop>
        </h1>
      </div>

      <Navbar />
      

      <Element name="about" className="element" >
        <div className="element">
        <div className="content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Bryan Mira, a computer scientist. Expertise in full stack web development. Experience in Node.JS, 
            React, MongoDB, Machine Learning through Tensorflow, HTML5, CSS3, MySQL, Bootstrap, Java. Client-oriented and team player.

          </p>

        </div>
        </div>
      </Element>

      <Element name="projects" className="element" >
        <div className="element">
        <div className="content">

          <h2>Projects</h2>
          <ul>
          <li>Review Website – Review website built with React and Express where users can register and write reviews for movies. In-Development. Knowledge used: HTML5, CSS3, PHP, JavaScript. https://github.com/bryanmira/ReviewAsia</li>
          <li>Ball Run! (artist) – Group project for Game Studies class. Platformer game made using Godot Engine, ball rolls and the player must jump to platforms and avoid falling off. Knowledge used: Photoshop, Godot.</li>
          <li>Mancala – Group project, implemented the game Mancala using Java. Knowledge used: Java - GUI, Object Oriented Design - MVC Pattern.</li>
          <li>Handwriting Recognition Machine Learning Group Project - Used React framework in the frontend and Flask framework in the backend. Trained models to recognize handwriting. User can write a letter or digit, and the web app will be able to predict the intended letter or digit.  https://github.com/KunHCS/161HCR</li>
          </ul>
        </div>
        </div>
      </Element>


      <Element name="school" className="element" >
        <div className="element">
        <div className="content">
          <h2>School</h2>

          <p>Bachelor of Science, Computer Science May 2019 San Jose State University • GPA: 3.52</p>

        </div>
        </div>
      </Element>


      <Element name="history" className="element" >
        <div className="element">
        <div className="content">
          <h2>Work History</h2>

        </div>
        </div>
      </Element>

      <Element name="connect" className="element" >
        <div className="element">
        <div className="content">
          <h2>Connect</h2>

          Email:{" "}
            <Obfuscate
              email="bryan.mira@yahoo.com"
              headers={{
                subject: "Let's work!",
                body: "Hello! Interested in working with you!"
              }}
            />

        </div>
        </div>
      </Element>
      

      <Footer />
    </div>

  );
}

export default App;
