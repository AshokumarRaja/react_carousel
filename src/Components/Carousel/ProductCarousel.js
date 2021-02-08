import React, { useState,useRef,useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Slide, Slider, SliderContent, Carousel,Description,SlideImg } from './Styles';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import Dots from '../Dots/Dots'
/** 
 * ProductCarousel function from 
 * @param props.images - Array of images
 * @param props.cardCount - Number of cards Show by Default
 * @param props.imageSize - Set The Card Width and Height
 * @param props.transitionType - Set The Transition Style of Carousel
 * @returns {JSX}   - Returns response in jsx
 */
const ProductCarousel = (props) => {
    const { images, cardCount, imageSize,transitionType } = props;
    const [currentIndex, setCurrentIndex] = useState(0); //Specify the Current Index Of Card
    const [translate, setTranslate] = useState(0);
    let cardsArray;
    const changeIndex = (index) => {
        setCurrentIndex(prevstate => prevstate + index);
        setTranslate((currentIndex + index) * imageSize);
    }
    images.length > 1 && (
        cardsArray = images.map((image, index) => {
            return (
                <Slide imageSize={imageSize}>
                    <SlideImg key={index} src={image.src} imageSize={imageSize}></SlideImg>
                    <Description>{image.desc}</Description>
                </Slide>
            )
        })
    )
    return (
        <Carousel>
            <Slider imageSize={imageSize} imageCount={cardCount}>
                <SliderContent translate={translate} width={imageSize * images.length} imageCount={currentIndex} transition={transitionType}>
                    {cardsArray}
                </SliderContent>
            </Slider>
            <Button className="left" onClick={changeIndex} children={<FaAngleLeft />} disabled={currentIndex == 0 ? true : false} index={-cardCount} />
            <Button className="right" onClick={changeIndex} children={<FaAngleRight />} disabled={currentIndex + cardCount == images.length ? true : false} index={cardCount} />
            <Dots dotsCount={(images.length/cardCount)} activeIndex={currentIndex/cardCount}/>
        </Carousel>
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
    imageSize: PropTypes.number,
    cardCount: PropTypes.number.isRequired
}