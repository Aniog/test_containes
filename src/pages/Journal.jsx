import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const articles = [
    {
      id: '1',
      title: 'How to Style Gold Jewelry for Every Occasion',
      excerpt: 'From desk to dinner, here\'s how to make your demi-fine pieces work harder.',
      date: 'July 18, 2026',
    },
    {
      id: '2',
      title: 'The Art of the Ear Stack',
      excerpt: 'A guide to curating your perfect ear party — mixing huggies, cuffs, and drops.',
      date: 'July 10, 2026',
    },
    {
      id: '3',
      title: 'Caring for Gold-Plated Jewelry',
      excerpt: 'Simple habits that will keep your pieces looking luminous for years.',
      date: 'June 28, 2026',
    },
    {
      id: '4',
      title: 'The Rise of Demi-Fine: Why Quality Matters',
      excerpt: 'Why the modern woman is choosing demi-fine over traditional fine jewelry.',
      date: 'June 15, 2026',
    },
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Stories & Style</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-espresso tracking-wide mb-4">
            The Journal
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-gradient-to-br from-gold-light/20 via-warmgray to-taupe/10 mb-5 overflow-hidden flex items-center justify-center">
                <span className="font-serif text-6xl text-gold/20">{article.title.charAt(0)}</span>
              </div>
              <p className="text-xs text-taupe tracking-wider uppercase mb-2">{article.date}</p>
              <h2 id={`journal-title-${article.id}`} className="font-serif text-xl font-light text-espresso tracking-wide mb-2 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-taupe text-sm leading-relaxed">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}