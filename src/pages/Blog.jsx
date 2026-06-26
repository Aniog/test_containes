import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const posts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide for Importers',
    category: 'Supplier Verification',
    date: '2025-12-15',
    readTime: '8 min read',
    excerpt: 'Supplier verification is one of the most critical steps when importing from China. Learn the key checks every importer should perform, from business license verification to on-site factory audits.',
    tags: ['Supplier Verification', 'Due Diligence', 'Import Guide'],
  },
  {
    id: 'quality-inspection-aql-standards',
    title: 'Understanding AQL Standards for Quality Inspection in China',
    category: 'Quality Control',
    date: '2025-11-28',
    readTime: '6 min read',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for product inspection sampling. This guide explains how AQL works and how to use it when inspecting goods from Chinese factories.',
    tags: ['Quality Control', 'AQL', 'Inspection'],
  },
  {
    id: 'common-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    category: 'Sourcing Tips',
    date: '2025-11-10',
    readTime: '7 min read',
    excerpt: 'First-time importers often make predictable mistakes that cost time and money. Learn from others\' experience and set your China sourcing project up for success.',
    tags: ['Sourcing Tips', 'Best Practices', 'Import Guide'],
  },
  {
    id: 'shipping-methods-china',
    title: 'Sea Freight vs Air Freight vs Express: Choosing the Right Shipping Method from China',
    category: 'Logistics',
    date: '2025-10-22',
    readTime: '9 min read',
    excerpt: 'Choosing between sea freight, air freight, and express shipping depends on your budget, timeline, and cargo size. This comparison helps you make the right decision for each order.',
    tags: ['Shipping', 'Logistics', 'Cost Optimization'],
  },
  {
    id: 'canton-fair-preparation',
    title: 'How to Prepare for the Canton Fair: A Practical Guide for Buyers',
    category: 'Trade Shows',
    date: '2025-10-05',
    readTime: '6 min read',
    excerpt: 'The Canton Fair is the largest trade fair in China and a great opportunity to meet suppliers face-to-face. Here is how to prepare effectively and make the most of your visit.',
    tags: ['Canton Fair', 'Trade Shows', 'Supplier Meetings'],
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'Negotiation Tips for Working with Chinese Suppliers',
    category: 'Sourcing Tips',
    date: '2025-09-18',
    readTime: '7 min read',
    excerpt: 'Effective negotiation with Chinese suppliers requires cultural understanding and strategic approach. Learn practical tips for getting better pricing and terms without damaging relationships.',
    tags: ['Negotiation', 'Pricing', 'Supplier Relations'],
  },
];

export default function Blog() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Sourcing Insights &amp; Guides
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Practical articles and guides to help you source products from China more
            effectively and avoid common pitfalls.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-14">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-surface-alt rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[16/10] lg:aspect-auto bg-surface-alt">
                <img
                  data-strk-img-id="blog-featured-img"
                  data-strk-img="[blog-featured-title] [blog-featured-excerpt]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">{posts[0].category}</span>
                <h2 id="blog-featured-title" className="text-2xl md:text-3xl font-bold text-text-primary mb-3 leading-snug">
                  {posts[0].title}
                </h2>
                <p id="blog-featured-excerpt" className="text-text-secondary text-base leading-relaxed mb-4">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-text-muted text-sm mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors cursor-pointer">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.slice(1).map((post, i) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[16/9] bg-surface-alt overflow-hidden">
                  <img
                    data-strk-img-id={`blog-post-img-${i}`}
                    data-strk-img={`[blog-post-title-${i}] [blog-post-excerpt-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent text-xs font-semibold">{post.category}</span>
                  </div>
                  <h3 id={`blog-post-title-${i}`} className="text-lg font-bold text-text-primary mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p id={`blog-post-excerpt-${i}`} className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-text-muted text-xs">
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

          {/* Tags */}
          <div className="mt-14 pt-10 border-t border-border">
            <h3 className="text-lg font-bold text-text-primary mb-4">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Supplier Verification', 'Quality Control', 'Shipping', 'Canton Fair', 'Negotiation', 'Import Guide', 'Logistics', 'AQL Standards', 'Factory Audit', 'Cost Optimization'].map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-alt text-text-secondary text-sm px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions About Sourcing from China?"
        subtitle="Our team is happy to discuss your specific sourcing needs and answer any questions."
      />
    </div>
  );
}
