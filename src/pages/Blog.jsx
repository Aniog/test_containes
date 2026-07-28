import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Factory verification is the most important step before committing to a supplier. Here is a practical checklist of what to look for during an on-site audit.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    imgId: 'blog-verify-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    title: '5 Common Quality Issues When Sourcing from China (and How to Prevent Them)',
    excerpt: 'From color mismatches to dimensional errors, these are the quality problems we see most often — and the inspection strategies that catch them early.',
    category: 'Quality Control',
    date: '2026-07-01',
    imgId: 'blog-quality-d4e5f6',
    titleId: 'blog-quality-title',
    descId: 'blog-quality-desc',
  },
  {
    title: 'Understanding AQL: A Practical Guide for Importers',
    excerpt: 'AQL sampling is the standard method for pre-shipment inspections. This guide explains how AQL levels work and how to choose the right one for your products.',
    category: 'Quality Control',
    date: '2026-06-20',
    imgId: 'blog-aql-g7h8i9',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    title: 'Shipping from China: Sea Freight vs. Air Freight Decision Guide',
    excerpt: 'Choosing between sea and air freight affects your cost, timeline, and risk. Here is a practical comparison to help you make the right decision for each order.',
    category: 'Shipping & Logistics',
    date: '2026-06-10',
    imgId: 'blog-ship-j1k2l3',
    titleId: 'blog-ship-title',
    descId: 'blog-ship-desc',
  },
  {
    title: 'How to Negotiate Better Pricing with Chinese Suppliers',
    excerpt: 'Effective price negotiation requires understanding the supplier\'s cost structure, building relationships, and knowing when to push and when to compromise.',
    category: 'Price Negotiation',
    date: '2026-05-28',
    imgId: 'blog-negot-m4n5o6',
    titleId: 'blog-negot-title',
    descId: 'blog-negot-desc',
  },
  {
    title: 'What to Do When Your Chinese Supplier Delays Production',
    excerpt: 'Production delays are common but manageable. Learn the early warning signs, escalation strategies, and preventive measures that keep your orders on track.',
    category: 'Production Management',
    date: '2026-05-15',
    imgId: 'blog-delay-p7q8r9',
    titleId: 'blog-delay-title',
    descId: 'blog-delay-desc',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Blog</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical insights on China sourcing, supplier verification, quality control, and international logistics from our team on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-navy-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Need Expert Sourcing Help?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Our blog shares knowledge, but our team delivers results. Get a free consultation for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
