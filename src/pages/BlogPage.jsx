import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying Chinese manufacturers, including business license checks, factory audits, and quality system reviews.',
    category: 'Supplier Verification',
    date: '2026-05-15',
    author: 'SSourcing China Team',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Understanding MOQs: What Every Buyer Should Know',
    excerpt: 'Minimum order quantities can make or break a sourcing deal. Learn how to negotiate MOQs and find suppliers that work with your order size.',
    category: 'Sourcing Tips',
    date: '2026-04-28',
    author: 'SSourcing China Team',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Quality Inspection Checklist for Manufacturing in China',
    excerpt: 'A comprehensive checklist for conducting quality inspections at Chinese factories, covering pre-production, during-production, and pre-shipment stages.',
    category: 'Quality Control',
    date: '2026-04-10',
    author: 'SSourcing China Team',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Shipping from China: A Complete Guide for Beginners',
    excerpt: 'Everything you need to know about shipping products from China, including freight options, customs documentation, and delivery timelines.',
    category: 'Logistics',
    date: '2026-03-22',
    author: 'SSourcing China Team',
    readTime: '12 min read',
  },
  {
    id: 5,
    title: 'Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Learn from the mistakes of others. We share the most common pitfalls buyers face when sourcing from China and how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-03-05',
    author: 'SSourcing China Team',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies for getting the best prices from Chinese manufacturers without compromising on quality.',
    category: 'Sourcing Tips',
    date: '2026-02-18',
    author: 'SSourcing China Team',
    readTime: '9 min read',
  },
]

const categories = ['All', 'Sourcing Tips', 'Supplier Verification', 'Quality Control', 'Logistics']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2b46]">
        <div className="container-custom text-center">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Sourcing Insights & Guides
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Practical advice and expert insights for sourcing products from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#0f2b46] text-white'
                    : 'bg-[#f5f7fa] text-[#4a5568] hover:bg-[#e2e8f0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card group cursor-pointer">
                <div
                  className="aspect-[16/10] rounded-xl bg-[#f5f7fa] mb-6 overflow-hidden"
                  data-strk-bg-id={`blog-bg-${post.id}`}
                  data-strk-bg={`[${post.title}] [blog-insights]`}
                  data-strk-bg-ratio="16x10"
                  data-strk-bg-width="600"
                />
                <span className="text-[#c8963e] text-sm font-semibold">{post.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-[#c8963e] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[#718096]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Your Sourcing Project?</h2>
          <p className="text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find reliable suppliers and manage your China sourcing.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
