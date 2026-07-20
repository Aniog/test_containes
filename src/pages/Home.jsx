import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import ReelsRow from '@/components/home/ReelsRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import EditorialStrip from '@/components/home/EditorialStrip';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <ReelsRow />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
        <FeaturedCollection />
        <EditorialStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
