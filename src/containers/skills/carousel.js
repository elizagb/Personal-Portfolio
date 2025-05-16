import { useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyleContext from "../../contexts/StyleContext";
import './Carousel.scss';

import ExampleCarouselImage from "../../assets/images/techTogether.jpeg";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const { isDark } = useContext(StyleContext);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        classname="carousel">
      <Carousel.Item interval={6000} classname="carousel-inner">
        <img
          className="carousel-image"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption className={isDark ? "dark-carousel-caption" : "carousel-caption"}>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={6000}>
        <img
          className="carousel-image"
          src={ExampleCarouselImage}
          alt="Second slide"
        />
        <Carousel.Caption className={isDark ? "dark-carousel-caption" : "carousel-caption"}>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={6000}>
        <img
          className="carousel-image"
          src={ExampleCarouselImage}
          alt="Third slide"
        />
        <Carousel.Caption className={isDark ? "dark-carousel-caption" : "carousel-caption"}>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
