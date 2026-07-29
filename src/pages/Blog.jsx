import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import CTABanner from '@/components/layout/CTABanner';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before committing to a Chinese manufacturer, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: 'July 15, 2026',
    readTime: '7 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'china-quality-inspection-guide',
    category: 'Quality Control',
    title: 'A Practical Guide to Pre-Shipment Inspection in China',
    excerpt: 'Pre-shipment inspection is one of the most effective ways to catch quality issues before goods leave China. Learn what inspectors check, how AQL sampling works, and when to use it.',
    date: 'July 8, 2026',
    readTime: '9 min read',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
    imgId: 'blog-psi-img-d4e5f6',
  },
  {
    id: 'incoterms-explained',
    category: 'Shipping & Logistics',
    title: 'Incoterms Explained for China Importers: FOB, CIF, EXW and More',
    excerpt: 'Choosing the right Incoterm affects your costs, risks, and responsibilities. This article explains the most common Incoterms used in China trade and which one is right for your situation.',
    date: 'June 28, 2026',
    readTime: '8 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'moq-negotiation-tips',
    category: 'Sourcing Strategy',
    title: '5 Ways to Negotiate Lower MOQs with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for smaller buyers. Here are practical strategies to negotiate lower MOQs without damaging your supplier relationship.',
    date: 'June 18, 2026',
    readTime: '6 min read',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-j1k2l3',
  },
  {
    id: 'private-label-china-guide',
    category: 'Private Label',
    title: 'How to Start a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling from China is a proven model for building a product brand. This guide walks through the process from product selection to branded packaging and first shipment.',
    date: 'June 5, 2026',
    readTime: '11 min read',
    titleId: 'blog-pl-title',
    descId: 'blog-pl-desc',
    imgId: 'blog-pl-img-m4n5o6',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Strategy',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Many first-time and experienced buyers make avoidable mistakes when sourcing from China. This article covers the most common pitfalls and how to avoid them.',
    date: 'May 22, 2026',
    readTime: '8 min read',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-mistakes-img-p7q8r9',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            China Sourcing Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers working with Chinese manufacturers.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-brand-light rounded-2xl overflow-hidden border border-gray-100">
            <div className="h-72 lg:h-full min-h-64 bg-gray-100">
              <img
                alt={posts[0].title}
                data-strk-img-id={posts[0].imgId}
                data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
                <span className="text-brand-gray text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {posts[0].readTime}
                </span>
              </div>
              <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">{posts[0].title}</h2>
              <p id={posts[0].descId} className="text-brand-gray leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-brand-gray text-sm">{posts[0].date}</span>
                <Link
                  to={`/blog/${posts[0].id}`}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors text-sm"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-brand-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-brand-gray text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-brand-navy mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-brand-gray text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-gray text-xs">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-blue text-sm font-semibold hover:text-brand-sky transition-colors flex items-center gap-1"
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

      <CTABanner />
    </div>
  );
};

export default Blog;
