import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Jewelry for Work',
      excerpt: 'Five easy ways to bring quiet luxury into your 9-to-5 wardrobe.',
      image: 'https://placehold.co/900x600/f5f0eb/8c7b6c?text=Journal+1&font=playfair-display',
    },
    {
      id: 2,
      title: 'The Art of Gifting Jewelry',
      excerpt: 'A thoughtful guide to choosing pieces that feel personal and lasting.',
      image: 'https://placehold.co/900x600/f5f0eb/8c7b6c?text=Journal+2&font=playfair-display',
    },
    {
      id: 3,
      title: 'Caring for Your Demi-Fine Pieces',
      excerpt: 'Simple habits to keep your jewelry looking new season after season.',
      image: 'https://placehold.co/900x600/f5f0eb/8c7b6c?text=Journal+3&font=playfair-display',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-brand-accent">Journal</p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-brand-ink sm:text-5xl">Stories & Guides</h1>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-2xl bg-brand-surface shadow-sm">
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-xl font-medium text-brand-ink">{post.title}</h2>
                <p className="mt-2 text-sm text-brand-muted">{post.excerpt}</p>
                <span className="mt-3 inline-block text-xs uppercase tracking-widest text-brand-accent">Read more</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
