import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { journalArticles } from '@/data/products';
import { format, parseISO } from 'date-fns';

const articles = journalArticles.slice(0, 2);

export default function JournalPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-cream-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="label-caps text-gold mb-3">From the Journal</p>
            <h2
              className="font-serif text-4xl md:text-5xl text-ink font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Stories & Notes
            </h2>
          </div>
          <Link to="/journal" className="btn-secondary self-start md:self-auto">
            Read the Journal
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {articles.map((article, idx) => (
            <Link
              key={article.id}
              to={`/journal/${article.slug}`}
              className="group block"
            >
              <div className="overflow-hidden bg-cream aspect-[4/3] mb-5">
                <img
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-full object-cover img-hover"
                />
              </div>
              <div>
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
                  className="text-muted text-sm font-light mt-3 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {article.excerpt}
                </p>
                <p className="label-caps text-gold mt-4 group-hover:text-ink transition-colors duration-300" style={{ fontSize: '9px' }}>
                  {article.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
