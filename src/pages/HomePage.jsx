import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCReelSection from '../components/home/UGCReelSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import products from '../data/products';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersSection products={products} />
      <UGCReelSection />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
