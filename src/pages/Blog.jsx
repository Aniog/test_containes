import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '6 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common mistakes overseas buyers make. Here\'s a practical checklist to protect yourself.',
    titleId: 'blog-sv-title',
    descId: 'blog-sv-desc',
    imgId: 'blog-sv-img-a1b2c3',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    title: 'What Is AQL Inspection and Why Does It Matter for Your Imports?',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by professional inspectors worldwide. Understanding it helps you set realistic quality expectations and protect your brand.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'incoterms',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This guide explains the most common terms used in China trade and when to use each one.',
    titleId: 'blog-inco-title',
    descId: 'blog-inco-desc',
    imgId: 'blog-inco-img-g7h8i9',
  },
  {
    id: 'moq-negotiation',
    category: 'Negotiation',
    date: 'June 18, 2026',
    readTime: '5 min read',
    title: 'How to Negotiate MOQ with Chinese Factories as a Small Buyer',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. These practical strategies help you negotiate lower MOQs without damaging the supplier relationship.',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-j1k2l3',
  },
  {
    id: 'private-label',
    category: 'OEM & Private Label',
    date: 'June 5, 2026',
    readTime: '8 min read',
    title: 'A Step-by-Step Guide to Launching a Private Label Product from China',
    excerpt: 'Private labeling in China can be highly profitable if done correctly. This guide walks you through the full process from product selection to your first shipment.',
    titleId: 'blog-pl-title',
    descId: 'blog-pl-desc',
    imgId: 'blog-pl-img-m4n5o6',
  },
  {
    id: 'payment-terms',
    category: 'Finance & Risk',
    date: 'May 22, 2026',
    readTime: '6 min read',
    title: 'Safe Payment Methods When Buying from China: T/T, L/C, and Escrow',
    excerpt: 'Payment terms are a major risk factor in China sourcing. This article explains the most common methods, their risks, and how to structure payments to protect your business.',
    titleId: 'blog-pay-title',
    descId: 'blog-pay-desc',
    imgId: 'blog-pay-img-p7q8r9',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Resources</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">China Sourcing Blog</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Practical guides, tips, and insights for overseas buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="rounded-xl border border-brand-border overflow-hidden mb-10 hover:shadow-md transition-shadow">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden bg-brand-light">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{featured.category}</span>
                  <span className="text-brand-muted text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                  <span className="text-brand-muted text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl font-extrabold text-brand-navy mb-3">{featured.title}</h2>
                <p id={featured.descId} className="text-brand-muted leading-relaxed mb-5">{featured.excerpt}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-navy transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} className="rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden bg-brand-light">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-brand-muted text-xs">{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="text-brand-navy font-bold text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-muted text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <Link
                      to="/blog"
                      className="text-brand-blue text-sm font-semibold hover:text-brand-navy transition-colors flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-light py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy mb-3">Get Sourcing Tips by Email</h2>
          <p className="text-brand-muted mb-6">Practical guides for overseas buyers, delivered monthly. No spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="bg-brand-blue text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-navy transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
