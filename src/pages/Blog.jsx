import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';

const posts = [
  {
    id: 'factory-audit-guide',
    category: 'Factory Verification',
    date: 'June 12, 2026',
    readTime: '7 min read',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide for Buyers',
    excerpt:
      'Before placing a large order with a Chinese manufacturer, a factory audit is one of the most important steps you can take. This guide explains what to check, how to prepare, and what red flags to watch for.',
    imgId: 'blog-audit-img-1a2b3c',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '6 min read',
    title: 'Understanding AQL Sampling in Pre-Shipment Inspections',
    excerpt:
      'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide to determine how many units to check in a batch. Here\'s how it works and what AQL level is right for your products.',
    imgId: 'blog-aql-img-2b3c4d',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    date: 'May 10, 2026',
    readTime: '8 min read',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt:
      'Choosing the right Incoterm affects your costs, risks, and responsibilities when importing from China. This article breaks down the most common terms and helps you decide which is best for your situation.',
    imgId: 'blog-incoterms-img-3c4d5e',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'supplier-negotiation',
    category: 'Sourcing Tips',
    date: 'April 22, 2026',
    readTime: '5 min read',
    title: '5 Practical Tips for Negotiating with Chinese Suppliers',
    excerpt:
      'Negotiating with Chinese manufacturers requires understanding local business culture and knowing what levers to pull. These five tips will help you get better prices and terms without damaging the relationship.',
    imgId: 'blog-negotiation-img-4d5e6f',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
  },
  {
    id: 'moq-strategies',
    category: 'Sourcing Tips',
    date: 'April 5, 2026',
    readTime: '5 min read',
    title: 'How to Handle High MOQs When Sourcing from China',
    excerpt:
      'Minimum order quantities can be a barrier for smaller buyers. This article explains why factories set MOQs, how to negotiate them down, and alternative strategies for getting started with lower volumes.',
    imgId: 'blog-moq-img-5e6f7a',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'product-certification',
    category: 'Compliance',
    date: 'March 18, 2026',
    readTime: '9 min read',
    title: 'Product Certifications for Importing from China: CE, FCC, RoHS and More',
    excerpt:
      'Importing products from China without the right certifications can result in customs delays, fines, or product recalls. This guide covers the most important certifications by product category and market.',
    imgId: 'blog-cert-img-6f7a8b',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Sourcing Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              China Sourcing Blog
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              Practical guides, tips, and insights for overseas buyers sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-10 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-slate-100">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:,"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-slate-400 text-xs">Featured</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="text-slate-600 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:underline"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:,"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-slate-900 text-base leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-slate-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to="/blog"
                      className="text-brand-blue font-semibold text-xs hover:underline flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer questions about sourcing from China. Get in touch for a free consultation."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </div>
  );
}
