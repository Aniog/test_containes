import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before committing to a Chinese manufacturer, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-06-10',
    readTime: '8 min read',
    imgId: 'blog-img-verify-a1b2c3',
    titleId: 'blog-title-verify',
    descId: 'blog-desc-verify',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used for pre-shipment inspections worldwide. Learn how it works, what sampling levels mean, and how to set the right AQL for your products.',
    date: '2026-05-28',
    readTime: '6 min read',
    imgId: 'blog-img-aql-d4e5f6',
    titleId: 'blog-title-aql',
    descId: 'blog-desc-aql',
  },
  {
    id: 'china-shipping-options',
    category: 'Shipping & Logistics',
    title: 'Sea vs. Air vs. Express: Choosing the Right Shipping Method from China',
    excerpt: 'Each shipping method has different cost, speed, and risk profiles. This guide helps you decide which option is right for your order size, timeline, and budget.',
    date: '2026-05-15',
    readTime: '7 min read',
    imgId: 'blog-img-shipping-g7h8i9',
    titleId: 'blog-title-shipping',
    descId: 'blog-desc-shipping',
  },
  {
    id: 'oem-private-label-china',
    category: 'OEM & Private Label',
    title: 'Starting a Private Label Business with Chinese Manufacturers: A Practical Guide',
    excerpt: 'Private labeling from China can be highly profitable, but it requires careful planning. This guide covers product selection, finding OEM factories, sample development, and brand compliance.',
    date: '2026-05-02',
    readTime: '10 min read',
    imgId: 'blog-img-oem-j1k2l3',
    titleId: 'blog-title-oem',
    descId: 'blog-desc-oem',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    category: 'Supplier Relations',
    title: 'How to Negotiate Effectively with Chinese Suppliers',
    excerpt: 'Negotiating with Chinese manufacturers requires understanding local business culture, knowing your leverage points, and communicating clearly. Here are practical strategies that work.',
    date: '2026-04-18',
    readTime: '9 min read',
    imgId: 'blog-img-negotiate-m4n5o6',
    titleId: 'blog-title-negotiate',
    descId: 'blog-desc-negotiate',
  },
  {
    id: 'common-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes Importers Make When Sourcing from China',
    excerpt: 'Many first-time importers make avoidable mistakes that cost time and money. From skipping factory audits to ignoring payment terms, here are the pitfalls to avoid.',
    date: '2026-04-05',
    readTime: '7 min read',
    imgId: 'blog-img-mistakes-p7q8r9',
    titleId: 'blog-title-mistakes',
    descId: 'blog-desc-mistakes',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Sourcing Insights</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and expert advice for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white border-b border-brand-border">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
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
            <div>
              <span className="bg-blue-50 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mt-3 mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-brand-muted leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-brand-muted mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map(({ id, category, title, excerpt, date, readTime, imgId, titleId, descId }) => (
              <article key={id} className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-blue-50 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                  <h3 id={titleId} className="text-lg font-bold text-brand-navy mt-3 mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-brand-muted">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${id}`}
                      className="text-brand-navy text-sm font-semibold flex items-center gap-1 hover:text-brand-red transition-colors"
                    >
                      Read <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for practical China sourcing guides and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
            <button className="bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
