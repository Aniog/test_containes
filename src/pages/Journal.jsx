import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Huggies for Everyday Wear', date: 'June 28, 2026', readTime: '4 min read' },
    { id: 2, title: 'The Art of Layering Necklaces', date: 'June 15, 2026', readTime: '5 min read' },
    { id: 3, title: 'Why Demi-Fine Jewelry is the New Everyday Luxury', date: 'May 30, 2026', readTime: '6 min read' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="pt-24">
        <section className="container-narrow py-16 md:py-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-2">Journal</p>
          <h1 className="section-title mb-10">Stories & Inspiration</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-brand-line bg-brand-surface p-5 transition-shadow hover:shadow-md">
                <div className="aspect-[4/3] rounded-xl bg-brand-warm mb-4" />
                <p className="text-xs text-brand-muted mb-2">{post.date} · {post.readTime}</p>
                <h3 className="font-serif text-xl text-brand-ink">{post.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
