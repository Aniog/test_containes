import React from 'react';
import Footer from '@/components/layout/footer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80" alt="About" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white">Our Story</h1>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl text-brand-ink">Quiet luxury, crafted to be treasured.</h2>
            <p className="mt-6 text-brand-muted leading-relaxed">Velmora was founded with a single idea: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating, with careful attention to detail, wearability, and longevity.</p>
            <p className="mt-4 text-brand-muted leading-relaxed">Every piece is made to be worn daily — and treasured forever. From our studio to your jewelry box, we prioritize quality materials, considered design, and a quiet luxury that doesn’t shout.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
