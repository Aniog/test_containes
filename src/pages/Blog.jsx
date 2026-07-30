import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import { Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common and costly mistakes importers make. This guide covers the key steps to verify a Chinese manufacturer before committing any funds.',
    date: 'July 15, 2026',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'quality-inspection-aql',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard framework used in pre-shipment inspections. Learn how it works, what the numbers mean, and how to set the right inspection level for your products.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'incoterms-explained',
    category: 'Shipping & Logistics',
    title: 'Incoterms Explained: Which Shipping Terms Should You Use When Buying from China?',
    excerpt: 'FOB, CIF, EXW, DDP — Incoterms define who is responsible for costs and risks at each stage of shipment. This article explains the most common terms and which ones work best for different buyers.',
    date: 'June 28, 2026',
    readTime: '7 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs Trading Company: Which Is Right for Your Business?',
    excerpt: 'Both sourcing agents and trading companies can help you buy from China, but they operate very differently. Understanding the distinction can save you money and reduce risk on your next order.',
    date: 'June 18, 2026',
    readTime: '5 min read',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-j1k2l3',
  },
  {
    id: 'china-manufacturing-regions',
    category: 'China Sourcing',
    title: 'China\'s Key Manufacturing Regions: Where to Source Different Products',
    excerpt: 'China\'s manufacturing industry is highly regionalised. Knowing which province specialises in which products can help you find better suppliers faster and negotiate more effectively.',
    date: 'June 5, 2026',
    readTime: '9 min read',
    titleId: 'blog-regions-title',
    descId: 'blog-regions-desc',
    imgId: 'blog-regions-img-m4n5o6',
  },
  {
    id: 'product-certification-guide',
    category: 'Trade Compliance',
    title: 'CE, FCC, RoHS: Which Product Certifications Do You Need to Import from China?',
    excerpt: 'Importing products without the correct certifications can result in customs holds, fines, or product recalls. This guide covers the most important certifications for common product categories.',
    date: 'May 22, 2026',
    readTime: '10 min read',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
    imgId: 'blog-cert-img-p7q8r9',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing advice for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden h-72 bg-lightblue">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-red-50 px-2 py-1 rounded">
                  {featured.category}
                </span>
                <span className="text-xs text-mutedtext">Featured</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-darktext mb-4 leading-tight">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-mutedtext leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-mutedtext mb-6">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Articles"
            title="Sourcing Guides & Insights"
            subtitle="Practical knowledge to help you source smarter from China."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-48 bg-lightblue overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{post.category}</span>
                  <h3 id={post.titleId} className="font-bold text-darktext text-lg mb-3 leading-snug flex-1">{post.title}</h3>
                  <p id={post.descId} className="text-mutedtext text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-mutedtext pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-lightblue border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-darktext mb-3">
            Get Sourcing Insights in Your Inbox
          </h2>
          <p className="text-mutedtext mb-6">
            Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
