import { useState, useEffect, useRef, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { DataClient } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Calendar, User, Tag, ArrowRight, ChevronRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PLATFORM_META = {
  steam:       { label: 'Steam',         color: 'bg-blue-900/40 text-blue-300 border-blue-700/40' },
  epic:        { label: 'Epic Games',    color: 'bg-gray-700/40 text-gray-300 border-gray-600/40' },
  nintendo:    { label: 'Nintendo',      color: 'bg-red-900/40 text-red-300 border-red-700/40' },
  playstation: { label: 'PlayStation',   color: 'bg-indigo-900/40 text-indigo-300 border-indigo-700/40' },
  xbox:        { label: 'Xbox',          color: 'bg-green-900/40 text-green-300 border-green-700/40' },
  all:         { label: 'All Platforms', color: 'bg-purple-900/40 text-purple-300 border-purple-700/40' },
};

const CATEGORY_META = {
  news:    { label: 'News',    color: 'bg-[#1a9fff] text-white' },
  blog:    { label: 'Blog',    color: 'bg-purple-600 text-white' },
  article: { label: 'Article', color: 'bg-teal-600 text-white' },
  review:  { label: 'Review',  color: 'bg-yellow-600 text-white' },
  guide:   { label: 'Guide',   color: 'bg-orange-600 text-white' },
};

const FILTERS = [
  { key: 'all',         label: 'All' },
  { key: 'steam',       label: 'Steam' },
  { key: 'epic',        label: 'Epic' },
  { key: 'nintendo',    label: 'Nintendo' },
  { key: 'playstation', label: 'PlayStation' },
  { key: 'xbox',        label: 'Xbox' },
];

const articleImgIds = {
  1976: { imgId: 'art-img-1976-a1b2c3', titleId: 'art-title-1976', descId: 'art-desc-1976' },
  1977: { imgId: 'art-img-1977-d4e5f6', titleId: 'art-title-1977', descId: 'art-desc-1977' },
  1978: { imgId: 'art-img-1978-g7h8i9', titleId: 'art-title-1978', descId: 'art-desc-1978' },
  1979: { imgId: 'art-img-1979-j1k2l3', titleId: 'art-title-1979', descId: 'art-desc-1979' },
  1980: { imgId: 'art-img-1980-m4n5o6', titleId: 'art-title-1980', descId: 'art-desc-1980' },
  1981: { imgId: 'art-img-1981-p7q8r9', titleId: 'art-title-1981', descId: 'art-desc-1981' },
};

function getFallbackImgMeta(id, index) {
  const suffix = ['s1t2u3', 'v4w5x6', 'y7z8a9', 'b1c2d3', 'e4f5g6', 'h7i8j9'][index % 6];
  return {
    imgId: `art-img-${id}-${suffix}`,
    titleId: `art-title-${id}`,
    descId: `art-desc-${id}`,
  };
}

export default function ArticlesSection() {
  const containerRef = useRef(null);
  const [articles, setArticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    const query = client.from('Blog Articles').select('*').order('published_at', { ascending: false }).limit(6);
    const { data: response } = await query;
    setArticles(response?.data?.list ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, activeFilter]);

  const PINNED_ID = 1992;

  const sorted = [...articles].sort((a, b) => {
    if (a.id === PINNED_ID) return -1;
    if (b.id === PINNED_ID) return 1;
    return new Date(b.data?.published_at) - new Date(a.data?.published_at);
  });

  const filtered = activeFilter === 'all'
    ? sorted
    : sorted.filter((a) => a.data?.platform === activeFilter);

  return (
    <section id="articles" className="py-20 px-4 md:px-8 bg-[#111827]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest">Blog & Articles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Gaming News & Guides</h2>
            <p className="text-[#9ca3af] mt-2 max-w-xl">
              In-depth articles, reviews, and guides covering all major gaming platforms.
            </p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[#f59e0b] hover:text-[#fbbf24] text-sm font-medium transition shrink-0">
            View all articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Platform filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                activeFilter === f.key
                  ? 'bg-[#f59e0b] border-[#f59e0b] text-black font-semibold'
                  : 'border-[#374151] text-[#9ca3af] hover:text-white hover:border-[#f59e0b]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1f2937] border border-[#374151] rounded-xl overflow-hidden animate-pulse">
                <div className="h-44 bg-[#374151]" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-[#374151] rounded w-1/3" />
                  <div className="h-4 bg-[#374151] rounded w-3/4" />
                  <div className="h-3 bg-[#374151] rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, index) => {
              const d = article.data ?? {};
              const meta = articleImgIds[article.id] ?? getFallbackImgMeta(article.id, index);
              const catMeta = CATEGORY_META[d.category] ?? CATEGORY_META.article;
              const platMeta = PLATFORM_META[d.platform] ?? PLATFORM_META.all;

              return (
                <article
                  key={article.id}
                  className="bg-[#1f2937] border border-[#374151] rounded-xl overflow-hidden hover:border-[#f59e0b] transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      alt={d.title}
                      data-strk-img-id={meta.imgId}
                      data-strk-img={`[${meta.descId}] [${meta.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 bg-[#374151]"
                    />
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded ${catMeta.color}`}>
                      {catMeta.label}
                    </span>
                    {article.id === PINNED_ID && (
                      <span className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-500 text-black text-xs font-black px-2 py-1 rounded shadow-lg">
                        📌 Pinned
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <span className={`self-start text-xs font-medium px-2 py-0.5 rounded border mb-2 ${platMeta.color}`}>
                      {platMeta.label}
                    </span>

                    <h3 id={meta.titleId} className="text-white font-semibold text-base mb-2 group-hover:text-[#f59e0b] transition line-clamp-2">
                      {d.title}
                    </h3>
                    <p id={meta.descId} className="text-[#9ca3af] text-sm leading-relaxed line-clamp-3 flex-1">
                      {d.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#374151] flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[#9ca3af] text-xs">
                        {d.author && (
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" /> {d.author}
                          </span>
                        )}
                        {d.published_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {d.published_at}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#f59e0b] group-hover:translate-x-1 transition-transform" />
                    </div>

                    {d.tags?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {d.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-[#9ca3af] text-xs bg-[#111827] px-2 py-0.5 rounded">
                            <Tag className="w-2.5 h-2.5" />{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
