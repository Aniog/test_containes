import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const posts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Supplier verification is the most important step in sourcing from China. Learn the key checks you should perform before committing to a supplier, from business license verification to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    readTime: '6 min read',
  },
  {
    id: 'blog-2',
    title: 'AQL Inspection Levels Explained: A Practical Guide',
    excerpt: 'Understanding AQL (Acceptable Quality Level) is essential for managing quality in manufacturing. This guide breaks down AQL levels, sampling plans, and how to set the right inspection standards for your products.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '8 min read',
  },
  {
    id: 'blog-3',
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Choosing between sea and air freight affects your costs, delivery times, and carbon footprint. We compare both options with real examples to help you make the right decision for your shipments.',
    category: 'Shipping & Logistics',
    date: '2026-04-30',
    readTime: '5 min read',
  },
  {
    id: 'blog-4',
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to neglecting quality inspections, these common mistakes can cost you time and money. Learn what to watch out for and how to protect your business.',
    category: 'Sourcing Tips',
    date: '2026-04-18',
    readTime: '7 min read',
  },
  {
    id: 'blog-5',
    title: 'Understanding MOQ: Minimum Order Quantities in China Manufacturing',
    excerpt: 'MOQs can make or break a sourcing deal, especially for small businesses. Learn why factories set MOQs, how to negotiate them, and strategies for starting with smaller orders.',
    category: 'Sourcing Tips',
    date: '2026-04-05',
    readTime: '6 min read',
  },
  {
    id: 'blog-6',
    title: 'Factory Audit Checklist: What We Look For During On-Site Visits',
    excerpt: 'Our factory audit process covers more than just production capacity. From quality systems to working conditions, here is our comprehensive checklist for evaluating Chinese factories.',
    category: 'Supplier Verification',
    date: '2026-03-22',
    readTime: '9 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Practical insights on sourcing from China — supplier verification, quality control, shipping, and more.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-navy mb-3 leading-snug">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
