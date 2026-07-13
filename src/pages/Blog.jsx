import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '7 min read',
    imgId: 'blog-verify-supplier-4a2b1c',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
  },
  {
    id: 'china-quality-inspection-guide',
    title: 'A Practical Guide to Quality Inspection in China',
    excerpt: 'Quality inspection is one of the most important steps in the China sourcing process. Learn about the different types of inspections, when to use them, and what to look for in an inspection report.',
    category: 'Quality Control',
    date: '2026-05-28',
    readTime: '9 min read',
    imgId: 'blog-qc-guide-7d3e2f',
    titleId: 'blog-qc-guide-title',
    descId: 'blog-qc-guide-desc',
  },
  {
    id: 'fcl-vs-lcl-shipping',
    title: 'FCL vs LCL Shipping from China: Which Is Right for Your Order?',
    excerpt: 'Choosing between full container load and less-than-container load shipping depends on your order volume, timeline, and budget. Here\'s how to decide which option makes sense for your business.',
    category: 'Shipping & Logistics',
    date: '2026-05-10',
    readTime: '6 min read',
    imgId: 'blog-shipping-5f7a3c',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'private-label-china-guide',
    title: 'Getting Started with Private Label Manufacturing in China',
    excerpt: 'Private label products can be a profitable business model, but the process requires careful planning. This guide walks through finding OEM manufacturers, developing samples, and managing production.',
    category: 'Private Label',
    date: '2026-04-22',
    readTime: '10 min read',
    imgId: 'blog-private-label-1b4e9d',
    titleId: 'blog-private-label-title',
    descId: 'blog-private-label-desc',
  },
  {
    id: 'china-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Many first-time importers make avoidable mistakes that cost time and money. From skipping factory audits to ignoring payment terms, here are the most common pitfalls and how to protect yourself.',
    category: 'Sourcing Tips',
    date: '2026-04-05',
    readTime: '8 min read',
    imgId: 'blog-mistakes-9e3f7a',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'ce-certification-china',
    title: 'CE Certification for Products Sourced from China: What You Need to Know',
    excerpt: 'If you\'re importing products into the EU, CE certification is often mandatory. This article explains what CE marking means, which products require it, and how to ensure your Chinese supplier can comply.',
    category: 'Compliance',
    date: '2026-03-18',
    readTime: '7 min read',
    imgId: 'blog-ce-cert-2d5c8b',
    titleId: 'blog-ce-cert-title',
    descId: 'blog-ce-cert-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Private Label', 'Sourcing Tips', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
            China Sourcing Blog
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-blue-light text-brand-blue hover:bg-brand-blue hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((post) => (
              <article key={post.id} className="card-base flex flex-col group">
                <div className="rounded-lg overflow-hidden mb-5 h-44">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 id={post.titleId} className="text-brand-navy font-bold text-base mb-2 leading-snug flex-1">
                  {post.title}
                </h3>
                <p id={post.descId} className="text-brand-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-brand-muted pt-3 border-t border-brand-border">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-blue-light">
        <div className="section-container text-center">
          <h2 className="section-heading mb-4">Ready to Start Sourcing?</h2>
          <p className="section-subheading max-w-xl mx-auto mb-8">
            Put our expertise to work for your business. Get a free sourcing consultation and quote today.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
