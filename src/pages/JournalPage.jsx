import React from 'react';
import { Link } from 'react-router-dom';

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'The art of necklace layering is all about balance, length, and personal style. Here are our top tips for creating the perfect stack.',
      date: 'July 10, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Plating Last',
      excerpt: 'With the right care, your Velmora pieces will stay beautiful for years. Learn our expert tips for maintaining that fresh-from-the-box glow.',
      date: 'July 5, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for every celebration. Our curated guide makes gifting effortless.',
      date: 'June 28, 2026',
      category: 'Gift Guide',
    },
  ];

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 lg:py-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-foreground mb-3">
            The Journal
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            Styling tips, care guides, and stories from the Velmora world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-secondary rounded-sm mb-4 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="font-sans text-[10px] tracking-widest uppercase text-primary mb-2 block">
                {post.category}
              </span>
              <h2 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <span className="font-sans text-xs text-muted-foreground">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JournalPage;
