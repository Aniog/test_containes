import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Layer Necklaces",
      excerpt: "A guide to mixing lengths, textures, and metals for an effortless look.",
      date: "June 12, 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Everyday Gold",
      excerpt: "Why demi-fine jewelry belongs in your daily rotation, not just your jewelry box.",
      date: "May 28, 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Pieces",
      excerpt: "Simple rituals to keep your gold and crystals looking their best for years.",
      date: "May 3, 2026",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
  ];

  return (
    <div className="bg-bg pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="uppercase tracking-[0.15em] text-xs text-text-muted mb-1">Stories & Notes</div>
          <h1 className="section-title">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group grid md:grid-cols-5 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 aspect-[16/10] bg-bg-alt overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-3">
                <div className="text-xs text-text-light tracking-[0.1em] mb-2">{post.date}</div>
                <h2 className="text-2xl tracking-[-0.01em] mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-muted mb-4">{post.excerpt}</p>
                <span className="text-sm tracking-[0.05em] text-gold group-hover:underline">Read more →</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-text-muted">
          More stories coming soon. In the meantime, explore our <Link to="/shop" className="text-gold hover:underline">collection</Link>.
        </div>
      </div>
    </div>
  );
};

export default Journal;
