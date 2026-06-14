import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  Factory,
  Shield,
  Ship,
  Globe
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Checklist',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to on-site audits, we cover everything you need to know.',
    category: 'Supplier Verification',
    date: '2026-06-10',
    readTime: '8 min read',
    author: 'Michael Chen',
    featured: true,
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Quality Inspection in China',
    excerpt: 'Understanding the different types of inspections, when to conduct them, and how to interpret inspection reports to protect your business.',
    category: 'Quality Control',
    date: '2026-06-05',
    readTime: '12 min read',
    author: 'Sarah Wang',
    featured: true,
  },
  {
    id: 3,
    title: 'Shipping from China: Air vs Sea Freight Explained',
    excerpt: 'A comprehensive comparison of air and sea freight options, including cost analysis, transit times, and when to choose each method.',
    category: 'Logistics',
    date: '2026-05-28',
    readTime: '6 min read',
    author: 'David Liu',
    featured: false,
  },
  {
    id: 4,
    title: 'Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Learn from others\' mistakes. We outline the most common pitfalls faced by overseas buyers and provide practical solutions.',
    category: 'Sourcing Tips',
    date: '2026-05-20',
    readTime: '10 min read',
    author: 'Michael Chen',
    featured: false,
  },
  {
    id: 5,
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'Strategies for negotiating MOQs with Chinese suppliers, including when to accept, when to push back, and alternative approaches.',
    category: 'Negotiation',
    date: '2026-05-15',
    readTime: '7 min read',
    author: 'Sarah Wang',
    featured: false,
  },
  {
    id: 6,
    title: 'The Rise of Chinese Private Label Manufacturers',
    excerpt: 'How private label manufacturing in China has evolved and what it means for brands looking to create their own products.',
    category: 'Industry Trends',
    date: '2026-05-08',
    readTime: '9 min read',
    author: 'David Liu',
    featured: false,
  },
  {
    id: 7,
    title: 'Payment Terms in China: What You Need to Know',
    excerpt: 'A guide to common payment methods and terms used in Chinese trade, including T/T, L/C, and trade assurance options.',
    category: 'Finance',
    date: '2026-04-30',
    readTime: '8 min read',
    author: 'Michael Chen',
    featured: false,
  },
  {
    id: 8,
    title: 'How to Read an Inspection Report: A Buyer\'s Guide',
    excerpt: 'Understanding the key sections of a pre-shipment inspection report and what to look for to ensure product quality.',
    category: 'Quality Control',
    date: '2026-04-22',
    readTime: '11 min read',
    author: 'Sarah Wang',
    featured: false,
  },
]

const categories = [
  { name: 'All Posts', count: 8, icon: BookOpen },
  { name: 'Supplier Verification', count: 3, icon: Shield },
  { name: 'Quality Control', count: 2, icon: Factory },
  { name: 'Logistics', count: 1, icon: Ship },
  { name: 'Sourcing Tips', count: 1, icon: TrendingUp },
  { name: 'Industry Trends', count: 1, icon: Globe },
]

function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Sourcing Insights & Resources
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Practical advice, industry insights, and expert guidance to help you source from China successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-slate-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 hover:text-slate-700 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                      <span className="text-sm text-slate-600">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-slate-200 sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="flex items-center justify-between w-full text-left text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        <span className="flex items-center gap-2">
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </span>
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-slate-700 cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-slate-600" />
                            </div>
                            <span className="text-sm text-slate-600">{post.author}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated with Sourcing Insights
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, tips, and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
