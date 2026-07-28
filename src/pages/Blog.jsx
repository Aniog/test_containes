import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Step-by-Step Checklist',
    excerpt: 'Before you send a deposit, confirm the factory is real, capable, and financially stable. This checklist covers the 12 verification points we use on every audit.',
    category: 'Factory Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    author: 'SSourcing Team',
    imgId: 'blog-factory-verification',
  },
  {
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for pre-shipment inspections. Learn how to choose the right AQL level for your product category.',
    category: 'Quality Control',
    date: 'June 28, 2026',
    readTime: '6 min read',
    author: 'SSourcing Team',
    imgId: 'blog-aql-sampling',
  },
  {
    title: 'Incoterms Explained for First-Time Importers from China',
    excerpt: 'FOB, CIF, DDP — what do they actually mean, and which one should you choose? A practical guide to shipping terms that affect cost and risk.',
    category: 'Shipping & Logistics',
    date: 'June 10, 2026',
    readTime: '7 min read',
    author: 'SSourcing Team',
    imgId: 'blog-incoterms',
  },
  {
    title: 'Red Flags in Chinese Supplier Quotations',
    excerpt: 'Unusually low prices, vague MOQs, and missing specifications are warning signs. Here is what to look for before you commit to a supplier.',
    category: 'Supplier Sourcing',
    date: 'May 22, 2026',
    readTime: '5 min read',
    author: 'SSourcing Team',
    imgId: 'blog-red-flags',
  },
  {
    title: 'How We Helped a Client Reduce Tooling Costs by 30%',
    excerpt: 'A case breakdown of how supplier consolidation and mold ownership negotiation saved a UK importer significant upfront investment.',
    category: 'Case Study',
    date: 'May 05, 2026',
    readTime: '6 min read',
    author: 'SSourcing Team',
    imgId: 'blog-tooling-costs',
  },
  {
    title: 'Navigating China\'s Export Regulations in 2026',
    excerpt: 'Recent changes in export licensing, customs documentation, and product certification requirements that every importer should know.',
    category: 'Compliance',
    date: 'April 18, 2026',
    readTime: '9 min read',
    author: 'SSourcing Team',
    imgId: 'blog-export-regulations',
  },
];

const categories = [
  'All',
  'Factory Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Supplier Sourcing',
  'Case Study',
  'Compliance',
];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Sourcing Insights
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Practical guides, industry updates, and lessons from real sourcing projects. Written for buyers who want to source smarter from China.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-10 pb-6 bg-white border-b border-neutral-lightgray">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-neutral-offwhite text-neutral-mediumgray hover:bg-primary-light hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <article
                key={i}
                className="bg-white border border-neutral-lightgray rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[blog-${i}-title] [blog-${i}-category]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  id={`blog-${i}-title`}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold bg-primary-light text-primary px-2.5 py-1 rounded-full"
                      id={`blog-${i}-category`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-nearblack mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-mediumgray leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-mediumgray pt-4 border-t border-neutral-lightgray">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-neutral-mediumgray mb-8">
            Our team is happy to discuss your project, even if you are not ready to place an order. No pressure, no obligation.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
