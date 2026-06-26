import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying supplier legitimacy, checking business licenses, and conducting on-site factory audits to protect your business from fraud.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 2,
    title: 'Understanding Quality Inspection Standards in China Manufacturing',
    excerpt: 'Learn about AQL sampling, inspection levels, and how to set quality standards that protect your products before they leave the factory.',
    category: 'Quality Control',
    date: '2026-06-08',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 3,
    title: 'China Shipping Guide: Sea Freight vs Air Freight for Importers',
    excerpt: 'Compare sea freight and air freight options, understand transit times, costs, and how to choose the right shipping method for your products.',
    category: 'Shipping & Logistics',
    date: '2026-05-28',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 4,
    title: 'Common Mistakes When Sourcing Products from China',
    excerpt: 'Avoid these frequent pitfalls that cost importers time and money — from poor communication to inadequate quality control.',
    category: 'Sourcing Tips',
    date: '2026-05-20',
    readTime: '5 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Manufacturers',
    excerpt: 'Practical negotiation strategies for working with Chinese suppliers, including pricing, MOQs, payment terms, and building long-term relationships.',
    category: 'Sourcing Tips',
    date: '2026-05-12',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 6,
    title: 'Understanding MOQs: Minimum Order Quantities in China',
    excerpt: 'What are MOQs, why do Chinese factories set them, and how can you negotiate lower minimums for your first order?',
    category: 'Sourcing Tips',
    date: '2026-05-05',
    readTime: '5 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 7,
    title: 'Product Certification Requirements for Importing to the US and EU',
    excerpt: 'A guide to CE marking, FCC certification, RoHS compliance, and other product certifications required for importing goods from China.',
    category: 'Compliance',
    date: '2026-04-28',
    readTime: '9 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 8,
    title: 'The Role of a Sourcing Agent: When Do You Need One?',
    excerpt: 'Understand what a sourcing agent does, when it makes sense to hire one, and how they can save you time, money, and risk.',
    category: 'Sourcing Tips',
    date: '2026-04-20',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 9,
    title: 'Factory Audit Checklist: What We Look For During On-Site Visits',
    excerpt: 'A detailed look at our factory audit process — from business license verification to production capacity assessment and quality system review.',
    category: 'Supplier Verification',
    date: '2026-04-12',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
]

const categories = ['All', 'Sourcing Tips', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Compliance']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog & Resources</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides, tips, and insights for businesses sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <Search className="w-10 h-10 text-slate-300" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Stay Updated</h2>
          <p className="text-slate-600 mb-6">
            Get the latest sourcing tips and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
