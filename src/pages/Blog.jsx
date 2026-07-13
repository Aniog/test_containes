import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock } from 'lucide-react'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Blog</span>
            <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">China Sourcing Insights</h1>
            <p id="blog-page-subtitle" className="text-lg text-slate-300 leading-relaxed">Practical guides, tips, and industry insights to help you source from China more effectively.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <img data-strk-img-id="blog-1-img-d4e5f6" data-strk-img="[blog-1-desc] [blog-1-title] [blog-page-title]" data-strk-img-ratio="16x9" data-strk-img-width="500" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="How to Find Reliable Suppliers in China" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded">Sourcing Tips</span></div>
                <h2 id="blog-1-title" className="text-lg font-semibold text-slate-900 mb-2 leading-snug">How to Find Reliable Suppliers in China: A Complete Guide</h2>
                <p id="blog-1-desc" className="text-sm text-slate-600 leading-relaxed mb-4">Finding trustworthy suppliers is the biggest challenge for overseas buyers. Here are the proven methods we use to identify and verify quality manufacturers.</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> July 8, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <img data-strk-img-id="blog-2-img-g7h8i9" data-strk-img="[blog-2-desc] [blog-2-title] [blog-page-title]" data-strk-img-ratio="16x9" data-strk-img-width="500" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Factory Audit Checklist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded">Quality Control</span></div>
                <h2 id="blog-2-title" className="text-lg font-semibold text-slate-900 mb-2 leading-snug">Factory Audit Checklist: What to Look for During a Supplier Visit</h2>
                <p id="blog-2-desc" className="text-sm text-slate-600 leading-relaxed mb-4">A comprehensive checklist covering production capacity, quality systems, worker conditions, and documentation you should verify during any factory audit.</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> July 1, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <img data-strk-img-id="blog-3-img-j1k2l3" data-strk-img="[blog-3-desc] [blog-3-title] [blog-page-title]" data-strk-img-ratio="16x9" data-strk-img-width="500" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Shipping from China" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded">Logistics</span></div>
                <h2 id="blog-3-title" className="text-lg font-semibold text-slate-900 mb-2 leading-snug">Shipping from China: Sea Freight vs Air Freight Comparison</h2>
                <p id="blog-3-desc" className="text-sm text-slate-600 leading-relaxed mb-4">Understanding the cost, timeline, and practical differences between sea and air freight to help you choose the right shipping method for your order.</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> June 24, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <img data-strk-img-id="blog-4-img-m4n5o6" data-strk-img="[blog-4-desc] [blog-4-title] [blog-page-title]" data-strk-img-ratio="16x9" data-strk-img-width="500" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Avoid Sourcing Scams" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded">Risk Management</span></div>
                <h2 id="blog-4-title" className="text-lg font-semibold text-slate-900 mb-2 leading-snug">7 Red Flags to Avoid Sourcing Scams in China</h2>
                <p id="blog-4-desc" className="text-sm text-slate-600 leading-relaxed mb-4">Learn the warning signs that indicate a supplier may not be legitimate, and the steps you can take to protect your business from fraud.</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> June 17, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 7 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <img data-strk-img-id="blog-5-img-p7q8r9" data-strk-img="[blog-5-desc] [blog-5-title] [blog-page-title]" data-strk-img-ratio="16x9" data-strk-img-width="500" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Negotiate with Chinese Suppliers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded">Sourcing Tips</span></div>
                <h2 id="blog-5-title" className="text-lg font-semibold text-slate-900 mb-2 leading-snug">How to Negotiate with Chinese Suppliers: Practical Tips</h2>
                <p id="blog-5-desc" className="text-sm text-slate-600 leading-relaxed mb-4">Effective negotiation strategies that respect cultural norms while helping you secure better pricing, payment terms, and production conditions.</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> June 10, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6 min read</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[16/9] overflow-hidden">
                <img data-strk-img-id="blog-6-img-s1t2u3" data-strk-img="[blog-6-desc] [blog-6-title] [blog-page-title]" data-strk-img-ratio="16x9" data-strk-img-width="500" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Types of Quality Inspections" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3"><span className="text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded">Quality Control</span></div>
                <h2 id="blog-6-title" className="text-lg font-semibold text-slate-900 mb-2 leading-snug">Types of Quality Inspections: When and Why You Need Each One</h2>
                <p id="blog-6-desc" className="text-sm text-slate-600 leading-relaxed mb-4">A breakdown of DPI, PSI, and CLC inspections — when to use each type, what they cover, and how they protect your order quality.</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> June 3, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for practical China sourcing advice, industry updates, and supplier insights.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" />
            <button className="bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors border-none cursor-pointer">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
