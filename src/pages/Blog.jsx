import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const posts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-img-ss001',
    titleId: 'blog-title-supplier-verification',
    descId: 'blog-desc-supplier-verification',
    excerpt: 'Before sending money to a Chinese factory, there are five critical checks every importer should complete. This guide walks through each step with practical advice.',
  },
  {
    id: 'quality-inspection-types',
    title: 'Pre-Shipment vs. During-Production Inspection: Which Do You Need?',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-img-ss002',
    titleId: 'blog-title-quality-inspection',
    descId: 'blog-desc-quality-inspection',
    excerpt: 'Understanding the difference between inspection types helps you choose the right level of quality control for your order size and risk tolerance.',
  },
  {
    id: 'china-sourcing-costs',
    title: 'What Does China Sourcing Actually Cost? A Transparent Breakdown',
    category: 'Pricing & Costs',
    date: '2026-06-28',
    readTime: '7 min read',
    imgId: 'blog-img-ss003',
    titleId: 'blog-title-sourcing-costs',
    descId: 'blog-desc-sourcing-costs',
    excerpt: 'Many buyers are surprised by the total cost of sourcing from China. This article breaks down every fee — from factory price to landed cost — so you can budget accurately.',
  },
  {
    id: 'incoterms-guide',
    title: 'FOB, CIF, DDP: Which Incoterm Should You Use When Importing from China?',
    category: 'Shipping & Logistics',
    date: '2026-06-18',
    readTime: '9 min read',
    imgId: 'blog-img-ss004',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. Here\'s a practical guide to the most common shipping terms used in China trade.',
  },
  {
    id: 'private-label-china',
    title: 'Starting a Private Label Business with Chinese Manufacturers: A Step-by-Step Guide',
    category: 'Private Label & OEM',
    date: '2026-06-05',
    readTime: '11 min read',
    imgId: 'blog-img-ss005',
    titleId: 'blog-title-private-label',
    descId: 'blog-desc-private-label',
    excerpt: 'Private labeling from China is one of the most effective ways to build a product brand. This guide covers everything from product selection to your first shipment.',
  },
  {
    id: 'factory-audit-checklist',
    title: '10 Things to Check During a China Factory Audit',
    category: 'Factory Audits',
    date: '2026-05-22',
    readTime: '7 min read',
    imgId: 'blog-img-ss006',
    titleId: 'blog-title-factory-audit',
    descId: 'blog-desc-factory-audit',
    excerpt: 'A factory audit is your best defense against supplier fraud and quality failures. Here are the ten most important things to verify before committing to a manufacturer.',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Sourcing Insights</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              China Sourcing Blog
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Practical guides, industry insights, and expert advice for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-brand-sky uppercase tracking-widest mb-4">Featured Article</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}] [blog-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full mb-4 w-fit">
                  <Tag className="w-3 h-3" />{featured.category}
                </span>
                <h2 id={featured.titleId} className="text-2xl font-bold text-neutral-900 mb-3 leading-snug">{featured.title}</h2>
                <p id={featured.descId} className="text-neutral-600 leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-5">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <SectionHeader
            eyebrow="Latest Articles"
            title="More Sourcing Guides"
            subtitle=""
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full mb-3">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                  <h3 id={post.titleId} className="font-bold text-neutral-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span id="blog-page-title" className="sr-only">China sourcing blog guides supplier factory quality inspection</span>
      </section>

      <CTABanner />
    </div>
  );
};

export default Blog;
