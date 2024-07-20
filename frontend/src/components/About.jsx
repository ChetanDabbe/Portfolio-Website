import React, { useState, useEffect } from 'react';
import Experience from './Experience'; 
import Education from './Education'; 
import './About.css';

function About() {
    const [view, setView] = useState('default');

    const showExp = () => {
        setView('experience');
    };

    const showEdu = () => {
        setView('education');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1500) {
                setView('default');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="about-buttons">
                <button onClick={showExp}>Experience</button>
                <button onClick={showEdu}>Education</button>
            </div>
            
            {view === 'default' && (
                <p>
                    I am a proficient MERN stack web developer with a passion for crafting dynamic and responsive web applications. Leveraging MongoDB, Express.js, React, and Node.js, I specialize in delivering seamless user experiences and robust backend solutions. Alongside my development skills, I have a solid foundation in data structures and algorithms, enabling me to write efficient code and optimize performance. My expertise allows me to tackle complex problems creatively, ensuring scalable and high-quality software solutions tailored to meet diverse user needs.
                </p>
            )}
            
            {view === 'experience' && <Experience />}
            {view === 'education' && <Education />}
        </div>
    );
}

export default About;
