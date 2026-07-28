import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';

const posts = [
  {
    id: 'supplier-verification',
    titleId: 'blog-sv-title',
    descId: 'blog-sv-desc',
    imgId: 'blog-sv-img-a1b2c3',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    desc: 'A practical guide to checking business licenses, certifications, and production capabilities — and why online verification is not enough.',
    category: 'Supplier Verification',
    date: 'June 12, 2025',
    readTime: '7 min read',
  },
  {
    id: 'quality-inspection',
    titleId: 'blog-qi-title',
    descId: 'blog-qi-desc',
    imgId: 'blog-qi-img-d4e5f6',
    title: 'Pre-Shipment Inspection: What It Covers and Why It Matters',
    desc: 'Understanding what a pre-shipment inspection checks, how to interpret the report, and what to do if goods fail.',
    category: 'Quality Control',
    date: 'May 28, 2025',
    readTime: '6 min read',
  },
  {
    id: 'incoterms',
    titleId: 'blog-inc-title',
    descId: 'blog-inc-desc',
    imgId: 'blog-inc-img-g7h8i9',
    title: 'FOB vs CIF vs EXW: Which Incoterm Should You Use?',
    desc: 'A clear explanation of the most common shipping terms used in China trade and how to choose the right one for your situation.',
    category: 'Shipping',
    date: 'May 10, 2025',
    readTime: '5 min read',
  },
  {
    id: 'moq-negotiation',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-j1k2l3',
    title: 'How to Negotiate Lower MOQs with Chinese Factories',
    desc: 'Practical strategies for reducing minimum order quantities — especially useful for startups and small businesses sourcing from China for the first time.',
    category: 'Negotiation',
    date: 'April 22, 2025',
    readTime: '8 min read',
  },
  {
    id: 'ce-certification',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
    imgId: 'blog-ce-img-m4n5o6',
    title: 'CE Certification for Products Sourced from China: A Buyer\'s Guide',
    desc: 'What CE marking means, which products require it, and how to ensure your Chinese supplier\'s products are genuinely compliant.',
    category: 'Compliance',
    date: 'April 5, 2025',
    readTime: '9 min read',
  },
  {
    id: 'sourcing-agent-vs-trading',
    titleId: 'blog-sa-title',
    descId: 'blog-sa-desc',
    imgId: 'blog-sa-img-p7q8r9',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    desc: 'Understanding the key differences between working with a sourcing agent and a trading company — and which is better for your business.',
    category: 'Sourcing Strategy',
    date: 'March 18, 2025',
    readTime: '6 min read',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Insights</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 bg-slate-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 id={post.titleId} className="font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-xs">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
