import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify a Chinese Supplier: An 8-Point Checklist',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing your first order. From business license checks to on-site audits — protect your business from scams and unreliable factories.',
    author: 'SSourcing Team',
    date: '2026-07-15',
    category: 'Supplier Verification',
    titleId: 'blog-title-supplier-verification-guide',
    descId: 'blog-desc-supplier-verification-guide',
    imgId: 'blog-img-supplier-verification-guide-a1b2',
  },
  {
    id: 'incoterms-explained',
    title: 'Incoterms 2020 Explained: FOB, CIF, EXW and What They Mean for Importers',
    excerpt: 'A practical guide to Incoterms for buyers importing from China. Understand FOB, CIF, EXW, DDP and choose the right terms for your shipment to avoid unexpected costs and risks.',
    author: 'SSourcing Team',
    date: '2026-07-08',
    category: 'Shipping & Logistics',
    titleId: 'blog-title-incoterms-explained',
    descId: 'blog-desc-incoterms-explained',
    imgId: 'blog-img-incoterms-explained-c3d4',
  },
  {
    id: 'qc-inspection',
    title: 'Quality Control in China: AQL Standards and Inspection Types',
    excerpt: 'Everything you need to know about quality control inspections in China — AQL sampling standards, inspection types (pre-production, DUPRO, FRI), and how to set acceptable quality levels.',
    author: 'SSourcing Team',
    date: '2026-06-28',
    category: 'Quality Control',
    titleId: 'blog-title-qc-inspection',
    descId: 'blog-desc-qc-inspection',
    imgId: 'blog-img-qc-inspection-e5f6',
  },
  {
    id: 'sourcing-trade-fairs',
    title: 'Top China Trade Fairs for International Buyers in 2026',
    excerpt: 'A curated calendar of the most important trade fairs in China for international buyers — Canton Fair, Yiwu Fair, and industry-specific exhibitions across electronics, hardware, textiles, and more.',
    author: 'SSourcing Team',
    date: '2026-06-20',
    category: 'Sourcing Strategy',
    titleId: 'blog-title-sourcing-trade-fairs',
    descId: 'blog-desc-sourcing-trade-fairs',
    imgId: 'blog-img-sourcing-trade-fairs-g7h8',
  },
  {
    id: 'avoid-sourcing-mistakes',
    title: '5 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'From skipping factory audits to ignoring cultural differences — learn the most common mistakes importers make when sourcing from China and practical strategies to avoid them.',
    author: 'SSourcing Team',
    date: '2026-06-10',
    category: 'Sourcing Strategy',
    titleId: 'blog-title-avoid-sourcing-mistakes',
    descId: 'blog-desc-avoid-sourcing-mistakes',
    imgId: 'blog-img-avoid-sourcing-mistakes-i9j0',
  },
  {
    id: 'product-development',
    title: 'From Design to Production: OEM Product Development in China',
    excerpt: 'A step-by-step guide to developing custom products in China — design for manufacturing, prototyping, tooling, and scaling from sample to mass production.',
    author: 'SSourcing Team',
    date: '2026-05-25',
    category: 'Product Development',
    titleId: 'blog-title-product-development',
    descId: 'blog-desc-product-development',
    imgId: 'blog-img-product-development-k1l2',
  },
];

const categories = ['All', 'Sourcing Strategy', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Product Development'];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const filtered = activeCategory === 'All' ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Insights, guides, and practical advice on sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    alt={article.title}
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.descId}] [${article.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 id={article.titleId} className="text-lg font-semibold text-brand-900 mb-2 leading-snug">
                    {article.title}
                  </h2>
                  <p id={article.descId} className="text-sm text-slate-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
            Have Questions About Sourcing?
          </h2>
          <p className="text-slate-600 mb-8">
            Our team is happy to answer your questions and help you navigate the sourcing process.
          </p>
          <Link to="/contact" className="btn-accent gap-2 text-lg px-8 py-3.5">
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
