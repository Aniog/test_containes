import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification',
    category: 'Supplier Sourcing',
    date: 'June 10, 2026',
    readTime: '6 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common and costly mistakes importers make. Here is a practical checklist to protect yourself.',
    titleId: 'blog-sv-title',
    descId: 'blog-sv-desc',
    imgId: 'blog-sv-img-a1b2c3',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '8 min read',
    title: 'Understanding AQL Inspection Standards: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the industry standard for product inspection sampling. This guide explains how it works and how to use it to protect your shipments.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-vs-air',
    category: 'Shipping',
    date: 'May 15, 2026',
    readTime: '5 min read',
    title: 'Sea Freight vs Air Freight from China: When to Use Each',
    excerpt: 'Choosing between sea and air freight affects your cost, lead time, and cash flow. Here is how to decide which option makes sense for your shipment.',
    titleId: 'blog-sva-title',
    descId: 'blog-sva-desc',
    imgId: 'blog-sva-img-g7h8i9',
  },
  {
    id: 'oem-vs-odm',
    category: 'Manufacturing',
    date: 'April 30, 2026',
    readTime: '7 min read',
    title: 'OEM vs ODM Manufacturing in China: What Is the Difference?',
    excerpt: 'OEM and ODM are two common manufacturing models in China. Understanding the difference helps you choose the right approach for your product development goals.',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
    imgId: 'blog-oem-img-j1k2l3',
  },
  {
    id: 'canton-fair',
    category: 'Trade Shows',
    date: 'April 12, 2026',
    readTime: '6 min read',
    title: 'Canton Fair 2026: What to Expect and How to Prepare',
    excerpt: 'The Canton Fair is the world\'s largest trade fair and a key sourcing event for importers. Here is how to make the most of your visit and avoid common pitfalls.',
    titleId: 'blog-cf-title',
    descId: 'blog-cf-desc',
    imgId: 'blog-cf-img-m4n5o6',
  },
  {
    id: 'payment-terms',
    category: 'Finance & Risk',
    date: 'March 25, 2026',
    readTime: '5 min read',
    title: 'Payment Terms When Buying from China: T/T, L/C, and Trade Assurance Explained',
    excerpt: 'Understanding payment terms is critical when importing from China. This guide covers the most common options, their risks, and when to use each.',
    titleId: 'blog-pt-title',
    descId: 'blog-pt-desc',
    imgId: 'blog-pt-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping', 'Manufacturing', 'Trade Shows', 'Finance & Risk'];

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
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#93c5fd' }}>
            Blog & Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Insights
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'text-white'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
                style={cat === 'All' ? { backgroundColor: '#1a4f8a' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>{posts[0].category}</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#0d2b4e' }}>{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-slate-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{posts[0].date}</span>
                  <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#1a4f8a' }}>
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>{post.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-base mb-2 leading-snug" style={{ color: '#0d2b4e' }}>{post.title}</h3>
                  <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <Link to="/blog" className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#1a4f8a' }}>
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ backgroundColor: '#e8f0fb' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#0d2b4e' }}>Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-600 mb-6">Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white text-slate-800"
              style={{ '--tw-ring-color': '#1a4f8a' }}
            />
            <button
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: '#1a4f8a' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
