import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  Tag,
  Search
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
  }
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Section = ({ children, className = '' }) => (
  <section className={`py-16 md:py-20 ${className}`}>
    {children}
  </section>
)

const SectionTitle = ({ subtitle, title, description, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
    {subtitle && <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg">{description}</p>}
  </div>
)

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing Orders',
    excerpt: 'Learn the essential steps to verify supplier legitimacy, including factory audits, license checks, and red flags to watch for.',
    category: 'Supplier Verification',
    author: 'David Chen',
    date: '2024-12-15',
    readTime: '8 min read',
    image: 'supplier-verification',
  },
  {
    id: 2,
    title: 'Understanding Quality Control Inspections in China',
    excerpt: 'A comprehensive guide to QC inspections, including types of inspections, AQL standards, and how to interpret inspection reports.',
    category: 'Quality Control',
    author: 'Sarah Liu',
    date: '2024-12-10',
    readTime: '10 min read',
    image: 'quality-inspection',
  },
  {
    id: 3,
    title: 'Navigating Chinese Manufacturing Costs in 2024',
    excerpt: 'Understanding the factors that affect manufacturing costs in China, including labor, materials, and overhead expenses.',
    category: 'Cost Management',
    author: 'Michael Zhang',
    date: '2024-12-05',
    readTime: '7 min read',
    image: 'manufacturing-costs',
  },
  {
    id: 4,
    title: 'Shipping from China: A Complete Guide to Logistics',
    excerpt: 'Everything you need to know about shipping from China, including freight options, customs clearance, and documentation.',
    category: 'Logistics',
    author: 'James Wang',
    date: '2024-11-28',
    readTime: '12 min read',
    image: 'shipping-logistics',
  },
  {
    id: 5,
    title: 'Common Mistakes to Avoid When Sourcing from China',
    excerpt: 'Learn the most common pitfalls in China sourcing and how to avoid them to ensure successful partnerships.',
    category: 'Sourcing Tips',
    author: 'Emily Wu',
    date: '2024-11-20',
    readTime: '6 min read',
    image: 'sourcing-mistakes',
  },
  {
    id: 6,
    title: 'Understanding MOQ (Minimum Order Quantity) in China',
    excerpt: 'How to negotiate MOQ with Chinese suppliers and strategies for businesses just starting out.',
    category: 'Negotiation',
    author: 'David Chen',
    date: '2024-11-12',
    readTime: '5 min read',
    image: 'moq-negotiation',
  },
  {
    id: 7,
    title: 'Protecting Your Intellectual Property When Manufacturing in China',
    excerpt: 'Essential strategies to protect your IP when working with Chinese manufacturers, including trademarks and patents.',
    category: 'Legal',
    author: 'Lisa Huang',
    date: '2024-11-05',
    readTime: '9 min read',
    image: 'ip-protection',
  },
  {
    id: 8,
    title: 'How to Conduct Factory Audits in China',
    excerpt: 'A step-by-step guide to conducting effective factory audits, including what to check and questions to ask.',
    category: 'Supplier Verification',
    author: 'Michael Zhang',
    date: '2024-10-28',
    readTime: '11 min read',
    image: 'factory-audit',
  },
  {
    id: 9,
    title: 'Payment Terms with Chinese Suppliers: What You Need to Know',
    excerpt: 'Understanding common payment terms, risks, and best practices for paying Chinese manufacturers.',
    category: 'Finance',
    author: 'Sarah Liu',
    date: '2024-10-20',
    readTime: '7 min read',
    image: 'payment-terms',
  },
]

const categories = [
  'All',
  'Supplier Verification',
  'Quality Control',
  'Cost Management',
  'Logistics',
  'Sourcing Tips',
  'Negotiation',
  'Legal',
  'Finance',
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Helmet>
        <title>Blog | China Sourcing Insights | SSourcing China</title>
        <meta name="description" content="Expert insights on China sourcing, supplier verification, quality control, logistics, and manufacturing. Stay informed with our latest articles." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-slate-200">
              Expert guidance on China sourcing, supplier management, and international trade. Stay informed with our latest articles and tips.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <Section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-slate-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-slate-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600">No articles found matching your criteria.</p>
              <button 
                onClick={() => {setSelectedCategory('All'); setSearchQuery('')}}
                className="mt-4 text-red-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-300 mb-6">
              Subscribe to our newsletter for the latest China sourcing insights and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Sourcing Help?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get personalized assistance from our experienced team.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-10 py-4 bg-white text-red-600 hover:bg-slate-100">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default Blog