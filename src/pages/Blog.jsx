import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Learn the key steps to verify manufacturer legitimacy, from checking business licenses to conducting on-site audits.',
    date: 'June 15, 2026',
    author: 'SSourcing Team',
    readTime: '6 min read',
    slug: 'verify-chinese-factory',
  },
  {
    title: 'A Complete Guide to Quality Inspection in China',
    excerpt: 'Understanding AQL standards, pre-shipment inspections, and how to build a quality control plan for your imports.',
    date: 'May 28, 2026',
    author: 'SSourcing Team',
    readTime: '8 min read',
    slug: 'quality-inspection-guide',
  },
  {
    title: 'Shipping from China: Sea Freight vs Air Freight vs Express',
    excerpt: 'Compare costs, transit times, and best use cases for each shipping method when importing from China.',
    date: 'May 10, 2026',
    author: 'SSourcing Team',
    readTime: '5 min read',
    slug: 'shipping-china-comparison',
  },
  {
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'Common pitfalls that importers face and practical strategies to avoid them, based on our 10+ years of experience.',
    date: 'April 22, 2026',
    author: 'SSourcing Team',
    readTime: '7 min read',
    slug: 'sourcing-mistakes-to-avoid',
  },
  {
    title: 'Understanding MOQs and How to Negotiate Better Terms',
    excerpt: 'Minimum Order Quantities explained. Tips for negotiating lower MOQs with Chinese manufacturers.',
    date: 'April 5, 2026',
    author: 'SSourcing Team',
    readTime: '5 min read',
    slug: 'negotiating-moq',
  },
  {
    title: 'The Real Cost of Sourcing from China: A Transparent Breakdown',
    excerpt: 'From product cost to shipping and duties, understand the complete cost structure of importing from China.',
    date: 'March 18, 2026',
    author: 'SSourcing Team',
    readTime: '6 min read',
    slug: 'cost-breakdown',
  },
]

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for sourcing products from China. Written by our team with over a decade of experience.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-44 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article image</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-semibold text-gray-900 mb-2 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-medium mt-auto"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}