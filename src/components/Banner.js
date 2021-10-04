import React from 'react';
import styled from 'styled-components';
const Banner = ({ title, subTitle, children }) => {
    return (
        <BannerWrapper className="banner">
            <h1>{title}</h1>
            <div className="line"></div>
            <p>{subTitle}</p>
            {children}
        </BannerWrapper>
    );
}

const BannerWrapper = styled.div`


    a{
    font-family:var(--monteserrat);


    padding:.5rem 1rem;
    text-decoration:none;
    background:var(--primaryColor);
    color:var(--mainBlack);
    font-weight:400;
    font-size:1.3rem;
    transition:all 0.3s linear;

    &:hover{
        background:transparent;
        border:2px solid var(--primaryColor);
        color:var(--primaryColor);
    }


}
`


export default Banner;
