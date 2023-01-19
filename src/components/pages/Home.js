import React from 'react';
import { Card } from 'reactstrap';


const Home = () => {
    return(
        <>
        <div className="main-home-div">
        <div>
            <div>  
            <img className="cover-photo"
                    src={require("../../assets/coverPhoto.png")} 
                    alt="" 
            />
             </div>
        </div>
        <div className="barn-description d-flex justify-content-between">
            <div className="barn-description-text">
                <h2>Your Business Description</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="barn-description-image">
            <Card className="description-card">
            <img className="cover-photo"
                    src={require("../../assets/jumpingHorse.png")} 
                    alt="" 
            />
            </Card>
            </div>
        </div>
        <div className="second-barn-description d-flex justify-content-between">
        <div className="second-barn-description-image">
            <Card className="description-card">
            <img className="cover-photo"
                    src={require("../../assets/otherJumpingHorse.png")} 
                    alt="" 
            />
            </Card>
            </div>
            <div className="barn-description-text">
                <h2>Another Description</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
        </div>
        </div>
        
        </>
    );

}

export default Home;