import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "How to Care for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your pieces looking beautiful for years.",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 2,
    title: "The Art of Layering Necklaces",
    excerpt: "A guide to creating dimension and harmony with your favorite chains.",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "The difference between fine and demi-fine, and why it matters.",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
];

const Journal = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">Stories & Rituals</span>
        <h1 className="font-serif text-4xl mt-2">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-[16/10] bg-[var(--velmora-ivory)] overflow-hidden mb-5">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <time className="text-xs tracking-widest text-[var(--velmora-taupe)]">{post.date}</time>
            <h2 className="font-serif text-2xl mt-2 mb-3 leading-tight">{post.title}</h2>
            <p className="text-sm text-[var(--velmora-taupe)] mb-4">{post.excerpt}</p>
            <span className="text-xs tracking-widest text-[var(--velmora-gold)] group-hover:underline">READ MORE →</span>
          </article>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-[var(--velmora-border)] text-center text-sm text-[var(--velmora-taupe)]">
        More stories coming soon. In the meantime, explore our <Link to="/shop" className="text-[var(--velmora-gold)] hover:underline">collection</Link>.
      </div>
    </div>
  );
};

export default Journal;
