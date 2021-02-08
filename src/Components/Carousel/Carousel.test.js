import  {configure,mount,shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
import ProductCarousel from './ProductCarousel';
import {CarouselConstantData} from '../../Constants/CarouselConstantData'
describe('Check Carousel Component Props and Functions',()=>{
        let wrapper;
        test("Check Carousel Component props",()=>{
            wrapper=mount(<ProductCarousel images={CarouselConstantData} show={2}/>)
            expect(wrapper.props().show).toEqual(2)
            expect(wrapper.props().images).toEqual(CarouselConstantData)
        })

        test("Check",()=>{
            wrapper=mount(<ProductCarousel images={CarouselConstantData} show={2}/>);
            console.log(wrapper.find("button").first().simulate('click'));
        })
        
               
})