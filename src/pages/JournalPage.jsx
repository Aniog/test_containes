import React from 'react';
import { Link } from 'react-router-dom';

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'The art of layering starts with understanding length, texture, and balance.',
      date: 'July 15, 2026',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Last',
      excerpt: 'Simple habits that keep your demi-fine jewelry looking brand new for years.',
      date: 'July 8, 2026',
      category: 'Care Tips',
    },
    {
      id: 3,
      title: 'Behind the Design: The Flora Collection',
      excerpt: 'Inspired by botanical gardens, our newest collection celebrates nature\'s geometry.',
      date: 'June 28, 2026',
      category: 'Design',
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-3">Journal</h1>
          <p className="text-muted-foreground font-light">Stories, guides, and inspiration</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[#E8E2D9] rounded-sm overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9] flex items-center justify-center">
                  <span className="text-muted-foreground text-xs tracking-wider">Article</span>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-primary">{post.category}</span>
              <h2 className="font-serif text-xl mt-2 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JournalPage;
