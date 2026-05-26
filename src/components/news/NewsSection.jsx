import { useState } from 'react';
import { Clock, User, ArrowRight, Bookmark } from 'lucide-react';

const CATEGORIES = ['all', 'news', 'blog', 'review', 'guide', 'announcement'];

const CATEGORY_COLORS = {
  news: 'bg-cyan-900/40 text-cyan-400 border-cyan-700/40',
  blog: 'bg-violet-900/40 text-violet-400 border-violet-700/40',
  review: 'bg-yellow-900/40 text-yellow-400 border-yellow-700/40',
  guide: 'bg-green-900/40 text-green-400 border-green-700/40',
  announcement: 'bg-orange-900/40 text-orange-400 border-orange-700/40',
};

const ARTICLES = [
  {
    id: 1, category: 'news', platform: 'steam',
    title: 'Steam Summer Sale 2026: Everything You Need to Know',
    summary: 'Valve has officially announced the dates for this year\'s massive Summer Sale. Here\'s a complete breakdown of what to expect, including leaked deals and must-buy titles.',
    author: 'Alex Chen', published_at: '2026-05-24T10:00:00Z', read_time: 5, is_featured: true,
  },
  {
    id: 2, category: 'review', platform: 'playstation',
    title: 'Ghost of Tsushima Director\'s Cut — A Masterpiece Revisited',
    summary: 'We revisit Sucker Punch\'s samurai epic with fresh eyes. Does it still hold up in 2026? Spoiler: absolutely yes.',
    author: 'Maria Santos', published_at: '2026-05-23T14:00:00Z', read_time: 8, is_featured: false,
  },
  {
    id: 3, category: 'announcement', platform: 'epic',
    title: 'Epic Games Reveals Free Games for June 2026',
    summary: 'Epic\'s monthly free game lineup for June has been revealed, and it\'s one of the strongest months yet with two AAA titles up for grabs.',
    author: 'James Park', published_at: '2026-05-22T09:00:00Z', read_time: 3, is_featured: false,
  },
  {
    id: 4, category: 'guide', platform: 'general',
    title: 'How to Get the Best Deals on Nintendo Switch Games',
    summary: 'A comprehensive guide to finding discounts, using price trackers, and timing your purchases to save the most money on Nintendo eShop.',
    author: 'Priya Nair', published_at: '2026-05-21T11:00:00Z', read_time: 6, is_featured: false,
  },
  {
    id: 5, category: 'news', platform: 'xbox',
    title: 'Xbox Game Pass Adds 10 New Titles This Month',
    summary: 'Microsoft has announced the latest wave of Game Pass additions, including several day-one releases and beloved indie titles.',
    author: 'Tom Walker', published_at: '2026-05-20T16:00:00Z', read_time: 4, is_featured: false,
  },
  {
    id: 6, category: 'blog', platform: 'general',
    title: 'The Rise of Indie Games: Why Small Studios Are Winning',
    summary: 'From Hollow Knight to Hades, indie developers are consistently outperforming AAA studios in creativity and player satisfaction. We explore why.',
    author: 'Sarah Kim', published_at: '2026-05-19T13:00:00Z', read_time: 7, is_featured: false,
  },
];

const PLATFORM_LABELS = {
  steam: 'Steam', epic: 'Epic', nintendo: 'Nintendo',
  playstation: 'PlayStation', xbox: 'Xbox', general: 'General',
};

const timeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days} days ago`;
};

const FeaturedArticle = ({ article }) => (
  <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl overflow-hidden hover:border-violet-500/60 transition-all duration-200 group md:col-span-2">
    <div className="relative h-56 md:h-72 bg-gradient-to-br from-[#13131f] to-[#0d0d14] overflow-hidden">
      <div
        className="w-full h-full"
        data-strk-bg-id={`article-featured-bg-${article.id}`}
        data-strk-bg={`[article-featured-title-${article.id}] [article-featured-summary-${article.id}] gaming`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${CATEGORY_COLORS[article.category]}`}>
          {article.category}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-[#0d0d14]/60 text-gray-400 border-gray-700/40">
          {PLATFORM_LABELS[article.platform]}
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 id={`article-featured-title-${article.id}`} className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p id={`article-featured-summary-${article.id}`} className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {article.summary}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-500 text-xs">
          <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.read_time} min read</span>
          <span>{timeAgo(article.published_at)}</span>
        </div>
        <button className="text-violet-400 hover:text-violet-300 text-xs font-semibold flex items-center gap-1 transition-colors">
          Read more <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

const ArticleCard = ({ article }) => (
  <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl overflow-hidden hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-200 group flex flex-col">
    <div className="relative h-40 bg-gradient-to-br from-[#13131f] to-[#0d0d14] overflow-hidden">
      <div
        className="w-full h-full"
        data-strk-bg-id={`article-bg-${article.id}`}
        data-strk-bg={`[article-title-${article.id}] gaming`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="400"
      />
      <div className="absolute top-2 left-2">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${CATEGORY_COLORS[article.category]}`}>
          {article.category}
        </span>
      </div>
      <button className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-[#0d0d14]/70 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
        <Bookmark className="w-3.5 h-3.5" />
      </button>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 id={`article-title-${article.id}`} className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-violet-300 transition-colors">
        {article.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
        {article.summary}
      </p>
      <div className="flex items-center justify-between text-gray-600 text-xs mt-auto pt-3 border-t border-[#2a2a3e]">
        <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.read_time}m · {timeAgo(article.published_at)}</span>
      </div>
    </div>
  </div>
);

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.is_featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <section id="news" className="py-16 px-4 md:px-8 bg-[#13131f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Latest Content</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">News, Blog & Reviews</h2>
            <p className="text-gray-500 text-sm mt-1">Stay up to date with the gaming world</p>
          </div>
          <a href="#" className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors self-start md:self-auto">
            View all articles →
          </a>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border capitalize transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white border-transparent'
                  : 'bg-[#1a1a2e] text-gray-400 border-[#2a2a3e] hover:border-violet-500 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured && <FeaturedArticle article={featured} />}
            {rest.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">No articles found for this category.</div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
