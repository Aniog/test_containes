import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-subtitle mb-3">Our Story</p>
            <h1 className="section-title mb-6">Jewelry with soul, made for real life.</h1>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>Velmora was founded with a singular vision: to create demi-fine jewelry that feels as extraordinary as it looks. We believe luxury should be accessible, and that the best pieces are the ones you never take off.</p>
              <p>Every Velmora design begins in our California studio, where we source the finest materials and work with skilled artisans to bring our vision to life. From the first sketch to the final polish, we obsess over the details so you can simply enjoy the beauty.</p>
              <p>Our pieces are crafted from 18K gold-plated brass, chosen for its warmth, durability, and luminous finish. We design for the modern woman—someone who values quiet luxury, intentional style, and pieces that tell a story.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
