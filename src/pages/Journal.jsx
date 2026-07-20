import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking their best for years to come.",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal expression through thoughtful stacking.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose Brass",
      excerpt: "The material science behind our decision to work with solid brass and 18K gold plating.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl mb-12">
          <p className="uppercase tracking-[0.15em] text-xs text-velmora-gold-dark mb-2">Stories & Rituals</p>
          <h1 className="heading-serif text-5xl md:text-6xl tracking-[0.01em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="aspect-[16/10] bg-velmora-bg-alt overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <p className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-2">{article.date}</p>
              <h3 className="heading-serif text-2xl mb-3 tracking-[0.01em]">{article.title}</h3>
              <p className="text-velmora-muted leading-relaxed mb-4">{article.excerpt}</p>
              <span className="text-sm tracking-[0.08em] uppercase border-b border-velmora-dark pb-0.5 group-hover:text-velmora-gold-dark group-hover:border-velmora-gold-dark">
                Read More
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-velmora-muted">More stories coming soon.</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
