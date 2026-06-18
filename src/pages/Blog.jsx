import { Link } from 'react-router-dom'
import { ArrowRight, Search, Shield, FileCheck, Truck, Users, BookOpen, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'Complete Guide to Factory Verification in China',
    excerpt: 'Learn how to verify Chinese suppliers, what to look for during factory audits, and how to avoid common scams.',
    category: 'Supplier Verification',
    date: '2024-12-15',
    readTime: '8 min read',
    image: 'factory-verification',
  },
  {
    id: 'quality-control-basics',
    title: 'Quality Control 101: A Buyer\'s Handbook',
    excerpt: 'Understanding AQL, inspection stages, and how to establish effective quality control for your China orders.',
    category: 'Quality Control',
    date: '2024-12-10',
    readTime: '10 min read',
    image: 'quality-control',
  },
  {
    id: 'sourcing-electronics',
    title: 'Sourcing Electronics from China: Key Considerations',
    excerpt: 'Navigate the complexities of electronics sourcing, from component verification to compliance requirements.',
    category: 'Sourcing Guide',
    date: '2024-12-05',
    readTime: '12 min read',
    image: 'electronics-sourcing',
  },
  {
    id: 'shipping-options',
    title: 'Shipping from China: Air vs Sea vs Express',
    excerpt: 'Compare shipping methods, costs, and transit times to choose the best option for your business.',
    category: 'Logistics',
    date: '2024-11-28',
    readTime: '7 min read',
    image: 'shipping-options',
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Best Practices',
    excerpt: 'Master the art of negotiation with Chinese manufacturers to get the best prices and terms.',
    category: 'Sourcing Guide',
    date: '2024-11-20',
    readTime: '9 min read',
    image: 'negotiation',
  },
  {
    id: 'ip-protection',
    title: 'Protecting Your IP When Sourcing from China',
    excerpt: 'Essential strategies to protect your intellectual property when manufacturing in China.',
    category: 'Compliance',
    date: '2024-11-12',
    readTime: '11 min read',
    image: 'ip-protection',
  },
  {
    id: 'sample-evaluation',
    title: 'How to Evaluate Product Samples Effectively',
    excerpt: 'A systematic approach to evaluating samples to ensure they meet your specifications.',
    category: 'Quality Control',
    date: '2024-11-05',
    readTime: '6 min read',
    image: 'sample-evaluation',
  },
  {
    id: 'payment-terms',
    title: 'Understanding Payment Terms with Chinese Suppliers',
    excerpt: 'Navigate payment methods, terms, and strategies to minimize risk in international transactions.',
    category: 'Finance',
    date: '2024-10-28',
    readTime: '8 min read',
    image: 'payment-terms',
  },
  {
    id: 'certifications',
    title: 'Essential Certifications for China Exports',
    excerpt: 'A comprehensive guide to certifications your products may need for export from China.',
    category: 'Compliance',
    date: '2024-10-20',
    readTime: '10 min read',
    image: 'certifications',
  },
]

const categories = [
  { name: 'All Posts', count: 9 },
  { name: 'Supplier Verification', count: 1 },
  { name: 'Quality Control', count: 2 },
  { name: 'Sourcing Guide', count: 2 },
  { name: 'Logistics', count: 1 },
  { name: 'Compliance', count: 2 },
  { name: 'Finance', count: 1 },
]

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-300">
              Expert guidance on China sourcing, supplier verification, quality control, 
              and logistics. Stay informed with our latest articles and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-12 flex items-center justify-center">
                <Shield className="w-24 h-24 text-blue-900" />
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  Featured
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-4">
                  Complete Guide to Factory Verification in China
                </h2>
                <p className="text-gray-600 mb-6">
                  Learn how to verify Chinese suppliers, what to look for during factory audits, 
                  and how to avoid common scams. This comprehensive guide covers everything you 
                  need to know before placing your first order.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Dec 15, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-900 font-medium hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Posts */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-blue-900" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest China sourcing insights and tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Sourcing Help?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team is ready to assist you with your China sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}