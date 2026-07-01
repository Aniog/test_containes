import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Gold',
      excerpt: 'How to mix textures, lengths, and tones for a look that feels personal and considered.',
      date: 'June 12, 2026',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      readTime: '6 min',
    },
    {
      id: 2,
      title: 'Why We Choose 18K Gold Plating',
      excerpt: 'A closer look at the materials that make our pieces feel like heirlooms from the first wear.',
      date: 'May 28, 2026',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      readTime: '4 min',
    },
    {
      id: 3,
      title: 'Gifting Jewelry That Lasts',
      excerpt: 'Thoughts on choosing pieces that become part of someone\'s story — not just another object.',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
      readTime: '5 min',
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-velmora-muted mb-2">THE ATELIER</div>
          <h1 className="font-serif text-5xl tracking-[0.02em]">Journal</h1>
          <p className="mt-4 text-velmora-muted max-w-md mx-auto">Stories, care guides, and quiet reflections on the pieces we make.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-velmora-cream overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-velmora-muted tracking-[0.1em] mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.02em] mb-3 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed text-velmora-charcoal/80">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-velmora-muted">More stories coming soon.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;