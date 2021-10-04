import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Featuredrooms from '../components/FeaturedRooms'
const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subTitle="Deluxe Rooms Starting At $299">

                    <Link to="/rooms">OUR ROOMS</Link>
                </Banner>
            </Hero>
            <Services />
            <Featuredrooms />
        </>
    )
}

export default Home
