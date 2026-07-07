import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: 'How to Style Huggie Earrings for Every Occasion',
    excerpt: 'From boardroom to bar, learn how to make huggies the most versatile piece in your collection.',
    date: 'June 28, 2026',
  },
  {
    id: 2,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the effortless stacked look with our guide to necklace layering.',
    date: 'June 15, 2026',
  },
  {
    id: 3,
    title: 'Caring for Your Gold Plated Jewelry',
    excerpt: 'Simple steps to keep your Velmora pieces looking as brilliant as the day you received them.',
    date: 'May 30, 2026',
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen page-transition">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-wide text-center">
          Journal
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-14" />

        <div className="space-y-10">
          {journalPosts.map((post) => (
            <article key={post.id} className="border-b border-brand-sand pb-10">
              <p className="font-sans text-xs tracking-wide text-brand-muted uppercase mb-2">
                {post.date}
              </p>
              <h2 className="font-serif text-xl md:text-2xl text-brand-charcoal tracking-wide mb-3">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-brand-muted leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="font-sans text-xs tracking-extra-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors cursor-pointer link-underline pb-0.5">
                Read More
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/shop"
            className="font-sans text-xs tracking-extra-wide uppercase px-10 py-4 bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors duration-200 inline-block btn-lift"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
