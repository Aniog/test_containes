import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key criteria and questions to assess potential manufacturing partners before placing orders.',
      date: 'June 10, 2026',
      category: 'Supplier Selection',
      readTime: '8 min',
    },
    {
      title: 'Understanding Quality Inspection Standards for Import Products',
      excerpt: 'A guide to common inspection protocols and how to establish quality criteria for your products.',
      date: 'June 3, 2026',
      category: 'Quality Control',
      readTime: '10 min',
    },
    {
      title: 'Navigating Shipping and Logistics from China in 2026',
      excerpt: 'Current freight market conditions, documentation requirements, and delivery timeline expectations.',
      date: 'May 28, 2026',
      category: 'Logistics',
      readTime: '7 min',
    },
    {
      title: 'Common Communication Challenges When Sourcing from China',
      excerpt: 'Practical approaches to overcome language barriers and ensure clear requirements communication.',
      date: 'May 20, 2026',
      category: 'Best Practices',
      readTime: '6 min',
    },
    {
      title: 'Factory Audit Reports: What to Look For',
      excerpt: 'Key sections of a factory audit report and how to interpret findings for supplier evaluation.',
      date: 'May 12, 2026',
      category: 'Supplier Selection',
      readTime: '9 min',
    },
    {
      title: 'Managing Production Delays: Prevention and Response',
      excerpt: 'Strategies to minimize production delays and how to respond when issues arise.',
      date: 'May 5, 2026',
      category: 'Production',
      readTime: '8 min',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300">Practical guidance on China sourcing, supplier management, and import operations.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="text-xs font-medium text-slate-500 tracking-wider mb-3">{post.category}</div>
              <h3 className="font-semibold text-xl mb-3 tracking-tight">{post.title}</h3>
              <p className="text-slate-600 mb-6">{post.excerpt}</p>
              <span className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Need Specific Guidance?</h2>
          <p className="text-slate-600 mb-8">Our team can provide tailored advice for your sourcing situation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800 transition-colors">
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;