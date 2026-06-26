import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  BookOpen,
  TrendingUp,
  Factory,
  ShieldCheck,
  Ship,
  Globe
} from 'lucide-react'

const Blog = () => {
  const featuredPost = {
    title: 'The Complete Guide to China Sourcing for First-Time Importers',
    excerpt: 'Everything you need to know about starting your China sourcing journey, from finding suppliers to managing quality control and shipping.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'Getting Started',
    image: 'china-sourcing-guide'
  }

  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: 10 Essential Checks',
      excerpt: 'Learn the critical steps to verify supplier legitimacy and avoid costly mistakes when sourcing from China.',
      author: 'Michael Zhang',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Supplier Verification',
      image: 'supplier-verification',
      icon: ShieldCheck
    },
    {
      id: 2,
      title: 'Quality Control in China: A Practical Guide for Importers',
      excerpt: 'Understanding the different types of inspections and how to implement an effective QC strategy for your products.',
      author: 'Emily Wang',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Quality Control',
      image: 'quality-control-guide',
      icon: Factory
    },
    {
      id: 3,
      title: 'Shipping from China: Sea vs Air vs Express - Which is Right for You?',
      excerpt: 'Compare shipping options, costs, and timelines to choose the best method for your business needs.',
      author: 'David Liu',
      date: '2024-01-02',
      readTime: '7 min read',
      category: 'Logistics',
      image: 'shipping-options',
      icon: Ship
    },
    {
      id: 4,
      title: 'Negotiating with Chinese Suppliers: Tips from Industry Experts',
      excerpt: 'Effective negotiation strategies that help you get better prices while maintaining good relationships.',
      author: 'Sarah Chen',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Negotiation',
      image: 'negotiation-tips',
      icon: TrendingUp
    },
    {
      id: 5,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn from others\' experiences and avoid these common pitfalls that can cost you time and money.',
      author: 'Michael Zhang',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Best Practices',
      image: 'common-mistakes',
      icon: BookOpen
    },
    {
      id: 6,
      title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
      excerpt: 'Strategies for working with MOQs, especially for small businesses and new product launches.',
      author: 'Emily Wang',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Negotiation',
      image: 'moq-guide',
      icon: Globe
    },
    {
      id: 7,
      title: 'Product Certifications for China Export: CE, FCC, RoHS Explained',
      excerpt: 'A comprehensive guide to product certifications required for different markets.',
      author: 'David Liu',
      date: '2023-12-10',
      readTime: '11 min read',
      category: 'Compliance',
      image: 'certifications-guide',
      icon: ShieldCheck
    },
    {
      id: 8,
      title: 'Building Long-term Supplier Relationships in China',
      excerpt: 'How to develop and maintain productive partnerships with Chinese manufacturers.',
      author: 'Sarah Chen',
      date: '2023-12-05',
      readTime: '8 min read',
      category: 'Best Practices',
      image: 'supplier-relationships',
      icon: Users
    }
  ]

  const categories = [
    'All',
    'Getting Started',
    'Supplier Verification',
    'Quality Control',
    'Logistics',
    'Negotiation',
    'Compliance',
    'Best Practices'
  ]

  const resources = [
    {
      title: 'China Sourcing Checklist',
      description: 'A comprehensive checklist to ensure you cover all aspects of your sourcing project.',
      type: 'Download'
    },
    {
      title: 'Supplier Evaluation Template',
      description: 'A template to evaluate and compare potential suppliers systematically.',
      type: 'Template'
    },
    {
      title: 'QC Inspection Checklist',
      description: 'Standard checklist for pre-shipment inspections.',
      type: 'Checklist'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Insights & Resources
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert advice, practical guides, and industry insights to help you succeed with China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link to="/contact">
                  Get Sourcing Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden border border-blue-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button>
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gray-200 aspect-video lg:aspect-auto">
                <img
                  data-strk-img-id="featured-blog-img"
                  data-strk-img="[featured-blog-title] [featured-blog-excerpt]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <span id="featured-blog-title" className="hidden">{featuredPost.title}</span>
                <span id="featured-blog-excerpt" className="hidden">{featuredPost.excerpt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-excerpt] [blog-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span id={`blog-${post.id}-title`} className="hidden">{post.title}</span>
                  <span id={`blog-${post.id}-excerpt`} className="hidden">{post.excerpt}</span>
                  <span id={`blog-${post.id}-category`} className="hidden">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our free templates and checklists to help with your sourcing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {resource.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Sourcing Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tips, guides, and industry news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-10 px-4 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the right suppliers and ensure quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
