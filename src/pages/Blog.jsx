import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-5-mistakes',
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Many first-time buyers make avoidable mistakes that cost time and money. Here are the most common pitfalls and practical strategies to prevent them.',
    category: 'Sourcing Tips',
    date: '2026-07-15',
    readTime: '6 min read',
    imgId: 'blog-mistakes-a1b2c3',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'blog-factory-audit',
    title: 'What to Look for in a China Factory Audit',
    excerpt: 'A proper factory audit goes beyond checking business licenses. Learn the key areas to evaluate and red flags to watch for during supplier verification.',
    category: 'Quality Control',
    date: '2026-07-01',
    readTime: '8 min read',
    imgId: 'blog-audit-d4e5f6',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'blog-aql-guide',
    title: 'Understanding AQL: A Practical Guide for Importers',
    excerpt: 'AQL sampling is the industry standard for product inspection, but many buyers do not fully understand how it works. This guide breaks it down clearly.',
    category: 'Quality Control',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-aql-g7h8i9',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'blog-shipping-modes',
    title: 'Sea vs Air vs Rail: Choosing the Right Shipping Mode from China',
    excerpt: 'Each shipping mode has different cost, speed, and reliability trade-offs. Here is how to decide which option works best for your order.',
    category: 'Logistics',
    date: '2026-06-10',
    readTime: '5 min read',
    imgId: 'blog-ship-j1k2l3',
    titleId: 'blog-ship-title',
    descId: 'blog-ship-desc',
  },
  {
    id: 'blog-negotiation',
    title: 'How to Negotiate Pricing with Chinese Suppliers',
    excerpt: 'Effective price negotiation requires understanding Chinese business culture and supplier cost structures. Here are strategies that actually work.',
    category: 'Sourcing Tips',
    date: '2026-05-28',
    readTime: '6 min read',
    imgId: 'blog-negot-m4n5o6',
    titleId: 'blog-negot-title',
    descId: 'blog-negot-desc',
  },
  {
    id: 'blog-ip-protection',
    title: 'Protecting Your Intellectual Property When Manufacturing in China',
    excerpt: 'IP protection is a valid concern for many buyers. Learn practical steps you can take to safeguard your designs and trademarks when working with Chinese factories.',
    category: 'Legal & Compliance',
    date: '2026-05-15',
    readTime: '7 min read',
    imgId: 'blog-ip-p7q8r9',
    titleId: 'blog-ip-title',
    descId: 'blog-ip-desc',
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
      <section className="bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Blog</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Practical insights on China sourcing, quality control, supplier management, and import logistics. Written for buyers who want to make better sourcing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-neutral-100"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-bold text-neutral-800 text-lg mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="text-brand-500 font-semibold hover:text-brand-600 cursor-pointer flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Need Expert Sourcing Help?
          </h2>
          <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
            Our blog covers the basics, but every sourcing project is unique. Get personalized guidance from our team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
