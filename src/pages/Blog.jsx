import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential checks every buyer should perform before placing an order with a new Chinese factory, from business license verification to on-site audits.',
    category: 'Supplier Verification',
    date: 'May 28, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-a1b2c3',
    titleId: 'blog-verify-title',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Quality Inspection in China',
    excerpt: 'Understanding AQL standards, inspection types (PPI, DPI, PSI), and how to set up an effective QC protocol for your China orders.',
    category: 'Quality Control',
    date: 'May 15, 2026',
    readTime: '10 min read',
    imgId: 'blog-qc-guide-d4e5f6',
    titleId: 'blog-qc-title',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Routes & Best Practices',
    excerpt: 'An updated overview of freight options, current shipping rates, transit times, and tips to reduce logistics costs when importing from China.',
    category: 'Logistics',
    date: 'May 2, 2026',
    readTime: '7 min read',
    imgId: 'blog-shipping-g7h8i9',
    titleId: 'blog-shipping-title',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '7 Red Flags to Spot Sourcing Scams in China',
    excerpt: 'Protect your business from fraudulent suppliers with these practical warning signs and verification techniques used by professional sourcing agents.',
    category: 'Risk Management',
    date: 'April 20, 2026',
    readTime: '6 min read',
    imgId: 'blog-scams-j0k1l2',
    titleId: 'blog-scams-title',
  },
  {
    id: 'negotiate-with-chinese-factories',
    title: 'How to Negotiate Effectively with Chinese Factories',
    excerpt: 'Cultural insights and practical strategies for getting better prices, payment terms, and MOQ flexibility from Chinese manufacturers.',
    category: 'Negotiation',
    date: 'April 8, 2026',
    readTime: '9 min read',
    imgId: 'blog-negotiate-m3n4o5',
    titleId: 'blog-negotiate-title',
  },
  {
    id: 'private-label-china',
    title: 'Starting a Private Label Brand with Chinese Manufacturers',
    excerpt: 'A practical roadmap for launching your own branded product line using OEM/ODM factories in China, from concept to first shipment.',
    category: 'Private Label',
    date: 'March 25, 2026',
    readTime: '11 min read',
    imgId: 'blog-private-label-p6q7r8',
    titleId: 'blog-private-label-title',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-[#0f2a4a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sourcing Insights & Guides</h1>
            <p className="text-lg text-slate-300">
              Practical knowledge to help you source smarter from China. Tips, guides, and industry updates from our sourcing team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[#e86c2b] bg-orange-50 px-2 py-0.5 rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1e4d7b] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <span className="text-sm font-medium text-[#1e4d7b] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
