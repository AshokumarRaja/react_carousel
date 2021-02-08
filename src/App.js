import ProductCarousel from './Components/Carousel/ProductCarousel'
import { CarouselConstantData } from './Constants/CarouselConstantData'
function App() {
  return (
    <>
      <ProductCarousel images={CarouselConstantData} cardCount={2} imageSize={200} transitionType="linear" />
    </>
  );
}

export default App;
