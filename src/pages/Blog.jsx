import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag, User, Search, Calendar } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide for International Buyers',
    excerpt: 'Learn the essential steps for verifying Chinese suppliers, from checking business licenses to conducting on-site factory audits. Protect your investment with proper due diligence.',
    category: 'Supplier Verification',
    date: 'June 15, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'quality-control-aql-standards',
    title: 'Understanding AQL Standards for Quality Control in China',
    excerpt: 'A practical explanation of Acceptable Quality Level (AQL) standards and how to use them effectively when inspecting goods manufactured in China.',
    category: 'Quality Control',
    date: 'June 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: Ocean, Air, and Rail Compared',
    excerpt: 'Compare the costs, transit times, and best use cases for ocean freight, air freight, and rail shipping from China to major global markets.',
    category: 'Logistics',
    date: 'May 28, 2026',
    readTime: '10 min read',
  },
  {
    id: 'canton-fair-preparation',
    title: 'How to Prepare for the Canton Fair: Tips for First-Time Visitors',
    excerpt: 'Everything you need to know before attending the Canton Fair in Guangzhou, from registration and travel to making the most of your supplier meetings.',
    category: 'Trade Shows',
    date: 'May 15, 2026',
    readTime: '7 min read',
  },
  {
    id: 'avoiding-common-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'The most frequent mistakes international buyers make when sourcing from China, and practical strategies to avoid each one.',
    category: 'Sourcing Tips',
    date: 'May 3, 2026',
    readTime: '9 min read',
  },
  {
    id: 'china-manufacturing-regions',
    title: 'China Manufacturing Regions: Which Province Makes What',
    excerpt: 'A practical guide to China\'s major manufacturing regions and their specializations, from electronics in Shenzhen to textiles in Guangzhou.',
    category: 'Industry Knowledge',
    date: 'April 22, 2026',
    readTime: '12 min read',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Logistics', 'Trade Shows', 'Sourcing Tips', 'Industry Knowledge']

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(p => p.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Sourcing Knowledge Hub</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice to help you source products from China more effectively.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 sticky top-18 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-navy-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                    <div className="text-center">
                      <Tag className="w-10 h-10 text-navy-300 mx-auto mb-2" />
                      <span className="text-xs font-medium text-navy-400 uppercase tracking-wider">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-accent-500 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 group-hover:text-accent-500 transition-colors">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-gray-400 mb-6">Get sourcing tips, industry news, and market insights delivered to your inbox monthly.</p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            <button type="submit" className="px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog
