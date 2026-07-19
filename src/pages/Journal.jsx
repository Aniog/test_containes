import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces Like a Stylist",
    excerpt: "The art of mixing lengths, textures, and metals for an effortlessly curated look.",
    date: "July 12, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    category: "Styling"
  },
  {
    id: 2,
    title: "The Meaning Behind Our Crystal Choices",
    excerpt: "Why we select each stone with intention — and what they represent.",
    date: "July 5, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    category: "Behind the Design"
  },
  {
    id: 3,
    title: "Caring for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your pieces looking as beautiful as the day you received them.",
    date: "June 28, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
    category: "Care"
  },
  {
    id: 4,
    title: "Gifting Jewelry: A Guide",
    excerpt: "How to choose a meaningful piece for someone you love — and how to present it.",
    date: "June 20, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Gifting"
  }
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Stories & Insights</span>
          <h1 className="font-serif-custom text-5xl mt-3">The Journal</h1>
          <p className="text-velmora-muted mt-4 max-w-md mx-auto">
            Thoughts on craftsmanship, styling, and the quiet beauty of everyday adornment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-velmora-surface overflow-hidden mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-velmora-muted mb-2">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-serif-custom text-2xl leading-tight mb-3 group-hover:text-velmora-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-velmora-muted leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm tracking-[0.05em] border-b border-velmora-ink pb-px group-hover:text-velmora-gold group-hover:border-velmora-gold transition-colors">
                Read More →
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-velmora-taupe">
          <p className="text-sm text-velmora-muted mb-4">Want more stories delivered to your inbox?</p>
          <Link to="/" className="btn btn-outline">Subscribe to Our Newsletter</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
