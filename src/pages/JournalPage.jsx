import React from 'react';
import { Link } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
    date: 'June 15, 2026',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
    excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=500&fit=crop',
    date: 'June 8, 2026',
    category: 'Care',
  },
  {
    id: 3,
    title: 'Gift Guide: Jewelry for Every Occasion',
    excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=500&fit=crop',
    date: 'May 28, 2026',
    category: 'Gifts',
  },
];

const JournalPage = () => {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">The Journal</h1>
          <p className="text-velmora-500 text-sm">Stories, styling tips, and behind the scenes</p>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map(post => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">{post.category}</p>
              <h2 className="text-xl font-serif mb-2 group-hover:text-gold-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-velmora-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
              <p className="text-xs text-velmora-400">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
