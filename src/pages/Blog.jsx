import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a Chinese manufacturer, from checking business licenses to conducting on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-05-15',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for product inspections. Here is what you need to know about AQL sampling.',
    category: 'Quality Control',
    date: '2026-05-08',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'China Sourcing Guide 2026: What Has Changed',
    excerpt: 'The landscape of manufacturing in China continues to evolve. Here are the key trends and changes affecting global buyers in 2026.',
    category: 'Industry Insights',
    date: '2026-04-22',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'How to Negotiate with Chinese Manufacturers',
    excerpt: 'Effective negotiation strategies for getting the best price and terms from Chinese suppliers without compromising on quality.',
    category: 'Negotiation',
    date: '2026-04-10',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Shipping from China: Sea Freight vs Air Freight',
    excerpt: 'A practical comparison of sea freight and air freight options for shipping products from China, including costs, timelines, and best use cases.',
    category: 'Logistics',
    date: '2026-03-28',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Protecting Your Intellectual Property When Sourcing from China',
    excerpt: 'Practical steps to protect your designs, patents, and trademarks when manufacturing products in China.',
    category: 'Legal & IP',
    date: '2026-03-15',
    readTime: '9 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Sourcing Insights & Guides</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Practical advice and industry insights to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="heading-sm text-blue-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-blue-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg text-blue-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get the latest sourcing tips and industry insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
