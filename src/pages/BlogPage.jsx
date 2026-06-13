import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to conducting due diligence on potential suppliers — from business license checks to on-site factory audits.',
    date: 'June 5, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-post-1-z9y8x7',
    titleId: 'blog-title-1',
    descId: 'blog-desc-1',
    slug: 'verify-chinese-supplier',
  },
  {
    title: 'Understanding AQL: Quality Control Standards for Importers',
    excerpt: 'What AQL sampling means, how to choose the right inspection level, and why it\'s critical for maintaining consistent product quality.',
    date: 'May 28, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-post-2-w6v5u4',
    titleId: 'blog-title-2',
    descId: 'blog-desc-2',
    slug: 'understanding-aql-standards',
  },
  {
    title: 'Shipping from China: FCL vs LCL vs Air Freight Explained',
    excerpt: 'Compare shipping methods for importing from China — costs, transit times, minimum volumes, and which option suits your business.',
    date: 'May 20, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    imgId: 'blog-post-3-t3s2r1',
    titleId: 'blog-title-3',
    descId: 'blog-desc-3',
    slug: 'shipping-china-fcl-lcl-air',
  },
  {
    title: 'Top 10 Manufacturing Hubs in China Every Buyer Should Know',
    excerpt: 'From Shenzhen electronics to Yongkang hardware — an overview of China\'s key industrial clusters and what they specialize in.',
    date: 'May 12, 2026',
    author: 'SSourcing China Team',
    category: 'Industry Insights',
    imgId: 'blog-post-4-m0n1o2',
    titleId: 'blog-title-4',
    descId: 'blog-desc-4',
    slug: 'china-manufacturing-hubs',
  },
  {
    title: 'How to Protect Your Intellectual Property When Manufacturing in China',
    excerpt: 'Practical strategies for IP protection — NDAs, split production, mold ownership, and design registration in China.',
    date: 'May 5, 2026',
    author: 'SSourcing China Team',
    category: 'Legal & Compliance',
    imgId: 'blog-post-5-p3q4r5',
    titleId: 'blog-title-5',
    descId: 'blog-desc-5',
    slug: 'protect-ip-manufacturing-china',
  },
  {
    title: 'Incoterms 2026: A Practical Guide for Importers from China',
    excerpt: 'FOB, CIF, EXW, DDP — what these shipping terms actually mean and how to choose the right one for your purchase order.',
    date: 'April 27, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    imgId: 'blog-post-6-a1b2c3',
    titleId: 'blog-title-6',
    descId: 'blog-desc-6',
    slug: 'incoterms-guide-importers',
  },
  {
    title: 'Negotiating with Chinese Suppliers: 7 Tactics That Work',
    excerpt: 'Practical negotiation strategies based on experience — from volume commitments to payment terms that protect your interests.',
    date: 'April 20, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-post-7-d4e5f6',
    titleId: 'blog-title-7',
    descId: 'blog-desc-7',
    slug: 'negotiating-chinese-suppliers',
  },
  {
    title: 'The True Cost of the Cheapest Supplier: A Cautionary Tale',
    excerpt: 'Why the lowest price often ends up being the most expensive choice. Real examples of hidden costs in low-bid sourcing.',
    date: 'April 13, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-post-8-g7h8i9',
    titleId: 'blog-title-8',
    descId: 'blog-desc-8',
    slug: 'true-cost-cheapest-supplier',
  },
  {
    title: 'China-Europe Railway Express: A Faster Alternative to Sea Freight',
    excerpt: 'How rail freight from China to Europe works — transit times, costs, routes, and when it makes sense vs. ocean or air.',
    date: 'April 6, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    imgId: 'blog-post-9-j0k1l2',
    titleId: 'blog-title-9',
    descId: 'blog-desc-9',
    slug: 'china-europe-railway-freight',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">Blog</p>
            <h1 id="blog-page-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Insights on Sourcing from China
            </h1>
            <p id="blog-page-sub" className="text-lg text-slate-300 leading-relaxed">
              Practical guides, industry insights, and expert advice to help you
              source smarter and avoid costly mistakes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-heading]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-navy-800 mb-2 group-hover:text-navy-900 transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span className="text-xs font-semibold text-gold-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <nav className="inline-flex items-center gap-2">
              <span className="px-4 py-2 rounded-lg bg-navy-800 text-white text-sm font-semibold">1</span>
              <span className="px-4 py-2 rounded-lg text-slate-400 text-sm">2</span>
              <span className="px-4 py-2 rounded-lg text-slate-400 text-sm">3</span>
              <span className="px-4 py-2 text-slate-400 text-sm">...</span>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
