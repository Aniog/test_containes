import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and validating production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-1-img-3a7c2d',
  },
  {
    id: 'blog-2',
    title: '5 Common Quality Issues When Sourcing from China (And How to Prevent Them)',
    excerpt: 'From material substitution to packaging damage — learn the most frequent quality problems and the inspection steps that catch them early.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-2-img-9b4e1f',
  },
  {
    id: 'blog-3',
    title: 'Understanding Incoterms: FOB vs. CIF vs. DDP for China Imports',
    excerpt: 'A clear breakdown of shipping terms, who bears the risk at each stage, and which Incoterm works best for different order sizes.',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-3-img-6d2a8c',
  },
  {
    id: 'blog-4',
    title: 'How to Negotiate Better Prices with Chinese Manufacturers',
    excerpt: 'Proven negotiation strategies that go beyond just asking for a discount — including volume commitments, payment terms, and long-term partnerships.',
    category: 'Negotiation',
    date: 'June 20, 2026',
    readTime: '5 min read',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-4-img-2c5f7a',
  },
  {
    id: 'blog-5',
    title: 'Canton Fair 2026: What Buyers Need to Know',
    excerpt: 'Planning to attend the Canton Fair? Here\'s how to prepare, what to expect, and how to make the most of your visit to China\'s largest trade show.',
    category: 'Trade Shows',
    date: 'June 12, 2026',
    readTime: '6 min read',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-5-img-8e3d4b',
  },
  {
    id: 'blog-6',
    title: 'Product Certification Guide: CE, FCC, RoHS, and More',
    excerpt: 'Which certifications does your product need for your target market? A practical overview of common compliance requirements for China-sourced goods.',
    category: 'Compliance',
    date: 'June 5, 2026',
    readTime: '9 min read',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-6-img-4a1c9e',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Resources</p>
          <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Sourcing Blog
          </h1>
          <p id="blog-page-subtitle" className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            Practical guides, tips, and insights to help you source smarter from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                  <h2 id={post.titleId} className="text-base font-semibold text-neutral-900 mt-2 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-neutral-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
            Need Help With Your Sourcing Project?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Our team is ready to help you find the right suppliers and manage your orders from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
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
