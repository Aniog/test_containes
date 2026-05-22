import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { articles } from '@/data/gameData';
import { format, parseISO } from 'date-fns';

const CATEGORIES = ['All', 'News', 'Article'];

function ArticleCard({ article }) {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200 group flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-strk-img-id={`news-img-${article.id}`}
          data-strk-img={`[news-excerpt-${article.id}] [news-title-${article.id}] gaming news article`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-violet-500/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-gray-500 text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
          <span className="text-gray-600 text-xs">·</span>
          <span className="text-gray-500 text-xs">{format(parseISO(article.date), 'MMM d, yyyy')}</span>
        </div>
        <h3 id={`news-title-${article.id}`} className="text-white font-bold text-lg mb-2 leading-snug line-clamp-2">
          {article.title}
        </h3>
        <p id={`news-excerpt-${article.id}`} className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
              {article.author[0]}
            </div>
            <span className="text-gray-400 text-xs">{article.author}</span>
          </div>
          <Link
            to={`/news/${article.id}`}
            className="flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            Read more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {article.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 bg-[#1e1e2a] text-gray-400 text-xs px-2 py-0.5 rounded-full border border-[#2a2a3a]">
              <Tag className="w-2.5 h-2.5" /> {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = articles.filter((a) => {
    const matchCat = category === 'All' || a.category === category;
    const matchSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = articles.find((a) => a.featured);
  const featuredRef = useRef(null);

  useEffect(() => {
    if (featuredRef.current) {
      ImageHelper.loadImages(strkImgConfig, featuredRef.current);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">News & Articles</h1>
        <p className="text-gray-400">The latest gaming news, reviews, and in-depth articles</p>
      </div>

      {/* Featured Article */}
      {featured && (
        <div
          ref={featuredRef}
          className="bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden mb-10 group hover:border-violet-500/50 transition-all duration-200"
        >
          <div className="md:flex">
            <div className="relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
              <img
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                data-strk-img-id="news-featured-img-main"
                data-strk-img={`[news-featured-excerpt] [news-featured-title] gaming featured article`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
              <span className="bg-violet-500/20 text-violet-300 text-xs font-semibold px-2 py-0.5 rounded-full border border-violet-500/30 w-fit mb-3">
                {featured.category}
              </span>
              <h2 id="news-featured-title" className="text-white font-black text-2xl md:text-3xl mb-3 leading-tight">
                {featured.title}
              </h2>
              <p id="news-featured-excerpt" className="text-gray-400 leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>By {featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                </div>
                <Link
                  to={`/news/${featured.id}`}
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex items-center gap-2 bg-[#1e1e2a] border border-[#2a2a3a] rounded-lg px-4 py-2.5 flex-1">
          <Search className="w-4 h-4 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white placeholder-gray-500 outline-none text-sm flex-1"
          />
        </div>
        <div className="flex gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-violet-600 text-white'
                  : 'bg-[#1e1e2a] text-gray-400 hover:text-white border border-[#2a2a3a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No articles found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
