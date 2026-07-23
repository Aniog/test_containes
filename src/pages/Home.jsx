import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCSection from '../components/UGCSection';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
