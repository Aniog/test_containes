import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to Verify a China Supplier Before You Place an Order',
    excerpt: 'A practical checklist for evaluating supplier legitimacy, capacity, and quality systems before committing to a production run.',
    date: '2026-05-28',
    readTime: '8 min read',
    category: 'Supplier Verification',
    tags: ['verification', 'due diligence', 'supplier audit'],
  },
  {
    id: 'pre-shipment-inspection-guide',
    title: 'Pre-Shipment Inspection: What Buyers Need to Check',
    excerpt: 'The essential checks to perform before goods leave the factory, and how to read an inspection report effectively.',
    date: '2026-05-15',
    readTime: '6 min read',
    category: 'Quality Control',
    tags: ['inspection', 'QC', 'pre-shipment'],
  },
  {
    id: 'china-shipping-terms-explained',
    title: 'Incoterms Explained: FOB vs CIF vs DDP for China Shipping',
    excerpt: 'A clear breakdown of common shipping terms and what they mean for your costs, risk, and control.',
    date: '2026-04-30',
    readTime: '7 min read',
    category: 'Shipping',
    tags: ['shipping', 'incoterms', 'logistics'],
  },
  {
    id: 'common-sourcing-mistakes',
    title: '5 Common Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Learn from real buyer experiences and avoid costly errors when sourcing products from China.',
    date: '2026-04-18',
    readTime: '5 min read',
    category: 'Sourcing Tips',
    tags: ['mistakes', 'tips', 'best practices'],
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look For On-Site',
    excerpt: 'A comprehensive checklist for conducting effective factory audits, from business licenses to production lines.',
    date: '2026-04-02',
    readTime: '9 min read',
    category: 'Supplier Verification',
    tags: ['audit', 'factory visit', 'checklist'],
  },
  {
    id: 'negotiating-with-china-suppliers',
    title: 'Negotiating with China Suppliers: A Practical Guide',
    excerpt: 'Strategies for effective negotiation that build long-term partnerships while protecting your margins.',
    date: '2026-03-20',
    readTime: '6 min read',
    category: 'Sourcing Tips',
    tags: ['negotiation', 'pricing', 'partnerships'],
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="blog-page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Blog
            </h1>
            <p id="blog-page-subtitle" className="mt-4 text-lg text-slate-600">
              Practical insights on sourcing from China, supplier verification, quality control, and shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                id={`blog-post-${post.id}-section`}
                className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  data-strk-img-id={`blog-post-${post.id}-img`}
                  data-strk-img={`[blog-post-${post.id}-excerpt] [blog-post-${post.id}-title] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="h-48 w-full rounded-t-xl object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={`blog-post-${post.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">
                    {post.title}
                  </h2>
                  <p id={`blog-post-${post.id}-excerpt`} className="mt-2 flex-1 text-sm text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        id={`blog-post-${post.id}-tag-${tag}`}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="ghost" className="px-0">
                      <Link to={`/blog/${post.id}`}>
                        Read article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-center sm:px-12 sm:py-16">
            <h2 id="blog-cta-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need help with your sourcing project?
            </h2>
            <p id="blog-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Our team is ready to help you find reliable suppliers, verify factories, and manage quality.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
