import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Verify a Chinese Supplier Before You Place an Order',
      excerpt: 'A practical checklist for evaluating suppliers, checking business credentials, and reducing sourcing risk.',
      date: '2026-07-15',
      category: 'Supplier Verification',
      readTime: '6 min read',
    },
    {
      title: 'Pre-Shipment Inspection Checklist: What Buyers Often Miss',
      excerpt: 'Key inspection points beyond the obvious—packaging, labeling, carton strength, and random sampling.',
      date: '2026-07-02',
      category: 'Quality Control',
      readTime: '5 min read',
    },
    {
      title: 'Incoterms 2020 Explained for China Importers',
      excerpt: 'A plain-language guide to EXW, FOB, CIF, and DDP—and which terms work best for your shipment size.',
      date: '2026-06-20',
      category: 'Shipping',
      readTime: '7 min read',
    },
    {
      title: 'Factory Audit vs. Supplier Audit: What is the Difference?',
      excerpt: 'When to audit the facility, the management system, or both—and how to interpret the results.',
      date: '2026-06-08',
      category: 'Factory Verification',
      readTime: '5 min read',
    },
    {
      title: 'How to Write a Product Spec Sheet That Gets Accurate Quotes',
      excerpt: 'Structure, detail, and clarity: how to brief suppliers so you get comparable, reliable pricing.',
      date: '2026-05-25',
      category: 'Sourcing Strategy',
      readTime: '6 min read',
    },
    {
      title: 'Common Quality Issues in Electronics Sourcing and How to Prevent Them',
      excerpt: 'From firmware mismatches to solder defects—common pitfalls and practical prevention steps.',
      date: '2026-05-12',
      category: 'Quality Control',
      readTime: '8 min read',
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Blog</h1>
            <p className="mt-4 text-slate-600 text-lg">
              Practical insights on sourcing, quality control, factory verification, and shipping from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow flex flex-col">
                <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">{post.category}</span>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Want more insights delivered to your inbox?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Subscribe for updates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
