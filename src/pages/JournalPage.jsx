import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    { title: 'The Art of Layering: How to Stack Your Gold Pieces', date: 'July 15, 2026', category: 'Style Guide' },
    { title: 'Caring for Your Demi-Fine Jewelry: A Complete Guide', date: 'July 8, 2026', category: 'Care' },
    { title: 'Meet the Makers: Inside Our Artisan Workshop', date: 'June 28, 2026', category: 'Behind the Brand' },
    { title: 'The Perfect Gift: How to Choose Jewelry for Someone Special', date: 'June 20, 2026', category: 'Gifting' },
  ];

  return (
    <section className="py-8 md:py-16" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Journal</h1>
        <p className="text-text-secondary font-sans text-sm mb-12">Stories, guides, and inspiration.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-cream-dark rounded overflow-hidden mb-4">
                <img
                  data-strk-img-id={`journal-${i}`}
                  data-strk-img={`[journal-title-${i}] [journal-cat-${i}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span id={`journal-cat-${i}`} className="text-[10px] uppercase tracking-widest text-text-secondary font-sans">
                {post.category}
              </span>
              <h2 id={`journal-title-${i}`} className="font-serif text-xl md:text-2xl mt-1 mb-2 group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-text-secondary font-sans">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
