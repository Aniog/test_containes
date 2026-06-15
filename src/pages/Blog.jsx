import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const blogPosts = [
    {
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify factory licenses, production capacity, and business legitimacy before placing orders with Chinese suppliers.',
      date: '2026-06-10',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      imgId: 'blog-verify-suppliers-001',
      imgDesc: 'Guide to verifying Chinese suppliers'
    },
    {
      title: 'Quality Inspection Checklist: What to Check Before Shipment',
      excerpt: 'A comprehensive checklist of quality inspection points to ensure your products meet specifications before they leave the factory.',
      date: '2026-06-05',
      author: 'SSourcing Team',
      category: 'Quality Control',
      imgId: 'blog-qc-checklist-002',
      imgDesc: 'Quality inspection checklist for imports'
    },
    {
      title: 'Understanding MOQ: How to Negotiate Better Terms',
      excerpt: 'Minimum Order Quantity can make or break your sourcing strategy. Learn how to negotiate flexible MOQs with Chinese suppliers.',
      date: '2026-05-28',
      author: 'SSourcing Team',
      category: 'Negotiation',
      imgId: 'blog-moq-negotiation-003',
      imgDesc: 'Negotiating MOQ with suppliers'
    },
    {
      title: 'Shipping from China: Sea vs Air Freight Comparison',
      excerpt: 'Compare shipping methods, costs, and timelines to choose the best logistics solution for your sourcing needs.',
      date: '2026-05-20',
      author: 'SSourcing Team',
      category: 'Logistics',
      imgId: 'blog-shipping-comparison-004',
      imgDesc: 'Sea vs air freight shipping comparison'
    },
    {
      title: 'Product Certification for EU & US Markets',
      excerpt: 'Navigate the complex world of product certifications (CE, FCC, RoHS, etc.) required for selling in European and American markets.',
      date: '2026-05-15',
      author: 'SSourcing Team',
      category: 'Compliance',
      imgId: 'blog-certification-005',
      imgDesc: 'Product certification for international markets'
    },
    {
      title: 'OEM vs ODM: Which is Right for Your Business?',
      excerpt: 'Understand the differences between Original Equipment Manufacturing and Original Design Manufacturing to choose the best approach for your product.',
      date: '2026-05-08',
      author: 'SSourcing Team',
      category: 'Manufacturing',
      imgId: 'blog-oem-odm-006',
      imgDesc: 'OEM vs ODM manufacturing comparison'
    },
    {
      title: 'Common Sourcing Scams and How to Avoid Them',
      excerpt: 'Protect your business by learning about common scams in China sourcing and the red flags to watch out for.',
      date: '2026-05-01',
      author: 'SSourcing Team',
      category: 'Risk Management',
      imgId: 'blog-sourcing-scams-007',
      imgDesc: 'Avoiding common sourcing scams'
    },
    {
      title: 'Sample Evaluation: What to Look For',
      excerpt: 'A detailed guide on how to properly evaluate product samples before committing to bulk production orders.',
      date: '2026-04-25',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      imgId: 'blog-sample-evaluation-008',
      imgDesc: 'How to evaluate product samples'
    }
  ]

  const categories = [
    'All Posts',
    'Sourcing Tips',
    'Quality Control',
    'Negotiation',
    'Logistics',
    'Compliance',
    'Manufacturing',
    'Risk Management'
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p id="blog-hero-subtitle" className="text-xl text-blue-100">
              Expert insights and practical tips for successful China sourcing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[blog-hero-subtitle] [blog-hero-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.imgDesc}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {post.category}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="newsletter-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Sourcing Tips
          </h2>
          <p id="newsletter-subtitle" className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing, quality control, and supply chain management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
