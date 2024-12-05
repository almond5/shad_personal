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
          marginTop: '35vh',
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
          alignSelf: 'start',
          marginLeft: '20vw',
          marginTop: '20vh',
          height: '5vh',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          marginLeft: '30vw',
          maxWidth: '40%',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignSelf: 'center',
          marginTop: '5vh',
          textAlign: 'left',
          marginBottom: '20vh',
        }}
      >
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Microsoft | Current</time>
              <div className="text-lg font-black">Software Engineer</div>
              Working with the Microsoft AI Team.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Microsoft | Summer 2024</time>
              <div className="text-lg font-black">Software Engineer Intern</div>
              Created an email template validator tool enabling for quick
              validation, development, and testing of templates. Implemented
              test email sending orchestration using the Durable Task Framework
              to simulate production send outs. Created a dynamic email code
              editor and renderer enabling for the development and testing of
              dynamic emails.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">UCF | Fall 2023</time>
              <div className="text-lg font-black">
                Undergrad Teaching Assistant
              </div>
              Assisted a professor with their Introduction to Programming in C
              course. Held office hours to provide assistance to the students of
              the course. Collaborated with fellow teaching assistants to grade
              programming assignments and exams.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div className="timeline-start mb-10">
                <time className="font-mono italic">Micrsoft | Summer 2023</time>
                <div className="text-lg font-black">
                  Software Engineer Intern
                </div>
                Created a schedule of experiments that collected analytical data
                for Bing Feeds machine learning model. Developed a dynamic
                debugging dashboard that displayed Bing Feeds research metrics
                as time series data. Devised a mechanism that up-sampled
                underrepresented features within Bing Feeds offline training
                data. Executed test flights to determine whether the mechanism
                improved the performance of the model.
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Microsoft | Summer 2022</time>
              <div className="text-lg font-black">Explore Intern</div>
              Collaborated with two interns to create a product proposal that
              detailed the impact/changes to Bing. Collected user feedback and
              metrics to determine the scenarios and features for the sports
              experience. Created a dynamic sports experience that provided
              schedule-based and outcome-based content.
            </div>
          </li>
        </ul>
      </div>

      {/* <Carousel
          style={{
            width: '45vw',
            alignSelf: 'center',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
            marginTop: '10vh',
          }}
          setApi={setApi}
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            <CarouselItem style={{ height: '50vh' }}></CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>a</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
            <CarouselItem style={{ height: '50vh' }}>...</CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel> */}
    </>
  );
}
