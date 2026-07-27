import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key factors to assess when reviewing potential manufacturers, from documentation to production capabilities.',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      readTime: '8 min',
    },
    {
      title: 'Understanding Quality Inspection Levels: AQL Explained',
      excerpt: 'A clear explanation of Acceptable Quality Limit standards and how they apply to different product categories.',
      date: 'July 8, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Navigating Export Documentation for China Shipments',
      excerpt: 'Essential documents required for international shipments and common compliance considerations.',
      date: 'June 28, 2026',
      category: 'Logistics',
      readTime: '7 min',
    },
    {
      title: 'The Real Cost of Sourcing: Beyond Unit Price',
      excerpt: 'Why focusing solely on price can lead to higher total costs. Factors that affect your landed cost.',
      date: 'June 20, 2026',
      category: 'Sourcing Strategy',
      readTime: '5 min',
    },
    {
      title: 'Factory Audits: What to Expect and How to Prepare',
      excerpt: 'A step-by-step overview of the factory audit process and how buyers can get the most value from it.',
      date: 'June 12, 2026',
      category: 'Factory Verification',
      readTime: '9 min',
    },
    {
      title: 'Managing Production Delays: Communication Best Practices',
      excerpt: 'How to establish clear communication channels and escalation procedures with your suppliers.',
      date: 'June 5, 2026',
      category: 'Production Management',
      readTime: '6 min',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-slate-300">Practical insights on sourcing from China.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="border rounded-lg p-8 hover:shadow-sm transition-shadow">
                <div className="flex gap-3 mb-4">
                  <span className="text-xs uppercase tracking-widest bg-slate-100 px-3 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-slate-500 self-center">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{post.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
                <div className="text-xs text-slate-500">{post.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Have a sourcing question?</h3>
          <p className="text-slate-600 mb-6">Our team is available to discuss your specific requirements.</p>
          <Link to="/contact"><Button>Contact Us</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;