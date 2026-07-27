import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import Button from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to factory audits, license verification, and background checks that every buyer should know before working with a new Chinese supplier.',
    author: 'SSourcing Team',
    date: 'July 15, 2026',
    readTime: '8 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-1a2b3c',
  },
  {
    title: 'The Complete Guide to Pre-Shipment Inspection in China',
    excerpt: 'Learn what pre-shipment inspection covers, how AQL sampling works, and why this final QC step can save you from costly product returns.',
    author: 'SSourcing Team',
    date: 'July 8, 2026',
    readTime: '10 min read',
    category: 'Quality Control',
    imgId: 'blog-psi-guide-2b3c4d',
  },
  {
    title: 'Understanding Incoterms 2025 for China Sourcing',
    excerpt: 'A clear breakdown of Incoterms rules and how they affect your shipping costs, risk, and responsibilities when importing from China.',
    author: 'SSourcing Team',
    date: 'June 28, 2026',
    readTime: '7 min read',
    category: 'Logistics',
    imgId: 'blog-incoterms-3c4d5e',
  },
  {
    title: '5 Red Flags to Watch for When Sourcing from China',
    excerpt: 'Warning signs that indicate a supplier may not be reliable, from unrealistic pricing to reluctance for third-party inspections.',
    author: 'SSourcing Team',
    date: 'June 20, 2026',
    readTime: '6 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-redflags-4d5e6f',
  },
  {
    title: 'How to Negotiate Better Pricing with Chinese Manufacturers',
    excerpt: 'Proven negotiation strategies that work with Chinese suppliers, including MOQ tactics, payment terms, and long-term partnership incentives.',
    author: 'SSourcing Team',
    date: 'June 12, 2026',
    readTime: '9 min read',
    category: 'Negotiation',
    imgId: 'blog-negotiation-5e6f7a',
  },
  {
    title: 'Factory Audit Checklist: What to Look for During a Site Visit',
    excerpt: 'A comprehensive checklist covering production capacity, quality systems, working conditions, and documentation to verify during a factory audit.',
    author: 'SSourcing Team',
    date: 'June 5, 2026',
    readTime: '11 min read',
    category: 'Supplier Verification',
    imgId: 'blog-audit-checklist-6f7a8b',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Insights & Guides</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical advice and industry knowledge to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${idx}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span id={`blog-title-${idx}`} className="hidden">{post.title}</span>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-semibold text-accent bg-amber-50 px-2.5 py-1 rounded-full mb-3 self-start">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-primary mb-3 leading-snug">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="text-primary text-sm font-medium hover:text-primary-light transition-colors cursor-pointer flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Stay Informed</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest sourcing tips, guides, and industry insights.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
            <Button variant="accent">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}