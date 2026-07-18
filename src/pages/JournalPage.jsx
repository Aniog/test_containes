import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'styling-guide',
      title: 'The Art of Layering: A Styling Guide',
      excerpt: 'Discover how to layer necklaces and stack rings like a pro with our expert tips.',
      date: 'July 15, 2026',
      category: 'Styling',
    },
    {
      id: 'care-guide',
      title: 'How to Care for Your Gold-Plated Jewelry',
      excerpt: 'Essential tips to keep your Velmora pieces looking beautiful for years to come.',
      date: 'July 10, 2026',
      category: 'Care',
    },
    {
      id: 'gift-guide',
      title: 'The Perfect Gift: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for someone special.',
      date: 'July 5, 2026',
      category: 'Gifting',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="serif-heading text-5xl md:text-6xl mb-4">Journal</h1>
          <p className="text-[#6B6560] font-light max-w-2xl mx-auto">
            Stories, styling tips, and behind-the-scenes glimpses into the world of Velmora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-[#E8E2DA] rounded-sm overflow-hidden mb-4">
                <div
                  data-strk-bg-id={`journal-${post.id}-bg`}
                  data-strk-bg={`[${post.id}-title] [journal-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-wider text-[#B8860B]">{post.category}</span>
                <span className="text-xs text-[#6B6560]">{post.date}</span>
              </div>
              <h2 id={`${post.id}-title`} className="serif-heading text-2xl mb-2 group-hover:text-[#B8860B] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#6B6560] font-light mb-4">{post.excerpt}</p>
              <Link to={`/journal/${post.id}`} className="text-sm uppercase tracking-wider text-[#B8860B] hover:underline">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
