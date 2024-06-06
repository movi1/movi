import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css';

const About = () => {
    return (
        <div className="container-fluid about-background">
            <div className="container mt-5">
                <h1 className="text-center mb-4">About Me</h1>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Something about me....</h2>
                                <p className="card-text">
                                    I'm Moira, a passionate oil painter based in England, originally from Italy.
                                    Ever since I can remember, I've been captivated by how art can make us feel and dream.
                                </p>
                                <p className="card-text">
                                    My journey as an artist began at around 13/14 years old.
                                    Since then, I've been exploring various mediums and techniques to express my creativity.
                                    I always wanted to be an artist as a child, but there was a brief detour when I thought being a nurse would be fun (spoiler: it wasn't).
                                    Eventually, I found my way to art school, started painting on canvas with acrylics, and then I fell in love with oils.
                                </p>
                                <p className="card-text">
                                    Now, I paint to enjoy myself.
                                    I'm not a full-time artist—life has a funny way of getting in the way sometimes.
                                    But whenever I can steal a moment, you’ll find me with a brush in hand or making sourdough.
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="mb-3">Portfolio Showcase</h2>
                            <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

