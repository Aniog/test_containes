import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="container-editorial py-16 md:py-24">
        <h1 className="section-title">Our Story</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
            alt="Velmora story"
            className="h-72 md:h-[420px] w-full object-cover rounded-sm"
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm text-brand-muted leading-relaxed">
              Velmora was founded with a simple idea: fine jewelry should feel accessible,
              intentional, and enduring. We design demi-fine pieces in warm 18K gold plating,
              using small-batch production and responsibly sourced materials.
            </p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              Every Velmora piece is designed in California and made to be worn daily—
              for boardrooms, brunches, and everything in between.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
