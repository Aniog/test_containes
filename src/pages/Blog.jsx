import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to verify a Chinese supplier before placing a large order',
    excerpt:
      'A practical checklist for checking business registration, factory capacity, and client references to reduce sourcing risk.',
    date: '2026-06-15',
    readTime: '6 min read',
    category: 'Supplier Verification',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Pre-shipment inspection checklist for electronics buyers',
    excerpt:
      'Key checks to perform before your cargo leaves the factory, including functionality, packaging, and documentation review.',
    date: '2026-05-28',
    readTime: '5 min read',
    category: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Understanding Incoterms for China-to-overseas shipping',
    excerpt:
      'A plain-language guide to EXW, FOB, CIF, and DDP terms so you can choose the right arrangement for your cargo.',
    date: '2026-05-10',
    readTime: '7 min read',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Common quality issues in furniture sourcing and how to avoid them',
    excerpt:
      'From material mismatches to finish defects, learn what to watch for when sourcing furniture from China.',
    date: '2026-04-22',
    readTime: '5 min read',
    category: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'How to write a clear sourcing brief for faster results',
    excerpt:
      'A well-written brief helps suppliers and agents understand your requirements, reducing back-and-forth and delays.',
    date: '2026-04-05',
    readTime: '4 min read',
    category: 'Sourcing Strategy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'When to use a sourcing agent versus direct factory contact',
    excerpt:
      'Compare the trade-offs of working directly with factories versus using an experienced local agent.',
    date: '2026-03-18',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Blog</h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical guides and insights on China sourcing, supplier verification, quality control, and shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-slate-100">
                  <img alt={post.title} className="h-full w-full object-cover" src={post.image} />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-sm">
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Need help with your sourcing project?</h2>
              <p className="mt-3 text-lg text-slate-600">
                Our team can review your requirements and suggest a practical approach. No commitment required.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <img
                  alt="Team reviewing sourcing documents"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                We combine research, on-site verification, and structured reporting to help you make better sourcing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
