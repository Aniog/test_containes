import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import { useState } from 'react';

const About = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="section-title">Our Story</h1>
          <div className="mt-6 space-y-4 text-sm text-brand-muted leading-relaxed">
            <p>
              Velmora was founded with a simple belief: fine jewelry should feel both timeless and accessible. We design each piece to be worn daily — refined enough for special occasions, comfortable enough for real life.
            </p>
            <p>
              Our materials are responsibly sourced, our finishes are durable, and our designs are made to age beautifully with you. From the first sketch to the final polish, every step is considered.
            </p>
            <p>
              Based in New York, we work with skilled artisans who share our commitment to quality and sustainability. We believe in quiet luxury — jewelry that speaks softly but leaves a lasting impression.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
