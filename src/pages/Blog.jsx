import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key criteria and questions to ask when assessing potential manufacturing partners.',
      date: 'June 10, 2026',
      category: 'Supplier Selection',
    },
    {
      title: 'Understanding AQL Standards for Quality Inspections',
      excerpt: 'A guide to Acceptable Quality Limit sampling and how it applies to your orders.',
      date: 'June 3, 2026',
      category: 'Quality Control',
    },
    {
      title: 'Common Documentation Required for China Exports',
      excerpt: 'An overview of commercial invoices, packing lists, certificates of origin, and other export documents.',
      date: 'May 28, 2026',
      category: 'Logistics',
    },
    {
      title: 'What to Expect During a Factory Audit',
      excerpt: 'Preparation steps and typical areas of focus when auditors visit a manufacturing facility.',
      date: 'May 20, 2026',
      category: 'Verification',
    },
    {
      title: 'Managing Production Delays: Communication Strategies',
      excerpt: 'How to maintain visibility and address timeline issues with suppliers proactively.',
      date: 'May 12, 2026',
      category: 'Production',
    },
    {
      title: 'Incoterms 2020: Which Terms Work Best for China Sourcing?',
      excerpt: 'A comparison of common trade terms and considerations for each when importing from China.',
      date: 'May 5, 2026',
      category: 'Logistics',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">Blog</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Practical insights on sourcing, quality control, and supplier management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <article key={idx} className="border border-slate-200 rounded-lg p-8 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">{post.title}</h2>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>
            <span className="text-blue-800 font-medium text-sm">Read more →</span>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600">More articles coming soon. For sourcing advice, contact our team.</p>
      </div>
    </div>
  );
};

export default Blog;
