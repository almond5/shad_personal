import React from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <div
        id="projects"
        style={{
          alignSelf: 'start',
          marginLeft: '20vw',
          marginTop: '20vh',
          height: '5vh',
        }}
      ></div>
      <Carousel
        style={{
          width: '80vw',
          alignSelf: 'center',
          borderRadius: '10px',
          justifyContent: 'center',
          alignContent: 'center',
          marginLeft: '10vw',
          marginBottom: '20vh',
        }}
        setApi={setApi}
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {/* <CarouselItem className="basis-1/2" style={{height: '50vh'}}>SafeLINC</CarouselItem>
          <CarouselItem className="basis-1/2">...</CarouselItem>
          <CarouselItem className="basis-1/2">...</CarouselItem> */}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </>
  );
}
