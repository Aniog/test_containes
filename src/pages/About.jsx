import React from 'react';
import { Link } from 'react-router-dom';
import BrandStory from '@/components/home/BrandStory';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="section-title mb-6">Our Story</h1>
          <p className="text-brand-muted leading-relaxed text-lg">
            Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and designed for real life.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
                alt="Velmora craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-brand-ink">Crafted with Intention</h2>
              <p className="text-brand-muted leading-relaxed">
                Every Velmora piece begins as a sketch in our California studio. We work with skilled artisans who share our commitment to quality and sustainability, using responsibly sourced materials and time-honored techniques.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Our demi-fine approach means we use 18K gold-plated brass and genuine crystals—luxury materials at an accessible price point, without compromising on durability or beauty.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-warm flex items-center justify-center">
                <span className="font-serif text-2xl text-brand-accent">01</span>
              </div>
              <h3 className="font-serif text-xl text-brand-ink">Design</h3>
              <p className="text-sm text-brand-muted">Each piece is designed in-house with a focus on timeless elegance and modern wearability.</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-warm flex items-center justify-center">
                <span className="font-serif text-2xl text-brand-accent">02</span>
              </div>
              <h3 className="font-serif text-xl text-brand-ink">Craft</h3>
              <p className="text-sm text-brand-muted">Skilled artisans bring our designs to life using premium materials and ethical practices.</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-warm flex items-center justify-center">
                <span className="font-serif text-2xl text-brand-accent">03</span>
              </div>
              <h3 className="font-serif text-xl text-brand-ink">Deliver</h3>
              <p className="text-sm text-brand-muted">Carefully packaged and shipped worldwide, ready to be treasured from the moment it arrives.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
