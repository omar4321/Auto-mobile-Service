import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
             <img style={{ width: '100%' }} src="https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-61/main/src/images/404.png" alt="" />
            <Link to="/"><button>Go Back</button>
            </Link> 
        </div>
    );
};

export default Notfound;