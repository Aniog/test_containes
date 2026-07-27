import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to conducting due diligence on potential Chinese manufacturers, including what documents to request and red flags to watch for.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    author: 'David Chen',
    imgId: 'blog-verify-supplier-a1b2c3',
  },
  {
    id: 'understanding-aql-inspection',
    title: 'Understanding AQL Standards for Product Inspection',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, how to choose the right inspection level, and what defect classifications mean for your order.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    author: 'Sarah Liu',
    imgId: 'blog-aql-inspection-d4e5f6',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Complete Guide to Shipping from China: Sea, Air & Rail',
    excerpt: 'Compare shipping methods, understand Incoterms, and learn how to calculate landed costs when importing goods from Chinese factories.',
    category: 'Logistics',
    date: 'June 28, 2026',
    readTime: '10 min read',
    author: 'Michael Wang',
    imgId: 'blog-shipping-guide-g7h8i9',
  },
  {
    id: 'negotiating-with-chinese-factories',
    title: '7 Tips for Negotiating Better Prices with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work in the Chinese manufacturing context, from MOQ discussions to payment term optimization.',
    category: 'Sourcing Tips',
    date: 'June 20, 2026',
    readTime: '7 min read',
    author: 'David Chen',
    imgId: 'blog-negotiating-j0k1l2',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '5 Common Mistakes First-Time China Buyers Make',
    excerpt: 'Avoid these costly errors that new importers frequently encounter when sourcing products from China for the first time.',
    category: 'Sourcing Tips',
    date: 'June 12, 2026',
    readTime: '5 min read',
    author: 'Sarah Liu',
    imgId: 'blog-mistakes-m3n4o5',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for During a Visit',
    excerpt: 'A comprehensive checklist covering production capacity, quality systems, working conditions, and documentation to review during a factory audit.',
    category: 'Factory Audit',
    date: 'June 5, 2026',
    readTime: '9 min read',
    author: 'Michael Wang',
    imgId: 'blog-audit-checklist-p6q7r8',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="blog-page-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
              Sourcing Blog
            </h1>
            <p id="blog-page-subtitle" className="text-lg text-white/80">
              Practical guides, tips, and insights to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-category] [blog-page-subtitle]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span id={`blog-${post.id}-category`} className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                    {post.category}
                  </span>
                  <h2 id={`blog-${post.id}-title`} className="text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-600">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Our team is happy to answer your questions about sourcing from China — no strings attached.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
