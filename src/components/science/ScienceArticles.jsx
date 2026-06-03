import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { articles, categoryColors } from '@/data/articles.data';

const allCategories = ['All', ...Object.keys(categoryColors)];

const ScienceArticles = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-cosmos-teal text-cosmos-bg border-cosmos-teal'
                : 'bg-transparent text-cosmos-muted border-cosmos-border hover:border-cosmos-teal/40 hover:text-cosmos-text'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {featured && (
        <Link
          to={`/science/${featured.id}`}
          className="block bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden mb-8 hover:border-cosmos-teal/40 hover:shadow-[0_0_30px_rgba(0,212,200,0.1)] transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[240px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cosmos-surface/30 md:block hidden" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-cosmos-dim text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime} read
                </span>
              </div>
              <h2 id={featured.titleId} className="text-cosmos-text text-2xl md:text-3xl font-bold mb-4 leading-snug">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-cosmos-muted leading-relaxed mb-6">
                {featured.desc}
              </p>
              <span className="inline-flex items-center gap-2 text-cosmos-teal font-medium group-hover:text-cosmos-cyan transition-colors self-start">
                Read full article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article) => (
          <Link
            key={article.id}
            to={`/science/${article.id}`}
            className="bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-[0_0_25px_rgba(0,212,200,0.1)] transition-all duration-300 group flex flex-col"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                alt={article.title}
                data-strk-img-id={article.imgId}
                data-strk-img={`[${article.descId}] [${article.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/60 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-cosmos-dim text-xs flex items-center gap-1 ml-auto">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
              <h3 id={article.titleId} className="text-cosmos-text font-semibold text-lg mb-2 leading-snug">
                {article.title}
              </h3>
              <p id={article.descId} className="text-cosmos-muted text-sm leading-relaxed flex-1 line-clamp-3">
                {article.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-cosmos-teal text-sm font-medium mt-4 group-hover:text-cosmos-cyan transition-colors self-start">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScienceArticles;
