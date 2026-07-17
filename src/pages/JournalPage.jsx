import { useEffect, useRef } from 'react';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'article-1',
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'Master the art of necklace layering with our guide to chain lengths, textures, and pendant placement.',
    date: 'July 10, 2026',
  },
  {
    id: 'article-2',
    title: 'The Rise of Demi-Fine Jewelry',
    excerpt: 'Why demi-fine is redefining the jewelry industry and what to look for when building your collection.',
    date: 'June 22, 2026',
  },
  {
    id: 'article-3',
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple daily habits and storage tips to keep your gold-plated pieces luminous for years.',
    date: 'June 5, 2026',
  },
  {
    id: 'article-4',
    title: 'Summer Styling: Jewelry Edition',
    excerpt: 'The pieces we\'re reaching for this season — from beachside huggies to sunset dinner earrings.',
    date: 'May 18, 2026',
  },
];

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">Journal</p>
          <h1 className="font-serif text-3xl md:text-5xl text-espresso">Stories & Style</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-sand/20 overflow-hidden rounded-sm mb-5">
                <img
                  data-strk-img-id={article.id}
                  data-strk-img={`${article.title} gold jewelry editorial`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-sans text-xs tracking-wider uppercase text-taupe mb-2">{article.date}</p>
              <h2 className="font-serif text-xl md:text-2xl text-espresso mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="font-sans text-sm text-taupe leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
