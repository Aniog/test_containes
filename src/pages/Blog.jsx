import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '7 min read',
    excerpt: 'Before sending money to a Chinese manufacturer, there are several verification steps every buyer should take. This guide covers document checks, factory audits, and red flags to watch for.',
    imgId: 'blog-verify-supplier-img-1a2b3c',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
  },
  {
    id: 'aql-inspection-guide',
    title: 'AQL Inspection Explained: A Practical Guide for Importers',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '9 min read',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by QC inspectors worldwide. Learn how it works, which AQL level to choose, and how to interpret inspection results.',
    imgId: 'blog-aql-img-4d5e6f',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'china-manufacturing-regions',
    title: 'China\'s Manufacturing Regions: Where to Source Different Products',
    category: 'Sourcing Strategy',
    date: 'June 28, 2026',
    readTime: '8 min read',
    excerpt: 'Different regions of China specialize in different product categories. Understanding where to source electronics, furniture, apparel, and other goods can save time and improve quality.',
    imgId: 'blog-regions-img-7g8h9i',
    titleId: 'blog-regions-title',
    descId: 'blog-regions-desc',
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms for China Imports: FOB, CIF, EXW Explained',
    category: 'Shipping & Logistics',
    date: 'June 18, 2026',
    readTime: '6 min read',
    excerpt: 'Choosing the right Incoterm affects your costs, risks, and responsibilities. This guide explains the most common terms used in China trade and when to use each one.',
    imgId: 'blog-incoterms-img-1j2k3l',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'product-certifications-china',
    title: 'Product Certifications for China Imports: CE, FCC, RoHS & More',
    category: 'Compliance',
    date: 'June 5, 2026',
    readTime: '10 min read',
    excerpt: 'Importing products without the right certifications can result in customs rejection or market bans. This guide covers the most important certifications for different product categories and markets.',
    imgId: 'blog-certs-img-4m5n6o',
    titleId: 'blog-certs-title',
    descId: 'blog-certs-desc',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'How to Negotiate Price and Terms with Chinese Suppliers',
    category: 'Sourcing Strategy',
    date: 'May 22, 2026',
    readTime: '7 min read',
    excerpt: 'Effective negotiation with Chinese manufacturers requires understanding their business culture, pricing structure, and what levers you can use to get better terms without damaging the relationship.',
    imgId: 'blog-negotiate-img-7p8q9r',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Sourcing Strategy', 'Shipping & Logistics', 'Compliance'];

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
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Blog & Resources
          </span>
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            China Sourcing Insights
          </h1>
          <p id="blog-page-subtitle" className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice for buyers importing from China.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-brand-mid hover:bg-blue-50 hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="text-brand-mid text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-bold text-brand-dark text-base mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-brand-mid text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-mid text-xs">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Get Sourcing Insights in Your Inbox
          </h2>
          <p className="text-brand-mid mb-8">
            Subscribe to our newsletter for practical China sourcing tips, industry updates, and supplier market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
            <button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-brand-mid text-xs mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
