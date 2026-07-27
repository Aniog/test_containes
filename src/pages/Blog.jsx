import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'how-to-verify-factory',
    title: 'How to Verify a Factory in China: A Step-by-Step Guide',
    excerpt: 'Before placing an order with a Chinese supplier, you need to verify they are a real manufacturer with the capacity to deliver. Here is what to check and how to do it.',
    category: 'Sourcing Tips',
    date: '2024-12-15',
    imgId: 'blog-verify-factory-g4h5i6',
    titleId: 'blog-verify-factory-title',
    excerptId: 'blog-verify-factory-excerpt',
  },
  {
    id: 'common-quality-issues',
    title: '5 Common Quality Issues When Sourcing from China and How to Avoid Them',
    excerpt: 'Quality problems are one of the biggest concerns for buyers sourcing from China. Learn the most common issues and practical steps to prevent them.',
    category: 'Quality Control',
    date: '2024-11-28',
    imgId: 'blog-quality-issues-j7k8l9',
    titleId: 'blog-quality-issues-title',
    excerptId: 'blog-quality-issues-excerpt',
  },
  {
    id: 'trading-company-vs-manufacturer',
    title: 'Trading Company vs. Manufacturer: How to Tell the Difference',
    excerpt: 'Many buyers unknowingly work with trading companies instead of direct manufacturers. Understanding the difference can save you money and improve quality control.',
    category: 'Sourcing Tips',
    date: '2024-11-10',
    imgId: 'blog-trading-vs-mfg-m1n2o3',
    titleId: 'blog-trading-vs-mfg-title',
    excerptId: 'blog-trading-vs-mfg-excerpt',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea vs. Air Freight — What You Need to Know',
    excerpt: 'Choosing the right shipping method affects your cost, delivery time, and product safety. Here is a practical comparison to help you decide.',
    category: 'Logistics',
    date: '2024-10-22',
    imgId: 'blog-shipping-p4q5r6',
    titleId: 'blog-shipping-title',
    excerptId: 'blog-shipping-excerpt',
  },
  {
    id: 'negotiating-with-suppliers',
    title: 'Practical Tips for Negotiating Prices with Chinese Suppliers',
    excerpt: 'Price negotiation is a key part of sourcing from China. Learn practical strategies to get better pricing without damaging the supplier relationship.',
    category: 'Sourcing Tips',
    date: '2024-10-05',
    imgId: 'blog-negotiation-s7t8u9',
    titleId: 'blog-negotiation-title',
    excerptId: 'blog-negotiation-excerpt',
  },
  {
    id: 'pre-shipment-inspection',
    title: 'Why Pre-Shipment Inspection Is the Most Important QC Step',
    excerpt: 'A pre-shipment inspection is your last chance to catch quality issues before products leave the factory. Here is why it matters and what it covers.',
    category: 'Quality Control',
    date: '2024-09-18',
    imgId: 'blog-inspection-v1w2x3',
    titleId: 'blog-inspection-title',
    excerptId: 'blog-inspection-excerpt',
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
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="blog-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sourcing Insights & Tips
          </h1>
          <p id="blog-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            Practical guides, industry insights, and sourcing tips to help you navigate the China sourcing process with confidence.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16x9] overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.excerptId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">{post.category}</span>
                    <span className="text-neutral-400 text-xs">{post.date}</span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">{post.title}</h3>
                  <p id={post.excerptId} className="text-neutral-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Need Expert Sourcing Advice?</h2>
          <p className="text-neutral-600 text-sm mb-6">Our team can help you navigate the China sourcing process. Get a free consultation.</p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
