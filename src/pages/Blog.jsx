import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '../components/shared/CtaBanner';
import SectionHeader from '../components/shared/SectionHeader';

const posts = [
  {
    id: 'factory-audit-guide',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide for Importers',
    excerpt:
      'Before placing a large order with a Chinese manufacturer, a factory audit is one of the most important steps you can take. This guide explains what to check, how to prepare, and what red flags to watch for.',
    category: 'Factory Verification',
    date: 'May 28, 2026',
    readTime: '8 min read',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
    imgId: 'blog-img-factory-audit-w3x4y5',
  },
  {
    id: 'aql-inspection',
    title: 'Understanding AQL Sampling in Quality Inspections',
    excerpt:
      'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide to determine how many units to check in a batch. Here\'s how it works and what AQL level is right for your product.',
    category: 'Quality Control',
    date: 'May 14, 2026',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-img-aql-z6a7b8',
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt:
      'Choosing the wrong Incoterm can expose you to unexpected costs and risks. This article breaks down the most common shipping terms used in China trade and explains when to use each one.',
    category: 'Shipping',
    date: 'April 30, 2026',
    readTime: '7 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-img-incoterms-c9d0e1',
  },
  {
    id: 'supplier-negotiation',
    title: '7 Negotiation Tactics That Work With Chinese Suppliers',
    excerpt:
      'Negotiating with Chinese factories requires a different approach than Western business negotiations. These practical tactics will help you get better prices, terms, and lead times without damaging the relationship.',
    category: 'Supplier Management',
    date: 'April 15, 2026',
    readTime: '9 min read',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
    imgId: 'blog-img-negotiation-f2g3h4',
  },
  {
    id: 'oem-odm-difference',
    title: 'OEM vs ODM: What\'s the Difference and Which Is Right for Your Business?',
    excerpt:
      'OEM and ODM are two common manufacturing models in China. Understanding the difference will help you choose the right approach for your product development and sourcing strategy.',
    category: 'Sourcing Strategy',
    date: 'March 28, 2026',
    readTime: '5 min read',
    titleId: 'blog-oem-odm-title',
    descId: 'blog-oem-odm-desc',
    imgId: 'blog-img-oem-odm-i5j6k7',
  },
  {
    id: 'red-flags-suppliers',
    title: '10 Red Flags When Evaluating a Chinese Supplier',
    excerpt:
      'Not every factory on Alibaba is what it claims to be. These warning signs can help you identify unreliable or fraudulent suppliers before you commit to an order.',
    category: 'Supplier Verification',
    date: 'March 10, 2026',
    readTime: '6 min read',
    titleId: 'blog-red-flags-title',
    descId: 'blog-red-flags-desc',
    imgId: 'blog-img-red-flags-l8m9n0',
  },
];

const categories = ['All', 'Factory Verification', 'Quality Control', 'Shipping', 'Supplier Management', 'Sourcing Strategy', 'Supplier Verification'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Insights
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers working with Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-light text-brand-slate hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-64 lg:h-auto bg-gray-100 overflow-hidden">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold bg-brand-light text-brand-red px-2 py-1 rounded w-fit mb-3">
                  {posts[0].category}
                </span>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-brand-navy mb-3 leading-tight">
                  {posts[0].title}
                </h2>
                <p id={posts[0].descId} className="text-brand-slate text-sm leading-relaxed mb-5">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-brand-slate mb-5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {posts[0].readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${posts[0].id}`}
                  className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-44 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold bg-brand-light text-brand-red px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-brand-navy font-semibold mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-brand-slate text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-brand-slate">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-red text-xs font-semibold hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer questions about sourcing from China. Contact us for a free consultation."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </div>
  );
}
