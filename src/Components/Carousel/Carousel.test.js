import  {configure,mount,shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductCarousel from './ProductCarousel';
import {CarouselConstantData} from '../../Constants/CarouselConstantData';

configure({adapter: new Adapter()});

describe('Check Carousel Component Functions',()=>{
        let wrapper;
        
        test("Check",()=>{
            wrapper=mount(<ProductCarousel images={CarouselConstantData} imageSize={200} transitionType="linear" cardCount={2}/>);
            wrapper.find("button").first().simulate('click');
            
        })
        
               
})