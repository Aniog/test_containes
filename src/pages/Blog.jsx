import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A practical guide to checking business licences, production capacity, and certifications before committing to a manufacturer in China.',
    category: 'Supplier Verification',
    date: 'May 28, 2026',
    readTime: '7 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL Inspection Explained: What It Means for Your Import Quality',
    excerpt: 'Understanding Acceptable Quality Limits (AQL) and how pre-shipment inspections protect you from receiving defective goods.',
    category: 'Quality Control',
    date: 'May 14, 2026',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air-freight',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'A cost and timeline comparison to help you decide the right shipping method for your product type, order size, and delivery deadline.',
    category: 'Shipping',
    date: 'April 30, 2026',
    readTime: '5 min read',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'moq-negotiation',
    title: 'Negotiating MOQ with Chinese Factories: What Actually Works',
    excerpt: 'Practical strategies for reducing minimum order quantities without damaging your supplier relationship or increasing your unit cost.',
    category: 'Negotiation',
    date: 'April 15, 2026',
    readTime: '8 min read',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'ce-certification-china',
    title: 'CE Certification for Products Made in China: A Buyer\'s Guide',
    excerpt: 'What CE marking means, which products require it, and how to ensure your Chinese supplier can provide compliant documentation.',
    category: 'Compliance',
    date: 'March 28, 2026',
    readTime: '9 min read',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    title: 'Sourcing Agent vs Trading Company: Which Is Right for You?',
    excerpt: 'A clear comparison of the two main ways to buy from China, including cost structures, transparency, and when each option makes sense.',
    category: 'Sourcing Strategy',
    date: 'March 10, 2026',
    readTime: '6 min read',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Insights & Guides</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">China Sourcing Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Practical guides and industry insights for businesses importing from China.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200">
            <div className="relative min-h-64 bg-neutral-100">
              <img
                data-strk-img-id={`blog-featured-${featured.id}-img-6c1a`}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="text-neutral-400 text-xs">Featured</span>
              </div>
              <h2 id={featured.titleId} className="text-neutral-900 font-bold text-2xl mb-3 leading-tight">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-44 bg-neutral-100 overflow-hidden">
                  <img
                    data-strk-img-id={`blog-${post.id}-img-8f4b`}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-neutral-100 text-neutral-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-neutral-900 font-bold text-base mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-blue text-xs font-semibold hover:text-brand-sky transition-colors flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
