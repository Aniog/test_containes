import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Style Gold Jewelry for Every Occasion',
      excerpt: 'From boardroom to brunch, learn how to layer and style your Velmora pieces for any moment.',
      date: 'June 28, 2026',
    },
    {
      id: 2,
      title: 'The Guide to Caring for Gold-Plated Jewelry',
      excerpt: 'Keep your pieces looking brand new with our simple care tips and best practices.',
      date: 'June 15, 2026',
    },
    {
      id: 3,
      title: 'Behind the Design: The Amber Lace Collection',
      excerpt: 'Discover the antique lacework inspiration behind one of our most beloved designs.',
      date: 'May 30, 2026',
    },
  ];

  return (
    <div className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-wide mb-4">
            Journal
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-brand-sand pb-8">
              <p className="text-xs text-brand-muted font-sans tracking-extra-wide uppercase mb-2">{post.date}</p>
              <h2 className="font-serif text-xl md:text-2xl text-brand-charcoal tracking-wide mb-3 hover:text-brand-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-sm text-brand-muted font-sans leading-relaxed mb-3">{post.excerpt}</p>
              <span className="text-xs text-brand-charcoal font-sans tracking-extra-wide uppercase cursor-pointer hover:text-brand-gold transition-colors underline">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
