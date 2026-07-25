import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Jewelry for Everyday Wear', date: 'July 18, 2026', excerpt: 'Layering, mixing metals, and building a capsule jewelry wardrobe.' },
    { id: 2, title: 'The Art of Gifting Fine Jewelry', date: 'July 10, 2026', excerpt: 'Thoughtful ideas for birthdays, anniversaries, and just because.' },
    { id: 3, title: 'Behind the Design: Golden Sphere Huggies', date: 'June 28, 2026', excerpt: 'From sketch to finished piece, the story behind our bestselling huggies.' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-subtitle mb-3">Journal</p>
            <h1 className="section-title">Stories & Inspiration</h1>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-brand-warm mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-brand-subtle mb-2">{post.date}</p>
                <h2 className="font-serif text-xl text-brand-text group-hover:text-brand-gold transition-colors mb-2">{post.title}</h2>
                <p className="text-sm text-brand-muted leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
