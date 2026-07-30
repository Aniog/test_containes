import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { CTAButton, SectionHeader } from '@/components/UI'

const posts = [
  {
    id: 'supplier-verification',
    titleId: 'blog-title-supplier-verification',
    descId: 'blog-desc-supplier-verification',
    imgId: 'blog-img-supplier-verification-3c7d9e',
    category: 'Supplier Sourcing',
    date: 'July 15, 2026',
    readTime: '6 min read',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Verifying a Chinese supplier before committing to an order is one of the most important steps in the sourcing process. This guide covers the key checks every buyer should perform.',
  },
  {
    id: 'aql-inspection',
    titleId: 'blog-title-aql-inspection',
    descId: 'blog-desc-aql-inspection',
    imgId: 'blog-img-aql-inspection-8a2f4b',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '8 min read',
    title: 'Understanding AQL Inspection Standards for China Imports',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used for quality inspections in China. This article explains how AQL works and how to set the right inspection level for your product.',
  },
  {
    id: 'incoterms-guide',
    titleId: 'blog-title-incoterms-guide',
    descId: 'blog-desc-incoterms-guide',
    imgId: 'blog-img-incoterms-guide-5e1c7f',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the right Incoterm affects your cost, risk, and control over the shipment. This guide explains the most common Incoterms used in China trade and when to use each one.',
  },
  {
    id: 'oem-private-label',
    titleId: 'blog-title-oem-private-label',
    descId: 'blog-desc-oem-private-label',
    imgId: 'blog-img-oem-private-label-2d8a3c',
    category: 'OEM & Private Label',
    date: 'June 18, 2026',
    readTime: '9 min read',
    title: 'OEM vs. Private Label: What\'s the Difference and Which Is Right for You?',
    excerpt: 'OEM and private label are two common approaches to building a branded product with Chinese manufacturers. This article explains the differences and helps you decide which model suits your business.',
  },
  {
    id: 'factory-audit',
    titleId: 'blog-title-factory-audit',
    descId: 'blog-desc-factory-audit',
    imgId: 'blog-img-factory-audit-9f4b6d',
    category: 'Factory Verification',
    date: 'June 5, 2026',
    readTime: '5 min read',
    title: 'What to Expect from a China Factory Audit',
    excerpt: 'A factory audit is a structured on-site assessment of a manufacturer\'s capabilities and quality systems. This article explains what a professional audit covers and what the report should include.',
  },
  {
    id: 'sourcing-mistakes',
    titleId: 'blog-title-sourcing-mistakes',
    descId: 'blog-desc-sourcing-mistakes',
    imgId: 'blog-img-sourcing-mistakes-7b3e5a',
    category: 'Sourcing Tips',
    date: 'May 22, 2026',
    readTime: '6 min read',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Many first-time and experienced buyers make avoidable mistakes when sourcing from China. This article covers the most common errors and how to prevent them.',
  },
]

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping', 'OEM & Private Label', 'Factory Verification', 'Sourcing Tips']

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">China Sourcing Blog</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides and insights for overseas buyers sourcing from China. No fluff — just useful information.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-lightblue text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-12 bg-white border border-bordercolor rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}] China supplier verification`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
                  <span className="text-mutedtext text-xs">Featured</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-darktext mb-4">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-mutedtext leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-mutedtext text-sm mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                </div>
                <Link to="/blog" className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-bordercolor rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] China sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-lightblue text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">{post.category}</span>
                  <h3 id={post.titleId} className="font-bold text-darktext mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-mutedtext text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-mutedtext text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-lightblue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-darktext mb-4">Have a Sourcing Question?</h2>
          <p className="text-mutedtext text-lg mb-8">Our team is available to answer questions about sourcing from China. Contact us for a free consultation.</p>
          <CTAButton>Contact Our Team</CTAButton>
        </div>
      </section>
    </div>
  )
}
