import styled from 'styled-components'
import {Transitions} from '../../Constants/TransitionConstant';

const DEFAULT_SIZE = 250;

export const Slider = styled.div`
  position: relative;
  height: 100vh;
  width:${props => props.imageSize ? (props.imageSize * props.imageCount) :
    (DEFAULT_SIZE * props.imageCount)}px;
  margin:auto;
  overflow:hidden;  
`
export const SliderContent = styled.div`
  transform: translateX(-${props =>
    props.translate ? (props.translate) : 0}px);
  transition: ${props=>props.transition ? Transitions[props.transition] : "all .5s ease"};
  height: 100vh;
  width: ${props => props.width}px;
  display: flex;
  align-items:center;
`
export const Slide = styled.div`
  height: ${props => props.imageSize+50}px;
  width: fit-content;
`
export const SlideImg = styled.img`
  height: ${props => props.imageSize}px;
  width: ${props => props.imageSize}px;
  padding:0 5px;
  box-sizing:border-box;
`
export const Carousel = styled.div`
  width:100%;
  height:100%;
  display:flex;
  margin:0 auto;
  align-items:center;

`
export const Description = styled.p`
  font-weight:bold;
  margin-left:6px;
  margin-top:5px;
`




