import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Without the Tangle",
      excerpt: "A guide to creating effortless, dimensional looks with multiple chains and pendants.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    {
      id: 2,
      title: "The Jewelry Edit: What to Wear This Summer",
      excerpt: "Lightweight pieces, warm metals, and the quiet luxury of everyday adornment.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    {
      id: 3,
      title: "Caring for Your Gold: A Simple Routine",
      excerpt: "Three steps to keep your demi-fine pieces looking new for years to come.",
      date: "May 10, 2026",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    {
      id: 4,
      title: "Gifting Jewelry: The Thoughtful Way",
      excerpt: "How to choose a piece that feels personal, not just pretty.",
      date: "April 22, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-bg-light">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Stories & Rituals</span>
            <h1 className="heading-serif text-5xl mt-3">The Journal</h1>
          </div>

          <div className="space-y-12">
            {articles.map((article, index) => (
              <article key={article.id} className="group grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="aspect-[16/10] bg-velmora-cream overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 text-xs text-velmora-taupe tracking-widest mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="heading-serif text-2xl md:text-3xl mb-3 group-hover:text-velmora-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-velmora-taupe leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-sm tracking-widest uppercase text-velmora-gold group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-velmora-border text-center">
            <p className="text-sm text-velmora-taupe">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;