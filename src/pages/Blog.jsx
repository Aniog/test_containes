import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: "Online supplier directories list thousands of factories — but not all of them are what they claim. Here's a practical guide to verifying a supplier before you commit, including what to check and what red flags to watch for.",
    category: 'Supplier Verification',
    date: '2026-07-15',
    imgId: 'blog-verify-supplier-a1b2c3',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
  },
  {
    id: 'pre-shipment-inspection-guide',
    title: 'Pre-Shipment Inspection: What It Covers and Why It Matters',
    excerpt: 'A pre-shipment inspection is your last chance to catch quality issues before goods leave the factory. This guide explains what PSI covers, how AQL sampling works, and what to expect from a proper inspection report.',
    category: 'Quality Control',
    date: '2026-07-01',
    imgId: 'blog-psi-guide-d4e5f6',
    titleId: 'blog-psi-guide-title',
    descId: 'blog-psi-guide-desc',
  },
  {
    id: 'shipping-from-china-options',
    title: 'Shipping from China: Sea, Air, or Rail — Which Option Fits Your Order?',
    excerpt: 'Choosing the right shipping method affects your cost, timeline, and risk. This article compares sea freight, air freight, and rail options for importing from China, with practical guidance on when each makes sense.',
    category: 'Shipping & Logistics',
    date: '2026-06-20',
    imgId: 'blog-shipping-options-g7h8i9',
    titleId: 'blog-shipping-options-title',
    descId: 'blog-shipping-options-desc',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Many first-time buyers make avoidable mistakes that cost time and money. From skipping factory verification to underestimating lead times, here are the five most common pitfalls and practical ways to prevent them.',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    imgId: 'blog-sourcing-mistakes-j1k2l3',
    titleId: 'blog-sourcing-mistakes-title',
    descId: 'blog-sourcing-mistakes-desc',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'Practical Tips for Negotiating with Chinese Suppliers',
    excerpt: 'Effective negotiation with Chinese suppliers requires understanding their pricing structure, communication style, and decision-making process. Here are practical tips to help you get better terms without damaging the relationship.',
    category: 'Negotiation',
    date: '2026-05-18',
    imgId: 'blog-negotiation-m4n5o6',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
  },
  {
    id: 'guangdong-manufacturing-hub',
    title: "Why Guangdong Is China's Manufacturing Powerhouse",
    excerpt: 'Guangdong province produces more exported goods than any other region in China. Understanding its industrial clusters helps you identify where your product is most likely manufactured and which areas to focus your sourcing efforts.',
    category: 'Industry Knowledge',
    date: '2026-05-01',
    imgId: 'blog-guangdong-p7q8r9',
    titleId: 'blog-guangdong-title',
    descId: 'blog-guangdong-desc',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="blog-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
          <p id="blog-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            Practical insights on sourcing from China — supplier verification, quality control, shipping, and negotiation tips.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-neutral-200"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-primary-50 text-primary-500 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-neutral-400 text-xs inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-base font-semibold text-neutral-800 mb-2 line-clamp-2">{post.title}</h2>
                  <p id={post.descId} className="text-neutral-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4">
                    <span className="text-primary-500 hover:text-primary-600 font-medium text-sm inline-flex items-center gap-1 cursor-pointer">
                      Read more <ArrowRight className="w-4 h-4" />
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
