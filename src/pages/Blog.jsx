import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'factory-audit-guide',
    category: 'Factory Verification',
    title: 'How to Audit a Chinese Factory: A Practical Guide for Importers',
    excerpt: 'Before placing a large order with a new Chinese supplier, a factory audit is one of the most important steps you can take. This guide covers what to check, what questions to ask, and what red flags to watch for.',
    date: 'June 10, 2026',
    readTime: '8 min read',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
    imgId: 'blog-factory-audit-img-a1b2c3',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling: What It Means for Your Shipment',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by QC inspectors to determine how many units to inspect and how many defects are acceptable. Here\'s how it works and how to set the right levels for your products.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This guide explains the most common Incoterms used in China trade and when to use each one.',
    date: 'May 15, 2026',
    readTime: '7 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'alibaba-verification',
    category: 'Supplier Sourcing',
    title: 'How to Verify a Supplier on Alibaba: Beyond Gold Supplier Status',
    excerpt: 'Alibaba\'s Gold Supplier badge is not a guarantee of quality or reliability. Here\'s a practical checklist for verifying Chinese suppliers before you commit to an order.',
    date: 'May 3, 2026',
    readTime: '9 min read',
    titleId: 'blog-alibaba-title',
    descId: 'blog-alibaba-desc',
    imgId: 'blog-alibaba-img-j1k2l3',
  },
  {
    id: 'ce-certification',
    category: 'Compliance',
    title: 'CE Certification for Products Made in China: What Importers Need to Know',
    excerpt: 'If you\'re importing products into the EU, CE marking is mandatory for many product categories. This guide explains what CE certification means, who is responsible, and how to verify it.',
    date: 'April 20, 2026',
    readTime: '10 min read',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-m4n5o6',
  },
  {
    id: 'sea-freight-guide',
    category: 'Shipping',
    title: 'Sea Freight from China: FCL vs LCL — Which Is Right for Your Order?',
    excerpt: 'Sea freight is the most cost-effective way to ship large orders from China. But should you book a full container (FCL) or share space with other shippers (LCL)? Here\'s how to decide.',
    date: 'April 8, 2026',
    readTime: '6 min read',
    titleId: 'blog-seafreight-title',
    descId: 'blog-seafreight-desc',
    imgId: 'blog-seafreight-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Factory Verification', 'Quality Control', 'Shipping', 'Compliance'];

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
      {/* Hero */}
      <section className="bg-[#1B2B4B] py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Sourcing from China: Guides & Insights</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical guides for importers on supplier verification, quality control, shipping, and compliance when sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-[#1B2B4B] text-white border-[#1B2B4B]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#1B2B4B] hover:text-[#1B2B4B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-10">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    alt={posts[0].title}
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">Featured</span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-xl md:text-2xl font-bold text-[#1B2B4B] mb-3">{posts[0].title}</h2>
                  <p id={posts[0].descId} className="text-gray-600 text-sm leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-5">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {posts[0].readTime}</span>
                    <span>{posts[0].date}</span>
                  </div>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-[#2E6DA4] font-semibold text-sm hover:underline">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-[#1B2B4B] mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link to="/blog" className="text-[#2E6DA4] text-sm font-medium hover:underline flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1B2B4B] mb-3">Get Sourcing Guides in Your Inbox</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Practical tips on sourcing from China, delivered monthly. No spam.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
              />
              <button className="bg-[#1B2B4B] hover:bg-[#162240] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
