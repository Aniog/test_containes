import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-img-1-a1b2c3',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common mistakes importers make. Here\'s a practical checklist to verify any factory before you commit.',
    date: '2024-11-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'aql-inspection-guide',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-img-2-d4e5f6',
    category: 'Quality Control',
    title: 'AQL Sampling Explained: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for product inspections. This guide explains how it works and how to use it to protect your orders.',
    date: '2024-10-28',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 'sea-vs-air-freight',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-img-3-g7h8i9',
    category: 'Shipping & Logistics',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'Choosing the right shipping method can significantly impact your landed cost and delivery timeline. Here\'s how to decide between sea and air freight for your China imports.',
    date: '2024-10-10',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'private-label-china-guide',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-img-4-j1k2l3',
    category: 'Private Label',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling from China is one of the most effective ways to build a product brand. This guide covers everything from finding OEM factories to protecting your brand.',
    date: '2024-09-22',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 'china-sourcing-mistakes',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-img-5-m4n5o6',
    category: 'Sourcing Tips',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'After working with hundreds of importers, we\'ve seen the same mistakes come up again and again. Here are the 7 most costly sourcing errors and how to avoid them.',
    date: '2024-09-05',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'factory-audit-checklist',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-img-6-p7q8r9',
    category: 'Factory Audit',
    title: 'Factory Audit Checklist: What to Look for When Visiting a Chinese Factory',
    excerpt: 'A factory visit is one of the best ways to assess a supplier\'s reliability. Use this checklist to evaluate any Chinese factory — whether you visit in person or hire an agent.',
    date: '2024-08-18',
    readTime: '11 min read',
    featured: false,
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Private Label', 'Sourcing Tips', 'Factory Audit'];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1A3C6E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Practical guides, tips, and industry insights for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-[#EEF2F7]">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold px-2 py-1 rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[#718096]">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-bold text-[#1A1A2E] mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-[#4A5568] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-[#718096]">
                      <Calendar className="w-3 h-3" />{formatDate(post.date)}
                    </span>
                    <Link to={`/blog/${post.id}`} className="text-sm font-semibold text-[#1A3C6E] hover:text-[#C0392B] no-underline flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-[#EEF2F7]">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#EEF2F7] text-[#1A3C6E] text-xs font-semibold px-2 py-1 rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[#718096]">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-[#1A1A2E] mb-2 text-sm leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-[#4A5568] text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-[#718096]">
                      <Calendar className="w-3 h-3" />{formatDate(post.date)}
                    </span>
                    <Link to={`/blog/${post.id}`} className="text-xs font-semibold text-[#1A3C6E] hover:text-[#C0392B] no-underline flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">Ready to Start Sourcing?</h2>
          <p className="text-[#4A5568] mb-6">
            Put our expertise to work for your business. Get a free sourcing consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-3 rounded-lg transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
