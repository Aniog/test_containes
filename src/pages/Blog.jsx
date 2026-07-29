import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'sourcing-guide-2024',
    title: 'The Complete Guide to Sourcing from China in 2024',
    excerpt: 'A practical step-by-step guide covering everything from finding suppliers to managing quality control and shipping logistics.',
    category: 'Sourcing Guide',
    author: 'SSourcing China Team',
    date: 'July 15, 2024',
    readTime: '12 min read',
    image: 'sourcing-guide',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for on a Site Visit',
    excerpt: 'Learn what to inspect during a supplier audit, from production capacity and quality systems to social compliance and certifications.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'June 28, 2024',
    readTime: '8 min read',
    image: 'factory-audit',
  },
  {
    id: 'qc-inspection-methods',
    title: 'Quality Inspection Methods: AQL Standards and Sampling Plans',
    excerpt: 'Understanding Acceptable Quality Limit (AQL) standards and how they are applied in pre-shipment inspections.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'June 10, 2024',
    readTime: '10 min read',
    image: 'qc-inspection',
  },
  {
    id: 'negotiation-tips',
    title: 'How to Negotiate with Chinese Suppliers: 7 Practical Tips',
    excerpt: 'Effective negotiation strategies that build long-term supplier relationships while securing competitive pricing and terms.',
    category: 'Supplier Management',
    author: 'SSourcing China Team',
    date: 'May 22, 2024',
    readTime: '7 min read',
    image: 'negotiation',
  },
  {
    id: 'shipping-options',
    title: 'Shipping from China: Sea, Air, or Express?',
    excerpt: 'A comparison of shipping methods, costs, and transit times to help you choose the best option for your imports.',
    category: 'Logistics',
    author: 'SSourcing China Team',
    date: 'May 5, 2024',
    readTime: '9 min read',
    image: 'shipping-options',
  },
  {
    id: 'product-compliance',
    title: 'Product Compliance and Certification Requirements for Importing from China',
    excerpt: 'Understanding CE, FDA, RoHS, and other certification requirements when importing products from China.',
    category: 'Compliance',
    author: 'SSourcing China Team',
    date: 'April 18, 2024',
    readTime: '11 min read',
    image: 'compliance',
  },
]

export default function Blog() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Insights</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Practical advice, industry insights, and guides to help you source from China more effectively.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div
                  className="h-48 bg-neutral-200"
                  data-strk-bg-id={`blog-${post.id}-bg`}
                  data-strk-bg={`[blog-title-${post.id}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'none' }}
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 id={`blog-title-${post.id}`} className="text-lg font-semibold text-neutral-900 mt-3 mb-2 leading-snug">
                    <Link to={`/blog/${post.id}`} className="hover:text-brand-500 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}