import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const posts = [
    {
      slug: 'factory-audit-checklist-china',
      title: 'Factory Audit Checklist for China Sourcing: What to Verify Before You Order',
      excerpt: 'A practical checklist covering business legitimacy, production capacity, quality systems, and compliance — based on audits we conduct for international buyers.',
      date: 'Jul 12, 2026',
      readTime: '12 min',
      category: 'Sourcing',
    },
    {
      slug: 'aql-inspection-standards-explained',
      title: 'AQL Inspection Standards Explained: How We Decide Pass or Fail',
      excerpt: 'Understanding Acceptable Quality Limit (AQL) sampling and how inspection levels affect your risk. Includes examples from real pre-shipment inspections.',
      date: 'Jul 5, 2026',
      readTime: '9 min',
      category: 'Quality Control',
    },
    {
      slug: 'china-export-documentation-guide-2026',
      title: 'China Export Documentation Guide for 2026: What Buyers Need to Know',
      excerpt: 'A clear overview of commercial invoices, packing lists, certificates of origin, and compliance documents required for smooth customs clearance.',
      date: 'Jun 28, 2026',
      readTime: '11 min',
      category: 'Logistics',
    },
    {
      slug: 'how-to-evaluate-supplier-capability',
      title: 'How to Evaluate Supplier Capability Before Placing a Production Order',
      excerpt: 'Key questions to ask and evidence to request when assessing whether a factory can reliably produce your product at the required volume and quality.',
      date: 'Jun 18, 2026',
      readTime: '8 min',
      category: 'Sourcing',
    },
    {
      slug: 'common-mistakes-first-time-china-buyers',
      title: 'Common Mistakes First-Time China Buyers Make — and How to Avoid Them',
      excerpt: 'Lessons from working with buyers who are sourcing from China for the first time. Practical advice on communication, samples, and payment terms.',
      date: 'Jun 10, 2026',
      readTime: '10 min',
      category: 'Best Practices',
    },
    {
      slug: 'pre-shipment-inspection-what-to-expect',
      title: 'What to Expect from a Pre-Shipment Inspection: A Buyer’s Perspective',
      excerpt: 'A step-by-step walkthrough of a typical PSI, including what inspectors check, how samples are selected, and how findings are reported.',
      date: 'May 29, 2026',
      readTime: '7 min',
      category: 'Quality Control',
    },
  ];

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">Resources</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Sourcing insights</h1>
            <p className="text-lg text-slate-600">Practical guidance for buyers sourcing from China. Written by our team based on real factory audits, inspections, and client projects.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Need sourcing guidance for your specific product?</h2>
          <p className="text-slate-300 mb-6">Submit your requirements and we will provide a preliminary assessment and recommended approach.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-white text-slate-900 rounded-md hover:bg-slate-100">Get a Free Sourcing Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
