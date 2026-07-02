import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals for an effortless look.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Jewelry Edit: What We're Wearing This Summer",
      excerpt: "From beach days to city nights, our current rotation of lightweight favorites.",
      date: "June 5, 2026",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Gold: A Simple Guide",
      excerpt: "Tips to keep your demi-fine pieces looking new for years to come.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-base-50">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-xs tracking-[0.15em] text-gold-600">STORIES & INSPIRATION</span>
          <h1 className="font-serif text-5xl tracking-[0.02em] mt-3">The Journal</h1>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <div className="aspect-[16/10] overflow-hidden mb-5 bg-base-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="text-xs tracking-[0.1em] text-gold-600 mb-2">{article.date}</div>
                <h3 className="font-serif text-xl tracking-[0.01em] mb-2 leading-tight group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-base-700 leading-relaxed">{article.excerpt}</p>
                <Link to="#" className="inline-block mt-3 text-xs tracking-[0.1em] border-b border-base-900 pb-px hover:text-gold-600 hover:border-gold-600">
                  READ MORE →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-16 text-sm text-base-600">
            More stories coming soon. Follow us on Instagram for daily inspiration.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;
