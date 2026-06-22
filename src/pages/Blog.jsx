import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SectionHero from '@/components/shared/SectionHero';
import CtaBanner from '@/components/shared/CtaBanner';

const posts = [
  {
    id: 'supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common mistakes importers make. Here\'s a practical checklist to protect yourself.',
    category: 'Supplier Sourcing',
    date: 'June 10, 2026',
    readTime: '7 min read',
    imgId: 'blog-supplier-img-a1b2c3',
    titleId: 'blog-supplier-title',
    descId: 'blog-supplier-desc',
  },
  {
    id: 'aql-inspection',
    title: 'Understanding AQL Inspection Standards: A Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard used for product inspections. This guide explains how it works and how to use it to protect your orders.',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '9 min read',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air',
    title: 'Sea Freight vs. Air Freight from China: Which Should You Choose?',
    excerpt: 'Choosing the right shipping method affects your cost, timeline, and cash flow. We break down the key differences and when to use each option.',
    category: 'Shipping',
    date: 'May 15, 2026',
    readTime: '6 min read',
    imgId: 'blog-shipping-img-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. These proven negotiation strategies can help you get started with smaller orders.',
    category: 'Supplier Sourcing',
    date: 'May 2, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-img-j1k2l3',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'factory-audit',
    title: 'What to Expect During a China Factory Audit',
    excerpt: 'A factory audit is one of the most important steps in supplier verification. Here\'s what our auditors check and what the report tells you.',
    category: 'Factory Audit',
    date: 'April 18, 2026',
    readTime: '8 min read',
    imgId: 'blog-audit-img-m4n5o6',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'incoterms',
    title: 'Incoterms Explained: FOB, CIF, EXW — What They Mean for Importers',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of delivery. Understanding them can save you money and avoid disputes.',
    category: 'Shipping',
    date: 'April 5, 2026',
    readTime: '7 min read',
    imgId: 'blog-incoterms-img-p7q8r9',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping', 'Factory Audit'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Blog | China Sourcing Insights | SSourcing China';
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <SectionHero
        badge="Blog"
        title="China Sourcing Insights"
        subtitle="Practical guides, tips, and industry knowledge to help global buyers source smarter from China."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-light-blue hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-10 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden bg-gray-100">
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
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-light-blue text-primary text-xs font-semibold px-2 py-1 rounded">
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Featured
                  </span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-primary-dark mb-3">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-gray-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-light-blue text-primary text-xs font-semibold px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="font-semibold text-primary-dark mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="text-primary text-sm font-medium hover:underline">
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Apply These Insights?"
        subtitle="Let our team handle your China sourcing so you can focus on growing your business."
        cta="Get a Free Sourcing Quote"
      />
    </div>
  );
}
