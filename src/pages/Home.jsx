import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import ReelsRow from '@/components/home/ReelsRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import InstagramFeed from '@/components/home/InstagramFeed';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <ReelsRow />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <FeaturedCollection />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
