import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier Before Placing an Order',
      excerpt: 'Key criteria and verification steps to reduce sourcing risk when working with new suppliers.',
      date: 'June 15, 2026',
      category: 'Supplier Verification',
    },
    {
      title: 'Understanding Quality Inspection Standards for Import Products',
      excerpt: 'A practical guide to common inspection protocols and how they protect your business.',
      date: 'June 8, 2026',
      category: 'Quality Control',
    },
    {
      title: 'Navigating Export Documentation Requirements from China',
      excerpt: 'Essential documents needed for smooth customs clearance and regulatory compliance.',
      date: 'May 28, 2026',
      category: 'Logistics',
    },
    {
      title: 'Common Communication Challenges When Sourcing from China',
      excerpt: 'Practical approaches to overcome language and cultural barriers in supplier relationships.',
      date: 'May 20, 2026',
      category: 'Best Practices',
    },
    {
      title: 'What to Include in a Product Specification Sheet',
      excerpt: 'A checklist for creating clear, complete specifications that reduce misunderstandings.',
      date: 'May 12, 2026',
      category: 'Product Development',
    },
    {
      title: 'How Production Monitoring Reduces Quality Issues',
      excerpt: 'Real examples of how early intervention during production prevents costly problems.',
      date: 'May 5, 2026',
      category: 'Quality Control',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Sourcing Insights</h1>
          <p className="text-lg text-slate-300">Practical guidance for international buyers sourcing from China.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-slate-200 rounded-lg p-8 hover:border-slate-300 transition-colors">
              <div className="text-xs font-medium text-blue-700 mb-3">{post.category}</div>
              <h2 className="text-xl font-semibold tracking-tight mb-3">{post.title}</h2>
              <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
              <div className="text-xs text-slate-500">{post.date}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Need Specific Guidance?</h2>
          <p className="text-slate-600 mb-6">Contact us to discuss your sourcing challenges and how we can help.</p>
          <Link to="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;