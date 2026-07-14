import React from 'react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From boardroom to ballroom, discover the art of layering and mixing metals.",
      date: "July 10, 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design tells a story. Learn about the inspiration behind our most beloved collections.",
      date: "July 3, 2026",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple steps to ensure your pieces remain beautiful for years to come.",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    }
  ];

  return (
    <div className="pt-20 max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">STORIES & INSPIRATION</p>
        <h1 className="font-serif text-6xl tracking-[0.05em]">The Journal</h1>
      </div>

      <div className="space-y-16">
        {articles.map((article, idx) => (
          <article key={idx} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[16/10] bg-[#F4F1EB] overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">{article.date}</p>
              <h2 className="font-serif text-3xl tracking-[0.03em] mb-4">{article.title}</h2>
              <p className="text-[#6B665F] mb-6 leading-relaxed">{article.excerpt}</p>
              <button className="text-sm tracking-[0.1em] hover:text-[#8B7355] transition-colors">READ MORE →</button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-[#E5E0D8] text-center">
        <p className="text-[#6B665F] mb-4">Want more inspiration delivered to your inbox?</p>
        <a href="#newsletter" className="text-sm tracking-[0.1em] text-[#8B7355]">Subscribe to our newsletter</a>
      </div>
    </div>
  );
};

export default Journal;