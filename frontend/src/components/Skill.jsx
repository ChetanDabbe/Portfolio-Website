import React from 'react';
import './Skills.css';

const skillsList = [
    'C++',
    'JavaScript',
    'HTML & CSS',
    'React',
    'Node.js',
    'MongoDB',
    'SQL',
    'Git & GitHub',
];

function Skill() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills-list">
                {skillsList.map((skill, index) => (
                    <div key={index} className="skill-box">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;
