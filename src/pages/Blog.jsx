import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SectionHeader, CtaButton } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'factory-audit-guide',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide',
    excerpt: 'Before placing a large order with a Chinese manufacturer, a factory audit is one of the most important steps you can take. This guide covers what to check, what questions to ask, and what red flags to watch for.',
    category: 'Quality Control',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-audit-a1b2c3',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'moq-negotiation',
    title: 'Negotiating MOQ with Chinese Suppliers: What Actually Works',
    excerpt: 'Minimum order quantities can be a barrier for small businesses sourcing from China. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
    category: 'Supplier Relations',
    date: '2026-07-01',
    readTime: '6 min read',
    imgId: 'blog-moq-d4e5f6',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'pre-shipment-inspection',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    excerpt: 'A pre-shipment inspection is your last line of defense before goods leave the factory. Learn what inspectors check, how to prepare your quality criteria, and how to act on inspection results.',
    category: 'Quality Control',
    date: '2026-06-18',
    readTime: '7 min read',
    imgId: 'blog-psi-g7h8i9',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms Explained for China Importers: FOB, CIF, EXW and More',
    excerpt: 'Choosing the wrong Incoterm can cost you money and create unexpected liability. This plain-language guide explains the most common shipping terms used in China trade and when to use each one.',
    category: 'Shipping & Logistics',
    date: '2026-06-05',
    readTime: '9 min read',
    imgId: 'blog-incoterms-j1k2l3',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'private-label-china',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling from China is a proven path to building a product brand. This article walks through the key steps: finding OEM manufacturers, developing samples, and protecting your brand.',
    category: 'Private Label',
    date: '2026-05-22',
    readTime: '10 min read',
    imgId: 'blog-privatelabel-m4n5o6',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
  },
  {
    id: 'supplier-red-flags',
    title: '7 Red Flags When Evaluating Chinese Suppliers',
    excerpt: 'Not every supplier on Alibaba or Made-in-China is what they claim to be. Learn the warning signs that indicate a supplier may be unreliable, a trading company posing as a factory, or a potential scam.',
    category: 'Supplier Relations',
    date: '2026-05-10',
    readTime: '5 min read',
    imgId: 'blog-redflags-p7q8r9',
    titleId: 'blog-redflags-title',
    descId: 'blog-redflags-desc',
  },
];

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
      <section className="bg-blue-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">Insights & Guides</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers working with Chinese manufacturers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-china mb-4">Featured Article</p>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[280px]">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs bg-blue-50 text-blue-navy font-medium px-2.5 py-1 rounded-full w-fit mb-3">{featured.category}</span>
                <h2 id={featured.titleId} className="text-xl md:text-2xl font-bold text-blue-navy mb-3 leading-tight">{featured.title}</h2>
                <p id={featured.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-2 text-blue-navy font-semibold text-sm hover:text-red-china transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <SectionHeader eyebrow="Latest Articles" title="More from the Blog" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs bg-blue-50 text-blue-navy font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                  <h3 id={post.titleId} className="font-semibold text-blue-navy mt-3 mb-2 leading-snug text-sm">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-navy mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Subscribe to our newsletter for practical guides, industry updates, and sourcing advice for global buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-navy"
            />
            <button className="bg-red-china hover:bg-[#a93226] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
