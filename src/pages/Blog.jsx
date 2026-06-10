import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing orders. Protect your business from fraud with our comprehensive verification checklist.',
    category: 'Sourcing Guide',
    readTime: '8 min read',
    date: '2024-12-15',
    featured: true,
  },
  {
    id: 'aql-inspection-standards',
    title: 'Understanding AQL Inspection Standards',
    excerpt: 'AQL (Acceptable Quality Limit) is crucial for quality control. This guide explains how AQL sampling works and how to set the right standards for your products.',
    category: 'Quality Control',
    readTime: '6 min read',
    date: '2024-12-10',
    featured: false,
  },
  {
    id: 'shipping-from-china',
    title: 'Sea Freight vs Air Freight: Which is Right for You?',
    excerpt: 'Compare shipping methods from China based on cost, transit time, and product characteristics. Make informed decisions for your supply chain.',
    category: 'Logistics',
    readTime: '7 min read',
    date: '2024-12-05',
    featured: false,
  },
  {
    id: 'negotiation-china',
    title: 'Effective Negotiation Strategies with Chinese Suppliers',
    excerpt: 'Learn cultural insights and practical tactics for negotiating better prices and terms with Chinese manufacturers.',
    category: 'Business Tips',
    readTime: '5 min read',
    date: '2024-11-28',
    featured: false,
  },
  {
    id: 'payment-terms',
    title: 'Safe Payment Terms for China Sourcing',
    excerpt: 'Understand common payment methods and terms used in China sourcing. Learn how to protect your money while building trust with suppliers.',
    category: 'Sourcing Guide',
    readTime: '6 min read',
    date: '2024-11-20',
    featured: false,
  },
  {
    id: 'sample-management',
    title: 'The Complete Guide to Pre-Production Samples',
    excerpt: 'Everything you need to know about requesting, evaluating, and approving samples from Chinese suppliers.',
    category: 'Quality Control',
    readTime: '7 min read',
    date: '2024-11-15',
    featured: false,
  },
]

const categories = [
  'All Posts',
  'Sourcing Guide',
  'Quality Control',
  'Logistics',
  'Business Tips',
]

export function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Sourcing Insights & Resources
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Practical guides, tips, and industry insights to help you navigate China sourcing 
            with confidence.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(p => p.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary-500/30 text-white rounded-full text-sm font-medium mb-4 w-fit">
                    Featured Article
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {post.title}
                  </h2>
                  <p className="text-primary-100 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-primary-200 text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button className="bg-white text-primary-600 hover:bg-primary-50 w-fit">
                      Read Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-primary-500/20 flex items-center justify-center p-12">
                  <div className="w-48 h-48 bg-primary-400/30 rounded-full flex items-center justify-center">
                    <Search className="w-24 h-24 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === 'All Posts'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(p => !p.featured).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 flex items-center justify-center">
                  <div className="w-16 h-16 bg-neutral-300 rounded-xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-neutral-400" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                    <div className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <Link to={`/blog/${post.id}`} className="text-primary-600 font-medium text-sm flex items-center gap-1 hover:text-primary-700">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Get our latest articles, tips, and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-neutral-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}