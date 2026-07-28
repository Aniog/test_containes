import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '8 min read',
    titleId: 'blog-supplier-verify-title',
    descId: 'blog-supplier-verify-desc',
    imgId: 'blog-supplier-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. This article explains how AQL sampling works, what the numbers mean, and how to set the right inspection level for your products.',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping & Logistics',
    title: 'Incoterms Guide for China Importers: FOB, CIF, EXW Explained',
    excerpt: 'Choosing the wrong Incoterm can cost you money and create unexpected liability. This practical guide explains the most common Incoterms used in China trade and which one is right for your situation.',
    date: '2026-06-28',
    readTime: '7 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'private-label-china',
    category: 'Sourcing Strategy',
    title: 'Private Label Manufacturing in China: A Step-by-Step Guide',
    excerpt: 'Private labeling in China can be highly profitable when done correctly. This guide walks through the entire process from product selection and factory sourcing to branding, packaging, and shipping.',
    date: '2026-06-18',
    readTime: '10 min read',
    titleId: 'blog-private-label-title',
    descId: 'blog-private-label-desc',
    imgId: 'blog-private-label-img-j1k2l3',
  },
  {
    id: 'moq-negotiation',
    category: 'Sourcing Strategy',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. This article shares practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
    date: '2026-06-05',
    readTime: '5 min read',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-m4n5o6',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Strategy',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Many first-time importers make the same costly mistakes when sourcing from China. This article covers the seven most common errors and practical steps to avoid them.',
    date: '2026-05-22',
    readTime: '9 min read',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-mistakes-img-p7q8r9',
  },
];

const categories = ['All', 'Sourcing Strategy', 'Quality Control', 'Supplier Verification', 'Shipping & Logistics'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Insights</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides and industry insights for global buyers sourcing from China.
              No fluff — just actionable information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-neutral-100">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-2 py-1 rounded">
                    Featured
                  </span>
                  <span className="bg-brand-navy/10 text-brand-navy text-xs font-semibold px-2 py-1 rounded">
                    {featured.category}
                  </span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="text-neutral-600 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-neutral-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-brand-navy/10 text-brand-navy text-xs font-semibold px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="font-semibold text-neutral-900 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to="/blog"
                      className="text-brand-blue text-xs font-semibold hover:text-brand-navy transition-colors flex items-center gap-1"
                    >
                      Read <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Sourcing Insights in Your Inbox
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-sky"
            />
            <button className="bg-brand-red text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
