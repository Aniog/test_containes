import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From sunlit summer layers to winter's richer tones, here's how we wear our favorite pieces year-round.",
      date: "June 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80"
    },
    {
      id: 2,
      title: "The Art of Gifting Jewelry",
      excerpt: "A guide to choosing meaningful pieces for the women in your life—without needing to know their ring size.",
      date: "May 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
    },
    {
      id: 3,
      title: "Behind the Design: The Flora Nectar Necklace",
      excerpt: "The story of how a vintage brooch and a walk through a spring garden became one of our most loved pieces.",
      date: "May 3, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80"
    },
    {
      id: 4,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking as beautiful on year five as they did on day one.",
      date: "April 19, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-bg text-velmora-text">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-20">
        <div className="mb-12">
          <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-1">Stories & Rituals</div>
          <h1 className="font-serif text-5xl tracking-[-0.01em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] bg-velmora-surface-alt overflow-hidden mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-velmora-text-light tracking-widest mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[-0.01em] mb-3 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-[15px] text-velmora-text-muted leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-sm uppercase tracking-[0.08em] text-velmora-gold">Read →</div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border text-center">
          <p className="text-sm text-velmora-text-muted">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;
