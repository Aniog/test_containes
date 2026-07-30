import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const posts = [
  {
    id: 'supplier-verification-guide',
    titleId: 'blog-post1-title',
    descId: 'blog-post1-desc',
    imgId: 'blog-img-post1-a1b2c3',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common and costly mistakes importers make. This guide covers the key steps to verify a supplier\'s legitimacy before committing.',
    date: 'July 15, 2026',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 'aql-inspection-explained',
    titleId: 'blog-post2-title',
    descId: 'blog-post2-desc',
    imgId: 'blog-img-post2-d4e5f6',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Should Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Understanding how it works helps you set the right inspection criteria for your products.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 'sea-vs-air-freight',
    titleId: 'blog-post3-title',
    descId: 'blog-post3-desc',
    imgId: 'blog-img-post3-g7h8i9',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'Choosing between sea and air freight affects your cost, lead time, and cash flow. This article breaks down the key factors to consider when shipping goods from China.',
    date: 'June 28, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'china-sourcing-mistakes',
    titleId: 'blog-post4-title',
    descId: 'blog-post4-desc',
    imgId: 'blog-img-post4-j1k2l3',
    category: 'Sourcing Tips',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the mistakes that cost importers time and money — and how to avoid them.',
    date: 'June 18, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'private-label-china',
    titleId: 'blog-post5-title',
    descId: 'blog-post5-desc',
    imgId: 'blog-img-post5-m4n5o6',
    category: 'Private Label',
    title: 'A Practical Guide to Private Label Manufacturing in China',
    excerpt: 'Private labeling in China can be highly profitable, but it requires careful planning. This guide covers everything from finding a manufacturer to protecting your brand.',
    date: 'June 5, 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'incoterms-guide',
    titleId: 'blog-post6-title',
    descId: 'blog-post6-desc',
    imgId: 'blog-img-post6-p7q8r9',
    category: 'Shipping',
    title: 'Incoterms Explained for China Importers: FOB, CIF, EXW and More',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the journey. Understanding them is essential for every importer.',
    date: 'May 22, 2026',
    readTime: '6 min read',
    featured: false,
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-red-300 text-sm font-semibold uppercase tracking-widest mb-4">Blog & Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Practical guides, tips, and industry knowledge for businesses importing from China. Written by our sourcing team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-light-blue rounded-2xl overflow-hidden border border-border">
                <div className="h-64 lg:h-auto bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={featured.imgId}
                    data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{featured.category}</span>
                  </div>
                  <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{featured.title}</h2>
                  <p id={featured.descId} className="text-text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-text-muted text-sm mb-6">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                  </div>
                  <Link to={`/blog/${featured.id}`} className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Post Grid */}
          <SectionHeader eyebrow="Latest Articles" title="More Sourcing Resources" center={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
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
                  <span className="inline-flex items-center gap-1 bg-light-blue text-primary text-xs font-medium px-2 py-1 rounded-md mb-3">
                    <Tag className="w-3 h-3" />{post.category}
                  </span>
                  <h3 id={post.titleId} className="font-bold text-text-dark text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-text-muted text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Have a Sourcing Project in Mind?</h2>
          <p className="text-text-muted text-lg mb-8">
            Skip the research — contact us directly and we'll handle the sourcing for you.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
