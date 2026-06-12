import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    readTime: '8 min read',
    date: 'May 28, 2026',
    titleId: 'blog-supplier-verification-title',
    descId: 'blog-supplier-verification-desc',
    imgId: 'blog-supplier-verification-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Learn how AQL sampling works, what inspection levels to use, and how to interpret your inspection report.',
    readTime: '6 min read',
    date: 'May 14, 2026',
    titleId: 'blog-aql-inspection-title',
    descId: 'blog-aql-inspection-desc',
    imgId: 'blog-aql-inspection-img-d4e5f6',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs. Air Freight from China: How to Choose',
    excerpt: 'Choosing between sea and air freight depends on your product, timeline, and budget. This article breaks down the cost, speed, and risk factors to help you make the right decision.',
    readTime: '5 min read',
    date: 'April 30, 2026',
    titleId: 'blog-sea-vs-air-title',
    descId: 'blog-sea-vs-air-desc',
    imgId: 'blog-sea-vs-air-img-g7h8i9',
  },
  {
    id: 'oem-vs-odm',
    category: 'Manufacturing',
    title: 'OEM vs. ODM: Which Manufacturing Model Is Right for Your Brand?',
    excerpt: 'OEM and ODM are two common manufacturing models in China. Understanding the difference helps you choose the right approach for your product development and brand strategy.',
    readTime: '7 min read',
    date: 'April 15, 2026',
    titleId: 'blog-oem-vs-odm-title',
    descId: 'blog-oem-vs-odm-desc',
    imgId: 'blog-oem-vs-odm-img-j1k2l3',
  },
  {
    id: 'canton-fair-guide',
    category: 'Trade Shows',
    title: 'Canton Fair 2026: A Practical Guide for First-Time Buyers',
    excerpt: 'The Canton Fair is the world\'s largest trade fair and a key sourcing event for importers. This guide covers how to prepare, what to look for, and how to follow up with suppliers after the fair.',
    readTime: '10 min read',
    date: 'March 28, 2026',
    titleId: 'blog-canton-fair-title',
    descId: 'blog-canton-fair-desc',
    imgId: 'blog-canton-fair-img-m4n5o6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    title: 'Incoterms Explained: FOB, CIF, EXW — What They Mean for Importers',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the supply chain. Understanding them is essential for every importer.',
    readTime: '6 min read',
    date: 'March 10, 2026',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-p7q8r9',
  },
  {
    id: 'product-compliance-china',
    category: 'Compliance',
    title: 'Product Compliance When Importing from China: CE, FCC, ASTM and More',
    excerpt: 'Importing products that don\'t meet your market\'s safety standards can result in fines, recalls, and reputational damage. Here\'s what you need to know about product compliance.',
    readTime: '9 min read',
    date: 'February 20, 2026',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
    imgId: 'blog-compliance-img-s1t2u3',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company: Which Is Better for Your Business?',
    excerpt: 'Many importers choose between a sourcing agent and a trading company without fully understanding the difference. This article explains the pros and cons of each approach.',
    readTime: '7 min read',
    date: 'February 5, 2026',
    titleId: 'blog-sourcing-agent-title',
    descId: 'blog-sourcing-agent-desc',
    imgId: 'blog-sourcing-agent-img-v4w5x6',
  },
];

const categoryColors = {
  'Supplier Verification': 'bg-blue-50 text-brand-blue',
  'Quality Control': 'bg-green-50 text-green-700',
  'Shipping': 'bg-orange-50 text-orange-700',
  'Manufacturing': 'bg-purple-50 text-purple-700',
  'Trade Shows': 'bg-yellow-50 text-yellow-700',
  'Compliance': 'bg-red-50 text-brand-red',
  'Sourcing Strategy': 'bg-teal-50 text-teal-700',
};

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              China Sourcing Insights & Guides
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Practical articles on supplier verification, quality control, shipping, compliance, and sourcing strategy for global importers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden mb-10 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs font-semibold text-brand-gold bg-yellow-50 px-2 py-1 rounded-full">Featured</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">{featured.title}</h2>
                <p id={featured.descId} className="text-brand-muted leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-brand-muted mb-6">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg transition-colors w-fit"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="font-semibold text-brand-navy mt-3 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-brand-muted">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                    >
                      Read <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Start Sourcing from China?</h2>
          <p className="text-brand-muted mb-8">
            Put our expertise to work for your business. Get a free sourcing consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
