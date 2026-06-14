import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Calendar, Clock, User, Share2, 
  MessageCircle, ThumbsUp, ChevronRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and red flags to watch for.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: '2024-01-15',
    readTime: '8 min read',
    likes: 124,
    comments: 18,
    image: 'Factory verification checklist',
  },
  {
    id: 'quality-inspection-aql',
    title: 'Understanding AQL: Quality Inspection Standards Explained',
    excerpt: 'A practical guide to AQL (Acceptable Quality Limit) sampling and how to set appropriate inspection levels for your products.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: '2024-01-08',
    readTime: '6 min read',
    likes: 98,
    comments: 12,
    image: 'Quality inspection process',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea Freight vs Air Freight',
    excerpt: 'Compare shipping methods, timelines, and costs to choose the right logistics solution for your business needs.',
    category: 'Logistics',
    author: 'SSourcing China Team',
    date: '2024-01-02',
    readTime: '7 min read',
    likes: 156,
    comments: 24,
    image: 'Container shipping logistics',
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiating with Chinese Suppliers: Best Practices',
    excerpt: 'Effective negotiation strategies for working with Chinese manufacturers, including common practices and cultural considerations.',
    category: 'Negotiation',
    author: 'SSourcing China Team',
    date: '2023-12-20',
    readTime: '5 min read',
    likes: 203,
    comments: 31,
    image: 'Business negotiation meeting',
  },
  {
    id: 'sample-management',
    title: 'Managing Product Samples from China: Tips and Timeline',
    excerpt: 'How to effectively request, evaluate, and use product samples to make informed sourcing decisions.',
    category: 'Sourcing Process',
    author: 'SSourcing China Team',
    date: '2023-12-12',
    readTime: '6 min read',
    likes: 87,
    comments: 9,
    image: 'Product samples display',
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms for China Sourcing: What You Need to Know',
    excerpt: 'Understanding common payment terms, protection strategies, and how to balance security with supplier relationships.',
    category: 'Finance',
    author: 'SSourcing China Team',
    date: '2023-12-05',
    readTime: '7 min read',
    likes: 145,
    comments: 22,
    image: 'Payment documentation',
  },
  {
    id: 'cultural-differences',
    title: 'Working with Chinese Suppliers: Cultural Considerations',
    excerpt: 'Navigate cultural differences effectively with practical tips for building strong supplier relationships.',
    category: 'Culture',
    author: 'SSourcing China Team',
    date: '2023-11-28',
    readTime: '5 min read',
    likes: 112,
    comments: 15,
    image: 'Cross-cultural business meeting',
  },
  {
    id: 'common-mistakes',
    title: 'Top 10 China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Learn from common pitfalls that other buyers have experienced and how to prevent them in your sourcing operations.',
    category: 'Best Practices',
    author: 'SSourcing China Team',
    date: '2023-11-20',
    readTime: '9 min read',
    likes: 267,
    comments: 38,
    image: 'Error prevention checklist',
  },
]

const categories = [
  'All Categories',
  'Supplier Verification',
  'Quality Control',
  'Logistics',
  'Negotiation',
  'Sourcing Process',
  'Finance',
  'Culture',
  'Best Practices',
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories')

  const filteredPosts = selectedCategory === 'All Categories'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert insights, practical guides, and industry knowledge to help you succeed in China sourcing
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-surface flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-gray-500">{post.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </span>
                    </div>
                    <button className="text-primary hover:text-primary-600 text-sm font-medium flex items-center gap-1">
                      Read More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest China sourcing insights, tips, and industry updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <Button>Subscribe</Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Put our expertise to work for your business. Get a free consultation and quote today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
