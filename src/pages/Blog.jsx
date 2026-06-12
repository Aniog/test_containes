import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock } from 'lucide-react';
import { format } from 'date-fns';
import CTABanner from '../components/layout/CTABanner';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and third-party verification services.',
    date: '2026-05-20',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'quality-inspection-aql',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling in Pre-Shipment Inspections',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Learn how it works, what the numbers mean, and how to choose the right AQL level for your product.',
    date: '2026-05-05',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-freight-guide',
    category: 'Shipping',
    title: 'Sea Freight from China: FCL vs LCL — Which Is Right for Your Order?',
    excerpt: 'Full container load (FCL) and less-than-container load (LCL) each have advantages depending on your order volume, timeline, and budget. Here is how to decide.',
    date: '2026-04-18',
    readTime: '7 min read',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the mistakes that cost importers time and money — and how to avoid them.',
    date: '2026-04-02',
    readTime: '9 min read',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-mistakes-img-j1k2l3',
  },
  {
    id: 'product-certifications',
    category: 'Compliance',
    title: 'CE, FCC, RoHS: Which Certifications Does Your Product Need?',
    excerpt: 'Selling electronics or consumer goods in the EU, US, or other regulated markets? This guide explains the most common product certifications and how to obtain them from Chinese manufacturers.',
    date: '2026-03-15',
    readTime: '10 min read',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
    imgId: 'blog-cert-img-m4n5o6',
  },
  {
    id: 'negotiating-with-suppliers',
    category: 'Sourcing Tips',
    title: 'How to Negotiate Price and Terms with Chinese Suppliers',
    excerpt: 'Effective negotiation with Chinese manufacturers requires understanding their cost structure, building rapport, and knowing which terms are negotiable. Here is a practical framework.',
    date: '2026-03-01',
    readTime: '7 min read',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
    imgId: 'blog-negotiate-img-p7q8r9',
  },
];

const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Supplier Verification', 'Shipping', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Sourcing Insights</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Practical guides and industry insights for buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gray-100 overflow-hidden">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">{posts[0].category}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {posts[0].readTime}
                  </span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-text-dark mb-4">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-gray-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{format(new Date(posts[0].date), 'MMMM d, yyyy')}</span>
                  <Link to={`/blog/${posts[0].id}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-text-dark mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{format(new Date(post.date), 'MMM d, yyyy')}</span>
                    <Link to={`/blog/${post.id}`} className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer questions about sourcing from China — no obligation."
        buttonText="Contact Our Team"
      />
    </div>
  );
}
