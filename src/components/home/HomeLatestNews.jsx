import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { articles } from '@/data/gameData';
import { format, parseISO } from 'date-fns';

function ArticleCard({ article, large = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (large) {
    return (
      <div
        ref={containerRef}
        className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200 group md:col-span-2"
      >
        <div className="md:flex">
          <div className="relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
            <img
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              data-strk-img-id={`article-img-${article.id}-large`}
              data-strk-img={`[article-excerpt-${article.id}] [article-title-${article.id}] gaming news`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-violet-500/20 text-violet-300 text-xs font-semibold px-2 py-0.5 rounded-full border border-violet-500/30">
                {article.category}
              </span>
              <span className="text-gray-500 text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
            <h3 id={`article-title-${article.id}`} className="text-white font-bold text-xl mb-2 leading-snug">
              {article.title}
            </h3>
            <p id={`article-excerpt-${article.id}`} className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                By {article.author} · {format(parseISO(article.date), 'MMM d, yyyy')}
              </div>
              <Link to={`/news/${article.id}`} className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center gap-1 transition-colors">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-strk-img-id={`article-img-${article.id}`}
          data-strk-img={`[article-excerpt-${article.id}] [article-title-${article.id}] gaming news`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-violet-500/20 text-violet-300 text-xs font-semibold px-2 py-0.5 rounded-full border border-violet-500/30">
            {article.category}
          </span>
          <span className="text-gray-500 text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>
        <h3 id={`article-title-${article.id}`} className="text-white font-semibold mb-1 line-clamp-2 leading-snug">
          {article.title}
        </h3>
        <p id={`article-excerpt-${article.id}`} className="text-gray-400 text-sm line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{format(parseISO(article.date), 'MMM d, yyyy')}</span>
          <Link to={`/news/${article.id}`} className="text-violet-400 hover:text-violet-300 text-xs font-medium flex items-center gap-1 transition-colors">
            Read <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomeLatestNews() {
  const featured = articles.filter((a) => a.featured).slice(0, 1)[0];
  const rest = articles.filter((a) => !a.featured || a.id !== featured.id).slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">📰 Latest News</h2>
          <p className="text-gray-400 text-sm mt-1">Stay up to date with the gaming world</p>
        </div>
        <Link
          to="/news"
          className="flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
        >
          All articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {featured && <ArticleCard article={featured} large />}
        {rest.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
