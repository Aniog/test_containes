import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. This article explains how AQL sampling works, what the numbers mean, and how to choose the right level for your products.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping & Logistics',
    title: 'Sea Freight vs. Air Freight from China: A Practical Comparison',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This guide breaks down the cost, speed, and suitability of each option for different types of shipments.',
    date: 'June 28, 2026',
    readTime: '7 min read',
    imgId: 'blog-freight-img-g7h8i9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Many first-time importers make avoidable mistakes that cost time and money. From skipping factory audits to ignoring payment terms, this article covers the most common pitfalls and how to avoid them.',
    date: 'June 18, 2026',
    readTime: '9 min read',
    imgId: 'blog-mistakes-img-j1k2l3',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'ce-certification-guide',
    category: 'Compliance',
    title: 'CE Certification for Products Sourced from China: A Step-by-Step Guide',
    excerpt: 'If you\'re importing products into the EU, CE marking is often mandatory. This guide explains which products require CE certification, how the process works, and how to ensure your Chinese supplier can support it.',
    date: 'June 5, 2026',
    readTime: '10 min read',
    imgId: 'blog-ce-img-m4n5o6',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
  },
  {
    id: 'negotiating-with-factories',
    category: 'Sourcing Tips',
    title: 'How to Negotiate Effectively with Chinese Factories',
    excerpt: 'Negotiating with Chinese manufacturers requires understanding their business culture, pricing structure, and decision-making process. This article shares practical strategies for getting better prices without damaging the relationship.',
    date: 'May 22, 2026',
    readTime: '7 min read',
    imgId: 'blog-negotiate-img-p7q8r9',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
];

const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Supplier Verification', 'Shipping & Logistics', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Sourcing Knowledge
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice for global buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-darktext border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm mb-10">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-full">{featured.category}</span>
                  <span className="text-xs font-semibold text-primary bg-blue-50 px-2.5 py-1 rounded-full">Featured</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-3">{featured.title}</h2>
                <p id={featured.descId} className="text-muted leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted mb-5">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                  <h3 id={post.titleId} className="text-base font-semibold text-darktext mt-2 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Stay Informed</h2>
          <p className="text-blue-200 mb-6">Get practical China sourcing tips and industry updates delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg text-darktext text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="button"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#a93226] transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
