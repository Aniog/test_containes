import { useEffect, useRef } from 'react';
import { Newspaper, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'haaland-record',
    category: 'Premier League',
    title: 'Haaland Breaks All-Time Premier League Scoring Record',
    excerpt: 'Erling Haaland netted his 37th goal of the season to surpass the all-time single-season record, cementing his legacy as one of the greatest strikers in league history.',
    author: 'James Mitchell',
    time: '2 hours ago',
    featured: true,
    titleId: 'news-haaland-title',
    descId: 'news-haaland-desc',
    imgId: 'news-img-haaland-p7q8r9',
  },
  {
    id: 'clasico-preview',
    category: 'La Liga',
    title: 'El Clásico Preview: Madrid vs Barça — Who Has the Edge?',
    excerpt: 'With the title race on the line, Sunday\'s El Clásico promises to be one of the most dramatic in recent memory. We break down the key battles.',
    author: 'Sofia Reyes',
    time: '4 hours ago',
    featured: false,
    titleId: 'news-clasico-title',
    descId: 'news-clasico-desc',
    imgId: 'news-img-clasico-s1t2u3',
  },
  {
    id: 'ucl-draw',
    category: 'Champions League',
    title: 'Champions League Quarter-Final Draw: The Ties to Watch',
    excerpt: 'The draw has thrown up some mouth-watering ties. Here\'s everything you need to know about the quarter-final matchups.',
    author: 'Marco Bianchi',
    time: '6 hours ago',
    featured: false,
    titleId: 'news-ucl-title',
    descId: 'news-ucl-desc',
    imgId: 'news-img-ucl-v4w5x6',
  },
  {
    id: 'transfer-window',
    category: 'Transfers',
    title: 'Summer Transfer Window: The Biggest Deals Already Done',
    excerpt: 'The summer window is heating up. From blockbuster signings to surprise moves, here are the transfers that have already been confirmed.',
    author: 'Emma Clarke',
    time: '8 hours ago',
    featured: false,
    titleId: 'news-transfer-title',
    descId: 'news-transfer-desc',
    imgId: 'news-img-transfer-y7z8a9',
  },
];

function CategoryBadge({ category }) {
  return (
    <span className="inline-block bg-soccer-green/20 text-soccer-green text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg">
      {category}
    </span>
  );
}

function FeaturedArticle({ article }) {
  return (
    <div className="bg-pitch-card border border-gray-800 rounded-2xl overflow-hidden hover:border-soccer-green/40 transition-all group lg:col-span-2">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.descId}] [${article.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch-card via-pitch-card/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <CategoryBadge category={article.category} />
        </div>
      </div>
      <div className="p-6">
        <h3 id={article.titleId} className="text-white font-black text-xl md:text-2xl leading-tight mb-3">
          {article.title}
        </h3>
        <p id={article.descId} className="text-gray-400 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.time}</span>
            <span>·</span>
            <span>{article.author}</span>
          </div>
          <button className="flex items-center gap-1 text-soccer-green hover:text-soccer-green-light text-sm font-bold bg-transparent border-0 transition-colors">
            Read More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="bg-pitch-card border border-gray-800 rounded-2xl overflow-hidden hover:border-soccer-green/40 transition-all group flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.descId}] [${article.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch-card/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={article.category} />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 id={article.titleId} className="text-white font-bold text-base leading-snug mb-2 flex-1">
          {article.title}
        </h3>
        <p id={article.descId} className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-gray-600 text-xs">
            <Clock className="w-3 h-3" />
            <span>{article.time}</span>
          </div>
          <button className="flex items-center gap-1 text-soccer-green hover:text-soccer-green-light text-xs font-bold bg-transparent border-0 transition-colors">
            Read <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LatestNews() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="news" ref={containerRef} className="py-16 md:py-24 bg-pitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-4 h-4 text-soccer-green" />
              <span className="text-soccer-green text-xs font-bold uppercase tracking-widest">Latest</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Football News</h2>
          </div>
          <button className="text-soccer-green hover:text-soccer-green-light text-sm font-bold uppercase tracking-widest bg-transparent border-0 transition-colors">
            All News →
          </button>
        </div>

        {/* Grid: featured + 3 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FeaturedArticle article={featured} />
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
