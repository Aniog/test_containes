import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { ArrowRight, Calendar } from 'lucide-react'

const posts = [
  {
    id: 'verify-supplier-china',
    title: 'How to verify a supplier in China before placing your first order',
    excerpt:
      'A practical checklist for buyers: business license, factory visit, capacity, references, and the red flags to watch out for.',
    date: '2026-05-18',
    category: 'Supplier Verification',
    readTime: '7 min read',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL inspections explained: what every importer should know',
    excerpt:
      'How AQL sampling works, when to inspect, and how to read a pre-shipment inspection report without being misled.',
    date: '2026-04-30',
    category: 'Quality Control',
    readTime: '6 min read',
  },
  {
    id: 'shipping-china-fba',
    title: 'Shipping from China to Amazon FBA: routes, costs and timelines',
    excerpt:
      'Sea, air or express? A breakdown of the trade-offs, typical costs, and how to keep your FBA shipments compliant.',
    date: '2026-04-12',
    category: 'Shipping & Logistics',
    readTime: '8 min read',
  },
  {
    id: 'mvp-private-label',
    title: 'Launching a private-label product from China in 90 days',
    excerpt:
      'A realistic project plan for new brands: from supplier search and sample iteration to first production and FBA shipment.',
    date: '2026-03-22',
    category: 'Sourcing Strategy',
    readTime: '9 min read',
  },
  {
    id: 'avoid-trading-companies',
    title: 'Factory vs trading company: which one should you choose?',
    excerpt:
      'Trading companies are not always bad. Here is how to know when a factory is the right choice, and when a sourcing partner makes more sense.',
    date: '2026-03-04',
    category: 'Supplier Verification',
    readTime: '6 min read',
  },
  {
    id: 'tariff-strategy-2026',
    title: 'Sourcing under shifting tariffs: practical strategies for 2026',
    excerpt:
      'How importers are restructuring sourcing, splitting production across regions, and renegotiating with Chinese factories to stay competitive.',
    date: '2026-02-15',
    category: 'Sourcing Strategy',
    readTime: '10 min read',
  },
]

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Sourcing insights for B2B buyers"
        description="Practical articles on supplier verification, quality control, shipping, and sourcing strategy — written by our team in China."
      />

      <Section className="bg-white">
        <div ref={containerRef}>
          <article className="group grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
              <img
                alt={featured.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                data-strk-img-id={`blog-${featured.id}-img`}
                data-strk-img={`[blog-${featured.id}-excerpt] [blog-${featured.id}-title] china sourcing supplier`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 font-medium">{featured.category}</span>
                <span className="inline-flex items-center gap-1 text-slate-500"><Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}</span>
                <span className="text-slate-500">{featured.readTime}</span>
              </div>
              <h2 id={`blog-${featured.id}-title`} className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">{featured.title}</h2>
              <p id={`blog-${featured.id}-excerpt`} className="mt-4 text-base text-slate-600 leading-relaxed">{featured.excerpt}</p>
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title] china sourcing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 font-medium">{post.category}</span>
                    <span className="text-slate-500">{formatDate(post.date)}</span>
                  </div>
                  <h3 id={`blog-${post.id}-title`} className="mt-3 text-base font-semibold text-slate-900">{post.title}</h3>
                  <p id={`blog-${post.id}-excerpt`} className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-slate-500">{post.readTime}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Have a sourcing question we should write about?</h2>
            <p className="mt-3 text-slate-300">Send us a topic and we will cover it in an upcoming article.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Contact our team
          </Link>
        </div>
      </Section>
    </>
  )
}
