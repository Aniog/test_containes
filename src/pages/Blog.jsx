import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui/SharedComponents';

const posts = [
  {
    id: 'blog-supplier-verification',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common mistakes overseas buyers make. Here is a practical checklist to protect yourself.',
    author: 'SSourcing Team',
    date: 'June 10, 2026',
    readTime: '7 min read',
    imgId: 'blog-supplier-verification-img-a1b2',
    titleId: 'blog-supplier-verification-title',
    descId: 'blog-supplier-verification-desc',
  },
  {
    id: 'blog-aql-inspection',
    category: 'Quality Control',
    title: 'AQL Sampling Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the industry standard for product inspection sampling. This guide explains how it works and how to apply it to your orders.',
    author: 'SSourcing Team',
    date: 'May 28, 2026',
    readTime: '9 min read',
    imgId: 'blog-aql-inspection-img-c3d4',
    titleId: 'blog-aql-inspection-title',
    descId: 'blog-aql-inspection-desc',
  },
  {
    id: 'blog-incoterms',
    category: 'Shipping & Logistics',
    title: 'Incoterms for China Imports: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can expose you to unexpected costs and risks. We break down the most common terms used in China trade and when to use each one.',
    author: 'SSourcing Team',
    date: 'May 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-incoterms-img-e5f6',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'blog-moq-negotiation',
    category: 'Sourcing Strategy',
    title: 'How to Negotiate MOQ with Chinese Manufacturers',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. These proven negotiation strategies can help you get lower MOQs without sacrificing supplier quality.',
    author: 'SSourcing Team',
    date: 'April 30, 2026',
    readTime: '6 min read',
    imgId: 'blog-moq-negotiation-img-g7h8',
    titleId: 'blog-moq-negotiation-title',
    descId: 'blog-moq-negotiation-desc',
  },
  {
    id: 'blog-factory-audit',
    category: 'Factory Verification',
    title: 'What Happens During a Factory Audit in China?',
    excerpt: 'A factory audit is one of the most effective ways to reduce sourcing risk. We walk you through what our auditors check and what the report covers.',
    author: 'SSourcing Team',
    date: 'April 12, 2026',
    readTime: '10 min read',
    imgId: 'blog-factory-audit-img-i9j0',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    id: 'blog-payment-terms',
    category: 'Sourcing Strategy',
    title: 'Payment Terms with Chinese Suppliers: T/T, L/C, and Trade Assurance',
    excerpt: 'Understanding payment terms is critical to protecting your money when sourcing from China. This guide covers the most common options and their risk profiles.',
    author: 'SSourcing Team',
    date: 'March 25, 2026',
    readTime: '7 min read',
    imgId: 'blog-payment-terms-img-k1l2',
    titleId: 'blog-payment-terms-title',
    descId: 'blog-payment-terms-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Sourcing Strategy', 'Factory Verification'];

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
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">Sourcing Insights</Badge>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides, industry insights, and expert advice for overseas buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Latest Articles"
            title="Sourcing Knowledge Base"
            subtitle="Guides and insights to help you source smarter from China."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-brand-light text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-10">
            <Card className="overflow-hidden p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="blue">{posts[0].category}</Badge>
                    <span className="text-gray-400 text-xs">Featured</span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-brand-navy text-2xl font-bold mb-3 leading-snug">{posts[0].title}</h2>
                  <p id={posts[0].descId} className="text-gray-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-5">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </div>
                    <span>{posts[0].date}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden p-0 flex flex-col">
                <div className="overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-44 object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <Badge variant="blue" className="mb-3 self-start">{post.category}</Badge>
                  <h3 id={post.titleId} className="text-brand-navy font-semibold text-base mb-2 leading-snug flex-1">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-400 text-xs">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-navy text-3xl font-bold mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for practical China sourcing guides, supplier tips, and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-gray-900"
            />
            <button className="bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Put our expertise to work for your business. Get a free sourcing consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
