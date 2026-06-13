import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '@/components/home/CTASection'

const posts = [
  {
    category: 'Sourcing Tips',
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    excerpt: 'Learn the proven process for identifying and verifying trustworthy manufacturers in China, from initial research to factory audits.',
    author: 'SSourcing Team',
    date: 'June 10, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Quality Control',
    title: 'The Complete Guide to Pre-Shipment Inspection (PSI)',
    excerpt: 'Everything you need to know about AQL sampling, inspection criteria, and how to ensure your products meet specifications before shipment.',
    author: 'SSourcing Team',
    date: 'June 3, 2026',
    readTime: '10 min read',
  },
  {
    category: 'Logistics',
    title: 'Shipping from China: Air Freight vs Sea Freight vs Express',
    excerpt: 'A practical comparison of shipping methods from China, including cost factors, transit times, and when to choose each option.',
    author: 'SSourcing Team',
    date: 'May 25, 2026',
    readTime: '7 min read',
  },
  {
    category: 'Sourcing Tips',
    title: '10 Common Mistakes importers Make When Sourcing from China',
    excerpt: 'Avoid these costly errors that new importers frequently make, from poor specification documentation to skipping factory verification.',
    author: 'SSourcing Team',
    date: 'May 18, 2026',
    readTime: '9 min read',
  },
  {
    category: 'Industry Insights',
    title: 'Understanding Chinese Manufacturing Clusters by Region',
    excerpt: 'A guide to China\'s key manufacturing hubs — what each region specializes in and how to choose the right location for your products.',
    author: 'SSourcing Team',
    date: 'May 11, 2026',
    readTime: '11 min read',
  },
  {
    category: 'Quality Control',
    title: 'Factory Audit Checklist: What to Look for During a Supplier Visit',
    excerpt: 'Our comprehensive checklist for evaluating factories in China, covering facilities, equipment, quality systems, and social compliance.',
    author: 'SSourcing Team',
    date: 'May 4, 2026',
    readTime: '8 min read',
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
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-light font-semibold text-sm tracking-wide uppercase">Blog</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical advice, guides, and industry insights for importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <article key={i} className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                  <div
                    className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"
                    data-strk-bg-id={`blog-post-${i}`}
                    data-strk-bg={`[blog-title-${i}] [blog-excerpt-${i}]`}
                    data-strk-bg-ratio="16x10"
                    data-strk-bg-width="600"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 id={`blog-title-${i}`} className="font-semibold text-gray-900 mb-2 leading-snug text-base">
                    {post.title}
                  </h2>
                  <p id={`blog-excerpt-${i}`} className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">More articles coming soon. Subscribe to our newsletter for updates.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}