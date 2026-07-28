import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending payment to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '7 min read',
    titleId: 'blog-sv-title',
    descId: 'blog-sv-desc',
    imgId: 'blog-sv-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What It Is and How to Use It',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard sampling methodology used in pre-shipment inspections. Learn how it works, what AQL levels mean, and how to choose the right level for your product.',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-freight-guide',
    category: 'Shipping',
    title: 'Sea Freight from China: FCL vs LCL — Which Is Right for Your Order?',
    excerpt: 'Full container load (FCL) and less-than-container load (LCL) each have advantages depending on your order volume and timeline. This guide helps you decide which option makes sense for your shipment.',
    date: '2026-06-28',
    readTime: '5 min read',
    titleId: 'blog-sea-title',
    descId: 'blog-sea-desc',
    imgId: 'blog-sea-img-g7h8i9',
  },
  {
    id: 'incoterms-guide',
    category: 'Trade Terms',
    title: 'Incoterms for China Importers: FOB, CIF, EXW — What You Need to Know',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the journey. Understanding them is essential for negotiating with Chinese suppliers.',
    date: '2026-06-18',
    readTime: '8 min read',
    titleId: 'blog-inc-title',
    descId: 'blog-inc-desc',
    imgId: 'blog-inc-img-j1k2l3',
  },
  {
    id: 'private-label-china',
    category: 'Sourcing Strategy',
    title: 'Private Label Products from China: A Step-by-Step Guide for New Importers',
    excerpt: 'Private labeling allows you to sell products under your own brand without manufacturing them yourself. This guide walks through the process of finding a factory, developing your product, and getting it to market.',
    date: '2026-06-05',
    readTime: '10 min read',
    titleId: 'blog-pl-title',
    descId: 'blog-pl-desc',
    imgId: 'blog-pl-img-m4n5o6',
  },
  {
    id: 'ce-certification-china',
    category: 'Compliance',
    title: 'CE Certification for Products Made in China: What Importers Need to Know',
    excerpt: 'If you\'re importing products into the EU or UK, CE marking is often required. This article explains what CE certification covers, how to get it, and how to work with Chinese factories that already have it.',
    date: '2026-05-22',
    readTime: '7 min read',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-p7q8r9',
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
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-navy-dark to-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              Sourcing Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides and insights for importers sourcing from China — covering supplier verification,
              quality control, shipping, and trade compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-brand-surface rounded-2xl border border-brand-border overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                alt={featured.title}
                className="w-full h-full object-cover"
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mt-4 mb-3">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-brand-mid leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-brand-muted text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-navy-light transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-brand-surface rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy bg-brand-blue-tint px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-base font-semibold text-brand-dark mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-brand-mid text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-brand-muted text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-navy text-sm font-semibold hover:text-brand-navy-light transition-colors flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 bg-brand-blue-tint">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">
            Get Sourcing Insights in Your Inbox
          </h2>
          <p className="text-brand-mid mb-6">
            Practical guides for importers, delivered monthly. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-brand-border text-brand-dark placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm"
            />
            <button className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
