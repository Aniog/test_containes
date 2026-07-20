import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const journalPosts = [
  {
    id: 'journal-1',
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
    date: 'July 15, 2026',
    category: 'Styling',
  },
  {
    id: 'journal-2',
    title: 'The Care Guide: Making Your Jewelry Last',
    excerpt: 'Simple tips to keep your demi-fine pieces looking brand new for years to come.',
    date: 'July 8, 2026',
    category: 'Care',
  },
  {
    id: 'journal-3',
    title: 'Behind the Design: Our Summer Collection',
    excerpt: 'A peek into the creative process behind our latest collection of warm-weather essentials.',
    date: 'June 28, 2026',
    category: 'Behind the Scenes',
  },
];

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="serif-heading text-4xl md:text-5xl text-stone-800 mb-3">The Journal</h1>
          <div className="w-12 h-px bg-primary mx-auto mb-4" />
          <p className="text-stone-500 max-w-md mx-auto">Styling tips, care guides, and behind-the-scenes stories</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {journalPosts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-stone-100 rounded overflow-hidden mb-4">
                <div
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  data-strk-bg-id={`journal-${post.id}`}
                  data-strk-bg="[journal-title] [journal-excerpt] [the-journal-title]"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-wider text-primary">{post.category}</span>
                <span className="text-xs text-stone-400">{post.date}</span>
              </div>
              <h2 id="journal-title" className="serif-heading text-xl text-stone-800 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p id="journal-excerpt" className="text-sm text-stone-500 leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-3 text-sm text-primary font-medium group-hover:underline">Read More</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
