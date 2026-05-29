import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '../components/shared/CTABanner';

const posts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese manufacturer, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    category: 'Supplier Verification',
    readTime: '8 min read',
    date: 'May 15, 2025',
    imgId: 'blog-img-1a2b3c',
    imgQuery: '[blog-title-1] supplier verification factory audit China business',
  },
  {
    id: 2,
    title: 'AQL Inspection Standards Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Learn how AQL sampling works, what the numbers mean, and how to set the right inspection level for your products.',
    category: 'Quality Control',
    readTime: '10 min read',
    date: 'April 28, 2025',
    imgId: 'blog-img-2b3c4d',
    imgQuery: '[blog-title-2] quality inspection AQL standard products China factory',
  },
  {
    id: 3,
    title: 'Sea Freight vs Air Freight from China: A Practical Cost Comparison',
    excerpt: 'Choosing between sea and air freight depends on more than just price. This article breaks down the real cost differences, transit times, and when each option makes sense for different types of shipments.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'April 10, 2025',
    imgId: 'blog-img-3c4d5e',
    imgQuery: '[blog-title-3] sea freight air freight shipping China logistics container',
  },
  {
    id: 4,
    title: 'Canton Fair 2025: What to Expect and How to Prepare',
    excerpt: 'The Canton Fair remains one of the most important sourcing events in the world. Here\'s what to expect at the 2025 edition, how to prepare your product list, and how to make the most of your time on the floor.',
    category: 'Trade Shows',
    readTime: '6 min read',
    date: 'March 22, 2025',
    imgId: 'blog-img-4d5e6f',
    imgQuery: '[blog-title-4] Canton Fair trade show China sourcing exhibition',
  },
  {
    id: 5,
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities with Chinese Suppliers',
    excerpt: 'Minimum order quantities are one of the biggest barriers for small importers. This guide explains why MOQs exist, how to negotiate them down, and what alternatives are available for smaller orders.',
    category: 'Sourcing Tips',
    readTime: '9 min read',
    date: 'March 5, 2025',
    imgId: 'blog-img-5e6f7g',
    imgQuery: '[blog-title-5] MOQ minimum order quantity negotiation China supplier',
  },
  {
    id: 6,
    title: 'CE Marking for Products Imported from China: A Step-by-Step Guide',
    excerpt: 'If you\'re importing products into the EU, CE marking is often mandatory. This guide explains which products require CE marking, how to get it, and what your Chinese supplier needs to provide.',
    category: 'Compliance',
    readTime: '11 min read',
    date: 'February 18, 2025',
    imgId: 'blog-img-6f7g8h',
    imgQuery: '[blog-title-6] CE marking compliance certification China import EU',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Trade Shows', 'Sourcing Tips', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Blog | China Sourcing Tips & Guides | SSourcing China';
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="container-xl text-center">
          <p className="section-label text-amber-400 mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Guides & Insights
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides, industry updates, and sourcing tips from our team on the ground in China.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 py-4 sticky top-16 z-30">
        <div className="container-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  cat === 'All'
                    ? 'bg-[#1A3C6E] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-white">
        <div className="container-xl">
          {/* Featured post */}
          <div className="mb-10">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={posts[0].imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
                    <span className="text-slate-400 text-xs">Featured</span>
                  </div>
                  <h2 id="blog-title-1" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">{posts[0].title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                    <span>{posts[0].date}</span>
                  </div>
                  <Link to="/blog" className="btn-primary self-start">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <article key={post.id} className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="rounded-lg overflow-hidden mb-5 h-44">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={post.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                </div>
                <h3 id={`blog-title-${i + 2}`} className="text-base font-bold text-slate-900 mb-2 leading-snug">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-gray">
        <div className="container-xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Get Sourcing Tips by Email</h2>
            <p className="text-slate-600 mb-6">Monthly guides, supplier market updates, and practical advice for importers.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer questions about sourcing from China — no obligation."
        ctaText="Contact Our Team"
        ctaPath="/contact"
      />
    </div>
  );
}
