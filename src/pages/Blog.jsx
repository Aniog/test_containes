import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'how-to-evaluate-a-chinese-factory',
    title: 'How to Evaluate a Chinese Factory Before Placing an Order',
    date: '2026-05-12',
    excerpt: 'A practical checklist for verifying legitimacy, capability, and quality systems — without flying to China yourself.',
    category: 'Supplier Verification',
    readTime: '9 min',
  },
  {
    slug: 'common-quality-issues-in-consumer-goods',
    title: 'Common Quality Issues in Consumer Goods Sourcing from China',
    date: '2026-04-28',
    excerpt: 'We see the same problems repeatedly. Here is what they are, why they happen, and how to prevent them.',
    category: 'Quality Control',
    readTime: '11 min',
  },
  {
    slug: 'understanding-moq-and-price-breaks',
    title: 'Understanding MOQ and Price Breaks in China Manufacturing',
    date: '2026-04-15',
    excerpt: 'Why factories set minimum order quantities and how to negotiate effectively without damaging the relationship.',
    category: 'Commercial',
    readTime: '7 min',
  },
  {
    slug: 'pre-shipment-inspection-what-to-expect',
    title: 'What a Pre-Shipment Inspection Actually Covers',
    date: '2026-03-30',
    excerpt: 'A clear explanation of AQL sampling, what inspectors look for, and how to interpret the report.',
    category: 'Quality Control',
    readTime: '8 min',
  },
  {
    slug: 'managing-production-delays-in-china',
    title: 'How to Manage Production Delays Without Losing Your Mind',
    date: '2026-03-18',
    excerpt: 'Practical steps to reduce the risk of delays and what to do when they inevitably happen.',
    category: 'Production Management',
    readTime: '10 min',
  },
  {
    slug: 'export-documentation-checklist',
    title: 'Export Documentation Checklist for First-Time Importers',
    date: '2026-03-05',
    excerpt: 'The documents you need, who is responsible for each, and common mistakes that cause customs delays.',
    category: 'Logistics',
    readTime: '6 min',
  },
  {
    slug: 'trading-company-vs-factory',
    title: 'Trading Company vs. Factory: How to Tell the Difference',
    date: '2026-02-20',
    excerpt: 'Many suppliers claim to be manufacturers. Here is how to verify and why it matters for quality and pricing.',
    category: 'Supplier Verification',
    readTime: '8 min',
  },
  {
    slug: 'building-long-term-supplier-relationships',
    title: 'Building Long-Term Supplier Relationships in China',
    date: '2026-02-04',
    excerpt: 'Why treating suppliers as partners (not adversaries) often leads to better quality, pricing, and reliability.',
    category: 'Commercial',
    readTime: '9 min',
  },
];

export default function Blog() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">RESOURCES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              Practical guidance for sourcing from China
            </h1>
            <p className="text-xl text-slate-300">
              We share what we have learned from 12+ years of working with international buyers and Chinese manufacturers — without the hype.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {posts.map((post, idx) => (
            <article key={idx} className="group">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Need advice specific to your situation?</h2>
          <p className="text-slate-600 mb-8">We are happy to discuss your sourcing challenges directly — no sales pitch required.</p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
