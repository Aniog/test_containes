import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common mistakes importers make. Here\'s a practical checklist for verifying factories before you commit.',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'June 12, 2026',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'china-quality-inspection-guide',
    title: 'A Practical Guide to Quality Inspections in China',
    excerpt: 'Understanding the different types of quality inspections — pre-production, during-production, and pre-shipment — and when to use each one.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'May 28, 2026',
    imgId: 'blog-qc-img-d4e5f6',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'sea-freight-vs-air-freight',
    title: 'Sea Freight vs. Air Freight from China: Which Should You Choose?',
    excerpt: 'A cost and timeline comparison of sea freight and air freight for China imports, with guidance on which option suits different order types.',
    category: 'Shipping & Logistics',
    readTime: '5 min read',
    date: 'May 10, 2026',
    imgId: 'blog-shipping-img-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'How to Negotiate Effectively with Chinese Suppliers',
    excerpt: 'Practical tips for negotiating price, MOQ, payment terms, and lead times with Chinese manufacturers — including cultural considerations.',
    category: 'Sourcing Tips',
    readTime: '7 min read',
    date: 'April 22, 2026',
    imgId: 'blog-negotiate-img-j1k2l3',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'oem-vs-odm-china',
    title: 'OEM vs. ODM Manufacturing in China: What\'s the Difference?',
    excerpt: 'Understanding the difference between OEM and ODM manufacturing, and how to decide which model is right for your product and brand.',
    category: 'Manufacturing',
    readTime: '5 min read',
    date: 'April 5, 2026',
    imgId: 'blog-oem-img-m4n5o6',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
  },
  {
    id: 'china-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the most frequent mistakes importers make — and how to avoid them.',
    category: 'Sourcing Tips',
    readTime: '9 min read',
    date: 'March 18, 2026',
    imgId: 'blog-mistakes-img-p7q8r9',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
];

const categoryColors = {
  'Supplier Verification': 'bg-blue-50 text-brand-blue',
  'Quality Control': 'bg-green-50 text-green-700',
  'Shipping & Logistics': 'bg-orange-50 text-orange-700',
  'Sourcing Tips': 'bg-purple-50 text-purple-700',
  'Manufacturing': 'bg-red-50 text-red-700',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Resources</p>
          <h1 id="blog-page-title" className="text-white text-4xl md:text-5xl font-bold mb-4">China Sourcing Blog</h1>
          <p id="blog-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for importers sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm mb-10 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white text-xs font-semibold px-3 py-1.5 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[featured.category] || 'bg-neutral-100 text-neutral-600'}`}>
                  {featured.category}
                </span>
                <h2 id={featured.titleId} className="text-neutral-900 text-2xl font-bold mb-3 leading-tight">{featured.title}</h2>
                <p id={featured.descId} className="text-neutral-500 text-base leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-neutral-400 text-sm mb-5">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[post.category] || 'bg-neutral-100 text-neutral-600'}`}>
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-neutral-900 font-semibold text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-neutral-500 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-neutral-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-blue text-sm font-medium hover:text-brand-navy transition-colors flex items-center gap-1"
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
    </div>
  );
}
