import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, Search } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'Complete Guide to Supplier Verification in China',
    excerpt:
      'Learn the essential steps to verify Chinese suppliers and avoid fraud. Our comprehensive guide covers business license checks, factory visits, and red flags to watch for.',
    category: 'Sourcing Tips',
    author: 'James Zhang',
    date: '2024-12-15',
    readTime: '8 min read',
    image: 'supplier verification documents',
  },
  {
    id: 'quality-control-inspection',
    title: 'Understanding AQL in Quality Control Inspections',
    excerpt:
      'AQL (Acceptable Quality Level) is crucial for product inspections. Learn how to set appropriate AQL levels and what they mean for your business.',
    category: 'Quality Control',
    author: 'Sarah Chen',
    date: '2024-12-10',
    readTime: '6 min read',
    image: 'quality control inspection',
  },
  {
    id: 'shipping-options-china',
    title: 'Shipping from China: Air vs Sea vs Express',
    excerpt:
      'Compare shipping methods from China to find the best option for your business. We break down costs, transit times, and when to use each method.',
    category: 'Logistics',
    author: 'Michael Liu',
    date: '2024-12-05',
    readTime: '7 min read',
    image: 'shipping container logistics',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look For',
    excerpt:
      'A comprehensive factory audit checklist to ensure your potential suppliers meet quality and compliance standards before you place orders.',
    category: 'Quality Control',
    author: 'Emily Wang',
    date: '2024-11-28',
    readTime: '10 min read',
    image: 'factory audit inspection',
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Best Practices',
    excerpt:
      'Master the art of negotiation with Chinese suppliers. Learn cultural insights, pricing strategies, and how to build long-term relationships.',
    category: 'Sourcing Tips',
    author: 'David Park',
    date: '2024-11-20',
    readTime: '6 min read',
    image: 'business negotiation meeting',
  },
  {
    id: 'certifications-guide',
    title: 'Common Product Certifications for China Sourcing',
    excerpt:
      'Navigate the complex world of product certifications. CE, FCC, RoHS, and more - understand what your products need for different markets.',
    category: 'Compliance',
    author: 'Lisa Thompson',
    date: '2024-11-12',
    readTime: '9 min read',
    image: 'product certifications',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Suppliers',
    excerpt:
      'Minimum Order Quantities can be a barrier for small businesses. Learn effective strategies to negotiate flexible MOQs with Chinese manufacturers.',
    category: 'Sourcing Tips',
    author: 'James Zhang',
    date: '2024-11-05',
    readTime: '5 min read',
    image: 'manufacturing facility',
  },
  {
    id: 'payment-terms',
    title: 'Safe Payment Terms for China Sourcing',
    excerpt:
      'Protect your business with proper payment terms. Learn about different payment methods, escrow services, and how to structure safe transactions.',
    category: 'Finance',
    author: 'Michael Liu',
    date: '2024-10-28',
    readTime: '7 min read',
    image: 'business documents',
  },
  {
    id: 'sample-process',
    title: 'The Sample Process: Getting What You Need',
    excerpt:
      'Navigate the sample process effectively. From requesting samples to evaluating them, ensure you get accurate representations of your final product.',
    category: 'Sourcing Tips',
    author: 'Sarah Chen',
    date: '2024-10-20',
    readTime: '6 min read',
    image: 'product samples',
  },
]

const categories = [
  'All',
  'Sourcing Tips',
  'Quality Control',
  'Logistics',
  'Compliance',
  'Finance',
]

export default function BlogPage() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts[0]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Insights and expertise on China sourcing, quality control, and
              international trade.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-inter text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-[#E67E22] text-white'
                      : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#E67E22]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-[#E67E22]/10 text-[#E67E22] font-inter text-sm font-medium rounded-full">
              Featured Article
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                data-strk-img-id="blog-featured-8f2a9c"
                data-strk-img="[blog-featured-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#E67E22] text-white font-inter text-sm font-medium rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div>
              <h2
                id="blog-featured-title"
                className="font-plus text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4"
              >
                {featuredPost.title}
              </h2>
              <p className="font-inter text-[#64748B] mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#64748B] mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-inter font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
              >
                Read Article
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-plus text-3xl font-bold text-[#1E293B] mb-4">
              Latest Articles
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              {filteredPosts.length} articles found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video">
                    <img
                      data-strk-img-id={`blog-${post.id}-8f2a9c`}
                      data-strk-img={`[blog-title-${post.id}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/90 text-[#1E293B] font-inter text-xs font-medium rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      id={`blog-title-${post.id}`}
                      className="font-plus text-lg font-semibold text-[#1E293B] mb-2 line-clamp-2"
                    >
                      {post.title}
                    </h3>
                    <p className="font-inter text-sm text-[#64748B] line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-inter text-lg text-[#64748B]">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-plus text-3xl font-bold text-[#1E293B] mb-4">
            Stay Updated
          </h2>
          <p className="font-inter text-lg text-[#64748B] mb-8">
            Subscribe to our newsletter for the latest insights on China
            sourcing.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#E67E22]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#E67E22] text-white font-inter font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}