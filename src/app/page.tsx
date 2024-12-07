'use client';

import React from 'react';
import Chevron from '@/components/chevron';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Work from '@/components/work';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

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
      <Footer />
    </>
  );
}
