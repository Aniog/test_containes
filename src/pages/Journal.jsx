import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Build a Jewelry Capsule Wardrobe",
      excerpt: "Three pieces. Endless combinations. The art of choosing jewelry that works with everything you already own.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Names",
      excerpt: "From 'Vivid Aura' to 'Royal Heirloom' — the stories and inspirations behind each collection name.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Caring for Gold-Plated Jewelry",
      excerpt: "Simple rituals to keep your pieces looking as beautiful as the day you received them.",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      readTime: "4 min",
    },
    {
      id: 4,
      title: "Why We Gift Jewelry",
      excerpt: "A reflection on the pieces we pass down, the moments we mark, and the women who wear them.",
      date: "April 22, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      readTime: "6 min",
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-xs tracking-[0.15em] text-velmora-gold uppercase">Stories & Reflections</span>
          <h1 className="heading-serif text-5xl mt-3">The Journal</h1>
          <p className="mt-4 text-velmora-muted">Notes on craft, beauty, and the pieces we keep close.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-velmora-ivory overflow-hidden mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-velmora-muted tracking-widest mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="heading-serif text-2xl mb-3 group-hover:text-velmora-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-velmora-muted leading-relaxed text-sm">{article.excerpt}</p>
                <span className="inline-block mt-4 text-xs tracking-[0.1em] text-velmora-gold group-hover:underline">READ MORE →</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-sm text-velmora-muted">More stories coming soon.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;
