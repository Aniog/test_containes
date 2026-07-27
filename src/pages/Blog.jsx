import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Clock, ArrowRight, Search, TrendingUp, Shield, Truck
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'Complete Guide to Supplier Verification in China',
    excerpt: 'Learn how to verify Chinese suppliers, what documents to check, and red flags to watch for to avoid scams.',
    category: 'Sourcing Guide',
    date: '2024-12-15',
    readTime: '8 min read',
    image: 'supplier-verification',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'Quality Inspection Checklist for Importers',
    excerpt: 'A comprehensive checklist for conducting quality inspections on products manufactured in China.',
    category: 'Quality Control',
    date: '2024-12-10',
    readTime: '6 min read',
    image: 'quality-inspection',
  },
  {
    id: 'shipping-options-china',
    title: 'Shipping from China: Air vs Sea vs Express',
    excerpt: 'Compare shipping methods from China - costs, transit times, and when to use each option.',
    category: 'Logistics',
    date: '2024-12-05',
    readTime: '5 min read',
    image: 'shipping',
  },
  {
    id: 'negotiating-china-suppliers',
    title: 'Negotiating with Chinese Suppliers: Tips & Strategies',
    excerpt: 'Master the art of negotiation with Chinese manufacturers to get the best prices and terms.',
    category: 'Sourcing Guide',
    date: '2024-11-28',
    readTime: '7 min read',
    image: 'negotiation',
  },
  {
    id: 'moq-explained',
    title: 'Understanding MOQ: Minimum Order Quantities Explained',
    excerpt: 'Everything you need to know about MOQs and how to negotiate flexible terms with suppliers.',
    category: 'Sourcing Guide',
    date: '2024-11-20',
    readTime: '4 min read',
    image: 'moq',
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms 2020: A Practical Guide for Importers',
    excerpt: 'Understand international trade terms like FOB, CIF, and EXW to avoid costly misunderstandings.',
    category: 'Logistics',
    date: '2024-11-12',
    readTime: '6 min read',
    image: 'incoterms',
  },
  {
    id: 'product-sampling',
    title: 'The Importance of Product Samples Before Mass Production',
    excerpt: 'Why ordering samples is critical and how to evaluate them effectively.',
    category: 'Quality Control',
    date: '2024-11-05',
    readTime: '5 min read',
    image: 'samples',
  },
  {
    id: 'payment-terms',
    title: 'Safe Payment Terms When Sourcing from China',
    excerpt: 'Learn about payment options and how to protect yourself when paying Chinese suppliers.',
    category: 'Sourcing Guide',
    date: '2024-10-28',
    readTime: '6 min read',
    image: 'payment',
  },
]

const categories = [
  { name: 'All Posts', count: 8 },
  { name: 'Sourcing Guide', count: 4 },
  { name: 'Quality Control', count: 2 },
  { name: 'Logistics', count: 2 },
]

const featuredPost = {
  title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
  excerpt: 'Finding trustworthy suppliers is the foundation of successful China sourcing. This comprehensive guide walks you through the entire process, from initial research to final verification.',
  category: 'Sourcing Guide',
  date: '2024-12-20',
  readTime: '10 min read',
}

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Insights and guides for successful China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mt-4 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button>
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8 lg:p-12">
                <FileText className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border sticky top-24">
                <h3 className="font-semibold text-text-primary mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-text-secondary hover:bg-background-light hover:text-text-primary transition-colors flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm text-text-secondary">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-semibold text-text-primary mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-primary/30" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto mb-8">
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none"
              />
              <Button size="lg" className="bg-accent hover:bg-accent-hover whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage