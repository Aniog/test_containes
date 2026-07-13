import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageHeader from '@/components/shared/PageHeader'
import SectionLabel from '@/components/shared/SectionLabel'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'A practical checklist for checking licenses, production capacity, certifications, and export experience before you commit.',
    category: 'Factory Verification',
    date: 'June 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-factory-verification',
    titleId: 'blog-title-factory-verification',
    descId: 'blog-desc-factory-verification',
  },
  {
    title: 'Understanding Incoterms When Importing from China',
    excerpt: 'FOB, CIF, EXW, DDP — what they mean, who pays for what, and which terms protect buyers most.',
    category: 'Shipping',
    date: 'June 15, 2026',
    readTime: '5 min read',
    imgId: 'blog-incoterms',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
  },
  {
    title: 'Quality Inspection Basics: AQL, Sampling, and Reports',
    excerpt: 'How pre-shipment inspections work, what AQL levels mean, and how to read an inspection report.',
    category: 'Quality Control',
    date: 'May 30, 2026',
    readTime: '7 min read',
    imgId: 'blog-quality-inspection',
    titleId: 'blog-title-quality-inspection',
    descId: 'blog-desc-quality-inspection',
  },
  {
    title: '5 Red Flags When Negotiating with Chinese Suppliers',
    excerpt: 'Learn the warning signs that a supplier may not be reliable, and how to protect your order.',
    category: 'Negotiation',
    date: 'May 12, 2026',
    readTime: '5 min read',
    imgId: 'blog-red-flags',
    titleId: 'blog-title-red-flags',
    descId: 'blog-desc-red-flags',
  },
  {
    title: 'How Long Does It Really Take to Source from China?',
    excerpt: 'A realistic timeline from inquiry to delivery, including sample approval, production, and shipping.',
    category: 'Sourcing Process',
    date: 'April 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-sourcing-timeline',
    titleId: 'blog-title-sourcing-timeline',
    descId: 'blog-desc-sourcing-timeline',
  },
  {
    title: 'Building a Long-Term Relationship with Your Supplier',
    excerpt: 'Why repeat buyers get better pricing, priority scheduling, and more reliable quality over time.',
    category: 'Supplier Management',
    date: 'April 10, 2026',
    readTime: '4 min read',
    imgId: 'blog-supplier-relationship',
    titleId: 'blog-title-supplier-relationship',
    descId: 'blog-desc-supplier-relationship',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Blog"
        subtitle="Practical guides for importing from China and managing your supply chain."
        backgroundId="blog-header-bg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <SectionLabel>Insights</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Latest Articles
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="group overflow-hidden border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  <h3 id={post.titleId} className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact?quote=true"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 no-underline hover:no-underline"
            >
              Ready to source? Get a quote
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
