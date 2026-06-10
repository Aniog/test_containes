import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const blogPosts = [
  {
    id: 'supplier-selection-guide',
    title: 'How to Select the Right Supplier in China: A Complete Guide',
    excerpt: 'Finding the perfect supplier is crucial for your business success. Learn the key factors to consider and questions to ask before making your decision.',
    category: 'Sourcing Guide',
    readTime: '12 min read',
    date: 'June 5, 2026',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: 'quality-inspection-checklist',
    title: 'The Essential QC Inspection Checklist Every Importer Needs',
    excerpt: 'Never let quality issues slip through again. Our comprehensive checklist covers everything from pre-production to pre-shipment inspections.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 'shipping-costs-guide',
    title: 'Understanding Shipping Costs: Sea Freight vs Air Freight in 2026',
    excerpt: 'Compare shipping methods and learn how to optimize your logistics strategy for cost and delivery time.',
    category: 'Logistics',
    readTime: '10 min read',
    date: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 'negotiation-tips',
    title: '10 Negotiation Tips for Sourcing from Chinese Factories',
    excerpt: 'Maximize your savings with these proven negotiation strategies. Learn what Chinese suppliers really care about.',
    category: 'Negotiation',
    readTime: '9 min read',
    date: 'May 12, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 'moq-explained',
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'Minimum order quantities can make or break your sourcing strategy. Here\'s how to work with suppliers on MOQs.',
    category: 'Sourcing Guide',
    readTime: '7 min read',
    date: 'May 5, 2026',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 'sample-management',
    title: 'Sample Management: Getting It Right Before Bulk Production',
    excerpt: 'The sample phase is critical. Learn how to request, evaluate, and approve samples effectively.',
    category: 'Quality Control',
    readTime: '11 min read',
    date: 'April 28, 2026',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
    featured: false,
  },
]

const categories = [
  'All Categories',
  'Sourcing Guide',
  'Quality Control',
  'Logistics',
  'Negotiation',
  'Industry News',
]

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('All Categories')

  const filteredPosts = activeCategory === 'All Categories' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sourcing Insights & Guides
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Expert advice on China sourcing, quality control, logistics, and building 
            successful supplier relationships.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden p-0 flex flex-col md:flex-row">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold text-secondary bg-secondary-50 px-3 py-1 rounded-full w-fit mb-4">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button variant="secondary">
                    Read Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(p => !p.featured).map((post) => (
              <Card key={post.id} hover className="overflow-hidden p-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-secondary bg-secondary-50 px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-secondary font-semibold text-sm hover:text-secondary-600 flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-200 mb-8">
            Subscribe to our newsletter for weekly sourcing tips, industry insights, and exclusive guides.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
            />
            <Button variant="secondary" type="submit">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-slate-400 mt-4">
            No spam, unsubscribe anytime. Read our{' '}
            <Link to="/privacy" className="text-secondary hover:underline">privacy policy</Link>.
          </p>
        </div>
      </section>
    </>
  )
}

export default Blog