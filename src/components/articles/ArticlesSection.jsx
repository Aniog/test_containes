import { useState, useEffect, useRef } from 'react';
import { BookOpen, TrendingUp, Clock, Eye, ChevronRight, Filter } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PlatformBadge from '@/components/ui/PlatformBadge.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CATEGORY_COLORS = {
  news: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  blog: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  review: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  guide: 'bg-green-500/20 text-green-300 border-green-500/30',
  announcement: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

const FILTERS = ['all', 'news', 'blog', 'review', 'guide', 'announcement'];

function ArticleCard({ article, featured = false, titleId, summaryId }) {
  const d = article.data;
  const timeAgo = d.published_at
    ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true })
    : 'Recently';

  if (featured) {
    return (
      <article className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all duration-300 cursor-pointer">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            alt={d.title}
            data-strk-img-id={`article-featured-${article.id}`}
            data-strk-img={`[${summaryId}] [${titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border capitalize ${CATEGORY_COLORS[d.category] || CATEGORY_COLORS.news}`}>
              {d.category}
            </span>
            <PlatformBadge platform={d.platform} />
          </div>
        </div>
        <div className="p-6">
          <h3 id={titleId} className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
            {d.title}
          </h3>
          <p id={summaryId} className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
            {d.summary}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{timeAgo}</span>
              {d.view_count > 0 && (
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{d.view_count.toLocaleString()}</span>
              )}
            </div>
            {d.author && <span className="text-gray-400">by {d.author}</span>}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-600/40 hover:bg-gray-800/50 transition-all duration-200 cursor-pointer">
      <div className="flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden">
        <img
          alt={d.title}
          data-strk-img-id={`article-small-${article.id}`}
          data-strk-img={`[${summaryId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border capitalize ${CATEGORY_COLORS[d.category] || CATEGORY_COLORS.news}`}>
            {d.category}
          </span>
          <PlatformBadge platform={d.platform} size="xs" />
        </div>
        <h3 id={titleId} className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-1">
          {d.title}
        </h3>
        <p id={summaryId} className="hidden">{d.summary}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{timeAgo}</span>
          {d.view_count > 0 && (
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{d.view_count.toLocaleString()}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ArticlesSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data: response } = await client
        .from('Game Articles')
        .select('*')
        .order('published_at', { ascending: false })
        .range(0, 11);
      setArticles(response?.data?.list ?? []);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [articles, filter]);

  const filtered = filter === 'all'
    ? articles
    : articles.filter(a => a.data.category === filter);

  const featured = filtered.slice(0, 2);
  const rest = filtered.slice(2, 8);

  return (
    <section id="news" ref={containerRef} className="py-20 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              LATEST CONTENT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              News, Reviews & Articles
            </h2>
            <p className="text-gray-400 mt-2">Stay up to date with the gaming world</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${
                  filter === f
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl h-64 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No articles found for this filter.</p>
          </div>
        ) : (
          <>
            {/* Featured grid */}
            {featured.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {featured.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    featured
                    titleId={`article-title-${article.id}`}
                    summaryId={`article-summary-${article.id}`}
                  />
                ))}
              </div>
            )}

            {/* Smaller cards */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rest.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    titleId={`article-title-${article.id}`}
                    summaryId={`article-summary-${article.id}`}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* View all */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
            View All Articles
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
