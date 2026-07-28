import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const posts = [
  {
    title: 'How to verify a Chinese supplier before placing a large order',
    excerpt: 'A practical checklist for factory audits, document checks, and sample validation.',
    date: '2026-07-15',
    readTime: '6 min read',
    category: 'Supplier Verification',
  },
  {
    title: 'Pre-shipment inspection checklist for importers',
    excerpt: 'Key checks to catch defects, packaging issues, and quantity mismatches before goods leave the factory.',
    date: '2026-06-28',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Common shipping terms explained: FOB, CIF, and EXW',
    excerpt: 'What each Incoterm means for your cost, risk, and control over the shipment.',
    date: '2026-06-10',
    readTime: '7 min read',
    category: 'Shipping',
  },
  {
    title: 'How to write a clear sourcing brief for faster results',
    excerpt: 'The information suppliers and agents need to give you accurate quotes and realistic timelines.',
    date: '2026-05-22',
    readTime: '4 min read',
    category: 'Sourcing Strategy',
  },
  {
    title: 'When to use a third-party inspection company',
    excerpt: 'Situations where independent inspection adds value and protects your investment.',
    date: '2026-05-05',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Negotiation tactics that work with Chinese manufacturers',
    excerpt: 'Practical approaches to pricing, MOQ, payment terms, and delivery schedules.',
    date: '2026-04-18',
    readTime: '6 min read',
    category: 'Negotiation',
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Blog</h1>
            <p className="mt-3 text-slate-600">Practical guidance on sourcing, supplier verification, quality control, and shipping from China.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {format(new Date(post.date), 'MMM d, yyyy')}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-base font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{post.category}</span>
                <div className="mt-4">
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                    Discuss this topic <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Need help with a specific sourcing challenge?</h3>
            <p className="mt-2 text-sm text-slate-600">Tell us your situation and we will share a practical next step.</p>
            <div className="mt-4">
              <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
