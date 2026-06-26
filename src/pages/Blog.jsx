import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import CTAButton from '../components/shared/CTAButton.jsx';

const posts = [
  {
    id: 'post-supplier-vetting',
    titleId: 'blog-title-supplier-vetting',
    descId: 'blog-desc-supplier-vetting',
    imgId: 'blog-img-supplier-vetting-a1b2',
    category: 'Supplier Sourcing',
    date: 'June 10, 2026',
    readTime: '6 min read',
    title: 'How to Vet a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
  },
  {
    id: 'post-qc-guide',
    titleId: 'blog-title-qc-guide',
    descId: 'blog-desc-qc-guide',
    imgId: 'blog-img-qc-guide-c3d4',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '8 min read',
    title: 'A Practical Guide to Pre-Shipment Inspection in China',
    excerpt: 'Pre-shipment inspection is one of the most effective ways to protect your order quality. Learn what inspectors check, how AQL sampling works, and when to use a third-party QC service.',
  },
  {
    id: 'post-incoterms',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
    imgId: 'blog-img-incoterms-e5f6',
    category: 'Shipping',
    date: 'May 14, 2026',
    readTime: '5 min read',
    title: 'FOB vs CIF vs DDP: Which Incoterm Should You Use When Importing from China?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This article explains the most common shipping terms used in China trade and when to use each one.',
  },
  {
    id: 'post-moq',
    titleId: 'blog-title-moq',
    descId: 'blog-desc-moq',
    imgId: 'blog-img-moq-g7h8',
    category: 'Sourcing Tips',
    date: 'April 30, 2026',
    readTime: '4 min read',
    title: 'How to Negotiate Lower MOQs with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small and medium importers. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
  },
  {
    id: 'post-private-label',
    titleId: 'blog-title-private-label',
    descId: 'blog-desc-private-label',
    imgId: 'blog-img-private-label-i9j0',
    category: 'Private Label',
    date: 'April 15, 2026',
    readTime: '7 min read',
    title: 'Starting a Private Label Business with Chinese Manufacturers: A Step-by-Step Guide',
    excerpt: 'Private labeling with Chinese factories is a proven route to building a product brand. This guide walks through the process from product selection to first shipment.',
  },
  {
    id: 'post-payment',
    titleId: 'blog-title-payment',
    descId: 'blog-desc-payment',
    imgId: 'blog-img-payment-k1l2',
    category: 'Trade Finance',
    date: 'March 28, 2026',
    readTime: '5 min read',
    title: 'Payment Terms When Buying from China: T/T, L/C, and Trade Assurance Explained',
    excerpt: 'Understanding payment terms is essential for managing risk when importing from China. This article covers the most common payment methods and how to protect yourself as a buyer.',
  },
];

const Blog = () => {
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
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#e88a80' }}>
            Sourcing Knowledge
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Resources</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Practical guides and insights for importers sourcing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-72 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#fef2f2', color: '#c0392b' }}>
                  {featured.category}
                </span>
                <span className="text-xs flex items-center gap-1" style={{ color: '#718096' }}>
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a2e4a' }}>{featured.title}</h2>
              <p id={featured.descId} className="text-base leading-relaxed mb-4" style={{ color: '#4a5568' }}>{featured.excerpt}</p>
              <p className="text-sm mb-4" style={{ color: '#718096' }}>{featured.date}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-semibold no-underline hover:gap-3 transition-all" style={{ color: '#2980b9' }}>
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Latest Articles"
            title="More Sourcing Guides"
            subtitle="Practical advice for importers at every stage of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className="overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="450"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#fef2f2', color: '#c0392b' }}>
                      {post.category}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: '#718096' }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold mb-2 leading-snug" style={{ color: '#1a2e4a' }}>{post.title}</h3>
                  <p id={post.descId} className="text-sm leading-relaxed mb-4" style={{ color: '#4a5568' }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
                    <span className="text-xs" style={{ color: '#718096' }}>{post.date}</span>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium no-underline" style={{ color: '#2980b9' }}>
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a2e4a' }}>Get Sourcing Tips by Email</h2>
          <p className="text-base mb-6" style={{ color: '#4a5568' }}>
            Practical guides for importers, delivered monthly. No spam.
          </p>
          <CTAButton to="/contact" variant="outline">
            Subscribe to Updates
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Blog;
