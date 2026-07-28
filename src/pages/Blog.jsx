import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers including factory audits, business license checks, and quality certifications.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: 'July 15, 2026',
    readTime: '8 min read',
    image: 'factory verification inspection',
  },
  {
    title: 'Understanding Quality Inspection Standards for China Sourcing',
    excerpt: 'A comprehensive overview of AQL standards, inspection types, and how to implement effective quality control for your China orders.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: 'July 8, 2026',
    readTime: '10 min read',
    image: 'quality control inspection',
  },
  {
    title: 'Shipping from China: Ocean vs Air Freight Comparison',
    excerpt: 'Compare ocean and air freight options for shipping from China, including costs, timelines, and when to use each method.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: 'June 30, 2026',
    readTime: '7 min read',
    image: 'cargo shipping container port',
  },
  {
    title: 'Top 10 Products to Source from China in 2026',
    excerpt: 'Discover the most popular and profitable product categories for importing from China this year.',
    category: 'Product Sourcing',
    author: 'SSourcing Team',
    date: 'June 22, 2026',
    readTime: '6 min read',
    image: 'various manufactured products',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers Effectively',
    excerpt: 'Practical negotiation strategies and cultural insights for getting better prices and terms from Chinese manufacturers.',
    category: 'Negotiation',
    author: 'SSourcing Team',
    date: 'June 15, 2026',
    readTime: '9 min read',
    image: 'business negotiation meeting',
  },
  {
    title: 'Common Mistakes When Sourcing from China and How to Avoid Them',
    excerpt: 'Learn from the most common pitfalls that international buyers face when sourcing products from China.',
    category: 'Best Practices',
    author: 'SSourcing Team',
    date: 'June 8, 2026',
    readTime: '8 min read',
    image: 'business planning strategy',
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Resources</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Expert insights, guides, and tips for sourcing products from China successfully.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-brand-100 to-brand-50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-brand-400 text-sm">{post.category}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest sourcing tips, industry insights, and market updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
