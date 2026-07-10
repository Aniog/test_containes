import { useEffect, useState, useCallback } from 'react';
import { Clock, ArrowRight, Tag, User, ChevronDown, Loader2, Gamepad2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fetchArticles, CATEGORIES } from '@/api/articles';

const PAGE_SIZE = 6;

// Normalise a DB row into the shape the UI expects
function normaliseArticle(row) {
  const d = row.data ?? {};
  const id = String(row.id);
  return {
    id,
    category: d.category ?? 'News',
    title: d.title ?? '',
    excerpt: d.excerpt ?? '',
    body: d.body ?? '',
    author: d.author ?? '',
    date: d.date ?? new Date().toISOString().slice(0, 10),
    readTime: d.read_time ?? '',
    featured: d.featured ?? false,
    tags: Array.isArray(d.tags) ? d.tags : [],
  };
}

const categoryColors = {
  News:     'bg-game-cyan/20 text-game-cyan border-game-cyan/30',
  Reviews:  'bg-game-purple/20 text-game-purple border-game-purple/30',
  Guides:   'bg-game-amber/20 text-game-amber border-game-amber/30',
  Deals:    'bg-game-red/20 text-game-red border-game-red/30',
  Features: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

const categoryGradients = {
  News:     'from-cyan-900/60 via-slate-900 to-slate-950',
  Reviews:  'from-purple-900/60 via-slate-900 to-slate-950',
  Guides:   'from-amber-900/60 via-slate-900 to-slate-950',
  Deals:    'from-red-900/60 via-slate-900 to-slate-950',
  Features: 'from-emerald-900/60 via-slate-900 to-slate-950',
};

function ArticleCoverPlaceholder({ category, className = '' }) {
  const gradient = categoryGradients[category] ?? 'from-slate-800 via-slate-900 to-slate-950';
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      <Gamepad2 className="w-10 h-10 text-white/10" />
    </div>
  );
}

// ── Hero Article ─────────────────────────────────────────────────────────────
function HeroArticle({ article, onSelect }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group border border-game-border hover:border-game-purple/60 transition-all duration-300 shadow-2xl shadow-black/50"
      onClick={() => onSelect(article)}
    >
      <div className="relative h-72 md:h-96 overflow-hidden">
        <ArticleCoverPlaceholder category={article.category} className="group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-game-bg via-game-bg/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <span className="text-game-dim text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime} read
          </span>
        </div>
        <h2 id={article.titleId} className="text-game-text font-extrabold text-2xl md:text-3xl leading-tight mb-2">
          {article.title}
        </h2>
        <p id={article.descId} className="text-game-muted text-sm leading-relaxed line-clamp-2 mb-4 max-w-2xl">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-game-dim text-xs">
            <User className="w-3.5 h-3.5" />
            <span>{article.author}</span>
            <span>·</span>
            <span>{formatDistanceToNow(new Date(article.date), { addSuffix: true })}</span>
          </div>
          <span className="flex items-center gap-1 text-game-cyan text-sm font-semibold group-hover:text-game-purple transition-colors">
            Read article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Article Card ──────────────────────────────────────────────────────────────
function ArticleCard({ article, onSelect }) {
  return (
    <div
      className="bg-game-card border border-game-border rounded-xl overflow-hidden hover:border-game-purple/60 transition-all duration-200 shadow-lg shadow-black/40 group flex flex-col cursor-pointer"
      onClick={() => onSelect(article)}
    >
      <div className="relative overflow-hidden h-44">
        <ArticleCoverPlaceholder category={article.category} className="group-hover:scale-105 transition-transform duration-300" />
        <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-md border ${categoryColors[article.category]}`}>
          {article.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-game-text font-bold text-sm leading-snug mb-2 flex-1 group-hover:text-game-cyan transition-colors">
          {article.title}
        </h3>
        <p className="text-game-muted text-xs leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-0.5 text-game-dim text-xs bg-game-elevated px-2 py-0.5 rounded-full">
              <Tag className="w-2.5 h-2.5" /> {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-game-border">
          <div className="flex items-center gap-2 text-game-dim text-xs">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{article.author}</span>
          </div>
          <span className="text-game-cyan text-xs font-semibold group-hover:text-game-purple transition-colors flex items-center gap-1">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Article Reader Modal ──────────────────────────────────────────────────────
function ArticleReader({ article, onClose }) {
  // Render markdown-style bold (**text**) in body
  const renderBody = (text) =>
    text.split('\n\n').map((para, i) => {
      const parts = para.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-game-muted text-sm leading-relaxed mb-4">
          {parts.map((part, j) =>
            j % 2 === 1
              ? <strong key={j} className="text-game-text font-semibold">{part}</strong>
              : part
          )}
        </p>
      );
    });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4">
      <div className="bg-game-card border border-game-border rounded-2xl w-full max-w-2xl shadow-2xl shadow-black/60">
        {/* Cover */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <ArticleCoverPlaceholder category={article.category} />
          <div className="absolute inset-0 bg-gradient-to-t from-game-card/90 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-game-bg/80 backdrop-blur-sm rounded-full flex items-center justify-center text-game-muted hover:text-game-text transition-colors text-lg font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className="text-game-dim text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime} read
            </span>
          </div>

          <h2 className="text-game-text font-extrabold text-xl md:text-2xl leading-tight mb-3">
            {article.title}
          </h2>

          <div className="flex items-center gap-3 text-game-dim text-xs mb-6 pb-4 border-b border-game-border">
            <User className="w-3.5 h-3.5" />
            <span className="text-game-muted font-medium">{article.author}</span>
            <span>·</span>
            <span>{formatDistanceToNow(new Date(article.date), { addSuffix: true })}</span>
          </div>

          <p className="text-game-cyan text-sm font-medium italic mb-5 leading-relaxed">
            {article.excerpt}
          </p>

          <div>{renderBody(article.body)}</div>

          <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-game-border">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-game-dim text-xs bg-game-elevated px-2.5 py-1 rounded-full border border-game-border">
                <Tag className="w-2.5 h-2.5" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function ArticleSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadArticles = useCallback(async () => {
    setLoading(true);
    try {
      const rows = await fetchArticles();
      setArticles(rows.map(normaliseArticle));
    } catch (err) {
      console.error('Failed to load articles:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadArticles(); }, [loadArticles]);

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const hero = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== hero?.id).slice(0, visibleCount);
  const hasMore = filtered.filter((a) => a.id !== hero?.id).length > visibleCount;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory]);

  return (
    <>
      <section id="articles" className="py-20 px-4 md:px-8 bg-game-elevated">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-game-purple text-xs font-semibold uppercase tracking-wider mb-2">In-Depth Reading</div>
              <h2 className="text-3xl md:text-4xl font-bold text-game-text tracking-tight">Articles</h2>
              <p className="text-game-muted mt-2 text-sm">
                Deep dives, reviews, guides, and features — all in one place.
              </p>
            </div>
            <div className="text-game-dim text-sm">
              {loading ? '…' : `${filtered.length} article${filtered.length !== 1 ? 's' : ''}`}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-game-purple text-white border-transparent'
                    : 'bg-game-card border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-game-purple animate-spin" />
            </div>
          )}

          {/* Hero */}
          {!loading && hero && (
            <div className="mb-10">
              <HeroArticle article={hero} onSelect={setSelectedArticle} />
            </div>
          )}

          {/* Grid */}
          {!loading && rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} onSelect={setSelectedArticle} />
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && filtered.length === 0 && (
            <div className="text-center py-20 text-game-dim">No articles in this category yet.</div>
          )}

          {/* Load More */}
          {!loading && hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="flex items-center gap-2 px-6 py-3 bg-game-card border border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60 rounded-full text-sm font-medium transition-all duration-200"
              >
                Load more articles <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Reader */}
      {selectedArticle && (
        <ArticleReader article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </>
  );
}
