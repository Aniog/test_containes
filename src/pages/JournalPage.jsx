import React from 'react';

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
      date: 'July 15, 2026',
      category: 'Styling',
    },
    {
      id: 2,
      title: 'The Care Guide: Making Your Gold Last',
      excerpt: 'Simple tips to keep your 18K gold plated jewelry looking brand new for years to come.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=500&fit=crop',
      date: 'July 8, 2026',
      category: 'Care',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop',
      date: 'June 28, 2026',
      category: 'Gifts',
    },
  ];

  return (
    <main className="pt-20 sm:pt-24">
      <div className="bg-[#f3f0eb] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Stories & Tips</p>
          <h1 className="velmora-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.1em]">
            The Journal
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#b8860b]">
                  {post.category}
                </span>
                <span className="text-xs text-[#9a9490]">{post.date}</span>
              </div>
              <h2 className="velmora-heading text-xl tracking-[0.05em] mb-2 group-hover:text-[#b8860b] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-xs tracking-[0.15em] uppercase border-b border-[#2c2825] pb-1 group-hover:border-[#b8860b] group-hover:text-[#b8860b] transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JournalPage;
