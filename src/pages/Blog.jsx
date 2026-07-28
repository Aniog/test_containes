import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-1',
    category: 'Sourcing Tips',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, production capacity, and quality systems before committing to a purchase order.',
    author: 'SSourcing Team',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-img-a1b2c3',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
  },
  {
    id: 'blog-2',
    category: 'Quality Control',
    title: 'Understanding AQL Standards for Product Inspections',
    excerpt: 'A practical guide to Acceptable Quality Levels (AQL) and how to set the right inspection criteria for your products.',
    author: 'SSourcing Team',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-aql-standards-img-d4e5f6',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
  },
  {
    id: 'blog-3',
    category: 'Shipping',
    title: '2026 Guide to Shipping from China: Sea, Air, and Rail',
    excerpt: 'Compare shipping methods, costs, and transit times for importing goods from China to North America, Europe, and Australia.',
    author: 'SSourcing Team',
    date: 'June 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-shipping-guide-img-g7h8i9',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
  },
  {
    id: 'blog-4',
    category: 'Sourcing Tips',
    title: '5 Red Flags When Dealing with Chinese Manufacturers',
    excerpt: 'Know the warning signs that indicate a supplier may not be reliable — and how to protect your business from common sourcing pitfalls.',
    author: 'SSourcing Team',
    date: 'June 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-red-flags-img-j1k2l3',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
  },
  {
    id: 'blog-5',
    category: 'Industry Insights',
    title: 'Top Manufacturing Hubs in China: Where to Source What',
    excerpt: 'A region-by-region breakdown of China\'s manufacturing clusters — from Shenzhen electronics to Yiwu small commodities.',
    author: 'SSourcing Team',
    date: 'June 12, 2026',
    readTime: '9 min read',
    imgId: 'blog-mfg-hubs-img-m4n5o6',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
  },
  {
    id: 'blog-6',
    category: 'Quality Control',
    title: 'How to Write a Product Specification Sheet for Your Supplier',
    excerpt: 'A clear spec sheet prevents misunderstandings. Learn what to include and how to communicate your requirements effectively.',
    author: 'SSourcing Team',
    date: 'June 5, 2026',
    readTime: '6 min read',
    imgId: 'blog-spec-sheet-img-p7q8r9',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
  },
];

const Blog = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Insights & Guides
          </h1>
          <p id="blog-page-subtitle" className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Practical tips, industry knowledge, and guides to help you source smarter from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden bg-neutral-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full mb-3 self-start">
                    {post.category}
                  </span>
                  <h2 id={post.titleId} className="text-lg font-semibold text-neutral-900 mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
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
