import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const Journal = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="container-editorial py-16 md:py-24">
        <h1 className="section-title">Journal</h1>
        <p className="mt-3 text-sm text-brand-muted">Stories, styling ideas, and behind the design.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <article key={item} className="rounded-sm border border-brand-line bg-white p-4">
              <div className="h-56 w-full rounded-sm bg-brand-warm" />
              <h3 className="mt-4 font-serif text-lg text-brand-ink">Journal Story {item}</h3>
              <p className="mt-2 text-sm text-brand-muted">A short preview of the story content.</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
