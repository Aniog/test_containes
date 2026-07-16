import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Build a Timeless Jewelry Collection",
      excerpt: "Start with pieces you'll wear every day. Invest in quality over quantity. Let your jewelry tell your story.",
      date: "July 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "Mix lengths, textures, and tones. The secret is balance — let each piece breathe while creating a cohesive look.",
      date: "June 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple habits that keep your pieces looking new for years. What to do (and what to avoid) with plated jewelry.",
      date: "May 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Guide",
      excerpt: "Choosing the right piece for someone you love. From first earrings to milestone necklaces — our thoughts on meaningful gifts.",
      date: "April 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      <div className="container pt-24 pb-16">
        <div className="max-w-2xl mb-12">
          <p className="uppercase text-xs tracking-[0.15em] text-velmora-text-muted mb-2">Field Notes</p>
          <h1 className="font-serif text-5xl tracking-[-0.01em]">The Journal</h1>
          <p className="mt-4 text-velmora-text-muted">Stories, care guides, and thoughts on living with beautiful things.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] bg-velmora-bg-alt overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-velmora-text-muted mb-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl mb-3 group-hover:text-velmora-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-velmora-text-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-velmora-text-muted">More stories coming soon.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;
