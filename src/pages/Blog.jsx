import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag, Search, TrendingUp, Shield, Globe, BookOpen, FileText } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A step-by-step guide to due diligence when evaluating new Chinese suppliers. Learn what documents to request, what red flags to watch for, and how to conduct factory verification remotely or on-site.',
    category: 'Supplier Verification',
    readTime: '8 min read',
    date: 'May 15, 2026',
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding AQL Inspection Standards for Importing from China',
    excerpt: 'A practical explanation of Acceptable Quality Level (AQL) standards, how sampling works, and how to set the right inspection criteria for your product category.',
    category: 'Quality Control',
    readTime: '6 min read',
    date: 'May 8, 2026',
    featured: false,
  },
  {
    id: 3,
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare costs, transit times, and use cases for sea and air freight from China. Includes a decision framework to help you choose the best option for your shipment.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'Apr 28, 2026',
    featured: false,
  },
  {
    id: 4,
    title: 'Top 10 Red Flags When Sourcing Products from China',
    excerpt: 'Learn to spot warning signs of unreliable suppliers, from unusually low prices to missing certifications. Protect your investment with these practical tips.',
    category: 'Sourcing Tips',
    readTime: '5 min read',
    date: 'Apr 20, 2026',
    featured: false,
  },
  {
    id: 5,
    title: 'Customs Documentation Guide for Importing from China',
    excerpt: 'A complete guide to the documents you need when importing goods from China, including commercial invoices, packing lists, certificates of origin, and compliance certificates.',
    category: 'Import & Compliance',
    readTime: '9 min read',
    date: 'Apr 12, 2026',
    featured: false,
  },
  {
    id: 6,
    title: 'How to Negotiate Better Prices with Chinese Manufacturers',
    excerpt: 'Practical negotiation strategies that work with Chinese suppliers. Learn about MOQ leverage, payment terms, long-term pricing agreements, and cultural considerations.',
    category: 'Sourcing Tips',
    readTime: '6 min read',
    date: 'Apr 5, 2026',
    featured: false,
  },
]

const FeaturedPost = ({ post }) => (
  <article className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="bg-neutral-100 h-48 md:h-56 flex items-center justify-center">
      <BookOpen className="w-16 h-16 text-neutral-300" />
    </div>
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{post.category}</span>
        <span className="text-xs text-neutral-400">Featured</span>
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">{post.title}</h2>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-neutral-400">
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
        </div>
        <span className="text-sm font-medium text-primary flex items-center gap-1 hover:text-primary-light transition-colors cursor-pointer">
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  </article>
)

const PostCard = ({ post }) => (
  <article className="bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-full">{post.category}</span>
    </div>
    <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">{post.title}</h3>
    <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-xs text-neutral-400">
        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
      </div>
      <span className="text-sm font-medium text-primary flex items-center gap-1 cursor-pointer">
        Read <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </div>
  </article>
)

export default function Blog() {
  const featured = blogPosts.find(p => p.featured)
  const regular = blogPosts.filter(p => !p.featured)

  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Blog & Resources</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">China Sourcing Insights</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Practical guides, tips, and insights to help you source products from China more effectively and avoid common pitfalls.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featured && (
            <div className="mb-10">
              <FeaturedPost post={featured} />
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Have a Sourcing Question?</h2>
          <p className="text-lg text-neutral-500 mb-8">Our team is happy to answer your questions about sourcing products from China. No obligation.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Contact Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
