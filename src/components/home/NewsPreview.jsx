import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { newsItems } from '../../data/worldcup';
import { ArrowRight, Clock, Flame } from 'lucide-react';

const categoryColors = {
  '赛事动态': 'bg-red-600/20 text-red-400',
  '球星焦点': 'bg-yellow-600/20 text-yellow-400',
  '场馆介绍': 'bg-blue-600/20 text-blue-400',
  '技术分析': 'bg-purple-600/20 text-purple-400',
};

const NewsPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = newsItems.find((n) => n.hot);
  const rest = newsItems.filter((n) => !n.hot || n.id !== featured?.id).slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-gray-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">最新新闻</h2>
            <p className="text-gray-500 mt-1">世界杯最新资讯</p>
          </div>
          <Link
            to="/news"
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured news */}
          {featured && (
            <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors group">
              <div className="relative h-56 md:h-72 overflow-hidden">
                <img
                  id={`news-featured-img-${featured.id}`}
                  alt={featured.title}
                  data-strk-img-id={`news-featured-${featured.id}-img-d4e5f6`}
                  data-strk-img={`[news-featured-${featured.id}-summary] [news-featured-${featured.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] || 'bg-gray-700 text-gray-300'}`}>
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 bg-red-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    <Flame className="w-3 h-3" /> 热门
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={`news-featured-${featured.id}-title`} className="text-white text-xl font-bold mb-2 leading-snug">
                  {featured.title}
                </h3>
                <p id={`news-featured-${featured.id}-summary`} className="text-gray-400 text-sm leading-relaxed mb-4">
                  {featured.summary}
                </p>
                <div className="flex items-center gap-3 text-gray-600 text-xs">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <Clock className="w-3 h-3" />
                  <span>{featured.readTime}阅读</span>
                </div>
              </div>
            </div>
          )}

          {/* Side news list */}
          <div className="flex flex-col gap-4">
            {rest.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-colors flex gap-4"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    alt={item.title}
                    data-strk-img-id={`news-side-${item.id}-img-g7h8i9`}
                    data-strk-img={`[news-side-${item.id}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category] || 'bg-gray-700 text-gray-300'}`}>
                    {item.category}
                  </span>
                  <h4 id={`news-side-${item.id}-title`} className="text-white text-sm font-semibold mt-1.5 leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-600 text-xs mt-2">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
