import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { 
  ArrowRight, Clock, User, Tag, Calendar
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    id: 'supplier-verification-guide',
    title: 'The Complete Guide to Supplier Verification in China',
    excerpt: 'Learn the essential steps to verify suppliers before committing. This guide covers factory visits, license checks, and red flags to watch for.',
    category: 'Supplier Selection',
    author: 'SSourcing Team',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'factory inspection verification'
  },
  {
    id: 'quality-inspection-standards',
    title: 'Understanding Quality Inspection Standards',
    excerpt: 'A breakdown of AQL levels, inspection types, and how to choose the right QC approach for your products.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'quality control inspection worker'
  },
  {
    id: 'shipping-costs-guide',
    title: 'Shipping from China: Costs, Timelines, and Options',
    excerpt: 'Compare sea freight, air freight, and express shipping. Learn how to optimize your logistics strategy.',
    category: 'Logistics',
    author: 'SSourcing Team',
    date: '2024-01-05',
    readTime: '7 min read',
    image: 'container shipping logistics freight'
  },
  {
    id: 'negotiation-tips',
    title: 'Negotiation Tips for China Manufacturing',
    excerpt: 'Strategies for getting better prices and terms from Chinese suppliers while maintaining good relationships.',
    category: 'Business Tips',
    author: 'SSourcing Team',
    date: '2023-12-28',
    readTime: '5 min read',
    image: 'business negotiation meeting'
  },
  {
    id: 'sample-management',
    title: 'How to Effectively Manage Product Samples',
    excerpt: 'Tips for requesting, evaluating, and approving samples from Chinese manufacturers.',
    category: 'Supplier Selection',
    author: 'SSourcing Team',
    date: '2023-12-20',
    readTime: '6 min read',
    image: 'product samples quality inspection'
  },
  {
    id: 'common-mistakes',
    title: 'Top 10 Mistakes to Avoid in China Sourcing',
    excerpt: 'Learn from others\' experiences. These common pitfalls can cost you time, money, and quality.',
    category: 'Business Tips',
    author: 'SSourcing Team',
    date: '2023-12-15',
    readTime: '9 min read',
    image: 'manufacturing production monitoring'
  },
]

const categories = [
  { name: 'All Posts', count: 24 },
  { name: 'Supplier Selection', count: 8 },
  { name: 'Quality Control', count: 6 },
  { name: 'Logistics', count: 5 },
  { name: 'Business Tips', count: 5 },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">Blog</span>
            <h1 className="heading-xl mb-6">China Sourcing Insights</h1>
            <p className="text-lead text-slate-300 mb-8">
              Practical advice, industry insights, and best practices for successful China sourcing. Learn from our expertise and avoid common pitfalls.
            </p>
            <Link to="/contact" className="btn-primary bg-cyan-600 text-white hover:bg-cyan-700">
              Get Expert Help
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post, i) => (
                  <article key={i} className="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
                    <div className="grid md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <div 
                          className="absolute inset-0"
                          data-strk-bg-id={`blog-bg-${post.id}`}
                          data-strk-bg={`[blog-title-${post.id}]`}
                          data-strk-bg-ratio="16x9"
                          data-strk-bg-width="600"
                        />
                        <span id={`blog-title-${post.id}`} className="hidden">{post.image}</span>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="badge text-xs">{post.category}</span>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h2 className="font-semibold text-slate-900 text-lg mb-2 hover:text-cyan-700 cursor-pointer">
                          {post.title}
                        </h2>
                        <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </div>
                          </div>
                          <button className="text-cyan-600 text-sm font-medium hover:text-cyan-700 flex items-center gap-1">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <button className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${i === 0 ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                          <span>{cat.name}</span>
                          <span className="text-slate-400">{cat.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 text-white">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-cyan-100 text-sm mb-4">
                    Get the latest China sourcing tips and insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
                    />
                    <button className="w-full px-4 py-2 bg-white text-cyan-700 rounded-lg font-medium text-sm hover:bg-cyan-50 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">Need Custom Advice?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Get personalized guidance for your specific sourcing needs.
                  </p>
                  <Link to="/contact" className="btn-primary w-full text-sm justify-center">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lead text-slate-600 mb-8 max-w-2xl mx-auto">
            Put our expertise to work for you. Get a free consultation and quote for your China sourcing needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog