'use client';

import React from 'react';
import Chevron from '@/components/chevron';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Work from '@/components/work';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Chevron targetId={'about'} />
      <About />
      <Chevron targetId={'work'} />
      <Work />
      <Chevron targetId={'projects'} />
      <Projects />
    </>
  );
}
