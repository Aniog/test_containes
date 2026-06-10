import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const heroRef = useRef(null)
  const postsRef = useRef(null)

  useEffect(() => {
    const loadImages = (ref) => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
      return undefined
    }

    const cleanups = [
      loadImages(heroRef),
      loadImages(postsRef),
    ].filter(Boolean)

    return () => cleanups.forEach(cleanup => cleanup())
  }, [])

  const posts = [
    {
      id: 1,
      title: 'How to Verify Chinese Suppliers Before Placing Orders',
      excerpt: 'Learn the essential steps to verify supplier credentials, factory capabilities, and business licenses before committing to a partnership.',
      date: '2024-03-15',
      author: 'SSourcing Team',
      category: 'Sourcing Tips',
      image: 'supplier-verification-guide',
      titleId: 'blog-title-1',
    },
    {
      id: 2,
      title: 'Quality Inspection Checklist for Importing from China',
      excerpt: 'A comprehensive checklist for conducting quality inspections during and after production to ensure your products meet specifications.',
      date: '2024-03-10',
      author: 'SSourcing Team',
      category: 'Quality Control',
      image: 'quality-inspection-checklist',
      titleId: 'blog-title-2',
    },
    {
      id: 3,
      title: 'Understanding Incoterms: A Guide for Importers',
      excerpt: 'Demystifying Incoterms (International Commercial Terms) and how they affect your shipping costs, risks, and responsibilities.',
      date: '2024-03-05',
      author: 'SSourcing Team',
      category: 'Logistics',
      image: 'incoterms-guide',
      titleId: 'blog-title-3',
    },
    {
      id: 4,
      title: 'How to Negotiate Better Prices with Chinese Suppliers',
      excerpt: 'Practical tips and strategies for negotiating favorable prices, payment terms, and delivery schedules with Chinese manufacturers.',
      date: '2024-02-28',
      author: 'SSourcing Team',
      category: 'Negotiation',
      image: 'price-negotiation-tips',
      titleId: 'blog-title-4',
    },
    {
      id: 5,
      title: 'Top 10 Product Certification Requirements for Export',
      excerpt: 'An overview of common certification requirements (CE, FCC, RoHS, etc.) for exporting products to US, EU, and other major markets.',
      date: '2024-02-20',
      author: 'SSourcing Team',
      category: 'Compliance',
      image: 'product-certifications',
      titleId: 'blog-title-5',
    },
    {
      id: 6,
      title: 'Managing Production Delays: Prevention and Mitigation',
      excerpt: 'How to identify potential delays early, communicate with suppliers, and mitigate the impact on your supply chain.',
      date: '2024-02-15',
      author: 'SSourcing Team',
      category: 'Production',
      image: 'production-delay-management',
      titleId: 'blog-title-6',
    },
  ]

  const categories = [
    'All Posts',
    'Sourcing Tips',
    'Quality Control',
    'Logistics',
    'Negotiation',
    'Compliance',
    'Production',
  ]

  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const filteredPosts = selectedCategory === 'All Posts'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            data-strk-bg-id="blog-hero-bg"
            data-strk-bg="[blog-hero-subtitle] [blog-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog & Resources
          </h1>
          <p id="blog-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert insights on China sourcing, quality control, and supply chain management
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white" ref={postsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-strk-img-id={`blog-${post.id}`}
                    data-strk-img={`[${post.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <h2 id={post.titleId} className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing, quality control, and supply chain management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
