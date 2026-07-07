import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import CartDrawer from '../components/ui/CartDrawer';

const Home = () => {
  return (
    <div className="min-h-screen bg-velmora-bg text-velmora-text">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <UGCReel />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Home;
