import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-accent mb-3">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-8">Quiet luxury, worn daily.</h1>
          <div className="space-y-6 text-sm md:text-base text-ink-secondary leading-relaxed">
            <p>
              Velmora Fine Jewelry was founded with a simple belief: jewelry should feel as good as it looks. We design demi-fine pieces that balance intention with accessibility, so you can build a collection that feels personal and timeless.
            </p>
            <p>
              Every design is created in-house, inspired by architecture, nature, and the quiet details that make a piece feel special. We use 18K gold-plated materials and hypoallergenic findings, because comfort and quality should never be optional.
            </p>
            <p>
              From our studio to your jewelry box, we hope Velmora becomes part of your everyday story.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
