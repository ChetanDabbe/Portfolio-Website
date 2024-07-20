import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <div className="experience">
            <h2>Data Science Intern</h2>
            <p className="duration">Dec 2023 - Jan 2024</p>
            <p className="description">
                During my internship as a Data Science Intern, I worked on analyzing large datasets to extract valuable insights and develop predictive models. I was involved in various stages of the data science lifecycle, from data collection and cleaning to model deployment and evaluation. Additionally, I contributed to a real estate project where we developed a model to predict property prices based on various features.
            </p>
            <div className="technologies">
                <button className="tech-button">Python</button>
                <button className="tech-button">Machine Learning</button>
                <button className="tech-button">Pandas</button>
                <button className="tech-button">GitHub</button>
            </div>
        </div>
    );
}

export default Experience;
