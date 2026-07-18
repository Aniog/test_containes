import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'j1',
    title: 'The Art of Layering Necklaces',
    subtitle: 'A guide to creating the perfect chain stack, from delicate chokers to statement pendants.',
    imgId: 'journal-layering-k1l2m3',
    titleId: 'j-title-1',
    descId: 'j-desc-1',
  },
  {
    id: 'j2',
    title: 'How to Care for Gold-Plated Jewelry',
    subtitle: 'Simple habits that keep your pieces luminous for years — our complete care guide.',
    imgId: 'journal-care-n4o5p6',
    titleId: 'j-title-2',
    descId: 'j-desc-2',
  },
  {
    id: 'j3',
    title: 'Behind the Design: Royal Heirloom Set',
    subtitle: 'From sketch to final piece — the story behind our most-loved gift set.',
    imgId: 'journal-design-q7r8s9',
    titleId: 'j-title-3',
    descId: 'j-desc-3',
  },
  {
    id: 'j4',
    title: 'Spring 2026 Jewelry Trends',
    subtitle: 'The silhouettes, tones, and styling ideas we are wearing this season.',
    imgId: 'journal-trends-s1t2u3',
    titleId: 'j-title-4',
    descId: 'j-desc-4',
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="section-padding mb-12">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal text-center">
          The Journal
        </h1>
        <p className="mt-3 text-sm text-velmora-warmgray text-center max-w-md mx-auto">
          Stories of craft, style, and the women who inspire us.
        </p>
      </div>

      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {articles.map(article => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-velmora-sand overflow-hidden">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 font-serif text-xl tracking-wide text-velmora-charcoal leading-tight group-hover:text-velmora-gold transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-velmora-warmgray leading-relaxed">
                {article.subtitle}
              </p>
              <span className="hidden" id={article.titleId}>{article.title}</span>
              <span className="hidden" id={article.descId}>{article.subtitle}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
