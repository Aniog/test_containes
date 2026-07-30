import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 'post-supplier-verification',
    titleId: 'post-supplier-verification-title',
    descId: 'post-supplier-verification-desc',
    imgId: 'blog-img-supplier-verification-a1b2c3',
    slug: 'how-to-verify-chinese-suppliers',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'July 15, 2026',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common and costly mistakes importers make. Here\'s a practical checklist for verifying a supplier\'s legitimacy before committing.',
  },
  {
    id: 'post-qc-inspection',
    titleId: 'post-qc-inspection-title',
    descId: 'post-qc-inspection-desc',
    imgId: 'blog-img-qc-inspection-d4e5f6',
    slug: 'pre-shipment-inspection-guide',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'July 8, 2026',
    title: 'Pre-Shipment Inspection: What It Is, Why It Matters, and How It Works',
    excerpt: 'A pre-shipment inspection is one of the most effective ways to protect your order quality. This guide explains what inspectors check, how AQL sampling works, and what to do if defects are found.',
  },
  {
    id: 'post-incoterms',
    titleId: 'post-incoterms-title',
    descId: 'post-incoterms-desc',
    imgId: 'blog-img-incoterms-g7h8i9',
    slug: 'incoterms-explained-for-importers',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'June 28, 2026',
    title: 'Incoterms Explained: Which Shipping Terms Should You Use When Importing from China?',
    excerpt: 'FOB, CIF, EXW, DDP — incoterms determine who is responsible for costs and risks at each stage of shipping. Here\'s a plain-English guide to choosing the right terms for your imports.',
  },
  {
    id: 'post-moq-negotiation',
    titleId: 'post-moq-negotiation-title',
    descId: 'post-moq-negotiation-desc',
    imgId: 'blog-img-moq-negotiation-j1k2l3',
    slug: 'how-to-negotiate-moq-with-chinese-suppliers',
    category: 'Negotiation',
    readTime: '5 min read',
    date: 'June 18, 2026',
    title: 'How to Negotiate Lower MOQs with Chinese Manufacturers',
    excerpt: 'Minimum order quantities can be a barrier for small and medium buyers. These practical strategies can help you negotiate lower MOQs without damaging your supplier relationship.',
  },
  {
    id: 'post-factory-audit',
    titleId: 'post-factory-audit-title',
    descId: 'post-factory-audit-desc',
    imgId: 'blog-img-factory-audit-m4n5o6',
    slug: 'what-happens-during-a-factory-audit',
    category: 'Factory Audit',
    readTime: '6 min read',
    date: 'June 5, 2026',
    title: 'What Happens During a Factory Audit in China?',
    excerpt: 'A factory audit is more than a site visit. This article walks through what auditors examine, what red flags to watch for, and how to interpret an audit report.',
  },
  {
    id: 'post-sourcing-agent',
    titleId: 'post-sourcing-agent-title',
    descId: 'post-sourcing-agent-desc',
    imgId: 'blog-img-sourcing-agent-p7q8r9',
    slug: 'do-you-need-a-china-sourcing-agent',
    category: 'Sourcing Strategy',
    readTime: '5 min read',
    date: 'May 22, 2026',
    title: 'Do You Need a China Sourcing Agent? 5 Signs the Answer Is Yes',
    excerpt: 'Sourcing directly from Chinese manufacturers can work well — until it doesn\'t. Here are five clear signs that working with a professional sourcing agent will save you time, money, and risk.',
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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Sourcing Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice for buyers importing from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gray-100">
                  <img
                    alt={featured.title}
                    data-strk-img-id={featured.imgId}
                    data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-navy-50 text-navy text-xs font-semibold px-2.5 py-1 rounded-full">{featured.category}</span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                    </span>
                  </div>
                  <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p id={featured.descId} className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{featured.date}</span>
                    <Link
                      to={`/blog/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-navy-dark transition-colors"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <SectionHeader
            eyebrow="Latest Articles"
            title="More Sourcing Guides"
            subtitle="Practical advice to help you import from China more effectively."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-navy-50 text-navy text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-navy-dark transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have a Sourcing Question?</h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to answer questions about sourcing from China — no obligation.
          </p>
          <CTAButton to="/contact" variant="primary">Contact Our Team</CTAButton>
        </div>
      </section>
    </div>
  );
}
