import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-widest text-brand-600 mb-4">Our Story</p>
              <h1 className="font-display text-4xl md:text-5xl text-ink-950 mb-6">Quiet luxury, made real.</h1>
              <p className="text-sm md:text-base text-ink-600 leading-relaxed">
                Velmora Fine Jewelry was founded with a single belief: jewelry should feel personal, intentional, and effortless. We design demi-fine pieces in warm gold tones that layer beautifully, gift elegantly, and hold up to daily wear.
              </p>
              <p className="mt-4 text-sm md:text-base text-ink-600 leading-relaxed">
                Every piece is crafted with care, finished by hand, and made to be treasured for years to come.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
