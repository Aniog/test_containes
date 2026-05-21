import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Clock, User, ArrowRight } from 'lucide-react';
import { PLATFORMS } from '../../lib/data';

const categoryColors = {
  News: 'bg-cyan-500/20 text-cyan-400',
  Article: 'bg-violet-500/20 text-violet-400',
  Guide: 'bg-green-500/20 text-green-400',
  Review: 'bg-orange-500/20 text-orange-400',
};

const NewsCard = ({ article }) => {
  const platform = article.platform ? PLATFORMS[article.platform] : null;

  return (
    <div className="bg-[#1a1a24] border border-[#2d2d3d] rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="h-36 bg-gradient-to-br from-[#22222f] to-[#1a1a24] flex items-center justify-center relative">
        <div className="text-5xl opacity-10">📰</div>
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-slate-700 text-slate-300'}`}>
            {article.category}
          </span>
          {platform && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${platform.color} ${platform.textColor} ${platform.borderColor}`}>
              {platform.name}
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-slate-100 font-semibold text-sm leading-snug mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>

        <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <span>{format(parseISO(article.date), 'MMM d')}</span>
        </div>
      </div>
    </div>
  );
};

const HomeLatestNews = ({ articles }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">📰 Latest News & Articles</h2>
          <p className="text-slate-400 text-sm mt-1">Stay up to date with the gaming world</p>
        </div>
        <Link to="/news" className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1 transition-colors">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default HomeLatestNews;
