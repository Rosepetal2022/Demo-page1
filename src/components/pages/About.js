import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'reactstrap';

const About = () => {

    return (
        <>
        <div className='main-about-div'>
        <h2 className='main-about-header'>Meet the Trainers</h2>
        <div>
           <div className="trainer-photo">
            <img    
                    src={require("../../assets/sale_horse/1.png")} 
                    alt=""
                    style={{width: '30%'}}
            />
           <div>
            <h4>Description of Trainer</h4>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
           </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default About;