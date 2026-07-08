import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import { useState } from 'react';

const Journal = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="section-title">Journal</h1>
        <p className="mt-4 text-sm text-brand-muted max-w-2xl">
          Stories, styling ideas, and behind-the-scenes looks at how Velmora pieces are made.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-brand-warm">
              <img
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80"
                alt="Journal"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-serif text-lg">How to Style Gold Huggies for Everyday Wear</h3>
            <p className="mt-2 text-sm text-brand-muted">Simple pairing ideas that feel intentional, not overdone.</p>
          </article>
          <article className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-brand-warm">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
                alt="Journal"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-serif text-lg">The Story Behind Our 18K Gold Plating Process</h3>
            <p className="mt-2 text-sm text-brand-muted">Why we chose this finish, and how to keep it looking new.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
