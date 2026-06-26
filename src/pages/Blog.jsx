import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react'

const Blog = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      window.ImageHelper.loadImages(window.strkImgConfig, containerRef.current)
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Guide',
      excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your order. From business licenses to factory audits, we cover everything you need to know.',
      date: '2024-01-15',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      image: 'factory verification china sourcing',
    },
    {
      id: 2,
      title: 'Quality Inspection in China: What You Need to Know',
      excerpt: 'Understanding quality inspection processes in China can save you from receiving defective products. Learn about different inspection types and when to use them.',
      date: '2024-01-10',
      author: 'SSourcing Team',
      category: 'Quality Control',
      image: 'quality inspection manufacturing china',
    },
    {
      id: 3,
      title: 'Incoterms Explained: FOB, CIF, EXW and More',
      excerpt: 'A practical guide to Incoterms for importers. Understand the responsibilities and costs associated with each term to make informed shipping decisions.',
      date: '2024-01-05',
      author: 'SSourcing Team',
      category: 'Shipping & Logistics',
      image: 'shipping containers port logistics',
    },
    {
      id: 4,
      title: 'How to Negotiate with Chinese Suppliers: 7 Tips',
      excerpt: 'Negotiating with Chinese suppliers requires cultural understanding and preparation. Here are 7 practical tips to help you get better deals.',
      date: '2023-12-28',
      author: 'SSourcing Team',
      category: 'Negotiation',
      image: 'business meeting negotiation china',
    },
    {
      id: 5,
      title: 'Understanding MOQ: Minimum Order Quantity in China Sourcing',
      excerpt: 'MOQ can be a barrier for small businesses. Learn strategies to negotiate lower MOQs and find suppliers willing to work with smaller orders.',
      date: '2023-12-20',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      image: 'warehouse inventory management',
    },
    {
      id: 6,
      title: 'Product Certification for Importing from China',
      excerpt: 'Different markets require different certifications. Learn about CE, FCC, FDA, and other common certifications for products sourced from China.',
      date: '2023-12-15',
      author: 'SSourcing Team',
      category: 'Compliance',
      image: 'product certification testing lab',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Insights, tips, and guides for successful China sourcing
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow overflow-hidden">
                {/* Image placeholder */}
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Featured Image</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 font-medium text-sm hover:text-blue-700 inline-flex items-center gap-1"
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest sourcing tips, industry insights, and updates.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Topics</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Supplier Verification',
              'Quality Control',
              'Shipping & Logistics',
              'Negotiation Tips',
              'Product Certification',
              'MOQ & Pricing',
              'Factory Audits',
              'Sourcing Strategy',
              'Risk Management',
              'Payment Terms',
            ].map((topic, index) => (
              <Link
                key={index}
                to={`/blog?topic=${topic.toLowerCase().replace(' ', '-')}`}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
