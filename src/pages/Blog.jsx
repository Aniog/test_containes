import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'post-1',
    slug: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common mistakes importers make. Here\'s a practical checklist to verify any Chinese manufacturer before committing.',
    date: 'May 15, 2026',
    readTime: '7 min read',
    imgId: 'blog-img-1a2b',
    titleId: 'blog-title-1',
    descId: 'blog-desc-1',
  },
  {
    id: 'post-2',
    slug: 'aql-inspection-guide',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for product inspections. This guide explains how it works and how to use it to protect your orders.',
    date: 'May 8, 2026',
    readTime: '9 min read',
    imgId: 'blog-img-2c3d',
    titleId: 'blog-title-2',
    descId: 'blog-desc-2',
  },
  {
    id: 'post-3',
    slug: 'sea-freight-vs-air-freight',
    category: 'Shipping & Logistics',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'The right shipping method depends on your product, timeline, and budget. We break down the key differences and when to use each option.',
    date: 'April 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-img-3e4f',
    titleId: 'blog-title-3',
    descId: 'blog-desc-3',
  },
  {
    id: 'post-4',
    slug: 'private-label-china-guide',
    category: 'Private Label',
    title: 'A Practical Guide to Private Label Manufacturing in China',
    excerpt: 'Private labeling in China can be highly profitable — but only if you choose the right factory and manage the process correctly. Here\'s what you need to know.',
    date: 'April 18, 2026',
    readTime: '10 min read',
    imgId: 'blog-img-4g5h',
    titleId: 'blog-title-4',
    descId: 'blog-desc-4',
  },
  {
    id: 'post-5',
    slug: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'After managing thousands of sourcing projects, we\'ve seen the same mistakes repeated by importers at all levels. Here are the most costly ones — and how to avoid them.',
    date: 'April 5, 2026',
    readTime: '8 min read',
    imgId: 'blog-img-5i6j',
    titleId: 'blog-title-5',
    descId: 'blog-desc-5',
  },
  {
    id: 'post-6',
    slug: 'canton-fair-guide',
    category: 'Trade Shows',
    title: 'Canton Fair 2026: A Buyer\'s Guide to Getting the Most Out of It',
    excerpt: 'The Canton Fair is the world\'s largest trade fair. If you\'re attending, preparation is everything. Here\'s how to plan your visit and find the right suppliers.',
    date: 'March 22, 2026',
    readTime: '11 min read',
    imgId: 'blog-img-6k7l',
    titleId: 'blog-title-6',
    descId: 'blog-desc-6',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Insights & Guides</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            China Sourcing Blog
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and tips for global buyers importing from China.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-bg-light rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-bg-surface overflow-hidden">
                  <img
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={featured.imgId}
                    data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                    <span className="bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                  </div>
                  <h2 id={featured.titleId} className="text-2xl font-bold text-text-primary mb-3 leading-snug">
                    {featured.title}
                  </h2>
                  <p id={featured.descId} className="text-text-secondary leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-text-muted text-sm mb-5">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors self-start"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} className="bg-bg-light rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                <div className="h-44 bg-bg-surface overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-primary-light text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-base font-bold text-text-primary mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-text-muted text-xs">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
