'use client';
import React from 'react';
import AboutUs from '@/components/landingPage/AboutUs';
import HeroSection from '@/components/landingPage/HeroSection';
import InstalltionGuide from '@/components/landingPage/InstalltionGuide';
import Feature from '@/components/landingPage/Feature';
import Discord from '@/components/landingPage/Discord';
import NewsLetter from '@/components/landingPage/NewsLetter';
import Footer from '@/components/landingPage/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <InstalltionGuide />
      <Feature />
      <Discord />
      <NewsLetter />
      <Footer/>
    </>
  );
}
