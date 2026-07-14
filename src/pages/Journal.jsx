import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const posts = [
    {
      id: 'how-to-layer',
      title: 'How to Layer Necklaces Like a Stylist',
      excerpt: 'The art of mixing lengths, textures, and metals for an effortless, personal look.',
      date: 'July 2026',
      readTime: '6 min',
      category: 'Styling',
    },
    {
      id: 'gold-care',
      title: 'Caring for Your Gold Jewelry',
      excerpt: 'Simple rituals to keep your pieces looking as beautiful as the day you received them.',
      date: 'June 2026',
      readTime: '4 min',
      category: 'Care',
    },
    {
      id: 'gifting-guide',
      title: 'The Thoughtful Gifting Guide',
      excerpt: 'How to choose a piece that feels personal, not just pretty.',
      date: 'May 2026',
      readTime: '7 min',
      category: 'Gifting',
    },
    {
      id: 'behind-the-studio',
      title: 'A Day in the Studio',
      excerpt: 'From sketch to finished piece: the quiet process behind every Velmora design.',
      date: 'April 2026',
      readTime: '5 min',
      category: 'Behind the Scenes',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-12">
          <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold mb-2">Stories & Rituals</div>
          <h1 className="text-4xl md:text-5xl">The Journal</h1>
        </div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={post.id} className="group border-b border-velmora-border pb-12 last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-8 gap-y-2 mb-3">
                <h2 className="text-2xl md:text-3xl group-hover:text-velmora-gold transition-colors">
                  <Link to={`/journal/${post.id}`}>{post.title}</Link>
                </h2>
                <div className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted whitespace-nowrap">
                  {post.date} · {post.readTime}
                </div>
              </div>
              <p className="text-velmora-text-muted mb-4 max-w-2xl">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs">
                <span className="uppercase tracking-[0.1em] text-velmora-gold">{post.category}</span>
                <Link 
                  to={`/journal/${post.id}`} 
                  className="uppercase tracking-[0.1em] hover:text-velmora-gold"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border text-center text-sm text-velmora-text-muted">
          More stories coming soon. Follow us on Instagram for daily inspiration.
        </div>
      </div>
    </div>
  );
};

export default Journal;
