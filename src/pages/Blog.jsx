import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '@/components/home/CTABanner';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before committing to a supplier in China, there are several verification steps every importer should take. This guide covers the key checks that reduce your risk.',
    readTime: '7 min read',
    date: 'June 10, 2026',
    titleId: 'blog-post-1-title',
    descId: 'blog-post-1-desc',
    imgId: 'blog-img-1-a1b2c3',
  },
  {
    id: 'pre-shipment-inspection-guide',
    category: 'Quality Control',
    title: 'Pre-Shipment Inspection: What It Is and Why It Matters',
    excerpt: 'A pre-shipment inspection is one of the most effective ways to protect your order quality. Here\'s what happens during an inspection and when you should use one.',
    readTime: '6 min read',
    date: 'May 28, 2026',
    titleId: 'blog-post-2-title',
    descId: 'blog-post-2-desc',
    imgId: 'blog-img-2-d4e5f6',
  },
  {
    id: 'sea-vs-air-freight-china',
    category: 'Shipping',
    title: 'Sea Freight vs. Air Freight from China: How to Choose',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This article breaks down the key factors to help you decide.',
    readTime: '5 min read',
    date: 'May 15, 2026',
    titleId: 'blog-post-3-title',
    descId: 'blog-post-3-desc',
    imgId: 'blog-img-3-g7h8i9',
  },
  {
    id: 'china-sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference can significantly affect your costs, quality control, and supplier relationships.',
    readTime: '8 min read',
    date: 'April 30, 2026',
    titleId: 'blog-post-4-title',
    descId: 'blog-post-4-desc',
    imgId: 'blog-img-4-j0k1l2',
  },
  {
    id: 'minimum-order-quantity-china',
    category: 'Sourcing Strategy',
    title: 'Understanding MOQ in China: How to Negotiate Minimum Order Quantities',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. This guide explains how MOQs work in China and practical strategies for negotiating them down.',
    readTime: '6 min read',
    date: 'April 12, 2026',
    titleId: 'blog-post-5-title',
    descId: 'blog-post-5-desc',
    imgId: 'blog-img-5-m3n4o5',
  },
  {
    id: 'factory-audit-checklist',
    category: 'Factory Audit',
    title: 'Factory Audit Checklist: What to Look for When Visiting a Chinese Factory',
    excerpt: 'A factory audit is your opportunity to assess a supplier\'s capabilities before committing to an order. Here\'s a practical checklist of what to evaluate.',
    readTime: '9 min read',
    date: 'March 25, 2026',
    titleId: 'blog-post-6-title',
    descId: 'blog-post-6-desc',
    imgId: 'blog-img-6-p6q7r8',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Resources</p>
            <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white mb-5">
              China Sourcing Blog
            </h1>
            <p className="text-[#a8b8cc] text-lg leading-relaxed">
              Practical guides, tips, and insights for importers and businesses sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-[#dde3ec] shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden">
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
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#f4f6f9] text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#5a6a7e]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 id={post.titleId} className="text-base font-bold text-[#0d2340] mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-[#5a6a7e] text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#5a6a7e]">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-xs text-[#1a4f8a] font-semibold hover:text-[#0d2340] flex items-center gap-1"
                    >
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
