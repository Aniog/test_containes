import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
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
