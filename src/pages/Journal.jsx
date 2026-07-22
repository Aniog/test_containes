import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From summer's bare skin to winter's layered textures, discover how to wear your favorite pieces year-round.",
      date: "JULY 15, 2026",
      readTime: "6 MIN READ",
      image: "F5EDE3"
    },
    {
      id: 2,
      title: "The Art of Gifting Jewelry",
      excerpt: "A guide to choosing meaningful pieces for the women in your life — and for yourself.",
      date: "JUNE 28, 2026",
      readTime: "8 MIN READ",
      image: "EDE4D7"
    },
    {
      id: 3,
      title: "Behind the Design: The Majestic Flora Nectar",
      excerpt: "The story of how a garden in bloom became our most beloved necklace.",
      date: "JUNE 12, 2026",
      readTime: "5 MIN READ",
      image: "D4B99A"
    },
    {
      id: 4,
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your jewelry looking beautiful for years to come.",
      date: "MAY 30, 2026",
      readTime: "4 MIN READ",
      image: "F5EDE3"
    },
    {
      id: 5,
      title: "The Quiet Luxury Movement",
      excerpt: "Why understated elegance is having a moment — and why it matters.",
      date: "MAY 18, 2026",
      readTime: "7 MIN READ",
      image: "EDE4D7"
    },
    {
      id: 6,
      title: "Meet the Maker: Our Artisans in Italy",
      excerpt: "A visit to the small family workshop where every Velmora piece begins.",
      date: "APRIL 25, 2026",
      readTime: "9 MIN READ",
      image: "D4B99A"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-[#F0EBE3] py-16">
        <div className="container text-center">
          <span className="text-xs tracking-[0.15em] text-[#6B635C] uppercase">Stories & Inspiration</span>
          <h1 className="mt-2">The Journal</h1>
          <p className="mt-4 text-[#6B635C] max-w-md mx-auto">
            Notes from the atelier, styling guides, and stories behind the pieces.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-[#F0EBE3] mb-6 overflow-hidden">
                  <img 
                    src={`https://placehold.co/800x500/${article.image}/1C1917?text=`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.08em] text-[#6B635C] mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D9D2C7]" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-serif text-xl mb-3 group-hover:text-[#B89778] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6B635C] leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-4 text-xs tracking-[0.1em] text-[#B89778] group-hover:underline">
                  READ MORE →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 text-center border-t border-[#D9D2C7] pt-16">
          <h2 className="font-serif text-2xl mb-3">Stay in the Know</h2>
          <p className="text-[#6B635C] mb-6 max-w-sm mx-auto">
            Receive our journal in your inbox, along with early access to new collections.
          </p>
          <Link to="/" className="btn btn-gold-outline inline-block">
            JOIN OUR NEWSLETTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
