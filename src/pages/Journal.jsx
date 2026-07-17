import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Everyday",
      excerpt: "The art of layering without overwhelming — our guide to building a signature look.",
      date: "JULY 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 2,
      title: "The Meaning Behind Our Heirloom Set",
      excerpt: "Why we believe the most beautiful gifts are the ones that tell a story.",
      date: "JUNE 2026",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Pieces",
      excerpt: "Simple rituals to keep your gold jewelry looking luminous for years.",
      date: "MAY 2026",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.15em] text-velmora-accent mb-2">STORIES & INSPIRATION</p>
          <h1 className="serif text-5xl tracking-[0.02em]">The Journal</h1>
        </div>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">{post.date}</p>
                  <h2 className="serif text-3xl leading-tight mb-4 tracking-[0.01em]">{post.title}</h2>
                  <p className="text-velmora-text-muted mb-6">{post.excerpt}</p>
                  <a href="#read" className="text-sm underline hover:text-velmora-accent">READ MORE →</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/shop" className="btn btn-outline">SHOP THE COLLECTION</Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
