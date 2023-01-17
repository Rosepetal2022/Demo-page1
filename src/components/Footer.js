import React from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
    return (

        <footer id="main-footer">
            <div>
                <div className="footer-title">
                    Some Barn Name
                </div>
                
                <br />
                {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;