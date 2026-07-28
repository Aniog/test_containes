import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Blog = () => {
  const posts = [
    {
      title: 'Understanding Factory Audits: What Buyers Should Verify',
      excerpt: 'A practical guide to the key areas assessed during supplier verification visits and how to interpret audit findings.',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      readTime: '8 min'
    },
    {
      title: 'Quality Inspection Checklists for Electronics Components',
      excerpt: 'Common inspection points for PCB assemblies, connectors, and power supplies. Includes sample acceptance criteria.',
      date: 'July 8, 2026',
      category: 'Quality Control',
      readTime: '12 min'
    },
    {
      title: 'Navigating Shipping Documentation for China Exports',
      excerpt: 'Overview of commercial invoices, packing lists, certificates of origin, and other required export documents.',
      date: 'June 28, 2026',
      category: 'Logistics',
      readTime: '6 min'
    },
    {
      title: 'Negotiating Payment Terms with Chinese Suppliers',
      excerpt: 'Common payment structures, when to use letters of credit, and how to balance cash flow with supplier requirements.',
      date: 'June 20, 2026',
      category: 'Procurement',
      readTime: '7 min'
    },
    {
      title: 'Identifying Red Flags During Initial Supplier Screening',
      excerpt: 'Warning signs that may indicate a supplier is not suitable for your requirements or carries elevated risk.',
      date: 'June 12, 2026',
      category: 'Supplier Verification',
      readTime: '5 min'
    },
    {
      title: 'Managing Production Delays: Communication and Contingency Planning',
      excerpt: 'How to establish realistic timelines, monitor progress, and respond when production schedules slip.',
      date: 'June 5, 2026',
      category: 'Production Management',
      readTime: '9 min'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold mb-4">Sourcing Insights</h1>
        <p className="text-lg text-slate-600">Practical guidance on China sourcing, supplier management, and quality assurance. Written for procurement professionals.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="border border-slate-200 rounded-lg p-8 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">{post.category}</div>
            <h2 className="text-xl font-semibold mb-3 leading-tight">{post.title}</h2>
            <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
            <span className="text-sm text-slate-900 font-medium">Read article →</span>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center border-t pt-12">
        <p className="text-slate-600 mb-4">Looking for guidance on a specific sourcing topic?</p>
        <Link to="/contact"><Button>Contact Our Team</Button></Link>
      </div>
    </div>
  );
};

export default Blog;