import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: '1',
    title: 'How to Verify a Chinese Supplier: A Complete Guide for Importers',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    date: 'July 15, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-m0n1o2',
    titleId: 'blog-title-1',
    descId: 'blog-desc-1',
  },
  {
    id: '2',
    title: 'Understanding AQL Quality Control Standards for Imported Products',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for product inspection. Understand how AQL sampling works, what levels to use for different products, and how to read an inspection report.',
    date: 'July 8, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-aql-standards-n1o2p3',
    titleId: 'blog-title-2',
    descId: 'blog-desc-2',
  },
  {
    id: '3',
    title: 'The True Cost of Sourcing from China: Hidden Fees to Watch For',
    excerpt: 'Beyond the unit price, there are tooling costs, mold fees, packaging, shipping, duties, and more. We break down the real cost structure of importing from China.',
    date: 'June 28, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    imgId: 'blog-true-cost-o2p3q4',
    titleId: 'blog-title-3',
    descId: 'blog-desc-3',
  },
  {
    id: '4',
    title: 'Incoterms Explained: FOB, CIF, EXW and What They Mean for Your Shipment',
    excerpt: 'Confused by shipping terms? Our practical guide to Incoterms helps you understand who pays for what — from factory to final destination.',
    date: 'June 20, 2026',
    author: 'SSourcing China Team',
    category: 'Shipping & Logistics',
    imgId: 'blog-incoterms-p3q4r5',
    titleId: 'blog-title-4',
    descId: 'blog-desc-4',
  },
  {
    id: '5',
    title: 'Top 10 China Trade Shows for International Buyers in 2026',
    excerpt: 'From the Canton Fair to industry-specific shows, discover the best trade shows to find Chinese suppliers, see product samples, and build factory relationships.',
    date: 'June 12, 2026',
    author: 'SSourcing China Team',
    category: 'Industry Insights',
    imgId: 'blog-tradeshows-q4r5s6',
    titleId: 'blog-title-5',
    descId: 'blog-desc-5',
  },
  {
    id: '6',
    title: 'How to Negotiate with Chinese Suppliers: 10 Practical Tips',
    excerpt: 'Effective negotiation with Chinese factories requires cultural understanding and the right approach. Here are 10 proven strategies to get better pricing and terms.',
    date: 'May 30, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    imgId: 'blog-negotiate-r5s6t7',
    titleId: 'blog-title-6',
    descId: 'blog-desc-6',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-950 text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 id="blog-pg-title" className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Blog
            </h1>
            <p id="blog-pg-subtitle" className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              Insights, guides, and practical advice for sourcing from China with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-pg-subtitle] [blog-pg-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-600">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Need Help with Your Sourcing?
            </h2>
            <p className="mt-4 text-lg text-brand-100 leading-relaxed">
              Our team is ready to help you find reliable suppliers and manage your production.
            </p>
            <Link to="/contact" className="btn-white text-base px-8 py-3.5 gap-2 mt-8 inline-flex">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
