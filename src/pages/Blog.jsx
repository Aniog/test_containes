import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const posts = [
  {
    title: 'How to verify a Chinese supplier before placing an order',
    excerpt: 'A practical checklist for checking business registration, factory capacity, quality systems, and references.',
    date: '2026-07-15',
    readTime: '6 min read',
    category: 'Supplier Verification',
  },
  {
    title: 'What to expect from a pre-shipment inspection',
    excerpt: 'An overview of inspection types, common defects, and how to use inspection reports to make better decisions.',
    date: '2026-06-28',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Shipping options for small and medium orders from China',
    excerpt: 'Comparing air freight, express courier, and sea freight for different order sizes and timelines.',
    date: '2026-06-10',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    title: 'Common mistakes when sourcing products from China',
    excerpt: 'Practical advice on specifications, samples, communication, and contracts to avoid costly errors.',
    date: '2026-05-22',
    readTime: '6 min read',
    category: 'Sourcing Tips',
  },
  {
    title: 'How to prepare a sourcing request that gets results',
    excerpt: 'What information to include in your inquiry so suppliers and agents can respond quickly and accurately.',
    date: '2026-05-05',
    readTime: '4 min read',
    category: 'Sourcing Tips',
  },
  {
    title: 'Understanding MOQ, tooling, and lead times',
    excerpt: 'Key manufacturing terms explained, and how they affect your pricing, timeline, and risk.',
    date: '2026-04-18',
    readTime: '5 min read',
    category: 'Manufacturing',
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Practical guidance on sourcing, supplier verification, quality control, and shipping from China.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-slate-700">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {format(new Date(post.date), 'MMM d, yyyy')}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-base font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <Button asChild variant="ghost" size="sm" className="mt-4 px-0">
                  <span className="flex items-center gap-1 text-slate-900">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Need help with a sourcing project?</h2>
            <p className="mt-2 text-slate-300">Tell us your product and we will prepare a practical sourcing plan.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
