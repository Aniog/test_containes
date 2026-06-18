import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Search,
  FileText,
  Shield,
  Truck,
  ClipboardCheck,
  TrendingUp,
  Building2
} from 'lucide-react'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify Chinese Suppliers Before Placing Orders',
    excerpt: 'A comprehensive guide to verifying factory legitimacy, checking business licenses, and assessing production capabilities to avoid scams.',
    category: 'Supplier Verification',
    date: '2024-12-15',
    readTime: '8 min read',
    author: 'Michael Chen',
    icon: Shield,
  },
  {
    id: 'quality-inspection-standards',
    title: 'Understanding AQL Quality Inspection Standards',
    excerpt: 'Learn about Acceptable Quality Level (AQL) standards and how to set appropriate inspection criteria for your products.',
    category: 'Quality Control',
    date: '2024-12-10',
    readTime: '6 min read',
    author: 'Sarah Zhang',
    icon: ClipboardCheck,
  },
  {
    id: 'shipping-options-china',
    title: 'Shipping from China: Air vs Sea vs Express - Which is Right for You?',
    excerpt: 'Compare shipping methods from China including costs, transit times, and when to use each option for your business.',
    category: 'Logistics',
    date: '2024-12-05',
    readTime: '7 min read',
    author: 'David Liu',
    icon: Truck,
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms 2020: A Practical Guide for Importers',
    excerpt: 'Understanding Incoterms is crucial for international trade. Learn about EXW, FOB, CIF, DDP, and more.',
    category: 'Trade Terms',
    date: '2024-11-28',
    readTime: '10 min read',
    author: 'James Wong',
    icon: FileText,
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Tips for Better Deals',
    excerpt: 'Master the art of negotiation with Chinese factories. Learn cultural insights and practical strategies for better pricing.',
    category: 'Sourcing Tips',
    date: '2024-11-20',
    readTime: '6 min read',
    author: 'Emma Wu',
    icon: TrendingUp,
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look For',
    excerpt: 'A detailed checklist for conducting factory audits including production capacity, quality systems, and compliance verification.',
    category: 'Supplier Verification',
    date: '2024-11-12',
    readTime: '9 min read',
    author: 'Michael Chen',
    icon: Building2,
  },
]

const categories = [
  { name: 'All Posts', count: 6 },
  { name: 'Supplier Verification', count: 2 },
  { name: 'Quality Control', count: 1 },
  { name: 'Logistics', count: 1 },
  { name: 'Trade Terms', count: 1 },
  { name: 'Sourcing Tips', count: 1 },
]

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | China Sourcing Insights & Guides | SSourcing China</title>
        <meta name="description" content="Expert insights on China sourcing, supplier verification, quality control, logistics, and international trade. Practical guides for importers." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert guidance on China sourcing, supplier verification, quality control, 
              and international trade. Practical knowledge for smarter importing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Shield className="w-24 h-24 text-slate-600" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="text-slate-400 text-sm">Supplier Verification</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-300 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                  </div>
                  <button className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <post.icon className="w-16 h-16 text-slate-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Subscribe to our newsletter for the latest China sourcing insights and tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog