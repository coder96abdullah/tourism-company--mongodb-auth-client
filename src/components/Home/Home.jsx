import React from 'react';
import Slider from './Slider';
import Cards from './Cards/Cards';
import DisplaySection from './DisplaySection';
import Demo from './Demo';
import Towns from './Towns';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <DisplaySection></DisplaySection>
            <Cards></Cards>
            <Towns></Towns>
            
        </div>
    );
};

export default Home;