import React from 'react';

const Hero = ({ children, Hero }) => {

    return (
        <header className={Hero}>{children}</header>
    );
}

Hero.defaultProps = {
    Hero: "defaultHero"
}

export default Hero;
