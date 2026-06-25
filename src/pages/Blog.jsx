import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier Beyond Trade Platform Profiles',
      excerpt: 'Trade platform ratings provide limited insight. Learn what questions to ask and what documentation to request when assessing supplier legitimacy.',
      date: 'June 12, 2026',
      category: 'Supplier Verification',
      readTime: '8 min',
    },
    {
      title: 'Understanding AQL Inspection Standards for Import Quality Control',
      excerpt: 'Acceptable Quality Limit (AQL) is the standard framework for inspection sampling. This guide explains how to set appropriate AQL levels for different product categories.',
      date: 'May 28, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Common Documentation Requirements for Importing from China',
      excerpt: 'Commercial invoice, packing list, certificate of origin, and test reports. Understanding what documentation is required for smooth customs clearance.',
      date: 'May 15, 2026',
      category: 'Logistics',
      readTime: '5 min',
    },
    {
      title: 'Factory Audit Checklist: What to Verify On-Site',
      excerpt: 'A practical checklist covering business legitimacy, production capacity, quality systems, and social compliance considerations during factory visits.',
      date: 'April 30, 2026',
      category: 'Factory Audits',
      readTime: '10 min',
    },
    {
      title: 'Navigating MOQ Requirements When Sourcing from China',
      excerpt: 'Minimum order quantities vary significantly by product category and supplier. Strategies for negotiating reasonable MOQs or finding suppliers with flexible terms.',
      date: 'April 18, 2026',
      category: 'Sourcing Strategy',
      readTime: '7 min',
    },
    {
      title: 'Product Compliance: CE, FCC, and RoHS Requirements Overview',
      excerpt: 'An introduction to common product compliance requirements for goods imported into European and North American markets.',
      date: 'April 3, 2026',
      category: 'Compliance',
      readTime: '9 min',
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Resources & Insights</h1>
          <p className="text-lg text-[#475569] max-w-2xl">Practical guidance on sourcing from China, based on our experience working with suppliers and importers.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-[#E2E8F0] rounded-xl p-8 hover:border-[#CBD5E1] transition-colors group">
              <div className="flex items-center gap-3 text-xs text-[#64748B] mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#1E40AF] transition-colors">{post.title}</h3>
              <p className="text-sm text-[#475569] mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-3 py-1 bg-[#F1F5F9] text-[#475569] rounded">{post.category}</span>
                <span className="text-[#1E40AF] text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need sourcing guidance?</h2>
          <p className="text-[#475569] mb-8 max-w-md mx-auto">Our team can provide a preliminary assessment of your specific sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1E3A8A] transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
