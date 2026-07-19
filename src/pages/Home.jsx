import React from 'react';
import Hero from '@/components/home/Hero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-1000">
            <Hero />
            <Bestsellers />
            <CategoryTiles />
            <UGCReel />
            <BrandStory />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;
