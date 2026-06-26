import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    id: 'post-1',
    title: 'The Ultimate Guide to Factory Audits in China: What to Look For',
    excerpt:
      'A comprehensive guide to conducting effective factory audits in China. Learn the key areas to inspect, red flags to watch for, and how to verify supplier claims.',
    date: 'June 15, 2026',
    author: 'Michael Zhang',
    readTime: '8 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-factory-audit-1',
  },
  {
    id: 'post-2',
    title: 'Understanding AQL Quality Inspection Standards for Importers',
    excerpt:
      'AQL (Acceptable Quality Level) is the international standard for product quality inspection. Learn how to choose the right AQL level for your product and industry.',
    date: 'June 8, 2026',
    author: 'Sarah Li',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-standards-2',
  },
  {
    id: 'post-3',
    title: 'FOB vs. EXW vs. CIF: Shipping Terms Explained for China Imports',
    excerpt:
      'Understanding Incoterms is critical when importing from China. We break down the most common shipping terms and help you choose the right one for your business.',
    date: 'June 1, 2026',
    author: 'David Wang',
    readTime: '7 min read',
    category: 'Logistics',
    imgId: 'blog-shipping-terms-3',
  },
  {
    id: 'post-4',
    title: 'How to Avoid the Most Common China Sourcing Scams',
    excerpt:
      'From fake factories to bait-and-switch samples, learn the most common scams targeting international buyers and how to protect your business.',
    date: 'May 25, 2026',
    author: 'Michael Zhang',
    readTime: '10 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-sourcing-scams-4',
  },
  {
    id: 'post-5',
    title: 'The True Cost of Sourcing from China: Hidden Fees to Budget For',
    excerpt:
      'Beyond the unit price, there are customs duties, freight, insurance, inspection fees, and more. We break down the total landed cost calculation.',
    date: 'May 18, 2026',
    author: 'Sarah Li',
    readTime: '8 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-true-cost-5',
  },
  {
    id: 'post-6',
    title: 'China Sourcing Trends 2026: What Global Buyers Need to Know',
    excerpt:
      'The China sourcing landscape is evolving rapidly. From supply chain diversification to sustainability requirements, here are the key trends shaping 2026.',
    date: 'May 10, 2026',
    author: 'David Wang',
    readTime: '6 min read',
    category: 'Industry Trends',
    imgId: 'blog-trends-2026-6',
  },
  {
    id: 'post-7',
    title: 'Product Packaging Design for Import: Cost-Saving Tips',
    excerpt:
      'Smart packaging design can reduce shipping costs, prevent damage, and improve the customer experience. Here are practical tips for importers.',
    date: 'May 3, 2026',
    author: 'Michael Zhang',
    readTime: '5 min read',
    category: 'Product Development',
    imgId: 'blog-packaging-7',
  },
  {
    id: 'post-8',
    title: 'Building Long-Term Supplier Relationships in China',
    excerpt:
      'Transaction-based sourcing is costly. Learn how to build strategic partnerships with Chinese suppliers that drive better pricing, quality, and innovation.',
    date: 'April 26, 2026',
    author: 'Sarah Li',
    readTime: '7 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-supplier-relationships-8',
  },
  {
    id: 'post-9',
    title: 'CE, FCC, RoHS: A Guide to Product Compliance Certifications',
    excerpt:
      'Navigating product compliance for your target market is essential. We explain the most common certifications and how to ensure your suppliers meet them.',
    date: 'April 19, 2026',
    author: 'David Wang',
    readTime: '9 min read',
    category: 'Quality Control',
    imgId: 'blog-compliance-9',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sourcing Blog
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Practical guides, industry insights, and expert advice on China
            sourcing, quality control, and logistics.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                id={`blog-${post.id}`}
                className="group bg-gray-50 hover:bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h2
                    id={`blog-${post.id}-title`}
                    className="font-semibold text-gray-900 mb-2 leading-snug group-hover:text-accent-red transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs text-accent-red font-medium bg-red-50 rounded-full px-2.5 py-1">
                      <Tag size={10} /> {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Stay Updated
          </h2>
          <p className="text-gray-500 mb-6">
            Get the latest China sourcing insights, tips, and industry updates
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
            />
            <button
              type="submit"
              className="bg-navy hover:bg-navy-light text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}