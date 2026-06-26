import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    title: 'What Is AQL Inspection and Why Does It Matter for China Imports?',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used to determine how many defects are acceptable in a batch. Understanding it can save you from costly shipment rejections.',
    readTime: '6 min read',
    date: 'June 10, 2026',
    imgQuery: 'AQL quality inspection China factory products sampling',
  },
  {
    id: 'factory-audit-guide',
    category: 'Factory Verification',
    title: 'The Buyer\'s Guide to China Factory Audits: What to Check and Why',
    excerpt: 'A factory audit is your first line of defense against unreliable suppliers. This guide covers what a thorough audit should include and what red flags to watch for.',
    readTime: '8 min read',
    date: 'May 28, 2026',
    imgQuery: 'factory audit China manufacturing facility inspection checklist',
  },
  {
    id: 'shipping-incoterms',
    category: 'Shipping & Logistics',
    title: 'FOB vs. EXW vs. CIF: Which Incoterm Should You Use When Importing from China?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. Here\'s a practical breakdown of the most common shipping terms used in China trade.',
    readTime: '7 min read',
    date: 'May 15, 2026',
    imgQuery: 'shipping container port China export freight Incoterms logistics',
  },
  {
    id: 'supplier-verification',
    category: 'Supplier Sourcing',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Finding a supplier on Alibaba is easy. Verifying that they are legitimate, capable, and reliable is the hard part. Here\'s a step-by-step verification checklist.',
    readTime: '9 min read',
    date: 'April 30, 2026',
    imgQuery: 'China supplier verification business license factory check',
  },
  {
    id: 'private-label-china',
    category: 'Private Label',
    title: 'How to Start a Private Label Business Sourcing from China in 2026',
    excerpt: 'Private label sourcing from China remains one of the most effective ways to build a product brand. This guide walks through the process from product selection to first shipment.',
    readTime: '10 min read',
    date: 'April 12, 2026',
    imgQuery: 'private label product China factory branding packaging',
  },
  {
    id: 'canton-fair',
    category: 'Trade Shows',
    title: 'Canton Fair 2026: What Buyers Need to Know Before Attending',
    excerpt: 'The Canton Fair is the world\'s largest trade fair and a key sourcing event for global buyers. Here\'s how to prepare, what to bring, and how to make the most of your visit.',
    readTime: '7 min read',
    date: 'March 25, 2026',
    imgQuery: 'Canton Fair China trade show exhibition buyers suppliers',
  },
];

const categoryColors = {
  'Quality Control': 'bg-blue-50 text-[#1a4f8a]',
  'Factory Verification': 'bg-green-50 text-green-700',
  'Shipping & Logistics': 'bg-purple-50 text-purple-700',
  'Supplier Sourcing': 'bg-orange-50 text-[#e8621a]',
  'Private Label': 'bg-pink-50 text-pink-700',
  'Trade Shows': 'bg-yellow-50 text-yellow-700',
};

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
      <section className="bg-[#0d2340] py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">China Sourcing Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="section-container">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Featured Article</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                data-strk-img-id={`blog-featured-${featured.id}-ss`}
                data-strk-img={`[blog-featured-title] ${featured.imgQuery}`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] || 'bg-gray-100 text-gray-700'}`}>
                {featured.category}
              </span>
              <h2 id="blog-featured-title" className="text-2xl md:text-3xl font-bold text-[#0d2340] mt-3 mb-4">{featured.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-[#1a4f8a] hover:bg-[#0d2340] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 md:py-28 bg-[#f4f6f9]">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-[#0d2340] mb-10">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map(({ id, category, title, excerpt, readTime, date, imgQuery }) => (
              <article key={id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={`blog-img-${id}-ss`}
                    data-strk-img={`[blog-title-${id}] ${imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-700'}`}>
                    {category}
                  </span>
                  <h3 id={`blog-title-${id}`} className="text-base font-bold text-[#0d2340] mt-3 mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
                    <span>{date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto">
            Monthly insights on China sourcing, supplier management, and quality control — no spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8621a]"
            />
            <button className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
