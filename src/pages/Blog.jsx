import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/shared/SectionHeading.jsx';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'blog-supplier-verification',
      title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
      excerpt: 'A step-by-step guide to conducting due diligence on potential Chinese suppliers, including what documents to request and red flags to watch for.',
      category: 'Supplier Management',
      date: 'July 15, 2026',
      readTime: '8 min read',
      author: 'David Chen',
      imgId: 'blog-verify-supplier-a1b2c3',
    },
    {
      id: 'blog-quality-inspection',
      title: 'Understanding AQL Standards: A Buyer\'s Guide to Quality Inspection',
      excerpt: 'Learn how Acceptable Quality Limit (AQL) standards work, how to set appropriate inspection levels, and what to do when products fail inspection.',
      category: 'Quality Control',
      date: 'July 8, 2026',
      readTime: '6 min read',
      author: 'Sarah Liu',
      imgId: 'blog-aql-standards-d4e5f6',
    },
    {
      id: 'blog-shipping-options',
      title: 'Sea vs. Air vs. Rail: Choosing the Right Shipping Method from China',
      excerpt: 'Compare the costs, transit times, and best use cases for different shipping methods when importing goods from China to your country.',
      category: 'Logistics',
      date: 'June 28, 2026',
      readTime: '7 min read',
      author: 'Michael Wang',
      imgId: 'blog-shipping-methods-g7h8i9',
    },
    {
      id: 'blog-negotiation-tips',
      title: '10 Negotiation Tips for Getting Better Prices from Chinese Factories',
      excerpt: 'Practical strategies for negotiating with Chinese manufacturers, from understanding cost structures to building long-term relationships.',
      category: 'Sourcing Tips',
      date: 'June 20, 2026',
      readTime: '9 min read',
      author: 'David Chen',
      imgId: 'blog-negotiation-j1k2l3',
    },
    {
      id: 'blog-common-mistakes',
      title: '7 Common Mistakes First-Time China Buyers Make (And How to Avoid Them)',
      excerpt: 'From skipping factory audits to ignoring payment terms, here are the most frequent errors new importers make and practical solutions.',
      category: 'Beginner Guide',
      date: 'June 12, 2026',
      readTime: '10 min read',
      author: 'Sarah Liu',
      imgId: 'blog-mistakes-m4n5o6',
    },
    {
      id: 'blog-canton-fair',
      title: 'Canton Fair 2026: What Buyers Need to Know Before Attending',
      excerpt: 'A comprehensive guide to preparing for the Canton Fair, including registration, planning your visit, and maximizing supplier meetings.',
      category: 'Industry Events',
      date: 'June 5, 2026',
      readTime: '7 min read',
      author: 'Michael Wang',
      imgId: 'blog-canton-fair-p7q8r9',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Blog
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips to help you buy from China with confidence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.id}-excerpt] [${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={`${post.id}-title`} className="text-base font-semibold text-neutral-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={`${post.id}-excerpt`} className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="text-xs text-neutral-500">{post.author}</span>
                    </div>
                    <span className="text-xs text-neutral-400">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            Our team is ready to help you find the right suppliers and manage your sourcing from start to finish.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
