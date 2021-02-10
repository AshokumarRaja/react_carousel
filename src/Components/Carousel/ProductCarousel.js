import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Slide, Slider, SliderContent, Carousel, SlideImg } from './Styles';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import Dots from '../Dots/Dots'
/** 
 * ProductCarousel function gives Carousel Slider
 * @param props.sliderHeight - Set the Height of Carousel
 * @param props.images - Array of images
 * @param props.cardCount - Number of cards Show by Default
 * @param props.cardChange - Number of Card Changes by Default
 * @param props.transitionType - Set The Transition Style of Carousel
 * @returns {JSX}   - Returns response in jsx
 */
const ProductCarousel = (props) => {
    const { images, cardCount, transitionType, cardChange,sliderHeight } = props;
    const [currentIndex, setCurrentIndex] = useState(0); //Specify the Current Index Of Card
    const changeIndex = (index) => {    
        setCurrentIndex(prevstate => prevstate + index);
    }
    const items = images.slice(currentIndex, currentIndex + cardCount);
    return (
        images.length > 1 && (
            <Carousel>
                <Slider sliderHeight={sliderHeight}>
                    {images.map((image, index) => {
                        const classString = currentIndex + cardChange <= index ? "next" : currentIndex > index ? "prev" : "active";
                        return (
                            <SliderContent key={index} className={`SliderCarousel  ${classString}`} cardChange={cardChange} transitionType={transitionType}>
                                {items.map((item) => {
                                    return (
                                        <Slide className={`SlideImg`} >
                                            <SlideImg key={index} src={item.src}></SlideImg>
                                        </Slide>
                                    )
                                })}
                            </SliderContent>
                        )
                    })}
                    <Button className="left" onClick={changeIndex} children={<FaAngleLeft />} disabled={currentIndex == 0 ? true : false} index={-cardChange} />
                    <Button className="right" onClick={changeIndex} children={<FaAngleRight />} disabled={currentIndex + cardChange < images.length  ? false : true} index={cardChange} />
                </Slider>
                <Dots dotsCount={(images.length / cardChange)} activeIndex={currentIndex / cardChange} />
            </Carousel>
        )
    )
}

export default ProductCarousel;

ProductCarousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            desc: PropTypes.any
        })
    ),
    cardChange: PropTypes.number.isRequired,
    cardCount: PropTypes.number.isRequired,
    transitionType: PropTypes.string,
    sliderHeight:PropTypes.number
}