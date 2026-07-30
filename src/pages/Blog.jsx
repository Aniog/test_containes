import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and third-party verification services.',
    date: 'June 12, 2024',
    readTime: '8 min read',
    titleId: 'blog-sv-title',
    descId: 'blog-sv-desc',
    imgId: 'blog-sv-img-a1b2c3',
  },
  {
    id: 'quality-inspection-types',
    category: 'Quality Control',
    title: 'The 4 Types of Quality Inspection in China (And When to Use Each)',
    excerpt: 'Not all quality inspections are the same. Learn the difference between pre-production, in-line, pre-shipment, and container loading inspections — and how to decide which ones your order needs.',
    date: 'May 28, 2024',
    readTime: '6 min read',
    titleId: 'blog-qi-title',
    descId: 'blog-qi-desc',
    imgId: 'blog-qi-img-d4e5f6',
  },
  {
    id: 'sea-freight-guide',
    category: 'Shipping & Logistics',
    title: 'Sea Freight from China: A Practical Guide for First-Time Importers',
    excerpt: 'Sea freight is the most cost-effective way to ship large orders from China. This guide explains FCL vs. LCL, Incoterms, transit times, and what to expect at customs.',
    date: 'May 10, 2024',
    readTime: '10 min read',
    titleId: 'blog-sf-title',
    descId: 'blog-sf-desc',
    imgId: 'blog-sf-img-g7h8i9',
  },
  {
    id: 'oem-private-label',
    category: 'OEM & Private Label',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling from China is a proven strategy for building a product brand. This article walks through the process from product selection to branded packaging and your first shipment.',
    date: 'April 22, 2024',
    readTime: '9 min read',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
    imgId: 'blog-oem-img-j1k2l3',
  },
  {
    id: 'canton-fair-guide',
    category: 'Trade Shows',
    title: 'Canton Fair 2024: What Buyers Need to Know',
    excerpt: 'The Canton Fair is the world\'s largest trade fair and a key sourcing event for global buyers. Here\'s how to prepare, what to look for, and how to follow up effectively after the fair.',
    date: 'April 5, 2024',
    readTime: '7 min read',
    titleId: 'blog-cf-title',
    descId: 'blog-cf-desc',
    imgId: 'blog-cf-img-m4n5o6',
  },
  {
    id: 'payment-terms-china',
    category: 'Payments & Contracts',
    title: 'Payment Terms When Buying from China: T/T, L/C, and Trade Assurance Explained',
    excerpt: 'Understanding payment terms is critical when sourcing from China. This guide explains the most common payment methods, their risks, and how to protect yourself as a buyer.',
    date: 'March 18, 2024',
    readTime: '7 min read',
    titleId: 'blog-pt-title',
    descId: 'blog-pt-desc',
    imgId: 'blog-pt-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'OEM & Private Label', 'Trade Shows', 'Payments & Contracts'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Sourcing Knowledge</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Blog
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice for global buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-brand-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-3 py-1 rounded-full">{featured.category}</span>
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Featured</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">{featured.title}</h2>
                <p id={featured.descId} className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-red transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-brand-bg pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, title, excerpt, date, readTime, imgId, titleId, descId }) => (
              <article key={id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{category}</span>
                  </div>
                  <h3 id={titleId} className="text-brand-dark font-bold text-base mb-2 leading-snug group-hover:text-brand-blue transition-colors">
                    {title}
                  </h3>
                  <p id={descId} className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span>{date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${id}`}
                      className="text-brand-blue text-xs font-semibold hover:text-brand-red transition-colors flex items-center gap-1"
                    >
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
      <section className="bg-brand-blue py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-100 mb-8">
            Put our knowledge to work for your business. Get a free sourcing consultation today.
          </p>
          <CTAButton to="/contact" variant="primary" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
