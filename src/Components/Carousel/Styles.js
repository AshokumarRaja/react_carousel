import styled from 'styled-components'
import { Transitions } from '../../Constants/TransitionConstant';
export const Slider = styled.div`
overflow: hidden;
position: relative;
transform: translate3d(0, 0, 0);
margin-top: 13px;
height:${props=>props.sliderHeight}px;
`
export const SliderContent = styled.div`

position: absolute;
top: 0;
left: 0;
width: 100%;
transition: ${props=>Transitions[props.transitionType]};
max-height:100%;
display: flex;
justify-content: flex-start;

&.prev {
transform: translateX(-${props => 100 / props.cardChange}%);
opacity: 0;
}
&.active {
  transform: translateX(0);
}
&.next {
  transform: translateX(${props => 100 / props.cardChange}%);
  opacity:0;
  }
}
  
`
export const Slide = styled.div`
position: relative;
cursor: pointer;
margin-right: 10px;
max-width: 33.33%;
max-height: 194px;
`
export const SlideImg = styled.img`
width: 100%;
height: 100%;
`
export const Carousel = styled.div`
margin-left:100px;
width:50%;
background-color:white;
text-align:center;
`





