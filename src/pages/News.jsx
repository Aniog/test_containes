import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Clock, Eye, Filter, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '@/lib/mockData';
import { formatDistanceToNow, format } from 'date-fns';

const CATEGORIES = ['All', 'News', 'Review', 'Guide', 'Feature', 'Deals', 'Esports'];

const CATEGORY_COLORS = {
  News: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Review: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Guide: 'bg-green-500/20 text-green-300 border-green-500/30',
  Feature: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Deals: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Esports: 'bg-red-500/20 text-red-300 border-red-500/30',
};

function ArticleCard({ article, featured = false }) {
  const timeAgo = formatDistanceToNow(new Date(article.published_at), { addSuffix: true });

  if (featured) {
    return (
      <Link to={`/news/${article.slug}`} className="game-card block bg-card border border-border rounded-2xl overflow-hidden group col-span-1 md:col-span-2">
        <div className={`h-64 bg-gradient-to-br ${article.cover_color} relative flex items-end p-6`}>
          <div>
            <span className={`inline-block px-2 py-1 rounded-md border text-xs font-bold mb-3 ${CATEGORY_COLORS[article.category] || ''}`}>
              {article.category}
            </span>
            <h2 className="text-white text-2xl font-black font-gaming leading-tight group-hover:text-purple-300 transition-colors">
              {article.title}
            </h2>
          </div>
          <span className="absolute top-4 right-4 px-2 py-1 rounded-md bg-purple-600 text-white text-xs font-bold">Featured</span>
        </div>
        <div className="p-5">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-medium">{article.author}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.read_time_minutes}m read</span>
              <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{(article.views / 1000).toFixed(1)}K views</span>
            </div>
            <span>{timeAgo}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/news/${article.slug}`} className="game-card block bg-card border border-border rounded-xl overflow-hidden group">
      <div className={`h-40 bg-gradient-to-br ${article.cover_color} relative flex items-end p-4`}>
        <span className={`px-2 py-1 rounded-md border text-xs font-bold ${CATEGORY_COLORS[article.category] || ''}`}>
          {article.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.read_time_minutes}m</span>
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{(article.views / 1000).toFixed(1)}K</span>
          </div>
          <span>{timeAgo}</span>
        </div>
      </div>
    </Link>
  );
}

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const activeCategory = searchParams.get('category') || 'All';

  const filtered = useMemo(() => {
    return BLOG_ARTICLES.filter(a => {
      const matchCat = activeCategory === 'All' || a.category === activeCategory;
      const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const featured = filtered.filter(a => a.is_featured);
  const rest = filtered.filter(a => !a.is_featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#080812] border-b border-purple-900/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-black text-white font-gaming">News & Articles</h1>
          </div>
          <p className="text-gray-400 mb-6">The latest gaming news, reviews, guides and features</p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSearchParams(cat === 'All' ? {} : { category: cat })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">No articles found</p>
            <p className="text-gray-600 text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {featured.slice(0, 2).map((a, i) => (
                  <ArticleCard key={a.id} article={a} featured={i === 0} />
                ))}
                {featured.slice(2).map(a => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            )}

            {/* Rest */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {rest.map(a => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
