import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'j1',
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'Master the art of the necklace stack with our guide to lengths, textures, and proportions.',
    date: 'July 15, 2026',
    query: 'layered gold necklaces editorial warm lighting jewelry styling',
  },
  {
    id: 'j2',
    title: 'The Guide to Caring for Gold-Plated Jewelry',
    excerpt: 'Simple habits to keep your demi-fine pieces looking beautiful for years to come.',
    date: 'June 28, 2026',
    query: 'gold jewelry care cleaning editorial warm tone',
  },
  {
    id: 'j3',
    title: 'Why Demi-Fine Is the Future of Luxury',
    excerpt: 'How the rise of demi-fine jewelry is reshaping the way we think about luxury and value.',
    date: 'June 10, 2026',
    query: 'modern gold jewelry studio editorial warm lighting',
  },
];

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-velmora-gold mb-4">Stories & Style</p>
          <h1 className="font-serif text-3xl lg:text-5xl text-velmora-ink font-light tracking-wide">
            The Journal
          </h1>
          <div className="hairline w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-sand overflow-hidden mb-5">
                <img
                  data-strk-img-id={`journal-${article.id}`}
                  data-strk-img={`[journal-${article.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs font-sans text-velmora-stone tracking-[0.05em]">{article.date}</p>
              <h2
                id={`journal-${article.id}-title`}
                className="font-serif text-xl text-velmora-ink mt-2 leading-snug group-hover:text-velmora-gold transition-colors"
              >
                {article.title}
              </h2>
              <p className="text-sm font-sans text-velmora-stone mt-2 leading-relaxed">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}