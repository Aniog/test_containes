import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock } from 'lucide-react';
import SectionHeader, { CTAButton } from '@/components/ui/SectionHeader';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese manufacturer, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: 'May 28, 2026',
    readTime: '7 min read',
    imgId: 'blog-img-1-a1b2c3',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
  },
  {
    id: 'pre-shipment-inspection-guide',
    category: 'Quality Control',
    title: 'Pre-Shipment Inspection: What It Is and Why It Matters',
    excerpt: 'A pre-shipment inspection is one of the most cost-effective ways to protect your order quality. Learn what inspectors check, how AQL sampling works, and when to use it.',
    date: 'May 14, 2026',
    readTime: '6 min read',
    imgId: 'blog-img-2-d4e5f6',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
  },
  {
    id: 'sea-freight-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs. Air Freight from China: How to Choose',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This article breaks down the cost, speed, and suitability of each option for different sourcing scenarios.',
    date: 'April 30, 2026',
    readTime: '5 min read',
    imgId: 'blog-img-3-g7h8i9',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
  },
  {
    id: 'moq-negotiation-tips',
    category: 'Sourcing Tips',
    title: '5 Practical Tips for Negotiating MOQ with Chinese Suppliers',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. Here are five proven strategies for negotiating lower MOQs without damaging your supplier relationship.',
    date: 'April 15, 2026',
    readTime: '5 min read',
    imgId: 'blog-img-4-j0k1l2',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
  },
  {
    id: 'china-sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company: Which Is Right for You?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, cost implications, and when each option makes sense.',
    date: 'March 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-img-5-m3n4o5',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
  },
  {
    id: 'product-certification-china',
    category: 'Compliance',
    title: 'Product Certifications for China Imports: CE, RoHS, and More',
    excerpt: 'Importing products from China often requires specific certifications for your target market. This guide covers the most common certifications, who needs them, and how to verify supplier compliance.',
    date: 'March 10, 2026',
    readTime: '8 min read',
    imgId: 'blog-img-6-p6q7r8',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Tips', 'Sourcing Strategy', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical articles on China sourcing, supplier verification, quality control, and shipping — written for global buyers.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-text-muted border-border-color hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-border-color rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 bg-neutral-bg overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-semibold text-primary-dark text-lg mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-text-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-text-muted mb-6">
            Practical guides and industry updates for global buyers sourcing from China.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border-color text-text-dark text-sm focus:outline-none focus:border-primary bg-white"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
