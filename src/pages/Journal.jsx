import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking their best for years to come.",
      date: "July 2026",
      readTime: "4 min"
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal expression through thoughtful stacking.",
      date: "June 2026",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Behind the Design: The Golden Sphere",
      excerpt: "The story of our most-loved silhouette and the hands that shape it.",
      date: "May 2026",
      readTime: "5 min"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Stories & Reflections</p>
          <h1 className="section-title">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-[var(--color-border-light)] pb-12 last:border-0">
              <div className="flex items-center gap-3 text-xs tracking-widest text-[var(--color-text-muted)] mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="heading-serif text-2xl mb-3 hover:text-[var(--color-gold)] cursor-pointer">{post.title}</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl">{post.excerpt}</p>
              <a href="#read" className="inline-block mt-4 text-sm tracking-widest uppercase hover:text-[var(--color-gold)]">Read More →</a>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-[var(--color-text-muted)]">
          More stories coming soon.
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
