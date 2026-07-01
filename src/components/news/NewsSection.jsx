import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Bookmark, TrendingUp } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const categories = ['All', 'News', 'Reviews', 'Guides', 'Deals'];

const articles = [
  {
    id: 'art-1', category: 'News',
    title: 'Steam Summer Sale 2026 Kicks Off with Record-Breaking Discounts',
    excerpt: 'Valve has launched its annual Summer Sale featuring over 14,000 discounted titles, with some games hitting all-time low prices.',
    author: 'Alex Chen', date: '2026-07-01', readTime: '3 min',
    featured: true,
    titleId: 'art-1-title', descId: 'art-1-desc',
    imgId: 'art-img-1-aa1bb2',
  },
  {
    id: 'art-2', category: 'Reviews',
    title: 'Elden Ring: Shadow of the Erdtree DLC — A Masterpiece Expanded',
    excerpt: 'FromSoftware delivers yet another punishing yet rewarding experience in this massive expansion to the award-winning Elden Ring.',
    author: 'Sarah Kim', date: '2026-06-28', readTime: '8 min',
    featured: false,
    titleId: 'art-2-title', descId: 'art-2-desc',
    imgId: 'art-img-2-cc3dd4',
  },
  {
    id: 'art-3', category: 'News',
    title: 'Xbox Game Pass Adds 15 New Titles This Month Including Day-One Releases',
    excerpt: 'Microsoft continues to bolster its subscription service with a strong lineup of first-party and third-party titles.',
    author: 'Mike Torres', date: '2026-06-30', readTime: '4 min',
    featured: false,
    titleId: 'art-3-title', descId: 'art-3-desc',
    imgId: 'art-img-3-ee5ff6',
  },
  {
    id: 'art-4', category: 'Guides',
    title: 'How to Get the Most Out of PlayStation Plus Premium in 2026',
    excerpt: 'A comprehensive guide to maximizing your PlayStation Plus Premium subscription with tips on cloud streaming, game trials, and exclusive perks.',
    author: 'Lisa Park', date: '2026-06-25', readTime: '6 min',
    featured: false,
    titleId: 'art-4-title', descId: 'art-4-desc',
    imgId: 'art-img-4-gg7hh8',
  },
  {
    id: 'art-5', category: 'News',
    title: 'Nintendo Direct July 2026: Every Game Announced',
    excerpt: 'Nintendo surprised fans with a packed Direct presentation revealing new Switch 2 exclusives and beloved franchise returns.',
    author: 'Tom Nakamura', date: '2026-07-01', readTime: '5 min',
    featured: false,
    titleId: 'art-5-title', descId: 'art-5-desc',
    imgId: 'art-img-5-ii9jj0',
  },
  {
    id: 'art-6', category: 'Deals',
    title: 'Epic Games Free Games This Week: Two AAA Titles Up for Grabs',
    excerpt: 'Epic continues its generous free game program with two highly-rated titles available for free claim this week only.',
    author: 'Emma Wilson', date: '2026-06-29', readTime: '2 min',
    featured: false,
    titleId: 'art-6-title', descId: 'art-6-desc',
    imgId: 'art-img-6-kk1ll2',
  },
];

const categoryColors = {
  News: 'bg-game-cyan/20 text-game-cyan',
  Reviews: 'bg-game-purple/20 text-game-purple',
  Guides: 'bg-game-amber/20 text-game-amber',
  Deals: 'bg-game-red/20 text-game-red',
};

function FeaturedArticle({ article }) {
  return (
    <div className="bg-game-card border border-game-border rounded-xl overflow-hidden hover:border-game-purple/60 transition-all duration-200 shadow-lg shadow-black/40 group md:col-span-2 lg:col-span-2 flex flex-col md:flex-row">
      <div className="relative overflow-hidden md:w-1/2 flex-shrink-0">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.descId}] [${article.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-52 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 bg-game-elevated"
        />
        <span className="absolute top-3 left-3 bg-game-purple text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> Featured
        </span>
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <h3 id={article.titleId} className="text-game-text font-bold text-xl mt-3 mb-2 leading-snug">
            {article.title}
          </h3>
          <p id={article.descId} className="text-game-muted text-sm leading-relaxed">
            {article.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-game-border">
          <div className="flex items-center gap-3 text-game-dim text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDistanceToNow(new Date(article.date), { addSuffix: true })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime} read
            </span>
          </div>
          <button className="flex items-center gap-1 text-game-cyan text-xs font-semibold hover:text-game-purple transition-colors">
            Read more <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="bg-game-card border border-game-border rounded-xl overflow-hidden hover:border-game-purple/60 transition-all duration-200 shadow-lg shadow-black/40 group flex flex-col">
      <div className="relative overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={article.imgId}
          data-strk-img={`[${article.descId}] [${article.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300 bg-game-elevated"
        />
        <button className="absolute top-2 right-2 w-7 h-7 bg-game-bg/70 backdrop-blur-sm rounded-md flex items-center justify-center text-game-muted hover:text-game-text transition-colors">
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md self-start mb-2 ${categoryColors[article.category]}`}>
          {article.category}
        </span>
        <h3 id={article.titleId} className="text-game-text font-bold text-sm leading-snug mb-2 flex-1">
          {article.title}
        </h3>
        <p id={article.descId} className="text-game-muted text-xs leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-game-border">
          <div className="flex items-center gap-2 text-game-dim text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
            <span>·</span>
            <span>{article.author}</span>
          </div>
          <button className="text-game-cyan text-xs font-semibold hover:text-game-purple transition-colors flex items-center gap-1">
            Read <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="news" ref={containerRef} className="py-20 px-4 md:px-8 bg-game-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-game-cyan text-xs font-semibold uppercase tracking-wider mb-2">Latest Updates</div>
            <h2 className="text-3xl md:text-4xl font-bold text-game-text tracking-tight">News & Articles</h2>
            <p className="text-game-muted mt-2 text-sm">Stay up to date with the gaming world — reviews, guides, and breaking news.</p>
          </div>
          <button className="text-game-cyan text-sm font-medium hover:text-game-purple transition-colors flex items-center gap-1 self-start md:self-auto">
            All articles <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured && <FeaturedArticle article={featured} />}
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
