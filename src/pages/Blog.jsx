import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 'sourcing-guide-2024',
    title: 'The Complete Guide to Sourcing Products from China in 2024',
    excerpt: 'Everything you need to know about sourcing products from China, from finding suppliers to managing logistics and quality control.',
    author: 'SSourcing Team',
    date: '2024-01-15',
    category: 'Sourcing Guide',
    readTime: '12 min read',
    image: 'China sourcing guide for global buyers',
  },
  {
    id: 'supplier-verification',
    title: 'How to Verify Chinese Suppliers: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers and avoid common pitfalls in international sourcing.',
    author: 'David Zhang',
    date: '2024-01-10',
    category: 'Supplier Verification',
    readTime: '8 min read',
    image: 'Factory verification process in China',
  },
  {
    id: 'quality-control-tips',
    title: '10 Quality Control Tips for Importing from China',
    excerpt: 'Expert tips on implementing effective quality control measures to ensure your products meet specifications.',
    author: 'Lisa Chen',
    date: '2024-01-05',
    category: 'Quality Control',
    readTime: '10 min read',
    image: 'Quality inspection in Chinese factory',
  },
  {
    id: 'shipping-options',
    title: 'Sea vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare sea and air freight options to make the best decision for your shipping needs and budget.',
    author: 'Michael Wang',
    date: '2023-12-28',
    category: 'Logistics',
    readTime: '7 min read',
    image: 'Container shipping from China',
  },
  {
    id: 'customs-clearance',
    title: 'Understanding Customs Clearance When Importing from China',
    excerpt: 'A comprehensive guide to customs clearance procedures, documentation, and compliance requirements.',
    author: 'SSourcing Team',
    date: '2023-12-20',
    category: 'Import/Export',
    readTime: '9 min read',
    image: 'Customs clearance documentation',
  },
  {
    id: 'negotiation-strategies',
    title: 'Negotiation Strategies for Working with Chinese Suppliers',
    excerpt: 'Effective negotiation techniques to secure better pricing and terms with Chinese manufacturers.',
    author: 'David Zhang',
    date: '2023-12-15',
    category: 'Business Tips',
    readTime: '8 min read',
    image: 'Business negotiation meeting',
  },
]

const categories = [
  'All',
  'Sourcing Guide',
  'Supplier Verification',
  'Quality Control',
  'Logistics',
  'Import/Export',
  'Business Tips',
]

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Blog & Resources</h1>
            <p className="body-large text-gray-300">
              Expert insights, guides, and tips for sourcing products from China. 
              Stay informed with the latest industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="card overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="card-padding">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>

                      <h2 className="heading-4 text-foreground mb-3 group-hover:text-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{post.author}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-primary hover:text-primary-700 transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-muted-foreground hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-muted-foreground hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-muted-foreground hover:bg-gray-50 transition-colors">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-muted-foreground hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div className="card">
                  <div className="card-padding">
                    <h3 className="font-semibold text-foreground mb-4">Search</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="card">
                  <div className="card-padding">
                    <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className="px-3 py-1.5 bg-gray-100 text-sm text-muted-foreground rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="card bg-primary text-white">
                  <div className="card-padding">
                    <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Get the latest sourcing tips and industry insights delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent mb-4"
                    />
                    <button className="btn-accent w-full">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="card">
                  <div className="card-padding">
                    <h3 className="font-semibold text-foreground mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.id}`}
                          className="flex gap-3 group"
                        >
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{post.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
