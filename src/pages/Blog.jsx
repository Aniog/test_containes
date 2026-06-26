import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Clock, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"

const posts = [
  {
    id: "supplier-verification-guide",
    category: "Supplier Verification",
    title: "How to Verify a Chinese Supplier Before Placing Your First Order",
    excerpt: "Placing an order with a new Chinese supplier carries real risk. This guide covers the key steps to verify a supplier's legitimacy, production capability, and quality standards before committing.",
    readTime: "8 min read",
    date: "June 15, 2026",
    imgId: "blog-supplier-verify-img-a1b2c3",
    titleId: "blog-supplier-verify-title",
    descId: "blog-supplier-verify-desc",
  },
  {
    id: "quality-inspection-types",
    category: "Quality Control",
    title: "Pre-Shipment vs. During-Production Inspection: Which Do You Need?",
    excerpt: "Not all quality inspections are the same. Understanding the difference between inspection types — and when to use each — can save you from costly surprises when goods arrive.",
    readTime: "6 min read",
    date: "June 8, 2026",
    imgId: "blog-qc-types-img-d4e5f6",
    titleId: "blog-qc-types-title",
    descId: "blog-qc-types-desc",
  },
  {
    id: "sea-vs-air-freight",
    category: "Shipping",
    title: "Sea Freight vs. Air Freight from China: A Practical Comparison",
    excerpt: "Choosing the right shipping method affects your cost, lead time, and cash flow. Here's a straightforward comparison to help you decide which option makes sense for your shipment.",
    readTime: "5 min read",
    date: "May 28, 2026",
    imgId: "blog-shipping-img-g7h8i9",
    titleId: "blog-shipping-title",
    descId: "blog-shipping-desc",
  },
  {
    id: "oem-private-label-guide",
    category: "OEM & Private Label",
    title: "Starting a Private Label Product Line from China: A Step-by-Step Guide",
    excerpt: "Private labeling from China is a proven strategy for building a product brand. This guide walks through the process from concept to first shipment, including common pitfalls to avoid.",
    readTime: "10 min read",
    date: "May 20, 2026",
    imgId: "blog-oem-img-j1k2l3",
    titleId: "blog-oem-title",
    descId: "blog-oem-desc",
  },
  {
    id: "factory-audit-checklist",
    category: "Factory Audits",
    title: "What to Look for in a China Factory Audit: A Buyer's Checklist",
    excerpt: "A factory audit is one of the most effective ways to reduce supply chain risk. This checklist covers the key areas to assess when evaluating a Chinese manufacturer.",
    readTime: "7 min read",
    date: "May 12, 2026",
    imgId: "blog-audit-img-m4n5o6",
    titleId: "blog-audit-title",
    descId: "blog-audit-desc",
  },
  {
    id: "incoterms-explained",
    category: "Shipping",
    title: "Incoterms Explained for China Importers: FOB, CIF, EXW and More",
    excerpt: "Incoterms define who is responsible for costs and risk at each stage of a shipment. Understanding them is essential for negotiating with Chinese suppliers and avoiding unexpected charges.",
    readTime: "9 min read",
    date: "May 5, 2026",
    imgId: "blog-incoterms-img-p7q8r9",
    titleId: "blog-incoterms-title",
    descId: "blog-incoterms-desc",
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const [featured, ...rest] = posts

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A1F2E] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Sourcing Insights</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-[#9AAABB] leading-relaxed">
              Practical guides and insights for global buyers sourcing from China — covering supplier verification, quality control, shipping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-72 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge>{featured.category}</Badge>
                <span className="text-[#6B7A8D] text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
                <span className="text-[#6B7A8D] text-sm">{featured.date}</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-[#1A1F2E] mb-4">{featured.title}</h2>
              <p id={featured.descId} className="text-[#3D4A5C] leading-relaxed mb-6">{featured.excerpt}</p>
              <Button variant="primary" size="md">
                Read Article <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Articles"
            title="More Sourcing Guides"
            subtitle="Browse our library of practical guides for global buyers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-[#D8E0EA] overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge>{post.category}</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#6B7A8D] text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="text-[#6B7A8D] text-xs">{post.date}</span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-[#1A1F2E] mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-[#6B7A8D] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-[#1A4B8C] text-sm font-semibold hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Sourcing Insights in Your Inbox</h2>
          <p className="text-[#93C5FD] mb-8">
            Practical guides and market updates for global buyers. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg text-[#1A1F2E] bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="cta" size="md">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
