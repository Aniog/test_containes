import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, Tag, ArrowRight } from 'lucide-react';
import { articles, categories } from '../data/mockData';

const categoryColors = {
  News: 'bg-blue-900/50 text-blue-300 border border-blue-500/30',
  Review: 'bg-purple-900/50 text-purple-300 border border-purple-500/30',
  Article: 'bg-surface-elevated text-text-secondary border border-surface-border',
  Deals: 'bg-green-900/50 text-green-300 border border-green-500/30',
};

const ArticleCard = ({ article, large = false }) => (
  <Link
    to={`/news/${article.id}`}
    className={`group block bg-surface-card border border-surface-border rounded-xl overflow-hidden hover:border-brand/40 hover:shadow-glow-sm transition-all duration-300 ${large ? 'md:flex' : ''}`}
  >
    <div className={`relative bg-gradient-to-br from-surface-elevated to-surface flex items-center justify-center overflow-hidden ${large ? 'md:w-72 h-48 md:h-auto flex-shrink-0' : 'h-44'}`}>
      <div className="text-6xl opacity-10">📰</div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-card/60 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <span className={`text-xs font-bold px-2 py-0.5 rounded ${categoryColors[article.category] || categoryColors.Article}`}>
          {article.category}
        </span>
      </div>
    </div>

    <div className="p-5 flex flex-col justify-between">
      <div>
        <h3 className={`text-text-primary font-bold leading-tight group-hover:text-brand-light transition-colors mb-2 ${large ? 'text-xl' : 'text-base'} line-clamp-2`}>
          {article.title}
        </h3>
        <p className="text-text-muted text-sm line-clamp-3 mb-4">{article.excerpt}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs bg-surface-elevated text-text-muted px-2 py-0.5 rounded">
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs text-text-muted">
        <span className="font-semibold text-text-secondary">{article.author}</span>
        <span>·</span>
        <span>{article.date}</span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </span>
      </div>
    </div>
  </Link>
);

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.find((a) => a.isFeatured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-text-primary mb-2">News & Articles</h1>
        <p className="text-text-muted">The latest gaming news, reviews, and in-depth articles</p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface-card border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-brand text-white'
                  : 'bg-surface-card border border-surface-border text-text-secondary hover:text-text-primary hover:border-brand/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-text-muted">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-semibold text-text-secondary">No articles found</p>
          <p className="text-sm mt-1">Try a different search or category</p>
        </div>
      ) : (
        <>
          {/* Featured article */}
          {featured && (
            <div className="mb-6">
              <ArticleCard article={featured} large />
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default News;
