import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    titleId: 'blog-title-verify-supplier',
    descId: 'blog-desc-verify-supplier',
    featuredImgId: 'blog-img-verify-supplier-a1b2c3',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and third-party verification services.',
    date: '2026-06-15',
    readTime: '7 min read',
  },
  {
    id: 'aql-inspection-guide',
    titleId: 'blog-title-aql',
    descId: 'blog-desc-aql',
    featuredImgId: 'blog-img-aql-d4e5f6',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Learn how it works, what sampling levels to use, and how to interpret inspection results.',
    date: '2026-05-28',
    readTime: '9 min read',
  },
];

export default function BlogFeatured() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-12 bg-white border-b border-slate-200" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-6">Featured Articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((fp) => (
            <div key={fp.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={fp.title}
                  data-strk-img-id={fp.featuredImgId}
                  data-strk-img={`[${fp.descId}] [${fp.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{fp.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{fp.readTime}</span>
                  <span>{format(new Date(fp.date), 'MMM d, yyyy')}</span>
                </div>
                <h2 id={fp.titleId} className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{fp.title}</h2>
                <p id={fp.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{fp.excerpt}</p>
                <Link to={`/blog/${fp.id}`} className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
