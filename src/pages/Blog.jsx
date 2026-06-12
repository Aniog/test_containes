import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, ChevronRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 'post-1',
    slug: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before wiring money to a factory you\'ve never visited, there are several verification steps every importer should take. Here\'s our practical checklist.',
    date: '2026-05-20',
    readTime: '7 min read',
    titleId: 'post-1-title',
    descId: 'post-1-desc',
    imgId: 'post-img-1-a1b2c3',
  },
  {
    id: 'post-2',
    slug: 'aql-inspection-guide',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. This guide explains how it works and how to use it to protect your orders.',
    date: '2026-05-05',
    readTime: '9 min read',
    titleId: 'post-2-title',
    descId: 'post-2-desc',
    imgId: 'post-img-2-d4e5f6',
  },
  {
    id: 'post-3',
    slug: 'sea-freight-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs. Air Freight from China: How to Choose',
    excerpt: 'The right shipping method depends on your timeline, budget, and product type. We break down the key differences and when to use each option.',
    date: '2026-04-18',
    readTime: '6 min read',
    titleId: 'post-3-title',
    descId: 'post-3-desc',
    imgId: 'post-img-3-g7h8i9',
  },
  {
    id: 'post-4',
    slug: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Most sourcing problems are preventable. We\'ve seen the same mistakes repeated by importers at every level. Here\'s what to watch out for.',
    date: '2026-04-02',
    readTime: '8 min read',
    titleId: 'post-4-title',
    descId: 'post-4-desc',
    imgId: 'post-img-4-j1k2l3',
  },
  {
    id: 'post-5',
    slug: 'private-label-china-guide',
    category: 'OEM & Private Label',
    title: 'A Practical Guide to Private Label Manufacturing in China',
    excerpt: 'Launching a private label product from China involves more than just adding your logo. This guide covers the full process from product development to first shipment.',
    date: '2026-03-15',
    readTime: '11 min read',
    titleId: 'post-5-title',
    descId: 'post-5-desc',
    imgId: 'post-img-5-m4n5o6',
  },
  {
    id: 'post-6',
    slug: 'china-product-certifications',
    category: 'Compliance',
    title: 'CE, RoHS, FDA: Which Certifications Do You Need for Your Product?',
    excerpt: 'Importing products without the right certifications can result in customs holds, fines, or product recalls. Here\'s a clear overview of the most common requirements.',
    date: '2026-03-01',
    readTime: '10 min read',
    titleId: 'post-6-title',
    descId: 'post-6-desc',
    imgId: 'post-img-6-p7q8r9',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Tips', 'OEM & Private Label', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1A3C6E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            China Sourcing Insights
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, industry tips, and expert advice for global buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-[#E2E8F0] py-4 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  activeCategory === cat
                    ? 'bg-[#1A3C6E] text-white'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#EBF2FA] hover:text-[#1A3C6E] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative h-48 bg-[#EBF2FA]">
                  <img
                    data-strk-img-id={post.imgId}
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
                    <span className="bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="text-[#64748B] text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-bold text-[#1E293B] mb-2 leading-snug text-base">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">{post.date}</span>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1 text-[#1A3C6E] text-sm font-semibold hover:underline"
                    >
                      Read more <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-blue-200 mb-6">
            Subscribe to our newsletter for practical China sourcing guides, market updates, and supplier tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 text-sm focus:outline-none focus:border-white/50"
            />
            <button
              type="submit"
              className="bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
