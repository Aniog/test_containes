import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Everyday",
      excerpt: "Three ways to wear your favorite pieces without overthinking it.",
      date: "JUNE 2026",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "Finding the right balance between delicate and bold.",
      date: "MAY 2026",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "A closer look at the materials that make our pieces last.",
      date: "APRIL 2026",
      image: "https://images.unsplash.com/photo-1602751584552-e17149ad2f83?w=800&q=80",
    },
  ];

  return (
    <div className="pt-16">
      <div className="container section">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs text-muted mb-2">STORIES & INSPIRATION</div>
          <h1 style={{ fontSize: '2.25rem' }}>The Journal</h1>
          <p className="body-text mt-4">
            Notes on craft, style, and the quiet moments that jewelry becomes part of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-[#F1EDE6] overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-xs tracking-[2px] text-muted mb-2">{post.date}</div>
              <h3 className="mb-2 group-hover:text-accent transition-colors" style={{ fontSize: '1.125rem' }}>
                {post.title}
              </h3>
              <p className="body-text text-sm">{post.excerpt}</p>
              <span className="inline-block mt-3 text-xs tracking-widest underline">READ MORE</span>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center py-12">
        <p className="text-sm text-muted">More stories coming soon.</p>
      </div>

      <footer className="footer">
        <div className="container text-center text-xs text-muted">
          © {new Date().getFullYear()} Velmora Fine Jewelry
        </div>
      </footer>
    </div>
  );
};

export default Journal;
