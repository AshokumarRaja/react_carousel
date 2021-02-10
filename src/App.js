import ProductCarousel from './Components/Carousel/ProductCarousel'
import { CarouselConstantData } from './Constants/CarouselConstantData'
function App() {
  return (
    <>
      <ProductCarousel images={CarouselConstantData} cardCount={4} cardChange={2} transitionType="easeIn" sliderHeight={200}  />
    </>
  );
}

export default App;
