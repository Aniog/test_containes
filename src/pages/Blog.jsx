import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Find Reliable Suppliers in China',
    excerpt: 'A comprehensive guide to identifying and vetting suppliers in China for your business needs.',
    category: 'Sourcing Tips',
    author: 'SSourcing Team',
    date: '2024-01-15',
    readTime: '8 min read',
    imageId: 'blog-suppliers-img',
    imageRatio: '16x9',
  },
  {
    id: 2,
    title: 'Quality Control Best Practices for Importers',
    excerpt: 'Learn the essential quality control measures to implement when sourcing products from China.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: '2024-01-10',
    readTime: '10 min read',
    imageId: 'blog-quality-control-img',
    imageRatio: '16x9',
  },
  {
    id: 3,
    title: 'Understanding China Shipping and Logistics',
    excerpt: 'A complete guide to shipping options, customs clearance, and logistics when importing from China.',
    category: 'Logistics',
    author: 'SSourcing Team',
    date: '2024-01-05',
    readTime: '12 min read',
    imageId: 'blog-shipping-img',
    imageRatio: '16x9',
  },
  {
    id: 4,
    title: 'Factory Audit Checklist: What to Look For',
    excerpt: 'Essential items to check during factory audits to ensure supplier reliability and capability.',
    category: 'Factory Audits',
    author: 'SSourcing Team',
    date: '2023-12-28',
    readTime: '9 min read',
    imageId: 'blog-factory-audit-img',
    imageRatio: '16x9',
  },
  {
    id: 5,
    title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
    excerpt: 'Effective negotiation techniques to secure better pricing and terms with Chinese manufacturers.',
    category: 'Negotiation',
    author: 'SSourcing Team',
    date: '2023-12-20',
    readTime: '7 min read',
    imageId: 'blog-negotiation-img',
    imageRatio: '16x9',
  },
  {
    id: 6,
    title: 'Import Regulations and Compliance Guide',
    excerpt: 'Understanding import regulations, certifications, and compliance requirements for different markets.',
    category: 'Compliance',
    author: 'SSourcing Team',
    date: '2023-12-15',
    readTime: '11 min read',
    imageId: 'blog-compliance-img',
    imageRatio: '16x9',
  },
]

const categories = [
  'All',
  'Sourcing Tips',
  'Quality Control',
  'Logistics',
  'Factory Audits',
  'Negotiation',
  'Compliance',
]

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Insights & Tips
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert advice and industry insights to help you source products from China more effectively.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container">
          <div className="flex overflow-x-auto gap-4 py-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div 
                  className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200"
                  data-strk-bg-id={post.imageId}
                  data-strk-bg={`[blog-title] [blog-post-${post.id}-title]`}
                  data-strk-bg-ratio={post.imageRatio}
                  data-strk-bg-width="600"
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3" id={`blog-post-${post.id}-title`}>
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to="/blog"
                      className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden element for interpolation */}
      <h1 id="blog-title" className="sr-only">Sourcing Insights & Tips</h1>

      {/* Newsletter */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest sourcing tips and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
