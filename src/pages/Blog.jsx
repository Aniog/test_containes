import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. This article explains how AQL sampling works, what the numbers mean, and how to set the right standards for your products.',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'china-shipping-guide',
    category: 'Shipping & Logistics',
    title: 'China Shipping Guide: FCL vs LCL and How to Choose',
    excerpt: 'Full Container Load (FCL) and Less than Container Load (LCL) are the two main options for shipping goods from China. This guide explains the differences, costs, and when to use each.',
    date: '2026-06-28',
    readTime: '7 min read',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-g7h8i9',
  },
  {
    id: 'private-label-china',
    category: 'Private Label',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling with Chinese factories is one of the most cost-effective ways to build a product brand. This article walks through the process from product selection to first shipment.',
    date: '2026-06-18',
    readTime: '10 min read',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
    imgId: 'blog-privatelabel-img-j1k2l3',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs Trading Company: Which Is Right for You?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, pros and cons of each, and how to decide based on your situation.',
    date: '2026-06-05',
    readTime: '5 min read',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-m4n5o6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping & Logistics',
    title: 'Incoterms for China Importers: FOB, CIF, EXW Explained',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the journey. This guide explains the most common terms used in China trade and which to use.',
    date: '2026-05-22',
    readTime: '6 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-p7q8r9',
  },
];

const categoryColors = {
  'Supplier Verification': 'bg-blue-100 text-blue-700',
  'Quality Control': 'bg-green-100 text-green-700',
  'Shipping & Logistics': 'bg-orange-100 text-orange-700',
  'Private Label': 'bg-purple-100 text-purple-700',
  'Sourcing Strategy': 'bg-navy-100 text-navy-700',
};

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
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              China Sourcing Blog
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden bg-gray-100 h-72 lg:h-80">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                  {featured.category}
                </span>
                <span className="text-gray-400 text-xs">Featured</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-gray-500 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, title, excerpt, date, readTime, titleId, descId, imgId }) => (
              <article key={id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-600'}`}>
                    {category}
                  </span>
                  <h3 id={titleId} className="font-semibold text-gray-900 mt-3 mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                    </div>
                    <Link to={`/blog/${id}`} className="text-navy-800 font-semibold text-sm hover:text-navy-600 inline-flex items-center gap-1">
                      Read <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Start Sourcing?
          </h2>
          <p className="text-gray-300 mb-6">
            Put our expertise to work for your business. Get a free sourcing assessment today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
