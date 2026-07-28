import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Mail, Clock, User, Tag, Search, Calendar
} from 'lucide-react'

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify supplier legitimacy, from business license checks to factory visits and financial assessments.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: '2026-07-15',
    readTime: '8 min read',
    imageId: 'blog-verification-001',
    imageQuery: 'factory inspection verification business meeting',
    featured: true,
  },
  {
    id: 'quality-control-checkpoints',
    title: 'Understanding QC Inspection Checkpoints: DUPRO, PSI, and More',
    excerpt: 'A practical overview of quality control inspection types and when to use each one during your manufacturing process.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: '2026-07-08',
    readTime: '6 min read',
    imageId: 'blog-qc-001',
    imageQuery: 'quality inspection products checking factory',
    featured: false,
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: FOB, CIF, EXW – Which Terms to Use?',
    excerpt: 'Understanding Incoterms and choosing the right shipping terms for your business to protect your interests.',
    category: 'Shipping & Logistics',
    author: 'SSourcing China Team',
    date: '2026-06-28',
    readTime: '7 min read',
    imageId: 'blog-shipping-001',
    imageQuery: 'shipping containers port logistics freight',
    featured: false,
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Best Practices',
    excerpt: 'Effective strategies for negotiating prices, MOQs, and payment terms while building strong supplier relationships.',
    category: 'Business Tips',
    author: 'SSourcing China Team',
    date: '2026-06-15',
    readTime: '5 min read',
    imageId: 'blog-negotiation-001',
    imageQuery: 'business negotiation meeting handshake professional',
    featured: false,
  },
  {
    id: 'common-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Learn from others\' experiences and avoid costly pitfalls in your China sourcing journey.',
    category: 'Guides',
    author: 'SSourcing China Team',
    date: '2026-06-01',
    readTime: '9 min read',
    imageId: 'blog-mistakes-001',
    imageQuery: 'business planning strategy error prevention',
    featured: false,
  },
  {
    id: 'payment-terms-china',
    title: 'Safe Payment Terms for China Trade: Protecting Your Investment',
    excerpt: 'Understanding payment methods, terms, and safeguards when paying Chinese suppliers.',
    category: 'Payment & Finance',
    author: 'SSourcing China Team',
    date: '2026-05-20',
    readTime: '6 min read',
    imageId: 'blog-payment-001',
    imageQuery: 'business finance payment security documents',
    featured: false,
  },
]

const categories = [
  { name: 'All Posts', count: 6 },
  { name: 'Supplier Verification', count: 1 },
  { name: 'Quality Control', count: 1 },
  { name: 'Shipping & Logistics', count: 1 },
  { name: 'Business Tips', count: 1 },
  { name: 'Guides', count: 1 },
  { name: 'Payment & Finance', count: 1 },
]

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const Blog = () => {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0]
  const otherPosts = filteredPosts.filter(post => post.id !== featuredPost?.id)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="blog-hero-bg"
            data-strk-bg="knowledge learning business research"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Expert guidance, practical tips, and industry knowledge to help you succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Featured Article
            </span>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors inline-flex items-center gap-2">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-slate-200 rounded-2xl" />
                <img
                  data-strk-img-id={featuredPost.imageId}
                  data-strk-img={featuredPost.imageQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featuredPost.title}
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-600" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setActiveCategory(cat.name)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeCategory === cat.name
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {cat.name}
                        <span className="float-right text-slate-400">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-blue-800 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Need Expert Help?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalized sourcing assistance from our team.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-md font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-slate-200 relative">
                      <img
                        data-strk-img-id={post.imageId}
                        data-strk-img={post.imageQuery}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-blue-700 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {otherPosts.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                  <p className="text-slate-500">No articles found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get the latest sourcing tips, industry insights, and company updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-slate-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog
