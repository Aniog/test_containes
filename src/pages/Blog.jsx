import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "How to Verify Chinese Suppliers: A Complete Guide",
      excerpt: "Learn the essential steps to verify suppliers in China, from business license checks to factory audits. Protect your business from scams and ensure you work with legitimate manufacturers.",
      date: "2024-01-15",
      author: "SSourcing Team",
      category: "Supplier Verification",
      readTime: "8 min read",
      image: "supplier verification factory audit China"
    },
    {
      id: 2,
      title: "Quality Control in Chinese Manufacturing: Best Practices",
      excerpt: "Discover the best practices for quality control when sourcing from China. From pre-production to pre-shipment inspections, ensure your products meet international standards.",
      date: "2024-01-10",
      author: "SSourcing Team",
      category: "Quality Control",
      readTime: "10 min read",
      image: "quality control inspection manufacturing China"
    },
    {
      id: 3,
      title: "Understanding Incoterms: Shipping Terms Explained",
      excerpt: "A comprehensive guide to Incoterms 2020. Understand shipping terms, responsibilities, and costs to make informed decisions when importing from China.",
      date: "2024-01-05",
      author: "SSourcing Team",
      category: "Shipping & Logistics",
      readTime: "12 min read",
      image: "shipping logistics incoterms containers"
    },
    {
      id: 4,
      title: "Negotiating with Chinese Suppliers: Tips & Strategies",
      excerpt: "Effective negotiation strategies when dealing with Chinese suppliers. Learn about cultural differences, pricing tactics, and how to get the best deal.",
      date: "2023-12-28",
      author: "SSourcing Team",
      category: "Negotiation",
      readTime: "9 min read",
      image: "business negotiation China sourcing"
    },
    {
      id: 5,
      title: "Top 10 Product Categories to Source from China in 2024",
      excerpt: "Discover the most promising product categories for sourcing from China in 2024. Market trends, opportunities, and what to watch out for.",
      date: "2023-12-20",
      author: "SSourcing Team",
      category: "Market Trends",
      readTime: "7 min read",
      image: "product sourcing trends 2024"
    },
    {
      id: 6,
      title: "How to Avoid Common Sourcing Scams in China",
      excerpt: "Protect yourself from common scams when sourcing from China. Red flags to watch for, due diligence steps, and how to verify supplier legitimacy.",
      date: "2023-12-15",
      author: "SSourcing Team",
      category: "Risk Management",
      readTime: "11 min read",
      image: "avoiding scams sourcing China"
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="blog-hero-title" className="text-5xl font-bold text-gray-900 mb-6">
              Sourcing Insights & Guides
            </h1>
            <p id="blog-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, industry insights, and practical guides to help you source from China successfully
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={`blog-${post.id}`}
                  data-strk-img={post.image}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={`blog-excerpt-${post.id}`} className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Supplier Verification", count: 12, description: "Learn how to verify and audit suppliers" },
              { category: "Quality Control", count: 15, description: "Best practices for QC and inspections" },
              { category: "Shipping & Logistics", count: 10, description: "Navigate shipping and customs" },
              { category: "Negotiation", count: 8, description: "Tips for better deals with suppliers" },
              { category: "Market Trends", count: 14, description: "Stay updated on industry trends" },
              { category: "Risk Management", count: 9, description: "Avoid common sourcing risks" }
            ].map((cat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{cat.category}</h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {cat.count} articles
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for expert sourcing advice, industry updates, and exclusive content.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
