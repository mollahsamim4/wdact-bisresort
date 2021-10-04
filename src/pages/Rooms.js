import React from 'react';
import { useParams } from 'react-router';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {

    return (
        <>
            <Hero Hero="roomsHero">
                <Banner title="OUR ROOMS">
                    <Link to="/">Return Home</Link>
                </Banner>
            </Hero>

            <RoomContainer />


        </>
    );
}


export default Rooms;
