import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending payment to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-05-20',
    readTime: '7 min read',
    imgId: 'blog-supplier-verify-img-a1b2c3',
    titleId: 'blog-supplier-verify-title',
    descId: 'blog-supplier-verify-desc',
  },
  {
    id: 'pre-shipment-inspection',
    category: 'Quality Control',
    title: 'What Is a Pre-Shipment Inspection and Why Does It Matter?',
    excerpt: 'A pre-shipment inspection (PSI) is one of the most effective ways to catch quality issues before goods leave China. Learn what inspectors check, how AQL sampling works, and when to use it.',
    date: '2026-05-06',
    readTime: '6 min read',
    imgId: 'blog-psi-img-d4e5f6',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    id: 'sea-freight-guide',
    category: 'Shipping',
    title: 'Sea Freight from China: FCL vs LCL — Which Is Right for Your Order?',
    excerpt: 'Choosing between full container load (FCL) and less-than-container load (LCL) shipping affects your cost, lead time, and risk. Here\'s how to decide based on your order volume and timeline.',
    date: '2026-04-22',
    readTime: '5 min read',
    imgId: 'blog-seafreight-img-g7h8i9',
    titleId: 'blog-seafreight-title',
    descId: 'blog-seafreight-desc',
  },
  {
    id: 'moq-negotiation',
    category: 'Sourcing Tips',
    title: 'How to Negotiate MOQ with Chinese Manufacturers',
    excerpt: 'Minimum order quantities can be a barrier for small and medium importers. This article explains why factories set MOQs and practical strategies to negotiate lower quantities without sacrificing price.',
    date: '2026-04-08',
    readTime: '5 min read',
    imgId: 'blog-moq-img-j1k2l3',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'product-compliance',
    category: 'Compliance',
    title: 'CE, FCC, and RoHS: A Practical Guide to Product Compliance for China Imports',
    excerpt: 'Importing products from China to the US or EU requires meeting specific certification standards. This guide explains the most common certifications, who needs them, and how to get them.',
    date: '2026-03-25',
    readTime: '8 min read',
    imgId: 'blog-compliance-img-m4n5o6',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Tips',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, cost implications, and which option suits different types of buyers.',
    date: '2026-03-10',
    readTime: '6 min read',
    imgId: 'blog-agent-vs-trading-img-p7q8r9',
    titleId: 'blog-agent-vs-trading-title',
    descId: 'blog-agent-vs-trading-desc',
  },
];

const categoryColors = {
  'Supplier Verification': 'bg-blue-100 text-blue-700',
  'Quality Control': 'bg-green-100 text-green-700',
  'Shipping': 'bg-orange-100 text-orange-700',
  'Sourcing Tips': 'bg-purple-100 text-purple-700',
  'Compliance': 'bg-red-100 text-red-700',
};

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Sourcing Knowledge</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">China Sourcing Blog</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, tips, and insights for importers sourcing from China. Written by our team based on real sourcing experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Featured Article</p>
            <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={featured.imgId}
                    data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                    {featured.category}
                  </span>
                  <h2 id={featured.titleId} className="text-2xl font-bold text-primary mb-3 leading-snug">{featured.title}</h2>
                  <p id={featured.descId} className="text-muted text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted mb-5">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, title, excerpt, date, readTime, imgId, titleId, descId }) => (
              <div key={id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[category] || 'bg-gray-100 text-gray-600'}`}>
                    {category}
                  </span>
                  <h3 id={titleId} className="font-semibold text-darktext text-base mb-2 leading-snug flex-1">{title}</h3>
                  <p id={descId} className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted mt-auto pt-3 border-t border-border">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-muted mb-6 text-sm">Practical guides for importers, delivered monthly. No spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="bg-primary hover:bg-blue-900 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
