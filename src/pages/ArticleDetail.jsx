import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Tag, Share2, Bookmark } from 'lucide-react';
import { articles } from '../data/mockData';

const categoryColors = {
  News: 'bg-blue-900/50 text-blue-300 border border-blue-500/30',
  Review: 'bg-purple-900/50 text-purple-300 border border-purple-500/30',
  Article: 'bg-surface-elevated text-text-secondary border border-surface-border',
  Deals: 'bg-green-900/50 text-green-300 border border-green-500/30',
};

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">📭</div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Article Not Found</h2>
        <p className="text-text-muted mb-6">This article doesn't exist or has been removed.</p>
        <Link to="/news" className="inline-flex items-center gap-2 bg-brand text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);

  // Generate fake article body paragraphs
  const bodyParagraphs = [
    article.excerpt,
    `The gaming industry continues to evolve at a rapid pace, and ${article.title} represents one of the most significant developments we've seen this year. Industry analysts have been closely watching this space, and the implications for players worldwide are substantial.`,
    `From a technical standpoint, the advancements showcased here push the boundaries of what we thought possible. Developers have been working tirelessly to deliver experiences that were previously unimaginable, and the results speak for themselves.`,
    `Community reaction has been overwhelmingly positive, with players taking to social media to share their excitement. The discourse around this topic has been rich and varied, reflecting the diverse perspectives within the gaming community.`,
    `Looking ahead, the future appears bright. With continued investment and innovation, we can expect even more groundbreaking developments in the months and years to come. Stay tuned to GameVault for all the latest updates.`,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <article className="lg:col-span-2">
          {/* Back */}
          <Link to="/news" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded border ${categoryColors[article.category] || categoryColors.Article}`}>
              {article.category}
            </span>
            <span className="text-text-muted text-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-text-muted text-sm">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black text-text-primary leading-tight mb-4">
            {article.title}
          </h1>

          {/* Author + actions */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-surface-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-sm">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="text-text-primary font-semibold text-sm">{article.author}</div>
                <div className="text-text-muted text-xs">GameVault Staff Writer</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-surface-card border border-surface-border text-text-muted hover:text-text-primary hover:border-brand/40 transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-surface-card border border-surface-border text-text-muted hover:text-text-primary hover:border-brand/40 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="h-64 md:h-80 bg-gradient-to-br from-surface-elevated to-surface rounded-xl flex items-center justify-center mb-8 border border-surface-border">
            <div className="text-8xl opacity-20">📰</div>
          </div>

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            {bodyParagraphs.map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed mb-5 text-base">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-surface-border">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-sm bg-surface-elevated text-text-muted px-3 py-1 rounded-lg border border-surface-border">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Related articles */}
          {related.length > 0 && (
            <div className="bg-surface-card border border-surface-border rounded-xl p-5">
              <h3 className="text-text-primary font-bold mb-4">Related Articles</h3>
              <div className="space-y-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/news/${rel.id}`}
                    className="group block"
                  >
                    <div className="text-text-primary text-sm font-medium group-hover:text-brand-light transition-colors line-clamp-2 mb-1">
                      {rel.title}
                    </div>
                    <div className="text-text-muted text-xs flex items-center gap-2">
                      <Clock className="w-3 h-3" /> {rel.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="bg-brand/10 border border-brand/30 rounded-xl p-5">
            <h3 className="text-text-primary font-bold mb-2">Stay Updated</h3>
            <p className="text-text-muted text-sm mb-4">Get the latest gaming news delivered to your inbox.</p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 bg-surface-card border border-surface-border rounded-lg text-text-primary placeholder-text-muted text-sm mb-3 focus:outline-none focus:border-brand/50"
            />
            <button className="w-full bg-brand-gradient text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;
