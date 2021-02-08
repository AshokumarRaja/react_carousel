import ProductCarousel from './Components/Carousel/ProductCarousel'
import { CarouselConstantData } from './Constants/CarouselConstantData'
function App() {
  return (
    <>
      <ProductCarousel images={CarouselConstantData} cardCount={4} imageSize={200} transitionType="easeIn" />
    </>
  );
}

export default App;
