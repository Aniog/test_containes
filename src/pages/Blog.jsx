import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Complete Checklist',
    excerpt: 'Factory verification is the most important step in sourcing from China. This comprehensive checklist covers everything from business license checks to on-site facility inspections.',
    category: 'Factory Verification',
    date: 'June 5, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-01',
    titleId: 'blog-title-0',
  },
  {
    title: 'Understanding AQL Sampling for Quality Control',
    excerpt: 'Acceptable Quality Level (AQL) is the international standard for product inspection. Learn how it works and why it matters for your shipments from China.',
    category: 'Quality Control',
    date: 'May 22, 2026',
    readTime: '6 min read',
    imgId: 'blog-aql-02',
    titleId: 'blog-title-1',
  },
  {
    title: 'FOB vs. DDP: Which Shipping Term Is Right for You?',
    excerpt: 'Understanding Incoterms is critical when importing from China. We break down the most common shipping terms and help you choose the right one for your business.',
    category: 'Shipping',
    date: 'May 8, 2026',
    readTime: '7 min read',
    imgId: 'blog-shipping-03',
    titleId: 'blog-title-2',
  },
  {
    title: 'Common Quality Defects in Chinese Manufacturing',
    excerpt: 'Knowing the most common defects helps you set better quality standards. From cosmetic issues to functional failures, we cover what to watch for.',
    category: 'Quality Control',
    date: 'April 20, 2026',
    readTime: '5 min read',
    imgId: 'blog-defects-04',
    titleId: 'blog-title-3',
  },
  {
    title: 'How to Negotiate Pricing with Chinese Suppliers',
    excerpt: 'Effective price negotiation in China requires understanding local business culture. Learn the tactics that actually work and the ones that backfire.',
    category: 'Supplier Management',
    date: 'April 3, 2026',
    readTime: '9 min read',
    imgId: 'blog-negotiate-05',
    titleId: 'blog-title-4',
  },
  {
    title: 'The Real Cost of Sourcing from China',
    excerpt: 'Unit price is just the beginning. We break down the full cost structure including inspections, shipping, customs, and hidden fees that most buyers overlook.',
    category: 'Strategy',
    date: 'March 15, 2026',
    readTime: '10 min read',
    imgId: 'blog-cost-06',
    titleId: 'blog-title-5',
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
      <section className="relative py-20 md:py-28 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Resources
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical insights and guides on sourcing from China. Written by our team of experienced sourcing professionals.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 bg-slate-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C27A3E] text-white text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[#94A3B8] text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-[#1A365D] mb-3 leading-snug group-hover:text-[#C27A3E] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-[#C27A3E] text-sm font-semibold hover:underline mt-auto"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
