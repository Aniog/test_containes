import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending payment to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-05-20',
    readTime: '7 min read',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
    imgId: 'blog-verify-supplier-img-a1b2c3',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    title: 'AQL Sampling Explained: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Learn how AQL sampling works, what the numbers mean, and how to set the right inspection level for your product.',
    date: '2026-05-06',
    readTime: '9 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-freight-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This article breaks down the cost, speed, and risk trade-offs to help you make the right decision.',
    date: '2026-04-22',
    readTime: '6 min read',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'incoterms-guide-importers',
    category: 'Shipping',
    title: 'Incoterms for Importers: FOB, CIF, EXW and What They Mean for You',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the journey. Understanding them can save you money and prevent disputes with your supplier.',
    date: '2026-04-08',
    readTime: '8 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-j1k2l3',
  },
  {
    id: 'private-label-china-guide',
    category: 'OEM & Private Label',
    title: 'How to Start a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labelling with Chinese factories is one of the most cost-effective ways to build a product brand. This guide covers finding OEM partners, managing samples, and protecting your brand.',
    date: '2026-03-25',
    readTime: '10 min read',
    titleId: 'blog-private-label-title',
    descId: 'blog-private-label-desc',
    imgId: 'blog-private-label-img-m4n5o6',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Many first-time importers make the same costly mistakes when sourcing from China. From skipping factory audits to misunderstanding payment terms, here is what to watch out for.',
    date: '2026-03-11',
    readTime: '8 min read',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-mistakes-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'OEM & Private Label', 'Sourcing Tips'];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          data-strk-bg-id="blog-hero-bg-s1t2u3"
          data-strk-bg="China sourcing business import export guide"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Sourcing Knowledge</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            China Sourcing Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Practical guides, tips, and insights for importers sourcing from China. Written by our team based on real project experience.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-default ${
                  cat === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-12">
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow lg:flex">
              <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {posts[0].category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {posts[0].readTime}
                  </span>
                </div>
                <h2 id={posts[0].titleId} className="text-slate-900 font-bold text-2xl md:text-3xl mb-4 leading-snug">
                  {posts[0].title}
                </h2>
                <p id={posts[0].descId} className="text-slate-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{formatDate(posts[0].date)}</span>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-700 cursor-pointer">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-slate-900 font-bold text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">{formatDate(post.date)}</span>
                    <span className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer hover:text-blue-700">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Stay Informed</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-500 mb-8">
            Practical guides and industry updates for importers sourcing from China. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Put our knowledge to work for your business. Get a free sourcing consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
