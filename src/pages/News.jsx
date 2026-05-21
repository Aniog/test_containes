import { useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { Clock, User, Search } from 'lucide-react';
import { NEWS_ARTICLES, PLATFORMS } from '../lib/data';

const categoryColors = {
  News: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Article: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  Guide: 'bg-green-500/20 text-green-400 border-green-500/30',
  Review: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

const ArticleCard = ({ article, featured }) => {
  const platform = article.platform ? PLATFORMS[article.platform] : null;
  return (
    <div className={`bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 flex ${featured ? 'flex-row' : 'flex-col'}`}>
      <div className={`bg-gradient-to-br from-[#22222f] to-[#1a1a24] flex items-center justify-center relative flex-shrink-0 ${featured ? 'w-48 h-auto' : 'h-40 w-full'}`}>
        <div className="text-5xl opacity-10">📰</div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[article.category] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
            {article.category}
          </span>
          {platform && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${platform.color} ${platform.textColor} ${platform.borderColor}`}>
              {platform.name}
            </span>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className={`text-slate-100 font-bold leading-snug mb-2 ${featured ? 'text-lg' : 'text-sm'}`}>{article.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
        <div className="mt-auto flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
          <span className="ml-auto">{format(parseISO(article.date), 'MMM d, yyyy')}</span>
        </div>
      </div>
    </div>
  );
};

const CATEGORIES = ['All', 'News', 'Article', 'Guide', 'Review'];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePlatform, setActivePlatform] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return NEWS_ARTICLES.filter(a => {
      const matchCat = activeCategory === 'All' || a.category === activeCategory;
      const matchPlat = activePlatform === 'all' || a.platform === activePlatform;
      const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchPlat && matchSearch;
    });
  }, [activeCategory, activePlatform, search]);

  const featured = filtered.filter(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight mb-2">📰 News & Articles</h1>
        <p className="text-slate-400">Gaming news, reviews, guides and more</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#1a1a24] border border-[#2d2d3d] text-slate-100 placeholder-slate-500 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-violet-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-violet-600 text-white' : 'bg-[#1a1a24] text-slate-400 border border-[#2d2d3d] hover:text-slate-100 hover:border-violet-500/50'}`}
            >
              {cat}
            </button>
          ))}
          <div className="w-px bg-[#2d2d3d] mx-1" />
          <button
            onClick={() => setActivePlatform('all')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activePlatform === 'all' ? 'bg-violet-600 text-white' : 'bg-[#1a1a24] text-slate-400 border border-[#2d2d3d] hover:text-slate-100 hover:border-violet-500/50'}`}
          >
            All Platforms
          </button>
          {Object.entries(PLATFORMS).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setActivePlatform(key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activePlatform === key ? 'bg-violet-600 text-white' : 'bg-[#1a1a24] text-slate-400 border border-[#2d2d3d] hover:text-slate-100 hover:border-violet-500/50'}`}
            >
              {val.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-100 mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map(a => <ArticleCard key={a.id} article={a} featured />)}
          </div>
        </div>
      )}

      {/* All articles */}
      {rest.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-slate-100 mb-4">Latest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map(a => <ArticleCard key={a.id} article={a} featured={false} />)}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-semibold text-slate-400">No articles found</p>
          <p className="text-sm mt-1">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  );
};

export default News;
