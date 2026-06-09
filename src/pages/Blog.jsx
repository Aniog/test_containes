import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import CTAButton from '@/components/shared/CTAButton';
import CTABannerSection from '@/components/home/CTABannerSection';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    titleId: 'blog-title-verify-supplier',
    descId: 'blog-desc-verify-supplier',
    imgId: 'blog-img-verify-supplier-1a2b3c',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'May 28, 2026',
    desc: 'How to verify a Chinese supplier before placing an import order',
  },
  {
    id: 'pre-shipment-inspection-guide',
    title: 'The Complete Guide to Pre-Shipment Inspection in China',
    titleId: 'blog-title-psi-guide',
    descId: 'blog-desc-psi-guide',
    imgId: 'blog-img-psi-guide-2b3c4d',
    excerpt: 'A pre-shipment inspection (PSI) is one of the most effective ways to protect your order quality. Learn what inspectors check, how to read an inspection report, and when to reject goods.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'May 14, 2026',
    desc: 'Complete guide to pre-shipment quality inspection in China factories',
  },
  {
    id: 'china-sourcing-agent-vs-trading-company',
    title: 'Sourcing Agent vs. Trading Company: Which Is Right for You?',
    titleId: 'blog-title-agent-vs-trading',
    descId: 'blog-desc-agent-vs-trading',
    imgId: 'blog-img-agent-vs-trading-3c4d5e',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, cost implications, and when each option makes sense.',
    category: 'Sourcing Strategy',
    readTime: '5 min read',
    date: 'April 30, 2026',
    desc: 'Comparison of China sourcing agent versus trading company for importers',
  },
  {
    id: 'oem-odm-china-guide',
    title: 'OEM vs. ODM Manufacturing in China: A Practical Guide',
    titleId: 'blog-title-oem-odm',
    descId: 'blog-desc-oem-odm',
    imgId: 'blog-img-oem-odm-4d5e6f',
    excerpt: 'Understanding the difference between OEM and ODM manufacturing is essential for any buyer looking to develop private label products in China. Here\'s what you need to know.',
    category: 'Manufacturing',
    readTime: '7 min read',
    date: 'April 15, 2026',
    desc: 'OEM versus ODM manufacturing in China guide for private label buyers',
  },
  {
    id: 'china-shipping-incoterms',
    title: 'Incoterms Explained: FOB, CIF, EXW and What They Mean for Importers',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
    imgId: 'blog-img-incoterms-5e6f7a',
    excerpt: 'Choosing the wrong Incoterm can expose you to unexpected costs and risks. This guide explains the most common shipping terms used in China trade and which one to use.',
    category: 'Shipping & Logistics',
    readTime: '6 min read',
    date: 'March 28, 2026',
    desc: 'Incoterms FOB CIF EXW explained for China importers and buyers',
  },
  {
    id: 'avoiding-common-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    titleId: 'blog-title-mistakes',
    descId: 'blog-desc-mistakes',
    imgId: 'blog-img-mistakes-6f7a8b',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the most common mistakes importers make when sourcing from China — and how to protect yourself.',
    category: 'Sourcing Strategy',
    readTime: '9 min read',
    date: 'March 10, 2026',
    desc: 'Common China sourcing mistakes importers make and how to avoid them',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Sourcing Strategy', 'Manufacturing', 'Shipping & Logistics'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 bg-white/10 px-3 py-1 rounded-full">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Insights
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-gray-600 hover:bg-blue-50 hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 bg-brand-light rounded-2xl overflow-hidden">
            <div className="relative h-64 lg:h-auto bg-slate-200 overflow-hidden">
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
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Tag className="w-3 h-3" />{featured.category}
                </span>
              </div>
              <h2 id={featured.titleId} className="text-2xl font-bold text-brand-navy mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <CTAButton to={`/blog/${featured.id}`} variant="primary">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-brand-navy mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="text-sm font-medium text-brand-blue hover:text-brand-navy flex items-center gap-1 no-underline">
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABannerSection />
    </div>
  );
}
