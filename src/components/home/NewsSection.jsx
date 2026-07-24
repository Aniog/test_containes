import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 'city-arsenal',
    category: 'Match Report',
    categoryColor: 'text-green-400 bg-green-500/10',
    title: 'City Edge Arsenal in Five-Goal Thriller',
    excerpt: 'Manchester City secured a crucial 3-2 victory over Arsenal in a pulsating encounter at the Etihad, keeping their title hopes alive with just four games remaining.',
    time: '2 hours ago',
    imgId: 'news-city-arsenal-a1b2c3',
    titleId: 'news-city-arsenal-title',
    excerptId: 'news-city-arsenal-excerpt',
  },
  {
    id: 'haaland-record',
    category: 'Transfer News',
    categoryColor: 'text-blue-400 bg-blue-500/10',
    title: 'Haaland Breaks Premier League Scoring Record',
    excerpt: 'Erling Haaland has surpassed the all-time Premier League scoring record with his 32nd goal of the season, cementing his status as one of the greatest strikers of his generation.',
    time: '5 hours ago',
    imgId: 'news-haaland-record-d4e5f6',
    titleId: 'news-haaland-record-title',
    excerptId: 'news-haaland-record-excerpt',
  },
  {
    id: 'champions-league',
    category: 'Champions League',
    categoryColor: 'text-yellow-400 bg-yellow-500/10',
    title: 'Real Madrid vs Barcelona: El Clásico Preview',
    excerpt: 'The two Spanish giants meet in a blockbuster Champions League semi-final second leg. With the tie finely poised at 2-2, everything is to play for at the Santiago Bernabéu.',
    time: '8 hours ago',
    imgId: 'news-clasico-g7h8i9',
    titleId: 'news-clasico-title',
    excerptId: 'news-clasico-excerpt',
  },
  {
    id: 'transfer-window',
    category: 'Transfers',
    categoryColor: 'text-purple-400 bg-purple-500/10',
    title: 'Summer Transfer Window: The Biggest Deals So Far',
    excerpt: 'As clubs prepare for next season, we round up the most significant transfers of the summer window, including blockbuster moves and surprise signings.',
    time: '1 day ago',
    imgId: 'news-transfers-j1k2l3',
    titleId: 'news-transfers-title',
    excerptId: 'news-transfers-excerpt',
  },
];

function NewsCard({ article, featured = false }) {
  if (featured) {
    return (
      <div className="relative bg-gray-900 border border-gray-800 hover:border-green-500/40 rounded-xl overflow-hidden transition-all duration-200 group cursor-pointer">
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            alt={article.title}
            data-strk-img-id={article.imgId}
            data-strk-img={`[${article.excerptId}] [${article.titleId}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
            {article.category}
          </span>
        </div>
        <div className="p-5">
          <h3 id={article.titleId} className="text-lg font-bold text-white group-hover:text-green-400 transition-colors leading-snug mb-2">
            {article.title}
          </h3>
          <p id={article.excerptId} className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-600">
            <Clock className="w-3 h-3" />
            {article.time}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 bg-gray-900 border border-gray-800 hover:border-green-500/40 rounded-xl p-4 transition-all duration-200 group cursor-pointer">
      <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.excerptId}] [${article.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${article.categoryColor}`}>
          {article.category}
        </span>
        <h3 id={article.titleId} className="text-sm font-bold text-white group-hover:text-green-400 transition-colors leading-snug mt-1.5 line-clamp-2">
          {article.title}
        </h3>
        <p id={article.excerptId} className="hidden" aria-hidden="true">{article.excerpt}</p>
        <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
          <Clock className="w-3 h-3" />
          {article.time}
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="news" ref={containerRef} className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">Latest</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">News & Highlights</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
            All News <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured */}
          <div className="md:row-span-2">
            <NewsCard article={featured} featured />
          </div>

          {/* Side articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <button className="w-full flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium py-3 border border-gray-800 rounded-xl hover:border-gray-700">
            View All News <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
