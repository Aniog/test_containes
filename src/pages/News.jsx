import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { newsItems } from '../data/worldcup';
import { Clock, Flame, Search } from 'lucide-react';

const categoryColors = {
  '赛事动态': 'bg-red-600/20 text-red-400 border-red-600/30',
  '球星焦点': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  '场馆介绍': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
  '技术分析': 'bg-purple-600/20 text-purple-400 border-purple-600/30',
};

const categories = ['全部', ...new Set(newsItems.map((n) => n.category))];

const NewsCard = ({ item, featured }) => {
  const catClass = categoryColors[item.category] || 'bg-gray-700/50 text-gray-300 border-gray-600';

  if (featured) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors group col-span-1 md:col-span-2">
        <div className="relative h-64 overflow-hidden">
          <img
            alt={item.title}
            data-strk-img-id={`news-page-feat-${item.id}-img-j1k2l3`}
            data-strk-img={`[news-page-feat-${item.id}-summary] [news-page-feat-${item.id}-title]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${catClass}`}>
              {item.category}
            </span>
            {item.hot && (
              <span className="flex items-center gap-1 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                <Flame className="w-3 h-3" /> 热门
              </span>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 id={`news-page-feat-${item.id}-title`} className="text-white text-2xl font-bold mb-3 leading-snug">
            {item.title}
          </h3>
          <p id={`news-page-feat-${item.id}-summary`} className="text-gray-400 leading-relaxed mb-4">
            {item.summary}
          </p>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <span>{item.date}</span>
            <span>·</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{item.readTime}阅读</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors group">
      <div className="relative h-44 overflow-hidden">
        <img
          alt={item.title}
          data-strk-img-id={`news-page-card-${item.id}-img-m4n5o6`}
          data-strk-img={`[news-page-card-${item.id}-title]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${catClass}`}>
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 id={`news-page-card-${item.id}-title`} className="text-white font-semibold leading-snug mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{item.summary}</p>
        <div className="flex items-center gap-2 text-gray-600 text-xs">
          <span>{item.date}</span>
          <span>·</span>
          <Clock className="w-3 h-3" />
          <span>{item.readTime}</span>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const containerRef = useRef(null);
  const [category, setCategory] = useState('全部');
  const [search, setSearch] = useState('');

  const filtered = newsItems.filter((n) => {
    const catOk = category === '全部' || n.category === category;
    const searchOk = !search || n.title.includes(search) || n.summary.includes(search);
    return catOk && searchOk;
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, search]);

  return (
    <div className="min-h-screen bg-gray-950 pt-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">新闻资讯</h1>
          <p className="text-gray-500">世界杯最新动态与深度报道</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
            <input
              type="text"
              placeholder="搜索新闻..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 w-full md:w-64"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <NewsCard key={item.id} item={item} featured={idx === 0 && category === '全部' && !search} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            <div className="text-4xl mb-3">📰</div>
            <p>暂无相关新闻</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
