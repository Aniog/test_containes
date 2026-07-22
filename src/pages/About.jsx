import React from 'react';
import BrandStory from '@/components/home/BrandStory';
import Footer from '@/components/home/Footer';

const About = () => {
  return (
    <div className="bg-brand-cream">
      <div className="pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6 lg:px-8">
          <p className="section-subtitle">Our Story</p>
          <h1 className="section-title mt-2">Jewelry Made with Intention</h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-brand-ink/80">
            Velmora was born from a belief that fine jewelry should feel accessible, intentional, and deeply personal. Every piece is designed in-house and crafted with care, using premium materials that are meant to be worn every day — not saved for special occasions.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-ink/80">
            From our family-owned workshop to your jewelry box, we keep the process transparent, the design timeless, and the quality uncompromising. We believe in quiet luxury: pieces that speak softly but leave a lasting impression.
          </p>
        </div>
      </div>
      <BrandStory />
      <Footer />
    </div>
  );
};

export default About;
