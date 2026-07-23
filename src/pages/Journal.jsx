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
      excerpt: "A guide to creating effortless, dimensional looks with multiple chains.",
      date: "July 12, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "The Quiet Power of Everyday Gold",
      excerpt: "Why the pieces you wear daily become the ones that matter most.",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Caring for Your Jewelry: A Simple Ritual",
      excerpt: "Three habits that keep your pieces looking beautiful for years.",
      date: "June 10, 2026",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      readTime: "5 min",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-[#6B645C] mb-3">Stories & Rituals</p>
          <h1 className="font-serif text-5xl tracking-[0.05em]">The Journal</h1>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <div className="aspect-[16/10] bg-[#F2EDE6] overflow-hidden mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <p className="text-xs tracking-[0.1em] text-[#6B645C] mb-2">
                  {article.date} · {article.readTime}
                </p>
                <h3 className="font-serif text-2xl tracking-[0.02em] mb-3 leading-tight group-hover:text-[#B89778] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#6B645C] text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-xs uppercase tracking-[0.1em] border-b border-[#2C2824] pb-0.5 group-hover:text-[#B89778] group-hover:border-[#B89778]">
                  Read More
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm text-[#6B645C]">More stories coming soon.</p>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Journal;