import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Clock, User, Calendar, Search, Tag,
  FileText, MessageSquare, TrendingUp, CheckCircle, Package
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'

const blogPosts = [
  {
    id: 1,
    title: '10 Common Mistakes to Avoid When Sourcing from China',
    excerpt: 'Learn the most frequent pitfalls that businesses encounter when sourcing products from China and how to avoid them.',
    category: 'Sourcing Tips',
    author: 'David Zhang',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Understanding Quality Control Standards: AQL Explained',
    excerpt: 'A comprehensive guide to Acceptable Quality Limit (AQL) sampling and how to implement effective QC inspections.',
    category: 'Quality Control',
    author: 'Lisa Wang',
    date: '2024-01-10',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 3,
    title: 'How to Verify Chinese Suppliers: A Complete Checklist',
    excerpt: 'Step-by-step guide to verifying supplier legitimacy, capabilities, and reliability before placing orders.',
    category: 'Supplier Management',
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Shipping Options from China: Sea vs Air vs Express',
    excerpt: 'Compare shipping methods, costs, transit times, and when to use each option for your China imports.',
    category: 'Logistics',
    author: 'Sarah Liu',
    date: '2023-12-28',
    readTime: '7 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Negotiating with Chinese Manufacturers: Best Practices',
    excerpt: 'Tips and strategies for effective negotiation with Chinese suppliers to get the best prices and terms.',
    category: 'Negotiation',
    author: 'James Zhang',
    date: '2023-12-20',
    readTime: '9 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Incoterms Explained: Choosing the Right Terms for Your Order',
    excerpt: 'Understanding Incoterms 2020 and how to select the appropriate terms for your China sourcing contracts.',
    category: 'Logistics',
    author: 'Emily Wu',
    date: '2023-12-15',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 7,
    title: 'Protecting Your Intellectual Property in China',
    excerpt: 'Essential steps to safeguard your designs, patents, and trade secrets when manufacturing in China.',
    category: 'Legal & Compliance',
    author: 'David Zhang',
    date: '2023-12-10',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 8,
    title: 'Sample Orders: Why They Matter and How to Handle Them',
    excerpt: 'The importance of samples in China sourcing and best practices for sample approval processes.',
    category: 'Sourcing Tips',
    author: 'Lisa Wang',
    date: '2023-12-05',
    readTime: '5 min read',
    featured: false
  }
]

const categories = [
  { name: 'All Posts', count: 24 },
  { name: 'Sourcing Tips', count: 8 },
  { name: 'Quality Control', count: 5 },
  { name: 'Logistics', count: 4 },
  { name: 'Supplier Management', count: 3 },
  { name: 'Negotiation', count: 2 },
  { name: 'Legal & Compliance', count: 2 }
]

const featuredPost = blogPosts.find(post => post.featured)

const BlogPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-light] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            China Sourcing Blog
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Expert insights, practical tips, and industry knowledge to help you succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Article"
            title="Must-Read Guide"
            subtitle="Start here with our most comprehensive article on China sourcing."
          />
          
          <div className="mt-12 bg-[--color-bg-light] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[--color-primary]/20 to-[--color-accent]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText className="w-20 h-20 text-[--color-primary]/30 mx-auto mb-4" />
                  <p className="text-[--color-text-muted] font-medium">Featured Article</p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[--color-accent]/10 text-[--color-accent] text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-[--color-text-muted]">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[--color-text-dark] mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-[--color-text-muted] mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[--color-primary] rounded-full flex items-center justify-center text-white font-semibold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-[--color-text-dark] text-sm">{featuredPost.author}</div>
                      <div className="text-xs text-[--color-text-muted]">{featuredPost.date}</div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/blog"
                  className="mt-6 inline-flex items-center gap-2 text-[--color-primary] font-semibold hover:text-[--color-primary-light] transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-16 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="font-semibold text-[--color-text-dark] mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        index === 0 ? 'bg-[--color-primary] text-white' : 'hover:bg-[--color-bg-light] text-[--color-text-muted]'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs ${index === 0 ? 'text-white/70' : 'text-[--color-text-light]'}`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[--color-border]">
                  <h3 className="font-semibold text-[--color-text-dark] mb-4">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Supplier Verification', 'Quality Control', 'Shipping', 'Negotiation', 'Incoterms', 'IP Protection'].map((topic, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[--color-bg-light] text-[--color-text-muted] text-xs rounded-full">
                        <Tag className="w-3 h-3" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[--color-border]">
                  <h3 className="font-semibold text-[--color-text-dark] mb-4">Need Help?</h3>
                  <p className="text-sm text-[--color-text-muted] mb-4">
                    Get personalized advice from our sourcing experts.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[--color-accent] text-white font-semibold text-sm rounded-lg hover:bg-[--color-accent-dark] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content - Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-[--color-bg-light] to-[--color-bg-navy-light] flex items-center justify-center">
                      <FileText className="w-12 h-12 text-[--color-primary]/30" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 bg-[--color-bg-navy-light] text-[--color-primary] text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[--color-text-muted]">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[--color-text-dark] mb-2 line-clamp-2 hover:text-[--color-primary] transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[--color-text-muted] mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-[--color-primary] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-[--color-text-dark]">{post.author}</div>
                            <div className="text-xs text-[--color-text-muted]">{post.date}</div>
                          </div>
                        </div>
                        <button className="text-sm text-[--color-primary] font-medium hover:text-[--color-primary-light] transition-colors">
                          Read More
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-[--color-border] text-[--color-text-muted] hover:bg-[--color-bg-light] transition-colors">
                  Previous
                </button>
                <button className="w-10 h-10 rounded-lg bg-[--color-primary] text-white font-medium">1</button>
                <button className="w-10 h-10 rounded-lg border border-[--color-border] text-[--color-text-muted] hover:bg-[--color-bg-light] transition-colors">2</button>
                <button className="w-10 h-10 rounded-lg border border-[--color-border] text-[--color-text-muted] hover:bg-[--color-bg-light] transition-colors">3</button>
                <button className="w-10 h-10 rounded-lg border border-[--color-border] text-[--color-text-muted] hover:bg-[--color-bg-light] transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[--color-primary] rounded-2xl p-8 md:p-12 text-center">
            <MessageSquare className="w-12 h-12 text-[--color-accent-light] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get the latest China sourcing insights, tips, and industry updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-grow px-4 py-3 rounded-lg text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-[--color-accent]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[--color-accent] text-white font-semibold rounded-lg hover:bg-[--color-accent-dark] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/60 text-xs mt-4">
              No spam, unsubscribe anytime. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quick Tips"
            title="Sourcing Essentials"
            subtitle="Key points to remember when sourcing from China."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: 'Always Verify Suppliers',
                description: 'Conduct thorough due diligence before working with any supplier.'
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Start with Samples',
                description: 'Always order samples before placing bulk orders.'
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: 'Implement QC Checks',
                description: 'Quality inspections at every production stage save money.'
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Document Everything',
                description: 'Keep detailed records of all communications and agreements.'
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-lg flex items-center justify-center text-[--color-primary] mb-4">
                  {tip.icon}
                </div>
                <h4 className="font-semibold text-[--color-text-dark] mb-2">{tip.title}</h4>
                <p className="text-sm text-[--color-text-muted]">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[--color-primary]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Apply This Knowledge?
          </h2>
          <p className="text-white/80 mb-8">
            Put these insights into practice with our expert sourcing services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
