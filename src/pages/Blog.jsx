import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A step-by-step guide to conducting due diligence on potential Chinese suppliers, including what documents to request and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-1-img-3x5y7z',
  },
  {
    id: 'blog-2',
    title: 'Understanding AQL Inspection Standards for Import Quality Control',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, which inspection levels to use, and how to interpret QC reports from your sourcing agent.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-2-img-1a3b5c',
  },
  {
    id: 'blog-3',
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to unclear product specifications — here are the most costly mistakes importers make and practical ways to prevent them.',
    category: 'Sourcing Tips',
    date: '2026-06-28',
    readTime: '7 min read',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-3-img-7d9e1f',
  },
  {
    id: 'blog-4',
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'A practical comparison of sea and air freight for China imports, including cost breakdowns, transit times, and when to use each option.',
    category: 'Shipping & Logistics',
    date: '2026-06-20',
    readTime: '5 min read',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-4-img-2g4h6i',
  },
  {
    id: 'blog-5',
    title: 'How to Negotiate Better Prices with Chinese Manufacturers',
    excerpt: 'Effective negotiation strategies that go beyond just asking for discounts. Learn how to leverage volume, payment terms, and long-term relationships.',
    category: 'Negotiation',
    date: '2026-06-12',
    readTime: '6 min read',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-5-img-8j0k2l',
  },
  {
    id: 'blog-6',
    title: 'Product Certifications for Importing from China: CE, FDA, FCC Explained',
    excerpt: 'An overview of the most common product certifications required for importing Chinese goods into the EU, US, and other markets.',
    category: 'Compliance',
    date: '2026-06-05',
    readTime: '9 min read',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-6-img-3m5n7o',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              China Sourcing Insights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practical guides, tips, and industry knowledge to help you source from China more effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-navy/10 text-navy text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-sm font-medium text-navy hover:text-navy-light cursor-pointer flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
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
