import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      slug: 'factory-audit-checklist',
      title: 'Factory Audit Checklist: What to Verify Before Placing an Order',
      excerpt: 'A practical guide to the key areas to assess when evaluating a potential supplier in China.',
      date: 'June 10, 2026',
      author: 'Michael Chen',
      category: 'Supplier Verification',
      readTime: '8 min',
    },
    {
      slug: 'quality-inspection-standards',
      title: 'Quality Inspection Standards: AQL and Acceptance Criteria Explained',
      excerpt: 'Understanding Acceptable Quality Limit (AQL) and how to set appropriate inspection criteria for your products.',
      date: 'June 3, 2026',
      author: 'Sarah Wang',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      slug: 'shipping-from-china-2026',
      title: 'Shipping from China in 2026: Freight Options and Lead Times',
      excerpt: 'Current freight market conditions, route options, and typical transit times for shipments from China.',
      date: 'May 28, 2026',
      author: 'David Liu',
      category: 'Logistics',
      readTime: '10 min',
    },
    {
      slug: 'moq-negotiations',
      title: 'Negotiating MOQs with Chinese Suppliers: Practical Approaches',
      excerpt: 'Strategies for working with suppliers when your required quantities are below standard MOQs.',
      date: 'May 20, 2026',
      author: 'Michael Chen',
      category: 'Sourcing Strategy',
      readTime: '7 min',
    },
    {
      slug: 'product-certification-china',
      title: 'Product Certification Requirements for Export from China',
      excerpt: 'Overview of common certifications needed for products sourced from China for various markets.',
      date: 'May 12, 2026',
      author: 'Sarah Wang',
      category: 'Compliance',
      readTime: '9 min',
    },
    {
      slug: 'sample-review-process',
      title: 'Sample Review Process: Getting It Right Before Production',
      excerpt: 'How to evaluate samples effectively and provide clear feedback to avoid production issues.',
      date: 'May 5, 2026',
      author: 'David Liu',
      category: 'Quality Control',
      readTime: '5 min',
    },
  ];

  const categories = ['All', 'Supplier Verification', 'Quality Control', 'Logistics', 'Sourcing Strategy', 'Compliance'];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#0F172A] mb-4">Sourcing Insights</h1>
          <p className="text-xl text-[#475569]">Practical guidance on sourcing from China.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, idx) => (
            <span key={idx} className="px-4 py-1.5 text-sm bg-[#F8FAFC] text-[#475569] rounded-full border border-[#E2E8F0]">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-[#E2E8F0] rounded-xl p-8 hover:border-[#1E40AF] transition-colors group">
              <div className="flex items-center gap-3 text-sm text-[#64748B] mb-4">
                <span className="px-3 py-0.5 bg-[#EFF6FF] text-[#1E40AF] rounded text-xs">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-[#1E40AF] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#475569] mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-[#64748B]">
                  <User className="w-4 h-4" /> {post.author}
                </div>
                <span className="text-[#64748B]">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">Need Specific Guidance?</h2>
          <p className="text-[#475569] mb-8">Our team can provide advice tailored to your sourcing situation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
