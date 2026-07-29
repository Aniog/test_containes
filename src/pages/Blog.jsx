import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Sourcing',
    date: 'July 15, 2026',
    readTime: '7 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used for pre-shipment inspections worldwide. Learn how it works, what sampling levels mean, and how to set the right AQL for your products.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping & Logistics',
    date: 'June 28, 2026',
    readTime: '6 min read',
    title: 'Incoterms 2020 Guide for China Importers: FOB, CIF, EXW Explained',
    excerpt: 'Choosing the wrong Incoterm can cost you thousands. This practical guide explains the most common Incoterms used in China trade and which one is right for your situation.',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'private-label-china',
    category: 'Private Label',
    date: 'June 18, 2026',
    readTime: '8 min read',
    title: 'Starting a Private Label Business with Chinese Manufacturers: A Step-by-Step Guide',
    excerpt: 'Private labeling from China is one of the most effective ways to build a product brand. This guide walks you through finding OEM factories, developing samples, and managing your first production run.',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
    imgId: 'blog-privatelabel-img-j1k2l3',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    date: 'June 5, 2026',
    readTime: '6 min read',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Most sourcing problems are preventable. From skipping factory audits to misunderstanding payment terms, here are the seven mistakes importers make most often — and how to avoid them.',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-mistakes-img-m4n5o6',
  },
  {
    id: 'ce-certification-guide',
    category: 'Compliance',
    date: 'May 22, 2026',
    readTime: '7 min read',
    title: 'CE Certification for Products Made in China: What You Need to Know',
    excerpt: 'If you\'re importing products into the EU, CE marking is mandatory for many product categories. This guide explains what CE certification covers, how to get it, and how to work with Chinese factories to ensure compliance.',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping & Logistics', 'Private Label', 'Sourcing Tips', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A2332] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-[#1A3C6E] text-white border-[#1A3C6E]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#1A3C6E] hover:text-[#1A3C6E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden bg-slate-100">
                  <img
                    alt={posts[0].title}
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#C0392B]/10 text-[#C0392B] text-xs font-semibold px-2.5 py-1 rounded-full">{posts[0].category}</span>
                    <span className="text-slate-400 text-xs">Featured</span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug">{posts[0].title}</h2>
                  <p id={posts[0].descId} className="text-slate-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span>{posts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{posts[0].readTime}</span>
                  </div>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#152f58] transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-0.5 rounded-full">{post.category}</span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-slate-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="text-[#1A3C6E] text-sm font-semibold hover:text-[#152f58] transition-colors flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-600 mb-7">Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent"
            />
            <button className="bg-[#1A3C6E] hover:bg-[#152f58] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
