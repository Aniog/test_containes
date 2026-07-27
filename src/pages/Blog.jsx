import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before you wire money to a factory you\'ve never visited, there are several verification steps every importer should take. Here\'s a practical checklist.',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'July 15, 2026',
    imgId: 'blog-supplier-img-4a2f7b',
    titleId: 'blog-supplier-title',
    descId: 'blog-supplier-desc',
  },
  {
    id: 'aql-inspection',
    title: 'AQL Inspection Standards Explained for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in most pre-shipment inspections. This guide explains what it means and how to use it to protect your orders.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'July 8, 2026',
    imgId: 'blog-aql-img-7c3e1d',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sourcing-agent-vs-trading',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference can save you money and reduce risk in your supply chain.',
    category: 'Sourcing Basics',
    readTime: '5 min read',
    date: 'June 28, 2026',
    imgId: 'blog-agent-img-2b9f5c',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
  },
  {
    id: 'incoterms',
    title: 'Incoterms for China Importers: FOB, CIF, EXW Explained',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. Here\'s what each term means and which one is right for your shipment.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'June 20, 2026',
    imgId: 'blog-incoterms-img-5e1a8d',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Chinese Manufacturers',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. These practical strategies can help you negotiate lower MOQs without damaging the supplier relationship.',
    category: 'Negotiation',
    readTime: '6 min read',
    date: 'June 12, 2026',
    imgId: 'blog-moq-img-9d4b2f',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'ce-certification',
    title: 'CE Certification for Products Sourced from China: A Practical Guide',
    excerpt: 'If you\'re importing products into the EU, CE marking is mandatory for many product categories. Here\'s what you need to know before placing your order.',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'June 5, 2026',
    imgId: 'blog-ce-img-6c2e7a',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Sourcing Basics', 'Shipping & Logistics', 'Negotiation', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Blog</span>
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            China Sourcing Insights
          </h1>
          <p id="blog-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
          {/* Featured Post */}
          <div className="mb-14">
            <h2 className="text-sm font-semibold text-brand-muted uppercase tracking-wide mb-6">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-brand-gray rounded-2xl overflow-hidden border border-brand-border">
              <div className="h-64 lg:h-auto overflow-hidden bg-brand-blue-light">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-brand-muted text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-brand-text mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="text-brand-muted leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted text-sm">{featured.date}</span>
                  <Link
                    to={`/blog/${featured.id}`}
                    className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-sm hover:text-brand-navy transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <div>
            <h2 className="text-sm font-semibold text-brand-muted uppercase tracking-wide mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article key={post.id} className="bg-brand-gray rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow group">
                  <div className="h-44 overflow-hidden bg-brand-blue-light">
                    <img
                      alt={post.title}
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-brand-blue-light text-brand-blue text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-brand-muted text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 id={post.titleId} className="font-semibold text-brand-text mb-2 leading-snug text-sm">
                      {post.title}
                    </h3>
                    <p id={post.descId} className="text-brand-muted text-xs leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-muted text-xs">{post.date}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-brand-blue text-xs font-semibold hover:text-brand-navy transition-colors flex items-center gap-1"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-brand-blue-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-brand-muted mb-6 text-sm">
            Practical guides and industry updates for global buyers. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="bg-brand-blue hover:bg-brand-navy text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
