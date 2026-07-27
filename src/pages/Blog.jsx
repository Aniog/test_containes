import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'post-1',
    titleId: 'post-title-1',
    descId: 'post-desc-1',
    imgId: 'post-img-1-a1b2c3',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common mistakes importers make. Here is a practical checklist to protect yourself.',
    readTime: '6 min read',
    date: 'July 15, 2026',
    featured: true,
  },
  {
    id: 'post-2',
    titleId: 'post-title-2',
    descId: 'post-desc-2',
    imgId: 'post-img-2-d4e5f6',
    category: 'Quality Control',
    title: 'AQL Sampling Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by QC inspectors worldwide. Understanding it helps you set realistic quality expectations and catch problems early.',
    readTime: '8 min read',
    date: 'July 8, 2026',
    featured: false,
  },
  {
    id: 'post-3',
    titleId: 'post-title-3',
    descId: 'post-desc-3',
    imgId: 'post-img-3-g7h8i9',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight from China: A Cost-Benefit Guide',
    excerpt: 'Choosing the right shipping method can significantly impact your landed cost and delivery timeline. This guide breaks down the trade-offs for different product types and order sizes.',
    readTime: '7 min read',
    date: 'June 30, 2026',
    featured: false,
  },
  {
    id: 'post-4',
    titleId: 'post-title-4',
    descId: 'post-desc-4',
    imgId: 'post-img-4-j1k2l3',
    category: 'Sourcing Strategy',
    title: 'Trading Company vs Factory: Which Should You Buy From?',
    excerpt: 'Both trading companies and factories have their place in China sourcing. The right choice depends on your order size, product complexity, and how much control you need.',
    readTime: '5 min read',
    date: 'June 22, 2026',
    featured: false,
  },
  {
    id: 'post-5',
    titleId: 'post-title-5',
    descId: 'post-desc-5',
    imgId: 'post-img-5-m4n5o6',
    category: 'Quality Control',
    title: 'Pre-Shipment Inspection: What Gets Checked and Why It Matters',
    excerpt: 'A pre-shipment inspection is your last line of defense before goods leave China. Here is exactly what our inspectors check and how to read an inspection report.',
    readTime: '6 min read',
    date: 'June 14, 2026',
    featured: false,
  },
  {
    id: 'post-6',
    titleId: 'post-title-6',
    descId: 'post-desc-6',
    imgId: 'post-img-6-p7q8r9',
    category: 'Sourcing Strategy',
    title: 'How to Write a Product Brief That Gets Accurate Quotes from Chinese Factories',
    excerpt: 'Vague product briefs lead to inaccurate quotes and misaligned expectations. This template shows you exactly what information to include when approaching Chinese manufacturers.',
    readTime: '5 min read',
    date: 'June 5, 2026',
    featured: false,
  },
];

const categories = ['All', 'Sourcing Strategy', 'Supplier Verification', 'Quality Control', 'Shipping'];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== 'All');

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Insights & Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers
              working with Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && featured && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden bg-gray-100 h-72 lg:h-96">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-china-red text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                  <span className="text-xs font-medium text-navy bg-blue-50 px-3 py-1 rounded-full">{featured.category}</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <Link to="/blog" className="btn-primary">
                  Read Article <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'All' ? posts.filter((p) => !p.featured) : filtered).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-navy bg-blue-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    <span>{post.date}</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Sourcing Insights by Email</h2>
          <p className="text-gray-500 mb-6">
            Practical guides and industry updates for importers sourcing from China. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
            />
            <button className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
