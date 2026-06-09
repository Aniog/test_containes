import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Learn the essential steps for verifying Chinese suppliers, from business license checks to on-site factory audits.',
    date: 'May 25, 2026',
    author: 'SSourcing Team',
    category: 'Supplier Verification',
    slug: 'verify-chinese-supplier',
  },
  {
    title: 'The Complete Guide to Quality Control Inspections for Importers',
    excerpt: 'Understanding AQL standards, inspection types, and how to implement effective quality control for your China-sourced products.',
    date: 'May 18, 2026',
    author: 'SSourcing Team',
    category: 'Quality Control',
    slug: 'quality-control-guide',
  },
  {
    title: 'Shipping from China: A Practical Guide for First-Time Importers',
    excerpt: 'Everything you need to know about shipping from China, including freight options, documentation, and customs clearance.',
    date: 'May 10, 2026',
    author: 'SSourcing Team',
    category: 'Logistics',
    slug: 'shipping-from-china-guide',
  },
  {
    title: '5 Common Mistakes When Sourcing Products from China (And How to Avoid Them)',
    excerpt: 'Avoid these common pitfalls that cost importers time, money, and quality when sourcing products from Chinese manufacturers.',
    date: 'April 28, 2026',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    slug: 'common-sourcing-mistakes',
  },
  {
    title: 'Understanding Incoterms 2025 for China Imports',
    excerpt: 'A clear explanation of Incoterms and how each term affects your costs, risk, and responsibilities when importing from China.',
    date: 'April 15, 2026',
    author: 'SSourcing Team',
    category: 'Logistics',
    slug: 'incoterms-2025-china',
  },
  {
    title: 'Factory Audits: What We Check and Why It Matters',
    excerpt: 'A behind-the-scenes look at our factory audit process and why on-site verification is critical for sourcing success.',
    date: 'April 2, 2026',
    author: 'SSourcing Team',
    category: 'Supplier Verification',
    slug: 'factory-audit-process',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Practical insights, guides, and tips for importing from China. Written by our
            team of sourcing professionals with years of on-the-ground experience.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 bg-surface border-b border-border flex items-center justify-center">
                  <span className="text-muted text-sm font-medium">Image placeholder</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                  </div>
                  <h2 className="text-base font-bold text-primary mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-secondary mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                  >
                    Read More <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Specific Advice?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Our team is ready to answer your sourcing questions. Contact us for personalized guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Ask a Sourcing Expert <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}