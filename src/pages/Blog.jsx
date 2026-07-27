import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification',
    category: 'Supplier Sourcing',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    titleId: 'blog-supplier-title',
    descId: 'blog-supplier-desc',
    imgId: 'blog-supplier-img-a1b2c3',
    excerpt: 'Before sending payment to a Chinese manufacturer, there are several verification steps every buyer should take. This guide covers business licence checks, factory audits, and third-party verification services.',
    date: '2026-06-15',
    readTime: '7 min read',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling in Pre-Shipment Inspections',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Learn how sampling levels work, what defect classifications mean, and how to set the right AQL for your product.',
    date: '2026-05-28',
    readTime: '6 min read',
  },
  {
    id: 'sea-vs-air',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight from China: A Practical Comparison',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-g7h8i9',
    excerpt: 'Choosing between sea and air freight depends on your timeline, cargo volume, and cost tolerance. This article breaks down the key differences and when each option makes sense for importers.',
    date: '2026-05-10',
    readTime: '5 min read',
  },
  {
    id: 'moq-negotiation',
    category: 'Supplier Sourcing',
    title: 'How to Negotiate MOQ with Chinese Manufacturers',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-j1k2l3',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship or product quality.',
    date: '2026-04-22',
    readTime: '5 min read',
  },
  {
    id: 'ce-certification',
    category: 'Compliance',
    title: 'CE Certification for Products Imported from China: What You Need to Know',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-m4n5o6',
    excerpt: 'If you are importing products into the EU, CE marking is often mandatory. This guide explains which products require CE certification, who is responsible, and how to work with Chinese factories to achieve compliance.',
    date: '2026-04-05',
    readTime: '8 min read',
  },
  {
    id: 'sourcing-agent-vs-trading',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs Trading Company: Which Is Right for Your Business?',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-p7q8r9',
    excerpt: 'Both sourcing agents and trading companies can help you buy from China, but they work very differently. This article compares the two models on cost, transparency, control, and suitability for different buyer types.',
    date: '2026-03-18',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping', 'Compliance', 'Sourcing Strategy'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Insights & Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides, industry insights, and sourcing tips for overseas buyers
              working with Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-slate-100">
                <img
                  alt={posts[0].title}
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-china-red text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                  <span className="text-slate-400 text-xs">{posts[0].category}</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-navy mb-3">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-slate-600 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{posts[0].readTime}</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-steel font-semibold hover:text-navy transition-colors text-sm"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 bg-slate-100">
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
                  <span className="text-xs font-semibold text-china-red mb-2">{post.category}</span>
                  <h3 id={post.titleId} className="text-navy font-semibold text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Have a Sourcing Question?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Our team is happy to answer questions about sourcing from China. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="bg-china-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
