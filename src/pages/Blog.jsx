import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredPost = {
  title: 'How to Avoid Common Scams When Sourcing from China',
  excerpt: 'Learn the most common scams targeting foreign buyers in China and the practical steps you can take to protect your business, your money, and your reputation.',
  category: 'Sourcing Tips',
  date: 'June 10, 2026',
  readTime: '8 min read',
  author: 'SSourcing China Team',
  id: 'featured',
};

const posts = [
  {
    title: 'Factory Verification Checklist: 12 Things to Inspect On-Site',
    excerpt: 'A comprehensive checklist for evaluating Chinese factories before placing your first order.',
    category: 'Factory Audits',
    date: 'June 5, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Understanding Incoterms: FOB, CIF, and DDP Explained',
    excerpt: 'A practical guide to shipping terms so you know exactly who pays for what and when.',
    category: 'Shipping',
    date: 'May 28, 2026',
    readTime: '5 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'How Much Should a China Sourcing Agent Cost?',
    excerpt: 'Breakdown of typical sourcing agent fees, pricing models, and what you should expect to pay.',
    category: 'Industry Insights',
    date: 'May 20, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'AQL Sampling Explained: Quality Control for Non-Experts',
    excerpt: 'What AQL means, how sampling works, and why it matters for your quality inspections.',
    category: 'Quality Control',
    date: 'May 15, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Guangzhou vs Shenzhen: Which City is Better for Your Product?',
    excerpt: 'A comparison of China two largest manufacturing hubs to help you choose the right sourcing location.',
    category: 'Sourcing Tips',
    date: 'May 8, 2026',
    readTime: '5 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Negotiating with Chinese Suppliers: 7 Tactics That Work',
    excerpt: 'Proven strategies for getting better pricing, terms, and MOQs from Chinese factories.',
    category: 'Negotiation',
    date: 'April 30, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Pre-Shipment Inspection: What to Check Before Your Goods Leave China',
    excerpt: 'A step-by-step guide to pre-shipment inspections and why they are critical to your business.',
    category: 'Quality Control',
    date: 'April 22, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'MOQ Explained: How to Negotiate Lower Minimum Order Quantities',
    excerpt: 'Strategies for reducing MOQs when starting with a new supplier or testing a new product.',
    category: 'Negotiation',
    date: 'April 15, 2026',
    readTime: '5 min read',
    author: 'SSourcing China Team',
  },
];

const categories = [
  'All Posts',
  'Sourcing Tips',
  'Quality Control',
  'Factory Audits',
  'Shipping',
  'Negotiation',
  'Industry Insights',
];

export default function BlogPage() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Sourcing Insights & Guides</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical advice, industry knowledge, and actionable tips for anyone buying from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full bg-slate-200">
              <img
                data-strk-img-id="blog-featured-img"
                data-strk-img={`[blog-featured-title] [blog-featured-cat]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-10">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-4">
                {featuredPost.category}
              </span>
              <h2 id="blog-featured-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{featuredPost.title}</h2>
              <p className="text-slate-500 leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm cursor-pointer">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-slate-100">
                  <img
                    data-strk-img-id={`blog-${i}-img`}
                    data-strk-img={`[blog-${i}-title] [blog-${i}-cat]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 mb-3" id={`blog-${i}-cat`}>
                    {post.category}
                  </span>
                  <h3 id={`blog-${i}-title`} className="font-semibold text-slate-900 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                      <span className="mx-1">&middot;</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Help With Your China Sourcing?</h2>
          <p className="text-slate-300 mb-8">Our team is ready to answer your questions and guide you through the sourcing process.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
