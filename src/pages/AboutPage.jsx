import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-charcoal"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-4">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Our Story
          </h1>
          <p className="text-white/80 text-sm md:text-base tracking-wider uppercase">
            Quiet luxury, everyday elegance
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
              Jewelry with soul, designed for real life
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
              Our pieces are designed to be worn daily — to elevate your everyday, to mark your milestones, 
              and to become part of your story.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Founded in 2020, we set out to create demi-fine jewelry that bridges the gap between 
              costume accessories and luxury fine jewelry. Each piece is crafted with 18K gold plating 
              over hypoallergenic brass, ensuring lasting beauty and comfort for sensitive skin.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              We work with skilled artisans who share our commitment to quality and ethical practices. 
              From our studio in New York, we oversee every step of the process — from initial sketch 
              to final polish — to ensure each piece meets our exacting standards.
            </p>
            <p className="text-muted leading-relaxed">
              Today, Velmora is worn by thousands of women across the globe who appreciate 
              understated elegance and thoughtful design. We're honored to be part of your daily story.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-14 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl text-gold">Q</span>
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">Quality</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every piece is crafted with premium materials and meticulous attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl text-gold">E</span>
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">Ethics</h3>
              <p className="text-sm text-muted leading-relaxed">
                We partner with artisans who share our commitment to fair labor and sustainable practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-2xl text-gold">A</span>
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">Accessibility</h3>
              <p className="text-sm text-muted leading-relaxed">
                Luxury shouldn't break the bank. We offer premium quality at accessible prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Discover the Collection
          </h2>
          <p className="text-muted text-sm md:text-base mb-10 max-w-md mx-auto">
            Explore our full range of demi-fine jewelry, designed for the modern woman.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-white text-xs tracking-[0.25em] uppercase hover:bg-charcoal-light transition-colors"
          >
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
