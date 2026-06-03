import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { articles, categoryColors } from '@/data/articles.data';

const ScienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const article = articles.find((a) => a.id === id);
  const currentIndex = articles.findIndex((a) => a.id === id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — MicroCosmos`;
    } else {
      document.title = 'Article Not Found — MicroCosmos';
    }
    return () => {
      document.title = 'MicroCosmos — Explore the Invisible World';
    };
  }, [article]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-cosmos-bg flex flex-col items-center justify-center pt-20 px-4">
        <p className="text-cosmos-muted text-lg mb-6">找不到该文章。</p>
        <Link
          to="/science"
          className="inline-flex items-center gap-2 text-cosmos-teal hover:text-cosmos-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> 返回科学页面
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cosmos-bg pt-24 pb-20">
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] max-h-[520px] overflow-hidden">
        <img
          alt={article.title}
          data-strk-img-id={`detail-hero-${article.imgId}`}
          data-strk-img={`[detail-desc-${article.id}] [detail-title-${article.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-bg/30 via-transparent to-cosmos-bg" />
      </div>

      {/* Hidden text refs for image query */}
      <span id={`detail-title-${article.id}`} className="sr-only">{article.title}</span>
      <span id={`detail-desc-${article.id}`} className="sr-only">{article.desc}</span>

      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Back link */}
        <Link
          to="/science"
          className="inline-flex items-center gap-2 text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors mb-8 mt-2 block"
        >
          <ArrowLeft className="w-4 h-4" />
          返回所有文章
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <span className="text-cosmos-dim text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime} read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-cosmos-text leading-tight mb-6">
          {article.title}
        </h1>

        {/* Lead paragraph */}
        <p className="text-cosmos-muted text-lg leading-relaxed border-l-2 border-cosmos-teal pl-5 mb-10">
          {article.desc}
        </p>

        {/* Divider */}
        <div className="border-t border-cosmos-border mb-10" />

        {/* Body */}
        <div className="space-y-6">
          {article.body.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={i}
                  className="text-xl md:text-2xl font-bold text-cosmos-text mt-10 mb-2"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={i} className="text-cosmos-muted leading-relaxed text-base md:text-lg">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-cosmos-border mt-14 mb-10" />

        {/* Prev / Next navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              to={`/science/${prevArticle.id}`}
              className="group bg-cosmos-surface border border-cosmos-border rounded-2xl p-5 hover:border-cosmos-teal/40 hover:shadow-[0_0_20px_rgba(0,212,200,0.08)] transition-all duration-300 flex flex-col gap-2"
            >
              <span className="text-cosmos-dim text-xs flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> 上一篇
              </span>
              <span className="text-cosmos-text text-sm font-semibold leading-snug group-hover:text-cosmos-teal transition-colors line-clamp-2">
                {prevArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              to={`/science/${nextArticle.id}`}
              className="group bg-cosmos-surface border border-cosmos-border rounded-2xl p-5 hover:border-cosmos-teal/40 hover:shadow-[0_0_20px_rgba(0,212,200,0.08)] transition-all duration-300 flex flex-col gap-2 sm:text-right"
            >
              <span className="text-cosmos-dim text-xs flex items-center gap-1 sm:justify-end">
                下一篇 <ArrowRight className="w-3 h-3" />
              </span>
              <span className="text-cosmos-text text-sm font-semibold leading-snug group-hover:text-cosmos-teal transition-colors line-clamp-2">
                {nextArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to all */}
        <div className="text-center mt-10">
          <Link
            to="/science"
            className="inline-flex items-center gap-2 border border-cosmos-teal text-cosmos-teal font-semibold px-8 py-3 rounded-full hover:bg-cosmos-teal hover:text-cosmos-bg transition-all duration-200"
          >
            查看所有文章
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScienceDetail;
