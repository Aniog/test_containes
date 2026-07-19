import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Care for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking their best for years.",
      date: "July 12, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "A guide to creating dimension and personal expression through thoughtful layering.",
      date: "July 5, 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Behind the Design: The Golden Sphere Huggies",
      excerpt: "The story of our most-loved silhouette and why it became an instant classic.",
      date: "June 28, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    },
    {
      id: 4,
      title: "Gifting Jewelry: A Thoughtful Guide",
      excerpt: "How to choose a piece that will be worn and cherished, not just admired.",
      date: "June 20, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium tracking-[-0.02em] mb-3">The Journal</h1>
          <p className="text-[#6B635C]">Stories, care guides, and behind-the-scenes from Velmora.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-[#6B635C] tracking-[0.05em] mb-2">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl font-medium tracking-[-0.01em] mb-2 group-hover:text-[#B8976A] transition-colors">
                {article.title}
              </h2>
              <p className="text-[#6B635C] text-sm leading-relaxed">{article.excerpt}</p>
              <span className="inline-block mt-3 text-xs tracking-[0.1em] border-b border-[#1A1816] pb-px group-hover:border-[#B8976A] group-hover:text-[#B8976A]">
                READ MORE
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn btn-outline">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
