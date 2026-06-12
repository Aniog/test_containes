import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    date: 'May 28, 2026',
    readTime: '7 min read',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-aa11',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    date: 'May 14, 2026',
    readTime: '9 min read',
    title: 'AQL Inspection Standards Explained for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for product inspections. Learn how AQL sampling works, what the numbers mean, and how to set the right inspection level for your products.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-bb22',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping & Logistics',
    date: 'April 30, 2026',
    readTime: '6 min read',
    title: 'Sea Freight vs Air Freight from China: Which Should You Choose?',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This article breaks down the cost, speed, and suitability of each option for different types of importers.',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-cc33',
  },
  {
    id: 'private-label-china-guide',
    category: 'Private Label',
    date: 'April 15, 2026',
    readTime: '10 min read',
    title: 'A Practical Guide to Private Label Manufacturing in China',
    excerpt: 'Private labeling in China can be highly profitable, but it requires careful planning. This guide covers how to find OEM factories, manage product development, and protect your brand.',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
    imgId: 'blog-privatelabel-img-dd44',
  },
  {
    id: 'incoterms-explained',
    category: 'Shipping & Logistics',
    date: 'March 28, 2026',
    readTime: '8 min read',
    title: 'Incoterms Explained: FOB, CIF, EXW and What They Mean for Buyers',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of delivery. Understanding them is essential for negotiating with Chinese suppliers.',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-ee55',
  },
  {
    id: 'product-compliance-china',
    category: 'Compliance',
    date: 'March 10, 2026',
    readTime: '8 min read',
    title: 'Product Compliance When Importing from China: CE, RoHS, FDA and More',
    excerpt: 'Importing products from China requires meeting the regulatory standards of your destination market. This article explains the most common certifications and how to ensure your products comply.',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
    imgId: 'blog-compliance-img-ff66',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Private Label', 'Compliance'];

const Blog = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              China Sourcing Blog
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-borderColor sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-bgLight text-textBody hover:bg-gray-100 border border-borderColor'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl border border-borderColor overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-primary text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-textDark mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-textBody text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-textMuted">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-textDark mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-textBody mb-6">
            Subscribe to our newsletter for practical guides on sourcing from China, quality control, and logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-borderColor text-textDark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
            />
            <button className="bg-primary hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-textMuted mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
