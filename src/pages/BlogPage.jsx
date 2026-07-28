import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to Verify a China Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese manufacturers before placing an order. From business license checks to on-site audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-4a8c2d',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'china-sourcing-costs-2026',
    title: 'China Sourcing Costs in 2026: What to Expect',
    excerpt: 'An overview of current sourcing costs from China including manufacturing, shipping, and agent fees. Plan your budget with realistic expectations.',
    category: 'Sourcing Costs',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-sourcing-costs-7b3e5f',
    titleId: 'blog-costs-title',
    descId: 'blog-costs-desc',
  },
  {
    id: 'quality-control-checklist',
    title: 'Quality Control Checklist for China Manufacturing',
    excerpt: 'A practical checklist for inspecting products manufactured in China. Use this before, during, and after production to ensure quality standards.',
    category: 'Quality Control',
    date: '2026-06-28',
    readTime: '10 min read',
    imgId: 'blog-qc-checklist-2d9f1a',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: FOB, CIF, DDP Explained',
    excerpt: 'Understanding international shipping terms is crucial for importing from China. We break down the most common Incoterms and what they mean for your costs.',
    category: 'Shipping',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-shipping-guide-6c4a8b',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'avoid-sourcing-scams',
    title: 'How to Avoid Common Sourcing Scams in China',
    excerpt: 'Protect yourself from trading companies posing as factories, fake certifications, and other common pitfalls when sourcing from China.',
    category: 'Risk Management',
    date: '2026-06-12',
    readTime: '9 min read',
    imgId: 'blog-avoid-scams-9e2d7c',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
  },
  {
    id: 'moq-negotiation-tips',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. Learn proven strategies to negotiate lower MOQs without compromising on quality.',
    category: 'Negotiation',
    date: '2026-06-05',
    readTime: '5 min read',
    imgId: 'blog-moq-negotiation-3f5b1e',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Guides</h1>
            <p className="text-lg text-slate-300 mb-8">
              Practical advice, industry insights, and step-by-step guides to help you source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden p-0 group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Updated on China Sourcing</h2>
          <p className="text-lg text-slate-600 mb-8">
            Get practical sourcing tips, industry updates, and exclusive guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
