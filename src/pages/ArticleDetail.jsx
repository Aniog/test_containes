import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CATEGORY_META = {
  news:    { label: 'News',    color: 'bg-[#1a9fff] text-white' },
  blog:    { label: 'Blog',    color: 'bg-purple-500 text-white' },
  article: { label: 'Article', color: 'bg-teal-500 text-white' },
  review:  { label: 'Review',  color: 'bg-yellow-500 text-black' },
  guide:   { label: 'Guide',   color: 'bg-orange-500 text-white' },
};

const PLATFORM_META = {
  steam:       { label: 'Steam' },
  epic:        { label: 'Epic Games' },
  nintendo:    { label: 'Nintendo' },
  playstation: { label: 'PlayStation' },
  xbox:        { label: 'Xbox' },
  all:         { label: 'All Platforms' },
};

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      const { data: response } = await client
        .from('Blog Articles')
        .select('*')
        .eq('id', Number(id))
        .limit(1);

      const row = response?.data?.list?.[0] ?? null;
      if (!row) {
        setNotFound(true);
      } else {
        setArticle(row);
      }
      setLoading(false);
    }
    fetchArticle();
  }, [id]);

  useEffect(() => {
    if (!loading && article) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, article]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f1923]">
        <div className="max-w-3xl mx-auto px-4 py-24 animate-pulse space-y-6">
          <div className="h-6 bg-[#2a475e] rounded w-1/4" />
          <div className="h-10 bg-[#2a475e] rounded w-3/4" />
          <div className="h-64 bg-[#2a475e] rounded-xl" />
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-[#2a475e] rounded" style={{ width: `${85 - i * 5}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-[#0f1923]">
        <div className="max-w-3xl mx-auto px-4 py-32 text-center">
          <p className="text-[#8f98a0] text-lg mb-6">Article not found.</p>
          <Link to="/articles" className="text-[#1a9fff] hover:text-[#66c0f4] font-medium transition">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const d = article.data ?? {};
  const catMeta = CATEGORY_META[d.category] ?? CATEGORY_META.article;
  const platLabel = PLATFORM_META[d.platform]?.label ?? d.platform ?? '';
  const imgId = `art-detail-${id}-hero`;
  const titleId = `art-detail-${id}-title`;
  const descId = `art-detail-${id}-desc`;

  const readingMins = d.content
    ? Math.max(1, Math.round(d.content.split(/\s+/).length / 200))
    : null;

  return (
    <div className="min-h-screen bg-[#0f1923]" ref={containerRef}>

      {/* Hero image */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          alt={d.title}
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-[#0f1923]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 pb-24 -mt-16 relative z-10">
        {/* Back link */}
        <button
          onClick={() => navigate('/articles')}
          className="flex items-center gap-1.5 text-[#8f98a0] hover:text-[#1a9fff] text-sm font-medium transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </button>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded ${catMeta.color}`}>
            {catMeta.label}
          </span>
          {platLabel && (
            <span className="text-xs font-medium px-2.5 py-1 rounded border border-[#2a475e] text-[#8f98a0]">
              {platLabel}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 id={titleId} className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          {d.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-[#8f98a0] text-sm mb-6 pb-6 border-b border-[#2a475e]">
          {d.author && (
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {d.author}
            </span>
          )}
          {d.published_at && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {d.published_at}
            </span>
          )}
          {readingMins && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {readingMins} min read
            </span>
          )}
        </div>

        {/* Excerpt */}
        {d.excerpt && (
          <p id={descId} className="text-[#c6d4df] text-lg leading-relaxed mb-8 font-medium">
            {d.excerpt}
          </p>
        )}

        {/* Body */}
        {d.content ? (
          <div className="text-[#8f98a0] leading-relaxed space-y-4 whitespace-pre-wrap">
            {d.content}
          </div>
        ) : (
          <p className="text-[#8f98a0] italic">No full content available for this article.</p>
        )}

        {/* Tags */}
        {d.tags?.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[#2a475e] flex flex-wrap gap-2">
            {d.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-[#8f98a0] text-xs bg-[#16202d] border border-[#2a475e] px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
