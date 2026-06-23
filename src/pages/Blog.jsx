import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Factory Before Placing Orders',
    excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, including business license checks, on-site visits, and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2024-01-15',
    readTime: '8 min read',
    author: 'David Chen',
    image: 'factory inspection verification',
  },
  {
    id: 2,
    title: 'Understanding Quality Control Inspections: A Complete Guide',
    excerpt: 'Everything you need to know about pre-shipment inspections, AQL standards, and how to set up an effective QC process for your orders.',
    category: 'Quality Control',
    date: '2024-01-08',
    readTime: '10 min read',
    author: 'Sarah Liu',
    image: 'quality inspection factory',
  },
  {
    id: 3,
    title: 'Navigating China Shipping: FOB, CIF, and EXW Explained',
    excerpt: 'A clear breakdown of shipping terms, Incoterms, and how to choose the right shipping method for your business needs.',
    category: 'Shipping & Logistics',
    date: '2023-12-20',
    readTime: '7 min read',
    author: 'Michael Zhang',
    image: 'shipping container logistics',
  },
  {
    id: 4,
    title: 'Common Mistakes When Sourcing from China and How to Avoid Them',
    excerpt: 'Learn from the experiences of hundreds of buyers and avoid the pitfalls that can derail your sourcing project.',
    category: 'Sourcing Tips',
    date: '2023-12-10',
    readTime: '6 min read',
    author: 'James Wang',
    image: 'china sourcing meeting',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Suppliers: Strategies That Work',
    excerpt: 'Proven negotiation tactics for getting the best prices and terms from Chinese manufacturers without damaging relationships.',
    category: 'Negotiation',
    date: '2023-11-28',
    readTime: '9 min read',
    author: 'Emily Chen',
    image: 'business negotiation meeting',
  },
  {
    id: 6,
    title: 'Understanding Chinese Factory Certifications: CE, FCC, ISO, and More',
    excerpt: 'A comprehensive guide to the certifications your suppliers should have and how to verify their authenticity.',
    category: 'Compliance',
    date: '2023-11-15',
    readTime: '8 min read',
    author: 'David Chen',
    image: 'factory certification documents',
  },
]

const categories = [
  'All Posts',
  'Supplier Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Sourcing Tips',
  'Negotiation',
  'Compliance',
]

export default function Blog() {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert guidance on China sourcing, supplier verification, quality control, 
              and international trade best practices.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get Expert Help <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="aspect-video bg-gray-200">
                  <img
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] ${post.image}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 
                    id={`blog-${post.id}-title`}
                    className="text-lg font-bold text-gray-900 mb-3 line-clamp-2"
                  >
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights on China sourcing, 
              supplier management, and international trade.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of China sourcing experts is ready to help you navigate the 
            complexities of sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}