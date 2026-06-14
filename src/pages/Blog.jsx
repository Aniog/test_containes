import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';

const posts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before You Place an Order',
    excerpt: 'A practical checklist for verifying supplier credentials, visiting factories, and checking references to reduce sourcing risk.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Pre-Shipment Inspection: What Buyers Need to Know',
    excerpt: 'Understanding the different types of inspections, what to look for in an inspection report, and how to act on the findings.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Incoterms Explained: FOB vs CIF vs DDP for China Sourcing',
    excerpt: 'A clear breakdown of the most common Incoterms used in China trade, with practical advice on which to choose for your business.',
    category: 'Logistics',
    date: '2026-04-30',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'How to Write a Product Specification Sheet That Gets Results',
    excerpt: 'Tips for creating clear, detailed product specifications that help suppliers understand your requirements and reduce miscommunication.',
    category: 'Sourcing Tips',
    date: '2026-04-18',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Common Quality Issues in Electronics Manufacturing and How to Prevent Them',
    excerpt: 'An overview of typical defects in electronics production and practical steps buyers can take to prevent them.',
    category: 'Quality Control',
    date: '2026-04-02',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Negotiating with Chinese Suppliers: A Practical Guide',
    excerpt: 'Cultural and practical tips for negotiating pricing, payment terms, and delivery schedules with Chinese manufacturers.',
    category: 'Sourcing Tips',
    date: '2026-03-20',
    readTime: '7 min read',
    featured: false,
  },
];

const Blog = () => {
  const featuredPosts = posts.filter((post) => post.featured);
  const recentPosts = posts.filter((post) => !post.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-lg text-slate-300 mb-8">
              Practical advice on sourcing from China: supplier verification, quality control, logistics, and negotiation. Written by our team based on real experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(new Date(post.date), 'MMM d, yyyy')}
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

      {/* Recent posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help With Your Sourcing Project?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team is ready to help you find reliable suppliers, verify factories, and manage quality and shipping.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
