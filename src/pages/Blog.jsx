import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your order. Protect your business from scams and unreliable manufacturers.',
      date: '2024-01-15',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      imgId: 'blog-1-a1b2c3',
    },
    {
      id: 2,
      title: 'Quality Inspection in China: What Every Buyer Should Know',
      excerpt: 'Understand the different types of quality inspections and when to use them. Ensure your products meet quality standards.',
      date: '2024-01-10',
      author: 'SSourcing Team',
      category: 'Quality Control',
      imgId: 'blog-2-d4e5f6',
    },
    {
      id: 3,
      title: 'Incoterms Explained: Choosing the Right Shipping Terms',
      excerpt: 'A practical guide to Incoterms and how to choose the right shipping terms for your business when importing from China.',
      date: '2024-01-05',
      author: 'SSourcing Team',
      category: 'Logistics',
      imgId: 'blog-3-g7h8i9',
    },
    {
      id: 4,
      title: 'MOQ Negotiation: How to Get Lower Minimum Order Quantities',
      excerpt: 'Strategies to negotiate lower MOQs with Chinese suppliers. Perfect for small businesses and startups.',
      date: '2023-12-28',
      author: 'SSourcing Team',
      category: 'Negotiation',
      imgId: 'blog-4-j1k2l3',
    },
    {
      id: 5,
      title: 'Amazon FBA Sourcing from China: Complete Guide 2024',
      excerpt: 'Everything Amazon sellers need to know about sourcing products from China, including labeling, packaging, and compliance.',
      date: '2023-12-20',
      author: 'SSourcing Team',
      category: 'Amazon FBA',
      imgId: 'blog-5-m4n5o6',
    },
    {
      id: 6,
      title: 'Understanding Chinese Business Culture: Building Better Relationships',
      excerpt: 'Key insights into Chinese business culture and how to build strong, long-lasting relationships with your suppliers.',
      date: '2023-12-15',
      author: 'SSourcing Team',
      category: 'Business Culture',
      imgId: 'blog-6-p7q8r9',
    },
  ]

  const categories = [
    'All Posts',
    'Sourcing Tips',
    'Quality Control',
    'Logistics',
    'Negotiation',
    'Amazon FBA',
    'Business Culture',
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sourcing Insights & Tips
            </h1>
            <p id="blog-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, industry insights, and practical tips to help you 
              source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`${
                          index === 0 ? 'text-blue-600 font-medium' : 'text-gray-600'
                        } hover:text-blue-600 transition-colors text-left`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest sourcing tips and insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      alt={post.title}
                      data-strk-img-id={post.imgId}
                      data-strk-img={`${post.category} ${post.title} sourcing China`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      <h2 id={`blog-title-${post.id}`} className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p id={`blog-excerpt-${post.id}`} className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is here to help. Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
