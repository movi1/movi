import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="bio-section">
                <h2>Biography</h2>
                <p>I'm Moira, a passionate oil painter based in England. Ever since I can remember, I've been captivated by the power of art to evoke emotions and stimulate the imagination.</p>
                <p>My journey as an artist began at around 13/14 years old. Since then, I've been exploring various mediums and techniques to express my creativity.</p>
            </div>
            <div className="portfolio-section">
                <h2>Portfolio Showcase</h2>
                <Link to="/portfolio">View Portfolio</Link>
            </div>
   
        </div>
    );
}

export default About;
