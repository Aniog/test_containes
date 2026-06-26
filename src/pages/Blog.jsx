import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier Before Placing an Order',
      excerpt: 'A practical checklist for assessing supplier reliability, production capability, and financial stability.',
      date: 'June 12, 2026',
      category: 'Supplier Verification',
      readTime: '8 min',
    },
    {
      title: 'Understanding AQL Standards for Quality Inspection',
      excerpt: 'What Acceptable Quality Limit means in practice and how to set inspection criteria for your products.',
      date: 'June 5, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Common Documentation Required for China Exports',
      excerpt: 'An overview of commercial invoices, packing lists, certificates of origin, and other trade documents.',
      date: 'May 28, 2026',
      category: 'Shipping & Logistics',
      readTime: '5 min',
    },
    {
      title: 'Managing Production Delays: Communication Strategies',
      excerpt: 'How to maintain visibility and respond effectively when factory timelines shift.',
      date: 'May 20, 2026',
      category: 'Production Management',
      readTime: '7 min',
    },
    {
      title: 'Payment Terms in International Trade: What Buyers Should Know',
      excerpt: 'Comparing T/T, L/C, and other payment methods from a buyer risk perspective.',
      date: 'May 14, 2026',
      category: 'Trade Finance',
      readTime: '9 min',
    },
    {
      title: 'Factory Audit Reports: What to Look For',
      excerpt: 'Key sections of an audit report and red flags that warrant further investigation.',
      date: 'May 8, 2026',
      category: 'Supplier Verification',
      readTime: '6 min',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-[#1E3A5F] mb-4">Blog</h1>
        <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
          Practical guidance on China sourcing and supplier management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="border border-gray-200 rounded-xl p-8 hover:border-[#1E3A5F] transition-colors cursor-pointer">
            <div className="flex items-center gap-3 text-sm text-[#6B7280] mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A5F] mb-3 leading-tight">{post.title}</h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-[#6B7280]">
        This blog provides general information. Specific situations may require tailored advice.
      </div>
    </div>
  );
};

export default Blog;
