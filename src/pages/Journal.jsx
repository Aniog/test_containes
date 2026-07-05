import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'How to Care for Your Gold Jewelry',
      excerpt: 'Simple rituals to keep your pieces looking as beautiful as the day you received them.',
      date: 'June 12, 2026',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    },
    {
      id: 2,
      title: 'The Art of Layering Necklaces',
      excerpt: 'A guide to creating dimension and personal expression through thoughtful layering.',
      date: 'May 28, 2026',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      id: 3,
      title: 'Why We Choose 18K Gold Plating',
      excerpt: 'The difference between fine and demi-fine, and why we believe in this middle path.',
      date: 'May 3, 2026',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    },
    {
      id: 4,
      title: 'Gifting Jewelry: A Modern Guide',
      excerpt: 'How to choose a piece that will be worn and loved for years — not just admired once.',
      date: 'April 15, 2026',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">THE VELMORA JOURNAL</span>
          <h1 className="font-serif text-5xl tracking-[0.02em] mt-2">Stories & Rituals</h1>
          <p className="mt-4 text-[#6B6058] max-w-md mx-auto">Notes on craft, care, and the quiet luxury of everyday adornment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[16/10] bg-[#F1EDE6] overflow-hidden mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#6B6058] mb-2">
                  <span>{article.date}</span>
                  <span className="text-[#D4C9B8]">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-[0.02em] group-hover:text-[#8B7355] transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 text-[#6B6058] leading-relaxed text-sm">{article.excerpt}</p>
                <span className="inline-block mt-4 text-xs tracking-[0.1em] text-[#8B7355] group-hover:text-[#2C2522] transition-colors">
                  READ MORE →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B6058]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
          <Link to="/shop" className="btn btn-outline mt-6 inline-block text-sm">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
