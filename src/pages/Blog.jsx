import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on Chinese manufacturers — from checking business licenses to on-site factory visits.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-img-3a8c2d',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Quality Inspections in China',
    excerpt: 'Understanding AQL standards, inspection types, and when to schedule QC checks during your production cycle.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '10 min read',
    imgId: 'blog-qc-img-7d4e1f',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Timelines & Best Practices',
    excerpt: 'Current shipping rates, transit times, and strategies to optimize your logistics when importing from China.',
    category: 'Logistics',
    date: '2026-06-28',
    readTime: '7 min read',
    imgId: 'blog-shipping-img-5b9a3c',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: '5 Negotiation Strategies That Work with Chinese Suppliers',
    excerpt: 'Practical tips for negotiating better prices, payment terms, and MOQs without damaging the supplier relationship.',
    category: 'Negotiation',
    date: '2026-06-20',
    readTime: '6 min read',
    imgId: 'blog-negotiate-img-2c6d8e',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '7 Common Mistakes First-Time China Importers Make',
    excerpt: 'Learn from others\' experiences — avoid these costly errors when sourcing products from China for the first time.',
    category: 'Getting Started',
    date: '2026-06-12',
    readTime: '9 min read',
    imgId: 'blog-mistakes-img-8f1a4b',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'choosing-sourcing-agent',
    title: 'How to Choose the Right China Sourcing Agent',
    excerpt: 'Key factors to evaluate when selecting a sourcing agent — experience, transparency, communication, and service scope.',
    category: 'Getting Started',
    date: '2026-06-05',
    readTime: '5 min read',
    imgId: 'blog-agent-img-4e7c9d',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Practical knowledge to help you source smarter from China. Guides, tips, and industry updates from our team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-blue-50 text-brand-blue text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-brand-muted text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-brand-text mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-brand-muted text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-brand-muted text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-text mb-4">Have a Sourcing Question?</h2>
          <p className="text-brand-muted mb-8">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
