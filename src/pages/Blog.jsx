import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before You Order',
    excerpt: 'A practical checklist for checking business licenses, factory capacity, and quality systems before committing to a supplier.',
    date: '2026-07-15',
    readTime: '6 min read',
  },
  {
    title: 'Pre-Shipment Inspection: What Buyers Should Expect',
    excerpt: 'What happens during a pre-shipment inspection, common findings, and how to use the report to make better decisions.',
    date: '2026-07-02',
    readTime: '5 min read',
  },
  {
    title: 'Shipping Terms Explained: FOB, CIF, and EXW',
    excerpt: 'A clear comparison of common Incoterms and what they mean for your total landed cost and risk.',
    date: '2026-06-20',
    readTime: '7 min read',
  },
  {
    title: 'Common Quality Issues in Electronics Sourcing',
    excerpt: 'Typical defects, testing methods, and how to specify acceptance criteria that reduce rework and returns.',
    date: '2026-06-08',
    readTime: '6 min read',
  },
  {
    title: 'How to Write Effective Product Specs for Chinese Manufacturers',
    excerpt: 'Structure, detail, and clarity tips that help factories quote accurately and produce to your expectations.',
    date: '2026-05-25',
    readTime: '5 min read',
  },
  {
    title: 'Managing Production Delays Without Damaging Relationships',
    excerpt: 'Practical communication and escalation tactics when timelines slip during production.',
    date: '2026-05-10',
    readTime: '4 min read',
  },
];

const Blog = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Blog</h1>
          <p className="mt-4 text-slate-600">Practical guidance on sourcing, supplier verification, quality control, and shipping from China.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Button asChild variant="outline" className="mt-4">
                <span className="inline-flex items-center gap-2 text-sm">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Need help with a specific sourcing challenge?</h3>
          <p className="mt-2 text-sm text-slate-600">We can review your situation and suggest a practical next step.</p>
          <div className="mt-4">
            <Button asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
