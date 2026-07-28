import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  User,
  Clock,
  Tag,
  Search,
  TrendingUp,
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Find Reliable Suppliers in China: A Complete Guide',
    excerpt: 'Learn the essential steps to identify, evaluate, and verify suppliers in China. From online platforms to trade shows, discover the best methods for finding trustworthy manufacturing partners.',
    category: 'Supplier Sourcing',
    author: 'SSourcing Team',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Quality Control in China: Best Practices for Importers',
    excerpt: 'Discover the key quality control measures every importer should implement. From pre-production samples to final inspections, learn how to ensure your products meet specifications.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: '2024-01-08',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Understanding Chinese Business Culture for Better Negotiations',
    excerpt: 'Navigate Chinese business culture successfully with insights on relationship building, negotiation tactics, and communication styles that lead to better deals.',
    category: 'Business Tips',
    author: 'SSourcing Team',
    date: '2024-01-02',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Sea Freight vs Air Freight: Which is Right for Your Business?',
    excerpt: 'Compare the costs, timelines, and best use cases for sea and air freight from China. Make informed shipping decisions for your import business.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: '2023-12-28',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Top 10 Mistakes to Avoid When Importing from China',
    excerpt: 'Avoid common pitfalls that cost importers time and money. Learn from the mistakes of others and set yourself up for success in China sourcing.',
    category: 'Business Tips',
    author: 'SSourcing Team',
    date: '2023-12-20',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Factory Audits: What to Look for When Visiting Chinese Factories',
    excerpt: 'A comprehensive checklist for evaluating Chinese factories during on-site visits. Know what to inspect and what questions to ask to assess supplier capability.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: '2023-12-15',
    readTime: '10 min read',
    featured: false,
  },
]

const categories = [
  'All',
  'Supplier Sourcing',
  'Quality Control',
  'Business Tips',
  'Shipping & Logistics',
  'Supplier Verification',
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
            Blog & Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Expert advice, industry insights, and practical guides to help you
            succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
                    Featured Article
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">How to identify legitimate suppliers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Verification methods that work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Red flags to watch out for</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Building long-term partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag className="h-12 w-12 text-primary/20" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white rounded-full text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                    </div>
                    <button className="text-primary text-sm font-medium hover:text-primary-light transition-colors flex items-center gap-1">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-primary/5 hover:text-primary transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest sourcing insights, industry news,
            and practical tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
