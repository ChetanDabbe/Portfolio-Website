import React from 'react';
import './Footer.css';
import { GitHub, LinkedIn, LeetCode, Code } from '@mui/icons-material'; // Import Material Icons

const Footer = () => {
    return (
        <footer>
            <h1>Chetan Dabbe</h1>
            <div className="icons">
                <a
                    href="https://github.com/ChetanDabbe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <GitHub className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/chetan-dabbe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <LinkedIn className="icon" />
                </a>
                <a
                    href="https://leetcode.com/ChetanDabbe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                >
                    <LeetCode className="icon" />
                </a>
                <a
                    href="https://auth.geeksforgeeks.org/user/chetandabbe/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GeeksforGeeks"
                >
                    <Code className="icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
