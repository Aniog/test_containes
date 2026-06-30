import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 'how-to-layer-necklaces',
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our guide to mixing lengths, metals, and styles.',
    date: '2026-06-15',
    readTime: '4 min read',
    image: 'https://placehold.co/800x500/F3EDE4/C9A96E?text=Layering+necklaces',
  },
  {
    id: 'gold-jewelry-care',
    title: 'The Ultimate Guide to Gold Jewelry Care',
    excerpt: 'Keep your favorite pieces looking brilliant for years with these simple care tips.',
    date: '2026-05-28',
    readTime: '5 min read',
    image: 'https://placehold.co/800x500/F3EDE4/C9A96E?text=Jewelry+care',
  },
  {
    id: 'gift-guide-2026',
    title: '2026 Gift Guide: Jewelry She Will Love',
    excerpt: 'From everyday essentials to statement pieces, find the perfect gift for every occasion.',
    date: '2026-05-10',
    readTime: '6 min read',
    image: 'https://placehold.co/800x500/F3EDE4/C9A96E?text=Gift+guide',
  },
];

export default function Journal() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <nav className="mb-8 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">Journal</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-wide text-brand-ink">Journal</h1>
          <div className="mt-6 w-16 h-px bg-brand-gold" />
          <p className="mt-6 text-brand-charcoal leading-relaxed max-w-2xl">
            Stories, style guides, and inspiration for the modern jewelry lover.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-brand-sand">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3 text-xs text-brand-muted">
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl font-medium tracking-wide text-brand-ink group-hover:text-brand-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-brand-charcoal leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-brand-gold group-hover:text-brand-gold-dark transition-colors">
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
