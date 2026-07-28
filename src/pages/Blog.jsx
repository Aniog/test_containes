import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing an order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    date: '2026-07-15',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-post-1-d1e2f3',
    titleId: 'blog-title-1',
    excerptId: 'blog-excerpt-1',
  },
  {
    id: 'post-2',
    title: 'Understanding Incoterms: FOB, CIF, EXW Explained for Importers',
    excerpt: 'Incoterms define the responsibilities of buyers and sellers in international trade. This guide explains the most common terms for importing from China — FOB, CIF, and EXW.',
    date: '2026-07-08',
    author: 'SSourcing China Team',
    category: 'Shipping & Logistics',
    imgId: 'blog-post-2-d1e2f4',
    titleId: 'blog-title-2',
    excerptId: 'blog-excerpt-2',
  },
  {
    id: 'post-3',
    title: 'Quality Control in China: Inspection Types and Best Practices',
    excerpt: 'A deep dive into the different types of quality control inspections for products manufactured in China — pre-production, in-line, and pre-shipment — and how to implement them effectively.',
    date: '2026-06-28',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-post-3-d1e2f5',
    titleId: 'blog-title-3',
    excerptId: 'blog-excerpt-3',
  },
  {
    id: 'post-4',
    title: 'The True Cost of Sourcing from China: Beyond the Unit Price',
    excerpt: 'The unit price is just the beginning. Learn about tooling costs, shipping, duties, warehousing, and other hidden costs that affect your total landed cost when importing from China.',
    date: '2026-06-20',
    author: 'SSourcing China Team',
    category: 'Cost & Pricing',
    imgId: 'blog-post-4-d1e2f6',
    titleId: 'blog-title-4',
    excerptId: 'blog-excerpt-4',
  },
  {
    id: 'post-5',
    title: 'MOQ Negotiation: How to Get Lower Minimum Order Quantities',
    excerpt: 'Struggling with high minimum order quantities? This guide shares practical strategies to negotiate lower MOQs with Chinese manufacturers without sacrificing price or quality.',
    date: '2026-06-10',
    author: 'SSourcing China Team',
    category: 'Negotiation',
    imgId: 'blog-post-5-d1e2f7',
    titleId: 'blog-title-5',
    excerptId: 'blog-excerpt-5',
  },
  {
    id: 'post-6',
    title: 'China Import Tariffs 2026: What US and EU Buyers Need to Know',
    excerpt: 'An up-to-date overview of import tariffs and trade regulations affecting goods imported from China to the US and European Union markets in 2026.',
    date: '2026-06-02',
    author: 'SSourcing China Team',
    category: 'Trade Regulations',
    imgId: 'blog-post-6-d1e2f8',
    titleId: 'blog-title-6',
    excerptId: 'blog-excerpt-6',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Blog
            </h1>
            <p id="blog-page-subtitle" className="mt-4 text-lg text-slate-600">
              Insights, guides, and practical advice on sourcing from China — written by industry professionals with real experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                <div
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[${post.excerptId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                >
                  <div className="aspect-[16/9] bg-slate-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-brand-navy transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.excerptId} className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Have Questions About Sourcing?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our experts are ready to help. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}