import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'sourcing-guide-2026',
    title: 'The Complete Guide to Sourcing from China in 2026',
    excerpt: 'Everything you need to know about finding suppliers, negotiating prices, managing quality, and shipping your products from China this year.',
    author: 'SSourcing China Team',
    date: 'July 15, 2026',
    category: 'Sourcing Guide',
    imgId: 'blog-guide-2026-a1b2c3',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: 10 Things to Verify Before Placing an Order',
    excerpt: 'A comprehensive checklist for evaluating Chinese manufacturers, from business licenses to production capacity and quality management systems.',
    author: 'Li Wei, QC Manager',
    date: 'June 28, 2026',
    category: 'Quality Control',
    imgId: 'blog-audit-checklist-b2c3d4',
  },
  {
    id: 'shipping-costs',
    title: 'How to Reduce Shipping Costs When Importing from China',
    excerpt: 'Practical strategies for optimizing your logistics, choosing the right freight method, and reducing shipping expenses for your imports.',
    author: 'Zhang Ming, Logistics Lead',
    date: 'June 12, 2026',
    category: 'Logistics',
    imgId: 'blog-shipping-costs-c3d4e5',
  },
  {
    id: 'avoid-scams',
    title: 'How to Avoid Supplier Scams on Alibaba and B2B Platforms',
    excerpt: 'Red flags to watch for when sourcing online, verification techniques, and how to protect your business from fraudulent suppliers.',
    author: 'SSourcing China Team',
    date: 'May 25, 2026',
    category: 'Supplier Verification',
    imgId: 'blog-avoid-scams-d4e5f6',
  },
  {
    id: 'quality-inspection',
    title: 'AQL Inspection Standards: What Every Importer Should Know',
    excerpt: 'Understanding Acceptable Quality Level (AQL) standards, sampling methods, and how to define defect classifications for your products.',
    author: 'Li Wei, QC Manager',
    date: 'May 10, 2026',
    category: 'Quality Control',
    imgId: 'blog-aql-inspection-e5f6g7',
  },
  {
    id: 'incoterms',
    title: 'Incoterms Explained: FOB, CIF, EXW and What They Mean for Your Imports',
    excerpt: 'A clear explanation of common international trade terms and how to choose the right Incoterms for your China sourcing transactions.',
    author: 'Zhang Ming, Logistics Lead',
    date: 'April 22, 2026',
    category: 'Logistics',
    imgId: 'blog-incoterms-f6g7h8',
  },
  {
    id: 'product-development',
    title: 'OEM vs ODM Manufacturing: Which Is Right for Your Product?',
    excerpt: 'Understanding the differences between OEM and ODM manufacturing in China, and how to choose the best approach for your business.',
    author: 'SSourcing China Team',
    date: 'April 8, 2026',
    category: 'Product Development',
    imgId: 'blog-oem-odm-g7h8i9',
  },
  {
    id: 'trade-shows',
    title: 'Top China Trade Shows for Importers in 2026',
    excerpt: 'A calendar of the most important trade fairs in China for sourcing products across electronics, machinery, textiles, and more.',
    author: 'SSourcing China Team',
    date: 'March 20, 2026',
    category: 'Industry Events',
    imgId: 'blog-trade-shows-h8i9j0',
  },
  {
    id: 'negotiation-tips',
    title: 'Price Negotiation Strategies with Chinese Suppliers',
    excerpt: 'Effective negotiation techniques that respect Chinese business culture while helping you achieve competitive pricing for your orders.',
    author: 'Li Wei, QC Manager',
    date: 'March 5, 2026',
    category: 'Sourcing Guide',
    imgId: 'blog-negotiation-i9j0k1',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, guides, and practical advice for sourcing from China
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                id={`blog-${post.id}`}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-navy-50 text-navy-600 font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h2
                    id={`blog-${post.id}-title`}
                    className="text-lg font-semibold text-navy-600 mb-2 leading-snug"
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </span>
                    <span className="text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors inline-flex items-center cursor-pointer">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest sourcing insights, tips, and industry updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-800 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}