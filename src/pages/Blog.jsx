import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import CTABanner from '../components/home/CTABanner'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. Here\'s our practical checklist for supplier due diligence.',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'June 10, 2026',
    imgId: 'blog-img-verify-a1b2c3',
    titleId: 'blog-title-verify',
    descId: 'blog-desc-verify',
  },
  {
    id: 'china-quality-inspection-guide',
    title: 'A Practical Guide to Quality Inspection in China',
    excerpt: 'Quality inspection is one of the most important steps in China sourcing. This guide explains the different types of inspections, when to use them, and what to look for.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'May 28, 2026',
    imgId: 'blog-img-qc-d4e5f6',
    titleId: 'blog-title-qc',
    descId: 'blog-desc-qc',
  },
  {
    id: 'sea-freight-vs-air-freight',
    title: 'Sea Freight vs. Air Freight: Which Is Right for Your Shipment?',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. We break down the key factors to help you make the right decision.',
    category: 'Shipping',
    readTime: '5 min read',
    date: 'May 15, 2026',
    imgId: 'blog-img-freight-g7h8i9',
    titleId: 'blog-title-freight',
    descId: 'blog-desc-freight',
  },
  {
    id: 'oem-vs-odm-china',
    title: 'OEM vs. ODM Manufacturing in China: What\'s the Difference?',
    excerpt: 'If you\'re developing a private label product, understanding the difference between OEM and ODM manufacturing will help you choose the right factory and approach.',
    category: 'Manufacturing',
    readTime: '7 min read',
    date: 'May 2, 2026',
    imgId: 'blog-img-oem-j1k2l3',
    titleId: 'blog-title-oem',
    descId: 'blog-desc-oem',
  },
  {
    id: 'china-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Many first-time importers make the same costly mistakes when sourcing from China. Here are the seven most common pitfalls and how to avoid them.',
    category: 'Sourcing Tips',
    readTime: '9 min read',
    date: 'April 18, 2026',
    imgId: 'blog-img-mistakes-m4n5o6',
    titleId: 'blog-title-mistakes',
    descId: 'blog-desc-mistakes',
  },
  {
    id: 'incoterms-explained',
    title: 'Incoterms Explained: FOB, CIF, EXW and What They Mean for Buyers',
    excerpt: 'Incoterms define who is responsible for shipping costs and risk at each stage of delivery. Understanding them is essential for every China importer.',
    category: 'Shipping',
    readTime: '6 min read',
    date: 'April 5, 2026',
    imgId: 'blog-img-incoterms-p7q8r9',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Manufacturing', 'Sourcing Tips']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-3">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for businesses importing from China.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#F7F9FC] rounded-2xl overflow-hidden border border-[#E2E8F0]">
              <div className="relative h-64 lg:h-auto bg-[#EBF2FA]">
                <img
                  alt={posts[0].title}
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#C0392B] text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                  <span className="bg-[#EBF2FA] text-[#1A3C6E] text-xs font-medium px-3 py-1 rounded-full">{posts[0].category}</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-3">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-[#4A5568] leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#718096] mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                  <span>{posts[0].date}</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-[#C0392B] font-semibold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden bg-[#EBF2FA]">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#EBF2FA] text-[#1A3C6E] text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-[#1A1A2E] mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-[#4A5568] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#718096]">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <Link to="/blog" className="text-[#C0392B] text-sm font-semibold hover:underline">Read →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
