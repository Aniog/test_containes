import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    excerpt: 'Finding trustworthy suppliers in China is the foundation of successful sourcing. Here is our proven approach to identifying and vetting manufacturers.',
    date: 'June 10, 2026',
    readTime: '8 min read',
    category: 'Sourcing Guide',
  },
  {
    title: 'Factory Audit Checklist: What to Look for When Visiting Chinese Factories',
    excerpt: 'A comprehensive guide to conducting effective factory audits in China, covering production capacity, quality systems, and compliance.',
    date: 'June 3, 2026',
    readTime: '10 min read',
    category: 'Quality Control',
  },
  {
    title: 'Understanding AQL in Quality Inspection: A Practical Guide',
    excerpt: 'Learn how Acceptable Quality Limit (AQL) sampling works and how to set the right inspection levels for your products.',
    date: 'May 25, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    title: 'China Sourcing Costs in 2026: What Has Changed and What to Expect',
    excerpt: 'An analysis of current manufacturing costs in China, including labor, materials, logistics, and tariff considerations.',
    date: 'May 18, 2026',
    readTime: '7 min read',
    category: 'Market Insights',
  },
  {
    title: 'Top 10 Mistakes Importers Make When Sourcing from China',
    excerpt: 'Avoid these common pitfalls when dealing with Chinese suppliers, from communication issues to payment terms and quality expectations.',
    date: 'May 10, 2026',
    readTime: '9 min read',
    category: 'Sourcing Guide',
  },
  {
    title: 'Incoterms Explained: Which Shipping Terms Should You Use for China Imports?',
    excerpt: 'A breakdown of the most common Incoterms used in China trade — FOB, EXW, CIF, DDP — and how to choose the right one.',
    date: 'April 28, 2026',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    title: 'The Complete Guide to Product Compliance for China-Sourced Goods',
    excerpt: 'CE, FDA, RoHS, REACH — make sure your imported products meet regulatory requirements in your target market.',
    date: 'April 15, 2026',
    readTime: '11 min read',
    category: 'Compliance',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers: Tips from an Insider',
    excerpt: 'Practical negotiation strategies that work with Chinese manufacturers, from pricing to payment terms and lead times.',
    date: 'April 2, 2026',
    readTime: '8 min read',
    category: 'Sourcing Guide',
  },
  {
    title: 'Sea Freight vs Air Freight from China: Which Should You Choose?',
    excerpt: 'Compare costs, transit times, and considerations for shipping from China to major global destinations.',
    date: 'March 20, 2026',
    readTime: '6 min read',
    category: 'Logistics',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Sourcing Insights</h1>
            <p className="text-lg lg:text-xl text-primary-100">
              Practical guides, market insights, and expert tips for sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-neutral-100 flex items-center justify-center border-b border-neutral-200"
                  data-strk-bg-id={`blog-img-${post.title.slice(0, 10)}`}
                  data-strk-bg={`[blog-title-${post.title.slice(0, 10)}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                >
                  <span id={`blog-title-${post.title.slice(0, 10)}`} className="hidden">{post.title}</span>
                  <div className="text-center p-4">
                    <Calendar className="w-8 h-8 mx-auto text-neutral-300 mb-2" />
                    <p className="text-xs text-neutral-400">{post.category}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-semibold text-neutral-900 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-neutral-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">{post.date}</span>
                    <Link
                      to="/blog"
                      className="inline-flex items-center text-sm text-primary-600 font-medium hover:text-primary-700"
                    >
                      Read More <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}