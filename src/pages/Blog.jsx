import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A step-by-step guide to conducting due diligence on potential Chinese manufacturers, including what documents to request and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-1-img-x7y8z9',
  },
  {
    id: 'blog-2',
    title: 'Understanding AQL: A Buyer\'s Guide to Quality Inspection Standards',
    excerpt: 'Learn how Acceptable Quality Levels work, how to set the right inspection level for your products, and what happens when a batch fails.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-2-img-a1b2c3',
  },
  {
    id: 'blog-3',
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to unclear specifications — these are the most costly mistakes we see buyers make, and practical ways to prevent them.',
    category: 'Sourcing Tips',
    date: '2026-06-28',
    readTime: '7 min read',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-3-img-d4e5f6',
  },
  {
    id: 'blog-4',
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'A practical comparison of shipping options from China including costs, transit times, and when each method makes the most sense for your business.',
    category: 'Logistics',
    date: '2026-06-20',
    readTime: '5 min read',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-4-img-g7h8i9',
  },
  {
    id: 'blog-5',
    title: 'Negotiating with Chinese Suppliers: Strategies That Work',
    excerpt: 'Effective negotiation tactics for pricing, payment terms, and MOQs when working with Chinese manufacturers — based on our experience with 500+ suppliers.',
    category: 'Negotiation',
    date: '2026-06-12',
    readTime: '9 min read',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-5-img-j1k2l3',
  },
  {
    id: 'blog-6',
    title: 'Product Certifications for Importing from China: CE, FCC, and More',
    excerpt: 'An overview of common certifications required for importing Chinese products into the US, EU, and other markets, and how to ensure compliance.',
    category: 'Compliance',
    date: '2026-06-05',
    readTime: '7 min read',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-6-img-m4n5o6',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical knowledge to help you source smarter from China. Tips, guides, and industry insights from our team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition"
              >
                <div className="h-48 overflow-hidden">
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
                    <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-brand-navy mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-brand-muted mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="text-sm text-brand-blue font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-brand-light border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-brand-muted mb-8">
            Join 2,000+ importers who receive our weekly sourcing insights and supplier market updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition border-none cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
