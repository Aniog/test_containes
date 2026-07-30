import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common and costly mistakes importers make. Here\'s a practical checklist for verifying any Chinese factory before you commit.',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'July 15, 2026',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-guide',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for product sampling during quality inspections. This guide explains how it works and how to use it to protect your orders.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'July 8, 2026',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-freight-guide',
    title: 'Sea Freight from China: FCL vs LCL — Which Is Right for Your Order?',
    excerpt: 'Choosing between full container load (FCL) and less-than-container load (LCL) shipping affects your cost, transit time, and risk. Here\'s how to decide based on your order volume.',
    category: 'Shipping & Logistics',
    readTime: '5 min read',
    date: 'June 28, 2026',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'china-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the mistakes that cost importers money — and how a professional sourcing agent helps you avoid them.',
    category: 'Sourcing Tips',
    readTime: '7 min read',
    date: 'June 18, 2026',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-mistakes-img-j1k2l3',
  },
  {
    id: 'product-certifications-china',
    title: 'CE, FCC, RoHS: A Guide to Product Certifications for China Imports',
    excerpt: 'Selling products in the EU, US, or other regulated markets requires specific certifications. This guide explains the most common requirements and how to ensure your Chinese supplier can meet them.',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'June 5, 2026',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
    imgId: 'blog-cert-img-m4n5o6',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'How to Negotiate Price and Terms with Chinese Suppliers',
    excerpt: 'Effective negotiation with Chinese factories requires understanding their cost structure, communication style, and what levers actually move the price. Here\'s what works.',
    category: 'Sourcing Tips',
    readTime: '6 min read',
    date: 'May 22, 2026',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
    imgId: 'blog-negotiate-img-p7q8r9',
  },
];

const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Supplier Verification', 'Shipping & Logistics', 'Compliance'];

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-lightbg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border text-bodytext hover:border-primary hover:text-primary transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden mb-8 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-auto min-h-[280px] lg:min-h-0">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {posts[0].category}
                  </span>
                  <span className="text-muted text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {posts[0].readTime}
                  </span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-darktext mb-3">
                  {posts[0].title}
                </h2>
                <p id={posts[0].descId} className="text-bodytext leading-relaxed mb-5">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-muted text-sm">{posts[0].date}</span>
                  <Link
                    to={`/blog/${posts[0].id}`}
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-accent transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map(({ id, title, excerpt, category, readTime, date, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[3x2] overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-accent text-xs font-semibold">{category}</span>
                    <span className="text-muted text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {readTime}
                    </span>
                  </div>
                  <h3 id={titleId} className="font-semibold text-darktext mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-bodytext text-sm leading-relaxed flex-1 mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-muted text-xs">{date}</span>
                    <Link
                      to={`/blog/${id}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-accent transition-colors"
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

      <CTASection />
    </div>
  );
}
