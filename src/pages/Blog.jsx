import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps for verifying Chinese suppliers, including business license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: 'July 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Quality Inspection Checklist for Importers',
    excerpt: 'A comprehensive checklist for conducting quality inspections on products sourced from China, covering pre-production, during production, and pre-shipment inspections.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: 'July 8, 2026',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'Understanding MOQs: Minimum Order Quantities Explained',
    excerpt: 'What are MOQs, why do suppliers require them, and how can you negotiate lower minimums? This guide covers everything you need to know.',
    category: 'Sourcing Basics',
    author: 'SSourcing Team',
    date: 'July 1, 2026',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Shipping from China: Sea vs Air vs Rail',
    excerpt: 'Compare the three main shipping methods from China, including costs, transit times, and when to use each option.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: 'June 24, 2026',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Protecting Your IP When Sourcing from China',
    excerpt: 'Essential strategies for protecting your intellectual property when manufacturing products in China, including NDAs, trademarks, and supplier agreements.',
    category: 'Legal & Compliance',
    author: 'SSourcing Team',
    date: 'June 17, 2026',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Top 10 Products to Source from China in 2026',
    excerpt: 'Discover the most profitable and in-demand products to source from China this year, with market trends and supplier insights.',
    category: 'Market Trends',
    author: 'SSourcing Team',
    date: 'June 10, 2026',
    readTime: '12 min read',
  },
]

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-primary py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
            Blog & Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sourcing Knowledge Base
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Expert insights, guides, and tips for sourcing products from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 
                                              hover:shadow-lg transition-all duration-300 group">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 
                              group-hover:from-primary group-hover:to-primary-600 transition-all duration-500 
                              flex items-center justify-center p-6">
                  <span className="text-primary-600 group-hover:text-white text-center text-lg font-medium transition-colors">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-navy-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-navy-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  {/* Read More */}
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-primary font-semibold text-sm inline-flex items-center gap-2 
                             hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="section-title mb-4">Stay Updated</h2>
          <p className="section-subtitle mx-auto mb-8">
            Get the latest sourcing tips, market insights, and industry news delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                       focus:ring-primary focus:border-transparent"
            />
            <button className="btn-primary px-6">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
