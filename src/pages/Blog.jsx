import { Link } from 'react-router-dom';
import {
  ArrowRight, Calendar, Clock, User, Tag, ChevronRight
} from 'lucide-react';

const posts = [
  {
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    excerpt: 'Finding trustworthy suppliers in China can be challenging. This guide walks you through the essential steps to identify, verify, and partner with reliable manufacturers.',
    date: 'June 15, 2026',
    readTime: '8 min read',
    author: 'SSourcing Team',
    category: 'Supplier Sourcing',
  },
  {
    title: 'Factory Audits: What to Look for When Visiting Chinese Manufacturers',
    excerpt: 'On-site factory audits are critical for verifying supplier capabilities. Learn what our inspection teams check during every factory visit.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: 'SSourcing Team',
    category: 'Quality Control',
  },
  {
    title: 'The Complete Guide to Pre-Shipment Inspection (PSI)',
    excerpt: 'Pre-shipment inspection is your last line of defense against quality issues. Understand the AQL sampling process and what to expect during a PSI.',
    date: 'May 10, 2026',
    readTime: '10 min read',
    author: 'SSourcing Team',
    category: 'Quality Control',
  },
  {
    title: 'China Shipping Guide: Sea Freight vs Air Freight for Your Products',
    excerpt: 'Choosing the right shipping method affects your costs, delivery time, and inventory management. Compare sea and air freight options for China imports.',
    date: 'April 22, 2026',
    readTime: '7 min read',
    author: 'SSourcing Team',
    category: 'Logistics',
  },
  {
    title: 'Understanding MOQ (Minimum Order Quantity) in China Manufacturing',
    excerpt: 'MOQs can be a barrier for small businesses. Learn how MOQs work, why factories set them, and strategies to negotiate lower minimums.',
    date: 'April 5, 2026',
    readTime: '5 min read',
    author: 'SSourcing Team',
    category: 'Sourcing Strategy',
  },
  {
    title: 'Protecting Your Intellectual Property When Sourcing from China',
    excerpt: 'IP protection is a top concern for businesses sourcing from China. Learn practical steps to safeguard your designs, patents, and brand.',
    date: 'March 18, 2026',
    readTime: '9 min read',
    author: 'SSourcing Team',
    category: 'Sourcing Strategy',
  },
  {
    title: 'Top Manufacturing Hubs in China: Where to Source Your Products',
    excerpt: 'Different regions in China specialize in different industries. Discover which manufacturing hub is right for your product category.',
    date: 'March 1, 2026',
    readTime: '7 min read',
    author: 'SSourcing Team',
    category: 'Supplier Sourcing',
  },
  {
    title: 'Quality Control Checklist for Importing from China',
    excerpt: 'A comprehensive checklist covering every stage of quality control when manufacturing products in China, from raw materials to final shipment.',
    date: 'February 14, 2026',
    readTime: '11 min read',
    author: 'SSourcing Team',
    category: 'Quality Control',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers: Tips from the Pros',
    excerpt: 'Effective negotiation with Chinese manufacturers requires understanding cultural nuances and market realities. Get practical tips from our sourcing experts.',
    date: 'January 30, 2026',
    readTime: '6 min read',
    author: 'SSourcing Team',
    category: 'Sourcing Strategy',
  },
];

const categories = [
  'Supplier Sourcing',
  'Quality Control',
  'Logistics',
  'Sourcing Strategy',
  'Industry Insights',
];

export default function Blog() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Practical insights, guides, and tips for successful China sourcing. Written by our team of sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-10">
            {/* Posts */}
            <div className="flex-1 space-y-8">
              {posts.map((post, i) => (
                <article key={i} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-700 bg-brand-50 rounded-full px-3 py-1">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-brand-700 transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-brand-800 hover:text-brand-700">
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0 mt-10 lg:mt-0">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-sm text-slate-600 hover:text-brand-800 transition-colors py-1.5"
                      >
                        {cat}
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 mt-6 pt-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Need Sourcing Help?</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Contact our team for a free consultation on your China sourcing needs.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 bg-brand-800 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Stay Updated</h2>
          <p className="text-slate-600 mb-6">Get the latest China sourcing insights delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-brand-800 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}