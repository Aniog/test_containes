import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SectionHeader, CTAButton, Badge } from '@/components/ui/SharedComponents';

const posts = [
  {
    id: 'post-1',
    slug: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before committing to a supplier in China, there are several verification steps every buyer should take. This guide covers the key checks — from business license verification to on-site factory audits.',
    category: 'Supplier Verification',
    readTime: '7 min read',
    date: 'June 12, 2026',
    imgId: 'blog-img-1-ss1',
    titleId: 'blog-title-1',
    descId: 'blog-desc-1',
  },
  {
    id: 'post-2',
    slug: 'aql-inspection-guide',
    title: 'AQL Inspection Explained: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. This article explains how AQL sampling works, what the numbers mean, and how to choose the right inspection level for your products.',
    category: 'Quality Inspection',
    readTime: '9 min read',
    date: 'May 28, 2026',
    imgId: 'blog-img-2-ss2',
    titleId: 'blog-title-2',
    descId: 'blog-desc-2',
  },
  {
    id: 'post-3',
    slug: 'sea-freight-vs-air-freight',
    title: 'Sea Freight vs. Air Freight from China: Which Should You Choose?',
    excerpt: 'Choosing the right shipping method from China depends on your timeline, budget, and product type. This guide compares sea freight and air freight across cost, transit time, and suitability for different cargo types.',
    category: 'Shipping',
    readTime: '6 min read',
    date: 'May 10, 2026',
    imgId: 'blog-img-3-ss3',
    titleId: 'blog-title-3',
    descId: 'blog-desc-3',
  },
  {
    id: 'post-4',
    slug: 'china-sourcing-agent-vs-trading-company',
    title: 'China Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, the pros and cons of each, and how to decide which is right for your business.',
    category: 'Sourcing Strategy',
    readTime: '8 min read',
    date: 'April 22, 2026',
    imgId: 'blog-img-4-ss4',
    titleId: 'blog-title-4',
    descId: 'blog-desc-4',
  },
  {
    id: 'post-5',
    slug: 'product-certifications-china',
    title: 'Product Certifications When Importing from China: CE, RoHS, FDA and More',
    excerpt: 'Importing products from China often requires specific certifications depending on your target market. This guide covers the most common certifications, who needs them, and how to verify that your supplier can provide them.',
    category: 'Compliance',
    readTime: '10 min read',
    date: 'April 5, 2026',
    imgId: 'blog-img-5-ss5',
    titleId: 'blog-title-5',
    descId: 'blog-desc-5',
  },
  {
    id: 'post-6',
    slug: 'negotiating-with-chinese-suppliers',
    title: 'How to Negotiate Price and Terms with Chinese Suppliers',
    excerpt: 'Effective negotiation with Chinese manufacturers requires understanding local business culture, knowing your leverage points, and asking the right questions. This guide shares practical tactics used by experienced importers.',
    category: 'Sourcing Strategy',
    readTime: '8 min read',
    date: 'March 18, 2026',
    imgId: 'blog-img-6-ss6',
    titleId: 'blog-title-6',
    descId: 'blog-desc-6',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Inspection', 'Shipping', 'Sourcing Strategy', 'Compliance'];

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
      {/* Header */}
      <section className="bg-brand-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              China Sourcing Insights
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Practical guides and industry insights for importers and buyers sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-blue-light hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}] China sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="blue">{posts[0].category}</Badge>
                    <span className="text-gray-400 text-xs">Featured</span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 tracking-tight leading-snug">
                    {posts[0].title}
                  </h2>
                  <p id={posts[0].descId} className="text-gray-600 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span>{posts[0].date}</span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{posts[0].readTime}</span>
                      </div>
                    </div>
                    <Link to="/blog" className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:underline">
                      Read more <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] China sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="blue">{post.category}</Badge>
                  </div>
                  <h3 id={post.titleId} className="text-base font-bold text-brand-dark mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="inline-flex items-center gap-1 text-brand-blue font-semibold text-xs hover:underline">
                      Read <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-blue-light py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 tracking-tight">
            Get Sourcing Insights in Your Inbox
          </h2>
          <p className="text-gray-600 mb-6">
            Practical guides and updates for importers sourcing from China. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue text-brand-dark"
            />
            <button className="bg-brand-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
