import React from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
          marginLeft: '20vw',
          marginTop: '20vh',
          height: '5vh',
        }}
      ></div>
      <div className="mx-auto" style={{ maxWidth: '70vw' }}>
        <Carousel
          className="mx-auto"
          style={{
            alignSelf: 'center',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: '50vh',
            width: '75rem',
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
            <CarouselItem
              className="basis-1/3"
              style={{
                height: '30vh',
              }}
            >
              <Card
                style={{
                  height: '30vh',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card>
            </CarouselItem>
            <CarouselItem
              className="basis-1/3"
              style={{
                height: '30vh',
              }}
            >
              <Card
                style={{
                  height: '30vh',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card>
            </CarouselItem>
            <CarouselItem
              className="basis-1/3"
              style={{
                height: '30vh',
              }}
            >
              <Card
                style={{
                  height: '30vh',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </>
  );
}
