import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, Search, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'sourcing', name: 'Sourcing Guide' },
    { id: 'quality', name: 'Quality Control' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'industry', name: 'Industry Insights' }
  ]

  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Factory Before Working With Them',
      excerpt: 'A comprehensive guide to conducting factory audits and verifying supplier legitimacy in China. Learn the key checks to perform and red flags to watch for.',
      category: 'sourcing',
      date: '2024-12-15',
      readTime: '8 min read',
      author: 'Michael Chen',
      image: 'factory inspection verification'
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspection Standards (AQL)',
      excerpt: 'Learn about Acceptable Quality Level (AQL) standards and how to implement effective quality control inspections for your China orders.',
      category: 'quality',
      date: '2024-12-10',
      readTime: '6 min read',
      author: 'Sarah Zhang'
    },
    {
      id: 3,
      title: 'Shipping from China: Sea Freight vs Air Freight',
      excerpt: 'Compare shipping methods for your China imports. We break down costs, transit times, and when to choose each option for your business.',
      category: 'logistics',
      date: '2024-12-05',
      readTime: '5 min read',
      author: 'David Liu'
    },
    {
      id: 4,
      title: 'Top 10 Product Categories Sourced from China in 2024',
      excerpt: 'An overview of the most popular product categories imported from China and market trends shaping sourcing decisions.',
      category: 'industry',
      date: '2024-11-28',
      readTime: '7 min read',
      author: 'Emily Wang'
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Master the art of negotiation with Chinese manufacturers. Tips on pricing, payment terms, and building long-term relationships.',
      category: 'sourcing',
      date: '2024-11-20',
      readTime: '6 min read',
      author: 'James Liu'
    },
    {
      id: 6,
      title: 'Pre-Shipment Inspection: What to Check and Why It Matters',
      excerpt: 'A detailed checklist for pre-shipment inspections and why they are critical for ensuring product quality.',
      category: 'quality',
      date: '2024-11-15',
      readTime: '7 min read',
      author: 'Lisa Chen'
    },
    {
      id: 7,
      title: 'Understanding Chinese Manufacturing Certifications',
      excerpt: 'A guide to essential certifications your Chinese suppliers should have, from ISO to CE, FCC, and industry-specific standards.',
      category: 'sourcing',
      date: '2024-11-08',
      readTime: '5 min read',
      author: 'Michael Chen'
    },
    {
      id: 8,
      title: 'Managing Customs Clearance for China Imports',
      excerpt: 'Navigate the complexities of customs clearance. Required documents, common issues, and tips for smooth processing.',
      category: 'logistics',
      date: '2024-11-01',
      readTime: '6 min read',
      author: 'David Liu'
    },
    {
      id: 9,
      title: 'The Rise of Sustainable Manufacturing in China',
      excerpt: 'Explore how Chinese factories are adapting to sustainability requirements and what it means for global buyers.',
      category: 'industry',
      date: '2024-10-25',
      readTime: '8 min read',
      author: 'Emily Wang'
    }
  ]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category) => {
    const colors = {
      sourcing: 'bg-blue-100 text-blue-700',
      quality: 'bg-green-100 text-green-700',
      logistics: 'bg-purple-100 text-purple-700',
      industry: 'bg-orange-100 text-orange-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Expert guidance on China sourcing, quality control, and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
                >
                  <div className="h-48 bg-gray-200">
                    <img
                      data-strk-img-id={`blog-${post.id}`}
                      data-strk-img={`[blog-title-${post.id}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 id={`blog-title-${post.id}`} className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing and international trade.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog