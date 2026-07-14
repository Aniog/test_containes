import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-brand-accent">Our Story</p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-brand-ink sm:text-5xl">Quiet luxury, worn daily.</h1>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://placehold.co/900x600/f5f0eb/8c7b6c?text=Velmora+Craftsmanship&font=playfair-display"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm leading-relaxed text-brand-muted">
              Velmora was founded with a simple belief: fine jewelry should feel both timeless and attainable.
              We design every piece in-house, drawing inspiration from modern architecture, botanical forms,
              and the quiet confidence of everyday elegance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Our materials are chosen with care — recycled 18K gold-plated brass, hypoallergenic findings,
              and ethically sourced crystals. Each design is finished by hand so it feels considered,
              not manufactured.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              From our studio to your jewelry box, we hope Velmora becomes part of your story.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
