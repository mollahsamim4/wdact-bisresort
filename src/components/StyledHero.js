import React from 'react';
import styled from 'styled-components';
import defaultImg from "../images/room-1.jpeg"
const Styledhero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Styledhero;
