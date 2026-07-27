import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      excerpt: 'Key factors to assess when reviewing potential manufacturers, from documentation to production capabilities.',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Quality Inspection Levels: AQL Explained',
      date: 'July 8, 2026',
      category: 'Quality Control',
      excerpt: 'A clear explanation of Acceptable Quality Limit standards and how to apply them to your orders.',
      readTime: '6 min read',
    },
    {
      title: 'Navigating Shipping from China: Freight Options Compared',
      date: 'June 28, 2026',
      category: 'Logistics',
      excerpt: 'Overview of sea freight, air freight, and express options with guidance on choosing the right method.',
      readTime: '10 min read',
    },
    {
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      date: 'June 20, 2026',
      category: 'Best Practices',
      excerpt: 'Lessons from sourcing projects: communication gaps, timeline issues, and quality oversights to watch for.',
      readTime: '7 min read',
    },
    {
      title: 'The Role of Samples in Supplier Selection',
      date: 'June 12, 2026',
      category: 'Product Development',
      excerpt: 'Why samples matter, what to look for during evaluation, and how to manage the iteration process.',
      readTime: '5 min read',
    },
    {
      title: 'Export Documentation Basics for Importers',
      date: 'June 5, 2026',
      category: 'Compliance',
      excerpt: 'Essential documents required for importing from China and common issues that cause customs delays.',
      readTime: '9 min read',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">Blog</h1>
        <p className="text-xl text-[#64748B]">Insights and practical guidance on sourcing from China</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <article key={idx} className="border border-[#E2E8F0] rounded-xl p-8 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 text-sm text-[#64748B] mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="text-xs uppercase tracking-wide text-[#1E40AF] mb-2">{post.category}</div>
            <h2 className="text-xl font-semibold text-[#0F172A] mb-3 leading-tight">{post.title}</h2>
            <p className="text-[#64748B]">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-[#64748B]">
        More articles coming soon. For sourcing advice tailored to your situation, contact our team.
      </div>
    </div>
  );
};

export default Blog;
