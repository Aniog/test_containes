import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';

const posts = [
  {
    id: 'blog-factory-audit',
    titleId: 'blog-title-factory-audit',
    descId: 'blog-desc-factory-audit',
    imgId: 'blog-img-factory-audit-a1b2c3',
    category: 'Factory Verification',
    title: 'What to Check During a China Factory Audit',
    excerpt: 'A factory audit is one of the most important steps in the sourcing process. Here\'s what our team looks for when visiting a Chinese manufacturer for the first time.',
    date: '2026-06-10',
    readTime: '6 min read',
  },
  {
    id: 'blog-aql-inspection',
    titleId: 'blog-title-aql-inspection',
    descId: 'blog-desc-aql-inspection',
    imgId: 'blog-img-aql-inspection-d4e5f6',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling in Pre-Shipment Inspections',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by inspectors to determine how many units to check and what defect rate is acceptable. This guide explains how it works in practice.',
    date: '2026-05-28',
    readTime: '8 min read',
  },
  {
    id: 'blog-moq-negotiation',
    titleId: 'blog-title-moq-negotiation',
    descId: 'blog-desc-moq-negotiation',
    imgId: 'blog-img-moq-negotiation-g7h8i9',
    category: 'Supplier Negotiation',
    title: 'How to Negotiate MOQ with Chinese Suppliers',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
    date: '2026-05-14',
    readTime: '5 min read',
  },
  {
    id: 'blog-sea-freight',
    titleId: 'blog-title-sea-freight',
    descId: 'blog-desc-sea-freight',
    imgId: 'blog-img-sea-freight-j1k2l3',
    category: 'Shipping',
    title: 'FCL vs LCL: Choosing the Right Sea Freight Option',
    excerpt: 'Full container load (FCL) and less-than-container load (LCL) each have advantages depending on your shipment volume and timeline. Here\'s how to decide which is right for your order.',
    date: '2026-04-30',
    readTime: '7 min read',
  },
  {
    id: 'blog-certifications',
    titleId: 'blog-title-certifications',
    descId: 'blog-desc-certifications',
    imgId: 'blog-img-certifications-m4n5o6',
    category: 'Compliance',
    title: 'CE, FCC, RoHS: Which Certifications Does Your Product Need?',
    excerpt: 'Importing products without the right certifications can result in customs delays, fines, or product recalls. This guide covers the most common certifications required for products imported from China.',
    date: '2026-04-15',
    readTime: '9 min read',
  },
  {
    id: 'blog-trading-vs-factory',
    titleId: 'blog-title-trading-vs-factory',
    descId: 'blog-desc-trading-vs-factory',
    imgId: 'blog-img-trading-vs-factory-p7q8r9',
    category: 'Supplier Selection',
    title: 'Trading Company vs. Factory: Which Should You Buy From?',
    excerpt: 'Both trading companies and factories have their place in China sourcing. Understanding the differences helps you choose the right type of supplier for your product and order size.',
    date: '2026-03-28',
    readTime: '6 min read',
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

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      <PageHero
        title="China Sourcing Blog"
        subtitle="Practical guides, industry insights, and sourcing tips for overseas buyers importing from China."
        breadcrumb="Blog"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="bg-[#f4f6f9] rounded-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto bg-[#e8f0fb] overflow-hidden">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                  <span className="bg-[#c0392b] text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-4">{featured.title}</h2>
                <p id={featured.descId} className="text-[#64748b] leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-[#64748b] text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:underline"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[3x2] bg-[#e8f0fb] overflow-hidden">
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
                  <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                  <h3 id={post.titleId} className="text-base font-semibold text-[#1a202c] mt-3 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-[#64748b] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-[#64748b] text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer questions about sourcing from China. Contact us for a free consultation."
        buttonText="Contact Our Team"
      />
    </div>
  );
};

export default Blog;
