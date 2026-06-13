import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, factory audits, and red flags to watch for when evaluating potential suppliers in China.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    readTime: '8 min read',
  },
  {
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, how to choose the right inspection level, and what it means for your product quality.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '6 min read',
  },
  {
    title: 'China Sourcing Costs: What to Expect in 2026',
    excerpt: 'An overview of typical sourcing costs including service fees, inspection costs, shipping rates, and hidden expenses to budget for.',
    category: 'Sourcing Guide',
    date: '2026-04-30',
    readTime: '10 min read',
  },
  {
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare sea freight and air freight for shipping from China, including cost, transit time, and when each option makes sense.',
    category: 'Shipping',
    date: '2026-04-18',
    readTime: '7 min read',
  },
  {
    title: 'Common Quality Issues in Chinese Manufacturing and How to Prevent Them',
    excerpt: 'From material substitutions to workmanship defects, learn about the most common quality problems and how proper QC can catch them.',
    category: 'Quality Control',
    date: '2026-04-05',
    readTime: '9 min read',
  },
  {
    title: 'How to Write a Clear Product Specification for Chinese Factories',
    excerpt: 'Tips for creating detailed product specifications that reduce misunderstandings and ensure factories produce exactly what you need.',
    category: 'Sourcing Guide',
    date: '2026-03-22',
    readTime: '6 min read',
  },
  {
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A practical guide to FOB, EXW, CIF, and DDP terms and how they affect your costs and responsibilities when importing from China.',
    category: 'Shipping',
    date: '2026-03-10',
    readTime: '8 min read',
  },
  {
    title: 'Factory Audit Checklist: What We Look For On-Site',
    excerpt: 'A detailed look at our factory audit process, from checking business licenses to evaluating production lines and quality management systems.',
    category: 'Supplier Verification',
    date: '2026-02-25',
    readTime: '11 min read',
  },
  {
    title: 'Working with Trading Companies vs Direct Factories',
    excerpt: 'Understand the differences between trading companies and manufacturers, and when each option is the right choice for your sourcing needs.',
    category: 'Sourcing Guide',
    date: '2026-02-12',
    readTime: '7 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Blog</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Practical guides and insights for importing from China. Learn about supplier verification, quality control, shipping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="flex flex-col p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="aspect-video bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">Article image</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Stay Updated on China Sourcing</h2>
          <p className="mt-4 text-lg text-slate-600">
            Get practical sourcing tips and industry insights delivered to your inbox.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-2.5 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
