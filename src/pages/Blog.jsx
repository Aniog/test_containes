import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    author: 'SSourcing Team',
    date: 'June 10, 2026',
    readTime: '8 min read',
    imgId: 'blog-supplier-verify-img-a1b2c3',
    titleId: 'blog-supplier-verify-title',
    descId: 'blog-supplier-verify-desc',
  },
  {
    id: 'quality-inspection-types',
    category: 'Quality Control',
    title: 'Pre-Shipment vs. In-Line Inspection: Which One Do You Need?',
    excerpt: 'Not all quality inspections are the same. Understanding the difference between pre-shipment, in-line, and first article inspections will help you choose the right approach for your product and order size.',
    author: 'SSourcing Team',
    date: 'May 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-qc-types-img-d4e5f6',
    titleId: 'blog-qc-types-title',
    descId: 'blog-qc-types-desc',
  },
  {
    id: 'china-shipping-guide',
    category: 'Shipping & Logistics',
    title: 'A Practical Guide to Shipping from China: FCL, LCL, and Air Freight',
    excerpt: 'Choosing the right shipping method can significantly affect your landed cost and delivery timeline. This guide explains the pros and cons of FCL, LCL, and air freight for different order sizes.',
    author: 'SSourcing Team',
    date: 'May 15, 2026',
    readTime: '7 min read',
    imgId: 'blog-shipping-img-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'negotiating-with-suppliers',
    category: 'Sourcing Tips',
    title: '7 Practical Tips for Negotiating with Chinese Suppliers',
    excerpt: 'Negotiating with Chinese manufacturers requires a different approach than Western business culture. These practical tips will help you get better pricing, lower MOQs, and more favorable terms.',
    author: 'SSourcing Team',
    date: 'April 30, 2026',
    readTime: '9 min read',
    imgId: 'blog-negotiation-img-j1k2l3',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
  },
  {
    id: 'product-compliance-china',
    category: 'Compliance',
    title: 'CE, FCC, and RoHS: What Certifications Do You Need for Your Product?',
    excerpt: 'Importing products from China without the right certifications can result in customs holds, fines, or product recalls. This guide explains the most common certifications and how to obtain them.',
    author: 'SSourcing Team',
    date: 'April 12, 2026',
    readTime: '10 min read',
    imgId: 'blog-compliance-img-m4n5o6',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Tips',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, the pros and cons of each, and how to decide which is right for your business.',
    author: 'SSourcing Team',
    date: 'March 25, 2026',
    readTime: '7 min read',
    imgId: 'blog-agent-vs-trading-img-p7q8r9',
    titleId: 'blog-agent-vs-trading-title',
    descId: 'blog-agent-vs-trading-desc',
  },
];

const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Supplier Verification', 'Shipping & Logistics', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container text-center">
          <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Insights
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and industry insights to help you source smarter from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-[#1a2e4a] text-white'
                    : 'bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e85d26]/10 hover:text-[#e85d26]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-2xl h-72 lg:h-auto">
              <img
                data-strk-img-id={posts[0].imgId}
                data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                {posts[0].category}
              </span>
              <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-[#1a2e4a] mb-4">
                {posts[0].title}
              </h2>
              <p id={posts[0].descId} className="text-[#6b7280] leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-6">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{posts[0].author}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                <span>{posts[0].date}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#e85d26] font-semibold hover:underline">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-[#e85d26]/10 text-[#e85d26] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="font-bold text-[#1a2e4a] text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-[#6b7280] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#6b7280]">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e4a] mb-4">
              Get Sourcing Tips in Your Inbox
            </h2>
            <p className="text-[#6b7280] mb-8">
              Subscribe to our newsletter for practical China sourcing guides, industry updates, and supplier tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-[#1f2937] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e85d26] focus:border-transparent"
              />
              <button className="bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
