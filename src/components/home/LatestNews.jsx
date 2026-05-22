import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, ArrowRight, Tag } from 'lucide-react';
import { BLOG_ARTICLES } from '@/lib/mockData';
import { formatDistanceToNow } from 'date-fns';

const CATEGORY_COLORS = {
  News: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Review: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Guide: 'bg-green-500/20 text-green-300 border-green-500/30',
  Feature: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Deals: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Esports: 'bg-red-500/20 text-red-300 border-red-500/30',
};

function ArticleCard({ article, large = false }) {
  const timeAgo = formatDistanceToNow(new Date(article.published_at), { addSuffix: true });

  return (
    <Link to={`/news/${article.slug}`} className={`game-card block bg-card border border-border rounded-xl overflow-hidden group ${large ? '' : ''}`}>
      {/* Cover */}
      <div className={`bg-gradient-to-br ${article.cover_color} ${large ? 'h-56' : 'h-40'} relative flex items-end p-4`}>
        <span className={`px-2 py-1 rounded-md border text-xs font-bold ${CATEGORY_COLORS[article.category] || 'bg-gray-500/20 text-gray-300'}`}>
          {article.category}
        </span>
        {article.is_featured && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-purple-600 text-white text-xs font-bold">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className={`text-white font-bold leading-tight mb-2 group-hover:text-purple-300 transition-colors ${large ? 'text-base' : 'text-sm'} line-clamp-2`}>
          {article.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.read_time_minutes}m read</span>
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{(article.views / 1000).toFixed(1)}K</span>
          </div>
          <span>{timeAgo}</span>
        </div>
      </div>
    </Link>
  );
}

export default function LatestNews() {
  const articles = BLOG_ARTICLES.slice(0, 4);

  return (
    <section className="py-16 bg-[#080812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-white font-gaming">Latest News</h2>
            <p className="text-gray-500 mt-1">Stay up to date with the gaming world</p>
          </div>
          <Link to="/news" className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
