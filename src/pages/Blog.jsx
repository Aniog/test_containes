import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding Quality Control Inspections in China',
    excerpt: 'A comprehensive overview of the different types of QC inspections available in China, when to use each one, and what to expect from the inspection process.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Sea Freight vs. Air Freight: Which Is Right for Your Business?',
    excerpt: 'Compare the costs, transit times, and best use cases for sea and air freight when shipping from China. Includes a decision framework for different business scenarios.',
    category: 'Shipping & Logistics',
    date: '2026-06-28',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'Avoid these common pitfalls that cost importers time and money. Based on our 15 years of experience helping businesses source products from China.',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 5,
    title: 'China Trade Tariffs 2026: What Importers Need to Know',
    excerpt: 'Stay up to date with the latest tariff changes affecting imports from China. Includes practical advice on managing tariff impacts on your sourcing costs.',
    category: 'Trade & Regulations',
    date: '2026-06-12',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Proven negotiation strategies that work with Chinese suppliers. Learn the cultural nuances and tactical approaches that lead to better pricing and terms.',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    readTime: '9 min read',
    featured: false,
  },
]

const categories = [
  'All',
  'Supplier Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Sourcing Tips',
  'Trade & Regulations',
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Blog
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            Expert insights, practical guides, and industry updates to help you 
            make informed decisions when sourcing products from China.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none text-navy-900"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-cta-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-cta-100 text-cta-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="bg-navy-100 text-navy-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3 hover:text-cta-500 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cta-500 hover:text-cta-600 font-semibold text-sm flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">All Articles</h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 mb-3 hover:text-cta-500 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cta-500 hover:text-cta-600 font-medium text-xs flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy-900 mb-2">No articles found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest sourcing tips, market insights, and trade updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-royal-500 focus:border-transparent outline-none text-navy-900"
            />
            <button className="bg-cta-500 hover:bg-cta-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
