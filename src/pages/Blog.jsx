import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'factory-audit-guide',
    category: 'Factory Verification',
    readTime: '8 min read',
    date: 'July 15, 2026',
    title: 'How to Audit a Chinese Factory: A Practical Guide for Importers',
    excerpt: 'Before placing a large order with a Chinese manufacturer, a factory audit is one of the most important steps you can take. This guide covers what to check, what questions to ask, and what red flags to watch for.',
    imgId: 'blog-factory-audit-img-a1b2c3',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    id: 'pre-shipment-inspection',
    category: 'Quality Control',
    readTime: '6 min read',
    date: 'July 8, 2026',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    excerpt: 'A pre-shipment inspection (PSI) is a quality check conducted at the factory before goods are loaded for shipping. Learn how PSI works, what inspectors check, and how to interpret inspection reports.',
    imgId: 'blog-psi-img-d4e5f6',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    id: 'china-sourcing-costs',
    category: 'Sourcing Strategy',
    readTime: '7 min read',
    date: 'June 28, 2026',
    title: 'Understanding the True Cost of Sourcing from China',
    excerpt: 'The factory price is just one part of the total landed cost. This article breaks down all the costs involved in sourcing from China — including freight, duties, inspection fees, and agent commissions.',
    imgId: 'blog-costs-img-g7h8i9',
    titleId: 'blog-costs-title',
    descId: 'blog-costs-desc',
  },
  {
    id: 'moq-negotiation',
    category: 'Negotiation',
    readTime: '5 min read',
    date: 'June 18, 2026',
    title: 'How to Negotiate MOQ with Chinese Suppliers',
    excerpt: 'Minimum order quantities (MOQ) can be a barrier for small and medium buyers. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
    imgId: 'blog-moq-img-j1k2l3',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping & Logistics',
    readTime: '6 min read',
    date: 'June 5, 2026',
    title: 'Sea Freight vs. Air Freight: Which Is Right for Your Shipment?',
    excerpt: 'Choosing between sea and air freight depends on your product, timeline, and budget. This guide compares both options across cost, speed, reliability, and suitability for different product types.',
    imgId: 'blog-freight-img-m4n5o6',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'supplier-scam-red-flags',
    category: 'Risk Management',
    readTime: '9 min read',
    date: 'May 22, 2026',
    title: '10 Red Flags That a Chinese Supplier May Not Be Legitimate',
    excerpt: 'Supplier fraud is a real risk when sourcing from China. This article outlines the most common warning signs that a supplier may be a trading company, a scammer, or simply not capable of fulfilling your order.',
    imgId: 'blog-scam-img-p7q8r9',
    titleId: 'blog-scam-title',
    descId: 'blog-scam-desc',
  },
];

const featuredPost = posts[0];
const remainingPosts = posts.slice(1);

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
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Sourcing Insights</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              China Sourcing Blog
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides, industry insights, and expert advice for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <p className="section-eyebrow mb-6">Featured Article</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden bg-gray-100 h-72 lg:h-96">
              <img
                alt={featuredPost.title}
                data-strk-img-id={featuredPost.imgId}
                data-strk-img={`[${featuredPost.descId}] [${featuredPost.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gold-100 text-gold-700 text-xs font-semibold px-2.5 py-1 rounded-full">{featuredPost.category}</span>
                <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{featuredPost.readTime}</span>
                <span className="text-gray-400 text-xs">{featuredPost.date}</span>
              </div>
              <h2 id={featuredPost.titleId} className="text-navy-800 text-2xl font-bold mb-4">{featuredPost.title}</h2>
              <p id={featuredPost.descId} className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <Link to={`/blog/${featuredPost.id}`} className="btn-primary">
                Read Article <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <p className="section-eyebrow mb-8">All Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden p-0 flex flex-col">
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
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-navy-50 text-navy-700 text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="text-navy-800 font-bold text-sm mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-xs leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="text-navy-800 text-xs font-semibold hover:text-gold-600 transition-colors flex items-center gap-1">
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy-800 py-16">
        <div className="container-xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-white text-2xl font-bold mb-3">Get Sourcing Insights in Your Inbox</h2>
            <p className="text-gray-300 text-sm mb-6">
              Practical guides and industry updates for global buyers sourcing from China. No spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <button className="bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
