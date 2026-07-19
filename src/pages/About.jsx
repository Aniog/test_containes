import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <CartDrawer />
      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div className="overflow-hidden rounded-sm">
                <img
                  data-strk-img-id="about-page-img"
                  data-strk-img="[about-page-title] [about-page-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  alt="Velmora studio"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p id="about-page-subtitle" className="text-xs uppercase tracking-widest text-brand-accent mb-3">Our Story</p>
                <h1 id="about-page-title" className="font-serif text-3xl md:text-5xl text-brand-ink">Jewelry meant to be worn, not saved.</h1>
                <p className="mt-6 text-sm text-brand-muted leading-relaxed">
                  Velmora was founded on a simple belief: fine jewelry should feel accessible, personal, and effortlessly elegant. Every piece is designed in-house and crafted from 18K gold-plated materials chosen for their warmth, durability, and wearability.
                </p>
                <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                  From our studio to your jewelry box, we obsess over the details so you can enjoy them every day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
