import React, { useState, useEffect } from 'react'
import { StyledDotsConatiner, StyledDot } from './Styles';
import PropTypes from 'prop-types'
/** 
 * Dots Function  from  Progress bars
 * @param props.dotsCount - Number of Dots in the Carousel
 * @param props.activeIndex - Active Card Index
 * @returns {JSX}   - Returns response in jsx
 */
const Dots = (props) => {
    let { dotsCount, activeIndex } = props;
    const [dotsArray, setDotsArray] = useState([]);
    dotsCount = Math.floor(dotsCount);
    useEffect(() => {
        setDotsArray([]);
        for (let i = 0; i < dotsCount; i++) {
            setDotsArray(prevState => [...prevState, <StyledDot key={i} active={activeIndex == i} />])
        }
    }, [activeIndex])

    return (
        <StyledDotsConatiner>
            {dotsArray}
        </StyledDotsConatiner>
    )
}

export default Dots;

Dots.propTyps = {
    dotsCount: PropTypes.number.isRequired,
    activeIndex: PropTypes.number.isRequired
}