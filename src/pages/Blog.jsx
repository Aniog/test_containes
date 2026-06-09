import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate Supplier Quality Management Systems',
      excerpt: 'A practical framework for assessing whether a supplier\'s quality processes will consistently meet your requirements.',
      date: 'May 28, 2026',
      category: 'Quality Control',
      readTime: '8 min',
    },
    {
      title: 'Understanding Factory Audit Reports: What Buyers Should Look For',
      excerpt: 'Key sections and findings in audit reports that indicate supplier capability and potential risks.',
      date: 'May 21, 2026',
      category: 'Supplier Verification',
      readTime: '6 min',
    },
    {
      title: 'Common Documentation Requirements for China Exports',
      excerpt: 'An overview of standard export documents and their purposes in international shipments from China.',
      date: 'May 14, 2026',
      category: 'Logistics',
      readTime: '5 min',
    },
    {
      title: 'Managing Production Delays: Communication Strategies That Work',
      excerpt: 'Practical approaches for maintaining visibility and addressing timeline issues with Chinese suppliers.',
      date: 'May 7, 2026',
      category: 'Production Management',
      readTime: '7 min',
    },
    {
      title: 'Sample Evaluation: A Checklist for Product Specification Compliance',
      excerpt: 'Systematic approach to reviewing samples against your requirements before committing to production orders.',
      date: 'April 30, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Building Long-Term Supplier Relationships in China',
      excerpt: 'Factors that contribute to stable, productive sourcing partnerships over multiple years.',
      date: 'April 23, 2026',
      category: 'Supplier Relations',
      readTime: '9 min',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300">
            Practical guidance on sourcing from China based on our experience working with international buyers.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="border border-gray-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                <span className="px-2.5 py-0.5 bg-slate-100 rounded text-xs">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {post.date}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 leading-tight">{post.title}</h2>
              <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-slate-900 font-medium inline-flex items-center gap-1 hover:underline cursor-pointer">
                Read article <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Have a Specific Question?</h2>
          <p className="text-slate-600 mb-8">
            Our team can provide guidance on your particular sourcing situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;