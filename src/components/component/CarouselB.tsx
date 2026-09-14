import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import SlideContent from "@/components/component/SlideContent";

export default function CarouselB() {
  return (
    <Carousel className="my-carousel">
      <CarouselPrevious />
      <CarouselContent className="carousel-content">
        <CarouselItem className="carousel-item">
          <SlideContent
            title="Slide 1 Title"
            description="This is the description for slide 1."
            buttonText="Learn More"
            buttonLink="/slide-1"
          />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <SlideContent
            title="Slide 2 Title"
            description="This is the description for slide 2."
            buttonText="Learn More"
            buttonLink="/slide-2"
          />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <SlideContent
            title="Slide 3 Title"
            description="This is the description for slide 3."
            buttonText="Learn More"
            buttonLink="/slide-3"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}

;
