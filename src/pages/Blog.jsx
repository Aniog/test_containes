import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Before sending any deposit, you need to verify that your Chinese supplier is legitimate. This guide covers business license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'Acceptable Quality Limit (AQL) is the standard method for determining how many products to inspect. Learn how AQL levels work and which one is right for your product.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    title: 'Incoterms Explained: FOB, CIF, DDP, and More',
    excerpt: 'International shipping terms can be confusing. This article breaks down the most common Incoterms used when importing from China and who is responsible for what.',
    category: 'Shipping',
    date: '2026-06-28',
    readTime: '10 min read',
  },
  {
    title: 'Red Flags to Watch for When Sourcing from China',
    excerpt: 'From prices that seem too good to be true to factories that refuse video calls, here are the warning signs that a supplier may not be reliable.',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    readTime: '7 min read',
  },
  {
    title: 'How We Reduced a Client\'s Defect Rate from 30% to 2%',
    excerpt: 'A case study on how supplier switching and systematic QC checkpoints transformed one electronics importer\'s supply chain.',
    category: 'Case Study',
    date: '2026-06-12',
    readTime: '5 min read',
  },
  {
    title: 'MOQ Negotiation Strategies for Small Businesses',
    excerpt: 'High minimum order quantities can be a barrier for small businesses. Here are practical strategies to negotiate lower MOQs without losing supplier interest.',
    category: 'Negotiation',
    date: '2026-06-05',
    readTime: '6 min read',
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Insights</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Practical guides, tips, and insights on sourcing from China, quality control, and supply chain management.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="h-40 bg-slate-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-slate-300">{post.category.charAt(0)}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">{post.category}</span>
                  <h2 className="text-lg font-bold text-slate-800 mt-2 mb-3 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Need Personalized Advice?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every sourcing project is unique. Get a free assessment tailored to your specific product and requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
