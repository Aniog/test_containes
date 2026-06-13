import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, User, Tag, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify Chinese manufacturers before placing an order, including license checks, factory audits, and reference verification.',
    date: '2026-05-20',
    author: 'Michael Chen',
    category: 'Supplier Verification',
    imgId: 'blog-verify-a1b2c3',
    titleId: 'blog-title-1',
    descId: 'blog-excerpt-1',
  },
  {
    id: '2',
    title: 'Understanding AQL Inspection Standards for Importers',
    excerpt: 'A practical guide to Acceptable Quality Limit (AQL) standards and how to use them effectively in your quality control process for Chinese imports.',
    date: '2026-05-12',
    author: 'Sarah Wang',
    category: 'Quality Control',
    imgId: 'blog-aql-d4e5f6',
    titleId: 'blog-title-2',
    descId: 'blog-excerpt-2',
  },
  {
    id: '3',
    title: 'Top 10 Manufacturing Clusters in China Every Importer Should Know',
    excerpt: 'An overview of China\'s major manufacturing regions, their specializations, and how to leverage regional advantages for your sourcing strategy.',
    date: '2026-04-28',
    author: 'Michael Chen',
    category: 'Sourcing Strategy',
    imgId: 'blog-clusters-g7h8i9',
    titleId: 'blog-title-3',
    descId: 'blog-excerpt-3',
  },
  {
    id: '4',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Is Right for You?',
    excerpt: 'A clear explanation of common Incoterms used in China trade and how to choose the right shipping terms for your business.',
    date: '2026-04-15',
    author: 'David Liu',
    category: 'Logistics',
    imgId: 'blog-incoterms-j1k2l3',
    titleId: 'blog-title-4',
    descId: 'blog-excerpt-4',
  },
  {
    id: '5',
    title: 'How to Protect Your Intellectual Property When Manufacturing in China',
    excerpt: 'Practical strategies for safeguarding your designs, trademarks, and trade secrets when working with Chinese manufacturers.',
    date: '2026-03-30',
    author: 'Sarah Wang',
    category: 'Legal & IP',
    imgId: 'blog-ip-m4n5o6',
    titleId: 'blog-title-5',
    descId: 'blog-excerpt-5',
  },
  {
    id: '6',
    title: 'The Complete Guide to Shipping from China: Sea vs. Air vs. Rail',
    excerpt: 'Compare shipping methods from China with cost breakdowns, transit times, and best-use scenarios for each option.',
    date: '2026-03-18',
    author: 'David Liu',
    category: 'Logistics',
    imgId: 'blog-shipping-p7q8r9',
    titleId: 'blog-title-6',
    descId: 'blog-excerpt-6',
  },
  {
    id: '7',
    title: 'Navigating Chinese Business Culture: Tips for Western Buyers',
    excerpt: 'Key cultural insights and communication tips to build stronger, more effective relationships with Chinese suppliers.',
    date: '2026-03-05',
    author: 'Michael Chen',
    category: 'Business Culture',
    imgId: 'blog-culture-s1t2u3',
    titleId: 'blog-title-7',
    descId: 'blog-excerpt-7',
  },
  {
    id: '8',
    title: 'Product Development in China: From Prototype to Mass Production',
    excerpt: 'A comprehensive guide to developing new products with Chinese manufacturers, covering DFM, tooling, prototyping, and scaling.',
    date: '2026-02-22',
    author: 'Sarah Wang',
    category: 'Product Development',
    imgId: 'blog-dev-v4w5x6',
    titleId: 'blog-title-8',
    descId: 'blog-excerpt-8',
  },
  {
    id: '9',
    title: 'How Tariffs and Trade Policies Affect China Sourcing in 2026',
    excerpt: 'An analysis of current trade policies, tariff rates, and their impact on businesses sourcing from China, with practical strategies.',
    date: '2026-02-10',
    author: 'David Liu',
    category: 'Trade Policy',
    imgId: 'blog-tariffs-y7z8a9',
    titleId: 'blog-title-9',
    descId: 'blog-excerpt-9',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Insights & Guides for Sourcing from China
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expert advice on supplier verification, quality control, logistics, and building successful supply chains in China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto bg-gray-200">
                  <img
                    alt={posts[0].title}
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-medium text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full inline-block w-fit mb-3">
                    {posts[0].category}
                  </span>
                  <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {posts[0].title}
                  </h2>
                  <p id={posts[0].descId} className="text-gray-500 leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${posts[0].id}`}
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-gray-200 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="font-semibold text-navy mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-blue-dark transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our team of experts is ready to help with your specific sourcing challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange-hover transition-colors text-lg shadow-lg"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}