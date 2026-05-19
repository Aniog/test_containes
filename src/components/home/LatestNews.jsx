import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { articles } from '../../data/mockData';
import SectionHeader from '../ui/SectionHeader';

const categoryColors = {
  News: 'bg-blue-900/50 text-blue-300 border-blue-500/30',
  Review: 'bg-purple-900/50 text-purple-300 border-purple-500/30',
  Article: 'bg-surface-elevated text-text-secondary border-surface-border',
  Deals: 'bg-green-900/50 text-green-300 border-green-500/30',
};

const ArticleCard = ({ article, featured = false }) => (
  <Link
    to={`/news/${article.id}`}
    className={`group block bg-surface-card border border-surface-border rounded-xl overflow-hidden hover:border-brand/40 hover:shadow-glow-sm transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}
  >
    {/* Image area */}
    <div className={`relative bg-gradient-to-br from-surface-elevated to-surface ${featured ? 'h-52' : 'h-36'} flex items-center justify-center overflow-hidden`}>
      <div className="text-5xl opacity-10">📰</div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <span className={`text-xs font-bold px-2 py-0.5 rounded border ${categoryColors[article.category] || categoryColors.Article}`}>
          {article.category}
        </span>
      </div>
    </div>

    <div className="p-4">
      <h3 className={`text-text-primary font-bold leading-tight group-hover:text-brand-light transition-colors ${featured ? 'text-lg' : 'text-sm'} line-clamp-2 mb-2`}>
        {article.title}
      </h3>
      {featured && (
        <p className="text-text-muted text-sm line-clamp-2 mb-3">{article.excerpt}</p>
      )}
      <div className="flex items-center gap-3 text-text-muted text-xs">
        <span className="font-medium text-text-secondary">{article.author}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </span>
      </div>
    </div>
  </Link>
);

const LatestNews = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
    <SectionHeader
      title="Latest News & Articles"
      subtitle="Stay up to date with the gaming world"
      action={
        <Link to="/news" className="flex items-center gap-1 text-brand-light hover:text-brand text-sm font-medium transition-colors">
          All Articles <ArrowRight className="w-4 h-4" />
        </Link>
      }
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Featured article spans 2 cols */}
      <ArticleCard article={articles[0]} featured />
      {/* Regular articles */}
      {articles.slice(1, 4).map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  </section>
);

export default LatestNews;
