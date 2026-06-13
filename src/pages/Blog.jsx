import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key factors to assess when reviewing potential manufacturers, from documentation to production capabilities.',
      date: 'June 2, 2026',
      category: 'Supplier Evaluation',
      readTime: '8 min',
    },
    {
      title: 'Understanding Pre-Shipment Inspection Reports',
      excerpt: 'What inspection reports include, how to interpret findings, and what actions to take based on results.',
      date: 'May 28, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Common Documentation Required for China Exports',
      excerpt: 'An overview of commercial invoices, packing lists, certificates of origin, and other export documents.',
      date: 'May 20, 2026',
      category: 'Logistics',
      readTime: '7 min',
    },
    {
      title: 'Managing Production Delays: Communication Best Practices',
      excerpt: 'How to maintain clear communication with suppliers when timelines shift and how to mitigate impact.',
      date: 'May 12, 2026',
      category: 'Project Management',
      readTime: '5 min',
    },
    {
      title: 'Product Certification Requirements for Different Markets',
      excerpt: 'Overview of CE, FCC, UL, and other certifications commonly required for imported products.',
      date: 'May 5, 2026',
      category: 'Compliance',
      readTime: '9 min',
    },
    {
      title: 'Sample Evaluation: What to Look for Before Production',
      excerpt: 'A systematic approach to reviewing samples and providing feedback that leads to production-ready specifications.',
      date: 'April 28, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Practical insights on sourcing, quality control, and supplier management.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="text-xs font-medium text-blue-800 mb-3">{post.category}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{post.title}</h3>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-blue-800 font-medium">Read more →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Have a Question About Sourcing?</h2>
          <p className="text-slate-600 mb-8">Contact us for guidance on your specific sourcing situation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
