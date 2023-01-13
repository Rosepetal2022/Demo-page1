import React from 'react';

const Home = () => {
    return(
        <>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="barn-description-image">
            <img className="cover-photo"
                    src={require("../../assets/jumpingHorse.png")} 
                    alt="" 
            />
            </div>
        </div>
        <div className="second-barn-description d-flex justify-content-between">
        <div className="second-barn-description-image">
            <img className="cover-photo"
                    src={require("../../assets/otherJumpingHorse.png")} 
                    alt="" 
            />
            </div>
            <div className="barn-description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
        </div>
        </>
    );

}

export default Home;