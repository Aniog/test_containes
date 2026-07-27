import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    category: 'Supplier Verification',
    date: '2026-07-15',
    excerpt: 'Learn the essential steps to verify a Chinese manufacturer\'s legitimacy, production capacity, and quality systems before committing to an order.',
    imgId: 'blog-verify-s7t8u9',
    titleId: 'blog-verify-title',
    excerptId: 'blog-verify-excerpt',
  },
  {
    title: 'AQL Inspection Standards: What Every Importer Should Know',
    category: 'Quality Control',
    date: '2026-07-08',
    excerpt: 'Understanding AQL (Acceptable Quality Level) standards is crucial for importers. This guide explains how AQL inspections work and what levels to specify.',
    imgId: 'blog-aql-v1w2x3',
    titleId: 'blog-aql-title',
    excerptId: 'blog-aql-excerpt',
  },
  {
    title: '5 Common Mistakes First-Time Importers Make in China',
    category: 'Sourcing Tips',
    date: '2026-06-28',
    excerpt: 'From skipping factory verification to underestimating shipping costs, these common mistakes can cost you thousands. Learn how to avoid them.',
    imgId: 'blog-mistakes-y4z5a6',
    titleId: 'blog-mistakes-title',
    excerptId: 'blog-mistakes-excerpt',
  },
  {
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    category: 'Shipping & Logistics',
    date: '2026-06-20',
    excerpt: 'A practical comparison of sea and air freight for China imports, including cost analysis, transit times, and when each method makes sense.',
    imgId: 'blog-freight-b7c8d9',
    titleId: 'blog-freight-title',
    excerptId: 'blog-freight-excerpt',
  },
  {
    title: 'Understanding China\'s Manufacturing Regions: A Regional Guide',
    category: 'Industry Knowledge',
    date: '2026-06-12',
    excerpt: 'China\'s manufacturing is regionally specialized. Learn which provinces excel at which products to target your sourcing more effectively.',
    imgId: 'blog-regions-e1f2g3',
    titleId: 'blog-regions-title',
    excerptId: 'blog-regions-excerpt',
  },
  {
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    excerpt: 'Effective price negotiation with Chinese suppliers requires understanding their cost structure, cultural norms, and the right timing. Here\'s a practical approach.',
    imgId: 'blog-negotiate-h4i5j6',
    titleId: 'blog-negotiate-title',
    excerptId: 'blog-negotiate-excerpt',
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
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">China Sourcing Insights & Guides</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Practical knowledge for importers: supplier verification, quality control, shipping, and sourcing best practices.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="group rounded-lg overflow-hidden border border-slate-200 hover:shadow-md transition-shadow bg-white">
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.excerptId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-navy-50 text-navy-800 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-navy-900 mb-2 group-hover:text-brand-blue transition-colors">{post.title}</h3>
                  <p id={post.excerptId} className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Need Practical Sourcing Help?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Our blog covers theory — but if you need hands-on support, we're ready to help you source from China.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors no-underline">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
