import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { journalArticles } from '@/data/products';
import { format, parseISO } from 'date-fns';

const categories = ['All', 'Stories', 'Style Notes', 'Process'];

export default function JournalPage() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? journalArticles
    : journalArticles.filter(a => a.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const [hero, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Header */}
      <div className="py-16 md:py-24 px-6 md:px-10 text-center border-b border-cream-dark">
        <p className="label-caps text-gold mb-4">The Journal</p>
        <h1
          className="font-serif text-5xl md:text-7xl text-ink font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Stories & Notes
        </h1>
      </div>

      {/* Category filter */}
      <div className="flex items-center justify-center gap-6 md:gap-10 py-8 border-b border-cream-dark px-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`label-caps transition-colors duration-300 ${
              activeCategory === cat ? 'text-ink' : 'text-muted hover:text-ink'
            }`}
            style={{ fontSize: '10px', borderBottom: activeCategory === cat ? '1px solid #C5A57A' : 'none', paddingBottom: '2px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20">
        {/* Hero article */}
        {hero && (
          <Link to={`/journal/${hero.slug}`} className="group block mb-16 md:mb-20">
            <div className="overflow-hidden bg-cream-dark aspect-[16/9] mb-6">
              <img
                data-strk-img-id={hero.imgId}
                data-strk-img={`[${hero.descId}] [${hero.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={hero.title}
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="label-caps text-gold" style={{ fontSize: '9px' }}>{hero.category}</span>
                <span className="label-caps text-muted" style={{ fontSize: '9px' }}>
                  {format(parseISO(hero.date), 'MMMM d, yyyy')}
                </span>
              </div>
              <h2
                id={hero.titleId}
                className="font-serif text-4xl md:text-5xl text-ink font-light group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                {hero.title}
              </h2>
              <p
                id={hero.descId}
                className="text-muted text-sm font-light mt-4 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {hero.excerpt}
              </p>
              <p className="label-caps text-gold mt-5 group-hover:text-ink transition-colors duration-300" style={{ fontSize: '9px' }}>
                {hero.readTime}
              </p>
            </div>
          </Link>
        )}

        {/* Article grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 border-t border-cream-dark pt-12">
            {rest.map(article => (
              <Link key={article.id} to={`/journal/${article.slug}`} className="group block">
                <div className="overflow-hidden bg-cream-dark aspect-[4/3] mb-5">
                  <img
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.descId}] [${article.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="label-caps text-gold" style={{ fontSize: '9px' }}>{article.category}</span>
                  <span className="label-caps text-muted" style={{ fontSize: '9px' }}>
                    {format(parseISO(article.date), 'MMMM d, yyyy')}
                  </span>
                </div>
                <h3
                  id={article.titleId}
                  className="font-serif text-2xl md:text-3xl text-ink font-light group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {article.title}
                </h3>
                <p
                  id={article.descId}
                  className="text-muted text-xs font-light mt-3 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {article.excerpt}
                </p>
                <p className="label-caps text-gold mt-4 group-hover:text-ink transition-colors duration-300" style={{ fontSize: '9px' }}>
                  {article.readTime}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
