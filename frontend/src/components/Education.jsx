import React from 'react';
import './Education.css';

function Education() {
    return (
        <div className="education">
            <div className="education-entry">
                <div className="education-marker"></div>
                <div className="education-details">
                    <h2>Bachelor of Computer Engineering</h2>
                    <p>K. K Wagh Institute of Engineering Education and Research, Nashik</p>
                    <p>Average SGPA: 9.05</p>
                </div>
            </div>
            <div className="education-entry">
                <div className="education-marker"></div>
                <div className="education-details">
                    <h2>H.S.C</h2>
                    <p>Sane Guruji School, Yawal</p>
                    <p>Percentage: 91.17</p>
                </div>
            </div>
            <div className="education-entry">
                <div className="education-marker"></div>
                <div className="education-details">
                    <h2>S.S.C</h2>
                    <p>K. Narkhede Junior College, Bhusawal</p>
                    <p>Percentage: 86.60</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
