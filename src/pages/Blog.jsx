import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Complete Checklist',
    excerpt: 'Before placing any order, you need to know if your supplier is legitimate. Here is our 20-point factory verification checklist used on hundreds of audits.',
    category: 'Factory Verification',
    readTime: '8 min read',
    date: 'July 15, 2026',
    imgId: 'blog-factory-verify-a1b2c3',
    titleId: 'blog-factory-title',
    excerptId: 'blog-factory-excerpt',
  },
  {
    title: 'Understanding AQL: What Importers Need to Know About Quality Inspections',
    excerpt: 'AQL (Acceptable Quality Limit) is the global standard for product inspections. Learn how it works, what the numbers mean, and how to set the right level for your products.',
    category: 'Quality Control',
    readTime: '6 min read',
    date: 'June 28, 2026',
    imgId: 'blog-aql-inspection-d4e5f6',
    titleId: 'blog-aql-title',
    excerptId: 'blog-aql-excerpt',
  },
  {
    title: 'Incoterms Explained: FOB, CIF, DDP — Which One Should You Choose?',
    excerpt: 'Choosing the wrong shipping term can cost you thousands. We break down the most common Incoterms used in China imports and when to use each one.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'June 10, 2026',
    imgId: 'blog-incoterms-g7h8i9',
    titleId: 'blog-incoterms-title',
    excerptId: 'blog-incoterms-excerpt',
  },
  {
    title: 'MOQ Negotiation: How to Lower Minimum Order Quantities from Chinese Suppliers',
    excerpt: 'High MOQs are a common barrier for small businesses. Here are proven strategies we use to negotiate lower minimums without damaging the supplier relationship.',
    category: 'Negotiation',
    readTime: '5 min read',
    date: 'May 22, 2026',
    imgId: 'blog-moq-negotiation-j1k2l3',
    titleId: 'blog-moq-title',
    excerptId: 'blog-moq-excerpt',
  },
  {
    title: 'Top 10 Manufacturing Hubs in China and What They Specialize In',
    excerpt: 'Not all of China manufactures the same products. We map out the major industrial clusters — from Shenzhen electronics to Yiwu small commodities — so you know where to look.',
    category: 'Industry Guide',
    readTime: '9 min read',
    date: 'May 8, 2026',
    imgId: 'blog-hubs-m4n5o6',
    titleId: 'blog-hubs-title',
    excerptId: 'blog-hubs-excerpt',
  },
  {
    title: 'Common Quality Defects in China Manufacturing and How to Prevent Them',
    excerpt: 'From color mismatches to dimensional errors, we outline the most frequent defects we encounter during inspections and the proactive steps to avoid them.',
    category: 'Quality Control',
    readTime: '7 min read',
    date: 'April 18, 2026',
    imgId: 'blog-defects-p7q8r9',
    titleId: 'blog-defects-title',
    excerptId: 'blog-defects-excerpt',
  },
  {
    title: 'How Long Does It Really Take to Source from China? A Realistic Timeline',
    excerpt: 'We break down the actual timeline for sourcing from China — from first inquiry to delivered goods — with realistic expectations for each stage.',
    category: 'Process',
    readTime: '6 min read',
    date: 'April 2, 2026',
    imgId: 'blog-timeline-s1t2u3',
    titleId: 'blog-timeline-title',
    excerptId: 'blog-timeline-excerpt',
  },
  {
    title: 'Payment Safety: How to Pay Chinese Suppliers Without Losing Your Money',
    excerpt: 'Wire transfers, Alibaba Trade Assurance, letters of credit, and escrow — we compare the safest payment methods for dealing with Chinese manufacturers.',
    category: 'Finance',
    readTime: '8 min read',
    date: 'March 15, 2026',
    imgId: 'blog-payment-v4w5x6',
    titleId: 'blog-payment-title',
    excerptId: 'blog-payment-excerpt',
  },
  {
    title: 'Customs and Duties: What Importers Need to Know in 2026',
    excerpt: 'Tariffs, HS codes, import documentation, and duty calculations — a practical guide for navigating customs when importing from China.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'March 1, 2026',
    imgId: 'blog-customs-y7z8a9',
    titleId: 'blog-customs-title',
    excerptId: 'blog-customs-excerpt',
  },
];

const categories = ['All', 'Factory Verification', 'Quality Control', 'Shipping & Logistics', 'Negotiation', 'Industry Guide', 'Process', 'Finance'];

const Blog = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = React.useState('All');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Blog & Resources
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Practical guides, industry insights, and sourcing tips from our team of China sourcing experts.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.excerptId}] [${post.titleId}] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-500">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.excerptId} className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:text-primary-600">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;