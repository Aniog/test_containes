import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Stylist',
      excerpt: 'The art of mixing lengths, textures, and tones for an effortless look.',
      date: 'June 12, 2026',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      readTime: '6 min',
    },
    {
      id: 2,
      title: 'The Meaning Behind Our Favorite Stones',
      excerpt: 'From rose quartz to amethyst — the quiet power of crystal jewelry.',
      date: 'May 28, 2026',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      readTime: '8 min',
    },
    {
      id: 3,
      title: 'Caring for Gold-Plated Jewelry',
      excerpt: 'Simple rituals to keep your pieces looking beautiful for years.',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      readTime: '4 min',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-20 max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#B8976A]">STORIES & INSPIRATION</span>
          <h1 className="heading-lg mt-2">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] overflow-hidden bg-[#E5DFD6] mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#6B645E] tracking-wider mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="heading-md mb-2 group-hover:text-[#B8976A] transition-colors">
                  {article.title}
                </h2>
                <p className="text-[#6B645E]">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-[#6B645E]">More stories coming soon.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;