import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag, User, Search } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: 'June 15, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding AQL Inspection: What Buyers Need to Know',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for product inspection sampling. Learn how it works and how to use it to protect your orders.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: 'May 28, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Sea Freight vs. Air Freight from China: Cost and Time Comparison',
    excerpt: 'Choosing between sea and air freight depends on your budget, timeline, and product type. Here is a detailed comparison to help you decide.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: 'May 12, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Top 10 Manufacturing Cities in China for Product Sourcing',
    excerpt: 'From Shenzhen electronics to Foshan furniture, each Chinese city specializes in different products. Here is your guide to the top manufacturing hubs.',
    category: 'Industry Knowledge',
    author: 'SSourcing Team',
    date: 'April 22, 2025',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Effective price negotiation with Chinese suppliers requires cultural understanding and strategic approach. Learn proven tactics to get competitive pricing.',
    category: 'Sourcing Tips',
    author: 'SSourcing Team',
    date: 'April 5, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'CE, FCC, RoHS: Product Certifications Explained for Importers',
    excerpt: 'Confused about product certifications? This guide explains the most common certifications required for importing goods from China to different markets.',
    category: 'Compliance',
    author: 'SSourcing Team',
    date: 'March 18, 2025',
    readTime: '9 min read',
    featured: false,
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Industry Knowledge', 'Sourcing Tips', 'Compliance']

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Sourcing Insights & Guides</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert tips to help you source from China more effectively.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-slate-200 sticky top-16 lg:top-18 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          {filtered.filter(p => p.featured).map((post) => (
            <div key={post.id} className="mb-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-10 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">Featured</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-medium rounded-full">{post.category}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{post.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">{post.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Grid posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.filter(p => !p.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Stay Updated</h2>
          <p className="text-slate-500 mb-6">Get the latest sourcing tips and industry insights delivered to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900"
            />
            <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
