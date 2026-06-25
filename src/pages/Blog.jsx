import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock } from 'lucide-react';
import { format } from 'date-fns';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Factory Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before you wire money to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-05-15',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for product sampling and inspection. Here\'s a plain-English explanation of how it works and how to use it to protect your orders.',
    date: '2026-04-28',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    title: 'FOB vs CIF vs DDP: Which Incoterm Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can cost you money and create unexpected liability. This guide explains the most common Incoterms used in China trade and when to use each one.',
    date: '2026-04-10',
    readTime: '7 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article breaks down the key differences, pros and cons, and which option suits different buyer profiles.',
    date: '2026-03-22',
    readTime: '5 min read',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-j1k2l3',
  },
  {
    id: 'ce-marking-guide',
    category: 'Compliance',
    title: 'CE Marking for Products Sourced from China: A Practical Guide',
    excerpt: 'If you\'re importing products into the EU, CE marking is often mandatory. This guide explains what CE marking means, which products require it, and how to get your Chinese-made products certified.',
    date: '2026-03-05',
    readTime: '9 min read',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-m4n5o6',
  },
  {
    id: 'production-delays-china',
    category: 'Production',
    title: '5 Common Causes of Production Delays in China (and How to Prevent Them)',
    excerpt: 'Late shipments are one of the most frustrating problems in China sourcing. This article identifies the most common causes of production delays and practical steps you can take to avoid them.',
    date: '2026-02-18',
    readTime: '6 min read',
    titleId: 'blog-delays-title',
    descId: 'blog-delays-desc',
    imgId: 'blog-delays-img-p7q8r9',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Insights & Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">China Sourcing Blog</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers working with Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-6">Featured Article</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
            <div className="aspect-video lg:aspect-auto bg-slate-200 overflow-hidden">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit">{featured.category}</span>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-slate-600 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span>{format(new Date(featured.date), 'MMMM d, yyyy')}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1a4f8a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors no-underline w-fit"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-6">All Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{post.category}</span>
                  <h3 id={post.titleId} className="text-base font-bold text-slate-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-xs font-semibold text-[#2563eb] hover:text-[#1a4f8a] transition-colors no-underline flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Have a Sourcing Question?</h2>
          <p className="text-slate-600 mb-6">Our team is happy to answer questions about sourcing from China. Get in touch for a free consultation.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1a4f8a] text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
