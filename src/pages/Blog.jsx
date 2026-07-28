import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-verify-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, conducting factory audits, and validating trade references before committing to a new supplier.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-img-3a7c2e',
  },
  {
    id: 'blog-qc-guide',
    title: 'The Complete Guide to Quality Inspection in China',
    excerpt: 'Understanding AQL standards, inspection types (PPI, DPI, PSI), and how to set up an effective QC process for your China imports.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '10 min read',
    imgId: 'blog-qc-img-5d9e1f',
  },
  {
    id: 'blog-shipping',
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'A practical comparison of shipping options from China including costs, transit times, and when to use each method for your imports.',
    category: 'Logistics',
    date: 'June 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-shipping-img-8b4a6c',
  },
  {
    id: 'blog-negotiate',
    title: '7 Negotiation Tips for Getting Better Prices from Chinese Factories',
    excerpt: 'Practical strategies for negotiating pricing, payment terms, and MOQs with Chinese manufacturers without damaging the relationship.',
    category: 'Negotiation',
    date: 'June 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-negotiate-img-2c8f4a',
  },
  {
    id: 'blog-avoid-scams',
    title: 'How to Avoid Sourcing Scams When Buying from China',
    excerpt: 'Common scam patterns, red flags to watch for, and protective measures every importer should take when dealing with new suppliers.',
    category: 'Risk Management',
    date: 'June 12, 2026',
    readTime: '9 min read',
    imgId: 'blog-scams-img-7e3b9d',
  },
  {
    id: 'blog-moq',
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'Why factories set MOQs, how to negotiate them down, and strategies for small businesses to work within supplier minimums.',
    category: 'Sourcing Tips',
    date: 'June 5, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-img-4f1a8c',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sourcing Blog
          </h1>
          <p id="blog-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Practical guides, tips, and insights to help you source from China more effectively.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.id}-title] [blog-page-subtitle] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-xs font-medium text-orange uppercase tracking-wide">{post.category}</span>
                  <h2 id={`${post.id}-title`} className="text-base md:text-lg font-semibold text-slate-900 mt-2 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
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

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white px-7 py-3.5 rounded-lg font-semibold no-underline hover:bg-orange-dark transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
