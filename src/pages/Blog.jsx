import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-supplier',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
    category: 'Supplier Verification',
    date: 'May 28, 2026',
    readTime: '7 min read',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and trade record verification.',
  },
  {
    id: 'pre-shipment-inspection',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
    imgId: 'blog-psi-img-d4e5f6',
    category: 'Quality Control',
    date: 'May 14, 2026',
    readTime: '6 min read',
    title: 'What Is a Pre-Shipment Inspection and Why Does It Matter?',
    excerpt: 'A pre-shipment inspection (PSI) is one of the most effective ways to catch quality problems before goods leave China. Learn what inspectors check, how AQL sampling works, and when to use it.',
  },
  {
    id: 'incoterms-guide',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
    category: 'Shipping',
    date: 'April 30, 2026',
    readTime: '8 min read',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This practical guide explains the most common shipping terms used in China trade and when to use each one.',
  },
  {
    id: 'moq-negotiation',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-j1k2l3',
    category: 'Sourcing Tips',
    date: 'April 15, 2026',
    readTime: '5 min read',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small and medium buyers. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
  },
  {
    id: 'product-certifications',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
    imgId: 'blog-cert-img-m4n5o6',
    category: 'Compliance',
    date: 'March 28, 2026',
    readTime: '9 min read',
    title: 'CE, RoHS, ASTM, FDA: Which Certifications Does Your Product Need?',
    excerpt: 'Importing products without the right certifications can result in customs holds, fines, or product recalls. This guide covers the most common certifications required for different markets and product types.',
  },
  {
    id: 'sourcing-agent-vs-trading',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-p7q8r9',
    category: 'Sourcing Strategy',
    date: 'March 10, 2026',
    readTime: '6 min read',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences, the pros and cons of each, and how to decide which is right for your business.',
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
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Insights
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Practical guides, tips, and industry knowledge for global buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
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
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded-full">{featured.category}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{featured.date}</span>
                <button className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline">
                  Read article <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[3x2] bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <button className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline">
                      Read <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Put our knowledge to work for your business. Get a free sourcing consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
