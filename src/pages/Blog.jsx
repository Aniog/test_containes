import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-06-10',
    readTime: '8 min read',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Sampling Explained: What It Means for Your China Imports',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard methodology used in pre-shipment inspections. Here\'s what the numbers mean, how to choose the right AQL level, and what happens when goods fail.',
    date: '2026-05-28',
    readTime: '6 min read',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight from China: A Practical Comparison',
    excerpt: 'Choosing between sea and air freight depends on your product, timeline, and budget. This article breaks down the cost, speed, and suitability of each option for different types of importers.',
    date: '2026-05-14',
    readTime: '5 min read',
    imgId: 'blog-freight-img-g7h8i9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    title: 'Incoterms for China Imports: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the journey. For China imports, FOB is the most common — but it\'s not always the best choice.',
    date: '2026-04-30',
    readTime: '7 min read',
    imgId: 'blog-incoterms-img-j1k2l3',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'factory-audit-checklist',
    category: 'Factory Audit',
    title: 'Factory Audit Checklist: 12 Things to Check Before Approving a Supplier',
    excerpt: 'A factory audit is your best protection against unreliable suppliers. This checklist covers the 12 most important areas to assess during an on-site visit to a Chinese manufacturer.',
    date: '2026-04-15',
    readTime: '9 min read',
    imgId: 'blog-audit-img-m4n5o6',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'payment-terms-china',
    category: 'Procurement',
    title: 'Payment Terms When Buying from China: T/T, L/C, and Trade Assurance',
    excerpt: 'How you pay your Chinese supplier affects your risk exposure significantly. This article explains the most common payment methods, their pros and cons, and how to protect yourself.',
    date: '2026-03-28',
    readTime: '6 min read',
    imgId: 'blog-payment-img-p7q8r9',
    titleId: 'blog-payment-title',
    descId: 'blog-payment-desc',
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

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0d2b4e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">China Sourcing Blog</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#f4f6f9] rounded-2xl overflow-hidden border border-slate-200">
              <div className="h-72 lg:h-auto overflow-hidden">
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1a4f8a] text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                  <span className="bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-[#0d2b4e] mb-4 leading-tight">{featured.title}</h2>
                <p id={featured.descId} className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <Link to={`/blog/${featured.id}`} className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                  <h3 id={post.titleId} className="font-bold text-[#0d2b4e] mt-3 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-[#1a4f8a] text-sm font-medium hover:underline flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-[#f4f6f9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Stay Informed"
            heading="Get Sourcing Tips in Your Inbox"
            subtext="Practical guides and industry updates for buyers importing from China. No spam, unsubscribe anytime."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] bg-white"
            />
            <button className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap border-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
