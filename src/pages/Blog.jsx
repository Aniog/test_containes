import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to verify a Chinese supplier before placing a large order',
    excerpt: 'A practical checklist for evaluating suppliers, including on-site visits, reference checks, and sample evaluation.',
    date: '2026-06-15',
    readTime: '8 min read',
    category: 'Supplier Verification',
  },
  {
    id: 2,
    title: 'Pre-shipment inspection: what buyers need to know',
    excerpt: 'Learn the key stages of inspection, common defects to watch for, and how to read an inspection report.',
    date: '2026-06-02',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    id: 3,
    title: 'Understanding Incoterms for China shipments',
    excerpt: 'A plain-language guide to EXW, FOB, CIF, and DDP, and which terms make the most sense for your business.',
    date: '2026-05-20',
    readTime: '10 min read',
    category: 'Shipping',
  },
  {
    id: 4,
    title: 'OEM vs ODM: which manufacturing model fits your product?',
    excerpt: 'The differences between OEM and ODM, their cost implications, and how to choose the right approach.',
    date: '2026-05-08',
    readTime: '7 min read',
    category: 'Manufacturing',
  },
  {
    id: 5,
    title: 'How to negotiate MOQ and pricing with Chinese factories',
    excerpt: 'Practical tactics for negotiating minimum order quantities and unit prices without damaging the relationship.',
    date: '2026-04-25',
    readTime: '9 min read',
    category: 'Negotiation',
  },
  {
    id: 6,
    title: 'Common quality issues in furniture sourcing and how to prevent them',
    excerpt: 'From wood moisture to finish consistency, we cover the most frequent quality problems in furniture manufacturing.',
    date: '2026-04-12',
    readTime: '8 min read',
    category: 'Quality Control',
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical insights on sourcing from China, quality control, supplier management, and shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-t-xl bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-excerpt] [blog-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p id={`blog-${post.id}-title`} className="sr-only">
                  {post.title}
                </p>
                <p id={`blog-${post.id}-excerpt`} className="sr-only">
                  {post.excerpt}
                </p>
                <p id={`blog-${post.id}-category`} className="sr-only">
                  {post.category}
                </p>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
