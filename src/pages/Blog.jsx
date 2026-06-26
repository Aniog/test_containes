import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const posts = [
  {
    id: 'post-1',
    titleId: 'post-title-1',
    descId: 'post-desc-1',
    imgId: 'blog-img-1-a1b2c3',
    category: 'Supplier Sourcing',
    date: 'June 10, 2026',
    readTime: '6 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with a new Chinese supplier carries real risk. Here\'s a practical checklist for verifying a supplier\'s legitimacy, capabilities, and quality systems before you commit.',
  },
  {
    id: 'post-2',
    titleId: 'post-title-2',
    descId: 'post-desc-2',
    imgId: 'blog-img-2-d4e5f6',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '5 min read',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    excerpt: 'A pre-shipment inspection is one of the most cost-effective ways to protect your order. We explain what it covers, how it works, and when to use it.',
  },
  {
    id: 'post-3',
    titleId: 'post-title-3',
    descId: 'post-desc-3',
    imgId: 'blog-img-3-g7h8i9',
    category: 'Shipping',
    date: 'May 15, 2026',
    readTime: '7 min read',
    title: 'FOB vs CIF vs EXW: Which Incoterm Should You Use?',
    excerpt: 'Choosing the right Incoterm affects your costs, risks, and responsibilities. We break down the three most common terms used in China trade and help you decide which is right for your situation.',
  },
  {
    id: 'post-4',
    titleId: 'post-title-4',
    descId: 'post-desc-4',
    imgId: 'blog-img-4-j1k2l3',
    category: 'Factory Audit',
    date: 'April 30, 2026',
    readTime: '8 min read',
    title: 'What Happens During a Factory Audit in China?',
    excerpt: 'A factory audit is more than a factory tour. We explain what our auditors look for, what documents they review, and what a typical audit report contains.',
  },
  {
    id: 'post-5',
    titleId: 'post-title-5',
    descId: 'post-desc-5',
    imgId: 'blog-img-5-m4n5o6',
    category: 'Compliance',
    date: 'April 12, 2026',
    readTime: '6 min read',
    title: 'CE Marking for Products Imported from China: A Practical Guide',
    excerpt: 'If you\'re importing products into the EU from China, CE marking is often mandatory. We explain what it means, which products need it, and how to get it.',
  },
  {
    id: 'post-6',
    titleId: 'post-title-6',
    descId: 'post-desc-6',
    imgId: 'blog-img-6-p7q8r9',
    category: 'Sourcing Tips',
    date: 'March 25, 2026',
    readTime: '5 min read',
    title: '5 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'After working with hundreds of buyers, we\'ve seen the same mistakes come up again and again. Here are the five most common — and how to avoid them.',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping', 'Factory Audit', 'Compliance', 'Sourcing Tips'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Blog
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides, tips, and insights for global buyers sourcing from China.
              Written by our team of sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-brand-navy hover:bg-brand-blue/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-brand-light rounded-2xl overflow-hidden border border-gray-100">
              <div className="h-64 lg:h-auto bg-brand-light overflow-hidden">
                <img
                  alt={posts[0].title}
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-blue text-white text-xs font-semibold px-2 py-1 rounded">Featured</span>
                  <span className="text-brand-blue text-xs font-semibold">{posts[0].category}</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-brand-navy mb-3">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-brand-gray text-sm leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-brand-gray mb-5">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-brand-light overflow-hidden">
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
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-brand-blue text-xs font-semibold">{post.category}</span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-brand-navy text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-brand-gray text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-brand-gray">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="text-brand-blue text-xs font-semibold hover:text-brand-sky transition-colors flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-brand-gray mb-6">
            Subscribe to our newsletter for practical China sourcing guides, industry updates, and supplier tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button
              type="button"
              className="bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
