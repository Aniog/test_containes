import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';
import SectionHeader from '../components/shared/SectionHeader';

const posts = [
  {
    id: 'blog-supplier-verification',
    titleId: 'blog-supplier-verification-title',
    descId: 'blog-supplier-verification-desc',
    slug: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers Before Placing an Order',
    excerpt: 'A practical guide to supplier verification — what to check, what documents to request, and how to conduct a factory audit remotely or in person.',
    category: 'Supplier Sourcing',
    readTime: '8 min read',
    date: 'May 28, 2026',
  },
  {
    id: 'blog-qc-inspection',
    titleId: 'blog-qc-inspection-title',
    descId: 'blog-qc-inspection-desc',
    slug: 'pre-shipment-inspection-guide',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    excerpt: 'Pre-shipment inspections are one of the most cost-effective ways to protect your import business. Here\'s how they work and what to expect.',
    category: 'Quality Control',
    readTime: '6 min read',
    date: 'May 14, 2026',
  },
  {
    id: 'blog-incoterms',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    slug: 'incoterms-explained-for-importers',
    title: 'Incoterms Explained: FOB, CIF, EXW — What They Mean for Importers',
    excerpt: 'Understanding Incoterms is essential for any importer. This guide explains the most common terms and how to choose the right one for your shipment.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'April 30, 2026',
  },
  {
    id: 'blog-moq-negotiation',
    titleId: 'blog-moq-negotiation-title',
    descId: 'blog-moq-negotiation-desc',
    slug: 'negotiating-moq-with-chinese-factories',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. Learn practical strategies to negotiate lower MOQs without damaging your supplier relationship.',
    category: 'Supplier Sourcing',
    readTime: '5 min read',
    date: 'April 15, 2026',
  },
  {
    id: 'blog-oem-odm',
    titleId: 'blog-oem-odm-title',
    descId: 'blog-oem-odm-desc',
    slug: 'oem-vs-odm-manufacturing-china',
    title: 'OEM vs ODM Manufacturing in China: What\'s the Difference?',
    excerpt: 'OEM and ODM are two different approaches to custom manufacturing. This article explains the key differences and helps you decide which is right for your product.',
    category: 'Manufacturing',
    readTime: '6 min read',
    date: 'March 28, 2026',
  },
  {
    id: 'blog-payment-terms',
    titleId: 'blog-payment-terms-title',
    descId: 'blog-payment-terms-desc',
    slug: 'payment-terms-china-suppliers',
    title: 'Payment Terms with Chinese Suppliers: T/T, L/C, and Trade Assurance',
    excerpt: 'Choosing the right payment method protects your money and builds supplier trust. Here\'s a breakdown of the most common payment terms used in China trade.',
    category: 'Finance & Risk',
    readTime: '7 min read',
    date: 'March 10, 2026',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping & Logistics', 'Manufacturing', 'Finance & Risk'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Practical guides, tips, and insights for overseas buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-navy-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-navy-50 hover:text-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={`${post.id}-img-blog`}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-navy-700 bg-navy-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-semibold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-navy-700 text-sm font-medium hover:text-navy-600 transition-colors"
                    >
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
