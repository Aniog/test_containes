import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    date: 'June 10, 2026',
    readTime: '7 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '6 min read',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. This article explains how AQL sampling works, what the numbers mean, and how to choose the right level for your products.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-freight-guide',
    category: 'Shipping & Logistics',
    date: 'May 15, 2026',
    readTime: '8 min read',
    title: 'Sea Freight from China: A Practical Guide for First-Time Importers',
    excerpt: 'Sea freight is the most cost-effective way to import goods from China, but the process can be confusing. This guide covers Incoterms, FCL vs LCL, documentation, and how to avoid common shipping mistakes.',
    titleId: 'blog-seafreight-title',
    descId: 'blog-seafreight-desc',
    imgId: 'blog-seafreight-img-g7h8i9',
  },
  {
    id: 'private-label-china',
    category: 'Private Label',
    date: 'April 30, 2026',
    readTime: '9 min read',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling with Chinese factories is one of the most accessible ways to build a product brand. This article walks through the process from product selection to first shipment, including how to protect your brand.',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
    imgId: 'blog-privatelabel-img-j1k2l3',
  },
  {
    id: 'ce-certification-china',
    category: 'Compliance',
    date: 'April 12, 2026',
    readTime: '5 min read',
    title: 'CE Certification for Products Made in China: What You Need to Know',
    excerpt: 'If you\'re importing products into the EU, CE marking is mandatory for many product categories. This guide explains what CE certification means, which products require it, and how to verify that a Chinese supplier\'s CE documentation is genuine.',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-m4n5o6',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    date: 'March 25, 2026',
    readTime: '6 min read',
    title: 'Sourcing Agent vs. Trading Company: Which Is Right for Your Business?',
    excerpt: 'When buying from China, you have several options: work directly with a factory, use a trading company, or hire a sourcing agent. Each has pros and cons depending on your order size, product complexity, and risk tolerance.',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-p7q8r9',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Insights & Guides</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Practical guides, industry insights, and expert advice for global buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-4">Featured Article</p>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto min-h-56 bg-slate-100">
                  <img
                    alt={featured.title}
                    data-strk-img-id={featured.imgId}
                    data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <Clock className="w-3 h-3" /> {featured.readTime}
                    </span>
                  </div>
                  <h2 id={featured.titleId} className="text-2xl font-bold text-slate-900 mb-3 leading-snug">{featured.title}</h2>
                  <p id={featured.descId} className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{featured.date}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm hover:text-brand-red transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, date, readTime, title, excerpt, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-slate-100">
                  <img
                    alt={title}
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-navy/10 text-brand-navy text-xs font-semibold px-2.5 py-1 rounded-full">{category}</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <Clock className="w-3 h-3" /> {readTime}
                    </span>
                  </div>
                  <h3 id={titleId} className="font-bold text-slate-900 text-base mb-2 leading-snug flex-1">{title}</h3>
                  <p id={descId} className="text-slate-600 text-sm leading-relaxed mb-4">{excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-slate-400 text-xs">{date}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm hover:text-brand-red transition-colors"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Get Sourcing Insights in Your Inbox</h2>
          <p className="text-slate-600 mb-6">
            Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe to Updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
