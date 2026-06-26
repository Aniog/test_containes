import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier: A Complete Guide for Importers',
    excerpt: 'Learn the step-by-step process for verifying Chinese manufacturers before placing your first order — from license checks to on-site audits.',
    date: 'June 12, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-verify-z8a9b0',
  },
  {
    id: 'blog-2',
    title: 'Understanding Incoterms for China Sourcing: FOB vs EXW vs CIF',
    excerpt: 'A practical guide to choosing the right Incoterms when importing from China, including cost breakdowns and risk allocation for each option.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    category: 'Shipping & Logistics',
    imgId: 'blog-incoterms-c1d2e3',
  },
  {
    id: 'blog-3',
    title: '10 Red Flags to Watch for When Sourcing from China',
    excerpt: 'Experienced sourcing agents share the most common warning signs of unreliable suppliers and how to protect your business from costly mistakes.',
    date: 'May 15, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    imgId: 'blog-redflags-f4g5h6',
  },
  {
    id: 'blog-4',
    title: 'Quality Control in China: AQL Standards and Inspection Levels Explained',
    excerpt: 'Understand AQL sampling standards used in pre-shipment inspections and how to choose the right inspection level for your product category.',
    date: 'April 30, 2026',
    readTime: '9 min read',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-aql-i7j8k9',
  },
  {
    id: 'blog-5',
    title: 'China Sourcing Costs Breakdown 2026: What to Expect',
    excerpt: 'A transparent look at the real costs of sourcing from China — supplier pricing, agent fees, shipping, duties, and hidden costs to budget for.',
    date: 'April 10, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    imgId: 'blog-costs-l0m1n2',
  },
  {
    id: 'blog-6',
    title: 'How to Protect Your Intellectual Property When Manufacturing in China',
    excerpt: 'Strategies for safeguarding your designs, patents, and trademarks when working with Chinese manufacturers, including NDAs and mold ownership.',
    date: 'March 22, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
    category: 'Legal & IP',
    imgId: 'blog-ip-o3p4q5',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical insights, guides, and tips for successful China sourcing — from supplier verification to shipping.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.id}] [blog-excerpt-${post.id}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-lg font-semibold text-navy mb-2 group-hover:text-navy-light transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p id={`blog-excerpt-${post.id}`} className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <User className="w-3 h-3" />{post.author}
                    </span>
                    <span className="text-sm font-medium text-navy hover:text-gold transition-colors cursor-pointer flex items-center gap-1">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
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