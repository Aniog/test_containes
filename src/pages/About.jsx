import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-[#3d3229] tracking-wide">Our Story</h1>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="aspect-[4/5] bg-[#f5f0e8] rounded-sm" />
            <div className="space-y-6 text-[#8c7b6b] leading-relaxed">
              <p>Velmora Fine Jewelry was founded with a clear purpose: to create jewelry that feels luxurious, looks intentional, and fits real life.</p>
              <p>We design every piece in-house, choosing materials that balance beauty and durability. Our 18K gold-plated finishes are chosen for warmth and wearability, and every design is tested for comfort and longevity.</p>
              <p>From our studio to your jewelry box, we believe in quiet luxury—pieces that speak softly but leave a lasting impression.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
