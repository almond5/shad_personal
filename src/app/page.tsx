'use client';

import Chevron from '@/components/chevron';
import styles from '../styles/Home.module.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

export default function Home() {
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
        style={{
          display: 'flex', // Use Flexbox
          marginTop: '30vh',
          height: '50vh',
          textAlign: 'center',
          width: '100%', // Ensure the parent container takes full width
          justifyContent: 'center', // Center the child elements
        }}
      >
        <div
          style={{
            textAlign: 'left',
            maxWidth: '40vh',
            marginRight: '3vw',
            width: '50%',
          }}
        >
          <a className={styles.name}>Hello, I'm Adrian</a>
          <div style={{ marginTop: '0.5vh' }}>
            I am a software developer with a growth mindset who is always eager
            to learn more. Please do not hesitate to contact me with any
            inquiries or if you would just like to chat.{' '}
          </div>
          <button className={styles.buttonContainer}>Contact Me</button>
        </div>
        <div style={{ minWidth: '1vh' }}>
          <img src={'/me.png'} alt={'Adrian Hossen'} />
        </div>
      </div>
      <Chevron targetId={'target-section'} />
      <div
        id="target-section"
        style={{
          height: '80vh',
          textAlign: 'center',
          maxWidth: '100%',
          marginTop: '30vh',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {/* <Carousel
          style={{
            marginTop: '10vh',
            width: '40%',
            height: '60%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
          }}
          setApi={setApi}
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            <CarouselItem style={{ height: '50vh' }}></CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselNext>Next</CarouselNext>
        </Carousel> */}
        
      </div>
      {/* <Chevron targetId={'target-section-2'} />
      <div
        id="target-section-2"
        style={{
          display: 'flex', // Use Flexbox
          marginTop: '25vh',
          height: '70vh',
          textAlign: 'center',
          width: '100%', // Ensure the parent container takes full width
          justifyContent: 'center', // Center the child elements
        }}
      >
        My Experience
      </div> */}
      {/* <Chevron targetId={'target-section-3'} /> */}
    </>
  );
}
