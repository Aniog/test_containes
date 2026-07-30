import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionLabel from '@/components/SectionLabel';

const posts = [
  {
    id: 'post-supplier-verification',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common mistakes first-time importers make. Here\'s a practical checklist for verifying Chinese manufacturers before you commit.',
    date: 'July 15, 2026',
    readTime: '7 min read',
    titleId: 'blog-post1-title',
    descId: 'blog-post1-desc',
    imgId: 'blog-post1-img-a1b2c3',
  },
  {
    id: 'post-qc-inspection',
    category: 'Quality Control',
    title: 'Pre-Shipment Inspection: What It Is and Why Every Importer Needs It',
    excerpt: 'A pre-shipment inspection is your last line of defense before goods leave China. This guide explains what inspectors check, how AQL sampling works, and what to do if problems are found.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    titleId: 'blog-post2-title',
    descId: 'blog-post2-desc',
    imgId: 'blog-post2-img-d4e5f6',
  },
  {
    id: 'post-incoterms',
    category: 'Shipping & Logistics',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This plain-English guide explains the most common shipping terms used in China trade and when to use each one.',
    date: 'June 28, 2026',
    readTime: '8 min read',
    titleId: 'blog-post3-title',
    descId: 'blog-post3-desc',
    imgId: 'blog-post3-img-g7h8i9',
  },
  {
    id: 'post-private-label',
    category: 'Private Label',
    title: 'Starting a Private Label Business with Chinese Manufacturers: A Step-by-Step Guide',
    excerpt: 'Private labeling from China is one of the most accessible ways to build a product brand. This guide walks you through the process from product selection to your first shipment.',
    date: 'June 18, 2026',
    readTime: '10 min read',
    titleId: 'blog-post4-title',
    descId: 'blog-post4-desc',
    imgId: 'blog-post4-img-j1k2l3',
  },
  {
    id: 'post-moq',
    category: 'Sourcing Tips',
    title: 'How to Negotiate MOQ with Chinese Suppliers (Without Losing the Deal)',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Here are practical strategies for negotiating lower MOQs with Chinese manufacturers while maintaining a good supplier relationship.',
    date: 'June 5, 2026',
    readTime: '5 min read',
    titleId: 'blog-post5-title',
    descId: 'blog-post5-desc',
    imgId: 'blog-post5-img-m4n5o6',
  },
  {
    id: 'post-sourcing-agent',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company vs. Direct Factory: Which Is Right for You?',
    excerpt: 'Each sourcing channel has different trade-offs in terms of price, risk, and control. This comparison helps you decide which approach makes the most sense for your business and product type.',
    date: 'May 22, 2026',
    readTime: '7 min read',
    titleId: 'blog-post6-title',
    descId: 'blog-post6-desc',
    imgId: 'blog-post6-img-p7q8r9',
  },
];

export default function BlogPage() {
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
      <section className="bg-navy-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel className="text-red-400">Sourcing Insights</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Practical guides, tips, and insights for global buyers sourcing products from China. No fluff — just actionable information.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Featured Article</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">{featured.category}</span>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mt-4 mb-4">{featured.title}</h2>
              <p id={featured.descId} className="text-slate-600 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
              </div>
              <CTAButton to="/blog" variant="secondary" showArrow>
                Read Article
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-widest">{post.category}</span>
                  <h3 id={post.titleId} className="text-navy-900 font-bold text-base mt-2 mb-3 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Sourcing Question?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Our team is happy to answer questions about sourcing from China. Get in touch for a free consultation.
          </p>
          <CTAButton to="/contact" className="text-base px-8 py-4">
            Contact Our Team
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
