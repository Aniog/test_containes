import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to conducting due diligence on Chinese manufacturers, including business license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-4a2c8f',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Quality Inspection in China',
    excerpt: 'Understanding AQL standards, inspection types (PPI, DPI, PSI), and how to set up an effective quality control process for your China imports.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '10 min read',
    imgId: 'blog-qc-guide-7d3e1b',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Timelines & Best Practices',
    excerpt: 'Current freight rates, transit times, and practical tips for managing sea freight, air freight, and express shipments from China.',
    category: 'Logistics',
    date: '2026-06-28',
    readTime: '7 min read',
    imgId: 'blog-shipping-5f9a2d',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '5 Common China Sourcing Scams and How to Avoid Them',
    excerpt: 'Learn about the most frequent scams targeting overseas buyers and the red flags to watch for when dealing with new Chinese suppliers.',
    category: 'Risk Management',
    date: '2026-06-20',
    readTime: '6 min read',
    imgId: 'blog-scams-8c1f4a',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
  },
  {
    id: 'negotiate-with-chinese-factories',
    title: 'How to Negotiate Effectively with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work in the Chinese business context, from price discussions to payment terms and MOQ flexibility.',
    category: 'Negotiation',
    date: '2026-06-12',
    readTime: '9 min read',
    imgId: 'blog-negotiate-3b7c9e',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'private-label-china',
    title: 'Starting a Private Label Brand with Chinese Manufacturers',
    excerpt: 'Everything you need to know about creating your own brand with Chinese OEM/ODM factories, from product development to packaging design.',
    category: 'Private Label',
    date: '2026-06-05',
    readTime: '11 min read',
    imgId: 'blog-private-label-6d2e8b',
    titleId: 'blog-pl-title',
    descId: 'blog-pl-desc',
  },
];

const Blog = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Practical knowledge to help you source smarter from China. Guides, tips, and industry updates from our sourcing team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-gray-400">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-base font-semibold text-brand-navy mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-brand-gray-600 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-brand-gray-400">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="text-sm text-brand-blue font-medium flex items-center gap-1">
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
