import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import Reels from '@/components/home/Reels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <Reels />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default Home;
