import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import Toast from '../components/ui/Toast';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking beautiful for years to come.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal meaning through thoughtful stacking.",
      date: "May 28, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose Small Batches",
      excerpt: "Behind our decision to make less, and why it matters for quality and the planet.",
      date: "May 10, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    },
    {
      id: 4,
      title: "The Women Who Inspire Us",
      excerpt: "Portraits of the customers, artists, and friends who shape Velmora's world.",
      date: "April 22, 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
          <p className="text-xs tracking-[0.15em] text-text-muted mb-2">STORIES & REFLECTIONS</p>
          <h1 className="serif text-5xl tracking-tight">The Journal</h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[16/10] bg-surface-warm overflow-hidden mb-5">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-xs text-text-muted tracking-widest mb-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="serif text-2xl tracking-tight mb-3 group-hover:text-gold transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">{article.excerpt}</p>
                    <span className="inline-block mt-4 text-xs tracking-[0.1em] border-b border-current pb-px">
                      READ MORE
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Teaser */}
        <div className="border-t border-border py-16 text-center px-6">
          <p className="serif text-2xl tracking-tight mb-2">Want more stories in your inbox?</p>
          <p className="text-sm text-text-muted mb-6">Join our journal list for seasonal essays and behind-the-scenes notes.</p>
          <Link to="/" className="btn btn-outline">Subscribe to the Journal</Link>
        </div>
      </div>

      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  );
};

export default Journal;