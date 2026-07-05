import React from 'react';

const Journal = () => {
  const articles = [
    {
      title: "The Art of Layering Necklaces",
      excerpt: "How to create dimension and interest with multiple chains and pendants.",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
    },
    {
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your demi-fine pieces looking their best for years.",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
    },
    {
      title: "Jewelry as Heirloom",
      excerpt: "Why investing in quality pieces creates lasting memories across generations.",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <div className="text-center mb-16">
        <span className="text-[#B8976D] text-xs tracking-[0.2em]">STORIES</span>
        <h1 className="heading-serif text-6xl mt-4">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-[#F5F1EA] mb-6 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-xs tracking-[0.15em] text-[#B8976D] mb-2">{article.date}</div>
            <h3 className="heading-serif text-2xl mb-3 group-hover:text-[#B8976D] transition-colors">{article.title}</h3>
            <p className="text-[#6B665F] text-sm leading-relaxed">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;