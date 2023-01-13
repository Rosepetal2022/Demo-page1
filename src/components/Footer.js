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
                12345 Some Road Portland, OR 97013 * 555-555-5555 * someemail@someemail.com
                <br />
                {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;