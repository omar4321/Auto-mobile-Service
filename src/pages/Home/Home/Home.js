import React from 'react';
import Fotter from '../../Footer/Fotter';

import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
         
       <Banner/>
      <Services></Services>
        <Exparts></Exparts>
        <Fotter></Fotter>
        </div>
    );
};

export default Home;