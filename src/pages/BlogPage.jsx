import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search, Shield, Factory, DollarSign, Globe, FileText } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking supplier credentials, factory capabilities, and business legitimacy before committing to a purchase.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    author: 'SSourcing China Team',
    readTime: '8 min read',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Understanding MOQ: What It Means for Your Sourcing Strategy',
    excerpt: 'Minimum Order Quantity can make or break your sourcing plan. Learn how to negotiate MOQs and find flexible suppliers.',
    category: 'Sourcing Tips',
    date: '2026-06-10',
    author: 'SSourcing China Team',
    readTime: '6 min read',
    icon: FileText,
  },
  {
    id: 3,
    title: 'The Complete Guide to Quality Inspection in China',
    excerpt: 'Everything you need to know about pre-production, during-production, and pre-shipment inspections for products made in China.',
    category: 'Quality Control',
    date: '2026-06-05',
    author: 'SSourcing China Team',
    readTime: '10 min read',
    icon: Factory,
  },
  {
    id: 4,
    title: 'Shipping from China: Sea Freight vs Air Freight vs Express',
    excerpt: 'Compare shipping methods, costs, and timelines to choose the best option for your products and budget.',
    category: 'Logistics',
    date: '2026-05-28',
    author: 'SSourcing China Team',
    readTime: '7 min read',
    icon: Globe,
  },
  {
    id: 5,
    title: 'How to Negotiate Prices with Chinese Manufacturers',
    excerpt: 'Practical negotiation strategies that work with Chinese suppliers, based on years of experience and cultural understanding.',
    category: 'Sourcing Tips',
    date: '2026-05-20',
    author: 'SSourcing China Team',
    readTime: '9 min read',
    icon: DollarSign,
  },
  {
    id: 6,
    title: 'Protecting Your Intellectual Property When Manufacturing in China',
    excerpt: 'Essential steps to protect your designs, patents, and trademarks when working with Chinese manufacturers.',
    category: 'Legal & Compliance',
    date: '2026-05-15',
    author: 'SSourcing China Team',
    readTime: '8 min read',
    icon: Shield,
  },
  {
    id: 7,
    title: 'Top 10 Manufacturing Cities in China and What They Specialize In',
    excerpt: 'From Shenzhen electronics to Yiwu small commodities, understand which Chinese cities are best for your product category.',
    category: 'Industry Insights',
    date: '2026-05-08',
    author: 'SSourcing China Team',
    readTime: '12 min read',
    icon: Search,
  },
  {
    id: 8,
    title: 'Common Mistakes First-Time Importers Make When Sourcing from China',
    excerpt: 'Learn from others\' mistakes. We share the most common pitfalls and how to avoid them when sourcing from China for the first time.',
    category: 'Sourcing Tips',
    date: '2026-05-01',
    author: 'SSourcing China Team',
    readTime: '7 min read',
    icon: FileText,
  },
  {
    id: 9,
    title: 'Understanding Incoterms: FOB, CIF, EXW, and DDP Explained',
    excerpt: 'A clear guide to international commercial terms and what they mean for your responsibilities and costs when importing from China.',
    category: 'Logistics',
    date: '2026-04-25',
    author: 'SSourcing China Team',
    readTime: '10 min read',
    icon: Globe,
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Blog</span>
            <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Insights & Guides
            </h1>
            <p id="blog-hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8">
              Practical advice, industry insights, and step-by-step guides for businesses sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-3 py-1">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get the latest sourcing tips, industry insights, and market updates delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Contact Us for Updates
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
